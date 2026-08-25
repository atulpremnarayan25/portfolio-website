import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Terminal } from "@/components/Terminal";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 w-full flex flex-col relative">
        <Hero />
        <About />
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent max-w-4xl mx-auto" />
        <Projects />
        <Terminal />
      </main>
      <Footer />
    </>
  );
}