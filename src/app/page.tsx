import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { About } from "@/components/About";
import { Contacts, Footer } from "@/components/Contacts";

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:px-4 focus:py-2 focus:bg-[#C778DD] focus:text-white focus:text-sm focus:font-medium"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" className="flex-1 w-full flex flex-col relative">
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contacts />
      </main>
      <Footer />
    </>
  );
}
