import Navbar          from "@/components/Navbar";
import Hero            from "@/components/Hero";
import ComingSoonBanner from "@/components/ComingSoonBanner";
import Gallery         from "@/components/Gallery";
import About           from "@/components/About";
import EmailWaitlist   from "@/components/EmailWaitlist";
import Footer          from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ComingSoonBanner />
      <Gallery />
      <About />
      <EmailWaitlist />
      <Footer />
    </main>
  );
}
