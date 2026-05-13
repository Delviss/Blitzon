import dynamic from "next/dynamic";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import SocialProof from "@/components/sections/SocialProof";

// Below-the-fold sections are dynamically split off the initial JS bundle.
// They still server-render (no `ssr: false`) so SEO and first paint stay intact.
const VideoFeature = dynamic(() => import("@/components/sections/VideoFeature"));
const WhyBlitzon = dynamic(() => import("@/components/sections/WhyBlitzon"));
const Training = dynamic(() => import("@/components/sections/Training"));
const CareerPath = dynamic(() => import("@/components/sections/CareerPath"));
const Culture = dynamic(() => import("@/components/sections/Culture"));
const Manifesto = dynamic(() => import("@/components/sections/Manifesto"));
const Testimonials = dynamic(() => import("@/components/sections/Testimonials"));
const Jobs = dynamic(() => import("@/components/sections/Jobs"));
const ApplyForm = dynamic(() => import("@/components/sections/ApplyForm"));
const Footer = dynamic(() => import("@/components/sections/Footer"));

export default function HomePage() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <VideoFeature />
      <SocialProof />
      <WhyBlitzon />
      <Training />
      <CareerPath />
      <Culture />
      <Manifesto />
      <Testimonials />
      <Jobs />
      <ApplyForm />
      <Footer />
    </main>
  );
}
