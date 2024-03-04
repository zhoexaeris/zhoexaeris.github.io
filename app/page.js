import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";


export default function Home() {
  return (
    // TODO: make it all responsive
    <main className="flex min-h-screen flex-col bg-white mx-auto text-black">
      <Navbar />
      <HeroSection />
      <Projects />
    </main>
    // TODO: add about section
    // TODO: add download resume button
    // TODO: add projects 
  );
}
