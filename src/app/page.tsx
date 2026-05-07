import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import SocialProof from "@/components/sections/SocialProof";
import WhyBlitzon from "@/components/sections/WhyBlitzon";
import Training from "@/components/sections/Training";
import CareerPath from "@/components/sections/CareerPath";
import Culture from "@/components/sections/Culture";
import VideoFeature from "@/components/sections/VideoFeature";
import Manifesto from "@/components/sections/Manifesto";
import Testimonials from "@/components/sections/Testimonials";
import Jobs from "@/components/sections/Jobs";
import ApplyForm from "@/components/sections/ApplyForm";
import Footer from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <SocialProof />
      <WhyBlitzon />
      <Training />
      <VideoFeature />
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
