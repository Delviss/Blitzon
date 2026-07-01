import { randomUUID } from "node:crypto";
import { Pool } from "pg";

export interface User {
  id: string;
  email: string;
  name: string | null;
  role: "user" | "admin";
  passwordHash: string;
  createdAt: string;
}

export type PublicUser = Omit<User, "passwordHash">;

export function toPublicUser(user: User): PublicUser {
  const { passwordHash: _passwordHash, ...publicUser } = user;
  return publicUser;
}

export interface NewUser {
  email: string;
  name: string | null;
  role: "user" | "admin";
  passwordHash: string;
}

export interface UserStore {
  readonly kind: "postgres" | "memory";
  init(): Promise<void>;
  findByEmail(email: string): Promise<User | null>;
  findById(id: string): Promise<User | null>;
  create(input: NewUser): Promise<User>;
}

class MemoryStore implements UserStore {
  readonly kind = "memory";
  private byId = new Map<string, User>();
  private idByEmail = new Map<string, string>();

  async init(): Promise<void> {}

  async findByEmail(email: string): Promise<User | null> {
    const id = this.idByEmail.get(email.toLowerCase());
    return id ? this.byId.get(id) ?? null : null;
  }

  async findById(id: string): Promise<User | null> {
    return this.byId.get(id) ?? null;
  }

  async create(input: NewUser): Promise<User> {
    const user: User = {
      id: randomUUID(),
      email: input.email.toLowerCase(),
      name: input.name,
      role: input.role,
      passwordHash: input.passwordHash,
      createdAt: new Date().toISOString()
    };
    this.byId.set(user.id, user);
    this.idByEmail.set(user.email, user.id);
    return user;
  }
}

interface UserRow {
  id: string;
  email: string;
  name: string | null;
  role: "user" | "admin";
  password_hash: string;
  created_at: Date;
}

function rowToUser(row: UserRow): User {
  return {
    id: row.id,
    email: row.email,
    name: row.name,
    role: row.role,
    passwordHash: row.password_hash,
    createdAt: row.created_at.toISOString()
  };
}

class PgStore implements UserStore {
  readonly kind = "postgres";
  private pool: Pool;

  constructor(databaseUrl: string) {
    this.pool = new Pool({
      connectionString: databaseUrl,
      ssl: process.env.PGSSL === "true" ? { rejectUnauthorized: false } : undefined
    });
  }

  async init(): Promise<void> {
    await this.pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        email TEXT UNIQUE NOT NULL,
        name TEXT,
        role TEXT NOT NULL DEFAULT 'user',
        password_hash TEXT NOT NULL,
        created_at TIMESTAMPTZ NOT NULL DEFAULT now()
      )
    `);
  }

  async findByEmail(email: string): Promise<User | null> {
    const { rows } = await this.pool.query<UserRow>(
      "SELECT * FROM users WHERE email = $1",
      [email.toLowerCase()]
    );
    return rows[0] ? rowToUser(rows[0]) : null;
  }

  async findById(id: string): Promise<User | null> {
    const { rows } = await this.pool.query<UserRow>("SELECT * FROM users WHERE id = $1", [id]);
    return rows[0] ? rowToUser(rows[0]) : null;
  }

  async create(input: NewUser): Promise<User> {
    const { rows } = await this.pool.query<UserRow>(
      `INSERT INTO users (email, name, role, password_hash)
       VALUES ($1, $2, $3, $4)
       RETURNING *`,
      [input.email.toLowerCase(), input.name, input.role, input.passwordHash]
    );
    return rowToUser(rows[0]);
  }
}

export function createStore(databaseUrl: string): UserStore {
  return databaseUrl ? new PgStore(databaseUrl) : new MemoryStore();
}
