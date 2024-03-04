import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white mx-auto text-black">
      <Navbar />
      <HeroSection />
      <Projects />
    </main>
  );
}
