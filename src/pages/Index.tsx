import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <main className="bg-dark min-h-screen">
      <Hero />
      <Services />
      <Process />
      <Contact />
    </main>
  );
};

export default Index;