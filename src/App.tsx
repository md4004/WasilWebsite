import { Navbar, Hero, Process, Services, Trust, CTA, Footer } from "./components/WasilComponents";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Process />
        <Services />
        <Trust />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
