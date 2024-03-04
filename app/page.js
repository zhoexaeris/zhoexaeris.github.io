import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white container mx-auto">
      <Navbar />
      <HeroSection />
    </main>
  );
}
