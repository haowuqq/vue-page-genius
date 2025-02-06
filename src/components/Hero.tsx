import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-dark text-white p-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Navigating the
          <span className="text-neon"> digital landscape </span>
          for success
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-300">
          We help businesses transform their digital presence through innovative solutions
          and strategic thinking
        </p>
        <button className="bg-neon text-dark px-8 py-3 rounded-full font-semibold 
                         flex items-center gap-2 mx-auto hover:bg-opacity-90 transition-all">
          Get Started
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};