import Navbar          from "@/components/Navbar";
import Hero            from "@/components/Hero";
import ComingSoonBanner from "@/components/ComingSoonBanner";
import Gallery         from "@/components/Gallery";
import About           from "@/components/About";
import EmailWaitlist   from "@/components/EmailWaitlist";
import Footer          from "@/components/Footer";
import Skiper30        from "@/components/Skiper30";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ComingSoonBanner />
      <Skiper30 />
      <Gallery />
      <About />
      <EmailWaitlist />
      <Footer />
    </main>
  );
}
