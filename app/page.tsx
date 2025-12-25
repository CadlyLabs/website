import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { SuccessStory } from "@/components/sections/SuccessStory";
import { ValueProps } from "@/components/sections/ValueProps";
import { HowWeWork } from "@/components/sections/HowWeWork";
import { WhyCadly } from "@/components/sections/WhyCadly";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col">
      <Navbar />
      <Hero />
      <Services />
      <SuccessStory />
      <ValueProps />
      <HowWeWork />
      <WhyCadly />
      <Contact />
      <Footer />
    </main>
  );
}
