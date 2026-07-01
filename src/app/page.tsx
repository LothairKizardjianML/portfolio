import Hero from "@/components/Hero";
import Work from "@/components/Work";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="noise flex-1 relative pt-16">
      <Hero />
      <Work />
      <About />
      <Contact />
    </main>
  );
}
