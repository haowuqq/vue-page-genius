import { useState } from "react";

const steps = [
  {
    number: "01",
    title: "Consultation",
    description: "Initial meeting to understand your needs and objectives",
  },
  {
    number: "02",
    title: "Strategy Development",
    description: "Creating a comprehensive plan tailored to your goals",
  },
  {
    number: "03",
    title: "Implementation",
    description: "Executing the strategy with precision and care",
  },
  {
    number: "04",
    title: "Monitoring",
    description: "Tracking progress and making necessary adjustments",
  },
  {
    number: "05",
    title: "Optimization",
    description: "Continuous improvement based on performance data",
  },
  {
    number: "06",
    title: "Growth",
    description: "Scaling success and expanding opportunities",
  },
];

export const Process = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-20 bg-dark text-white" id="process">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Working <span className="text-neon">Process</span>
        </h2>
        <div className="max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`border-l-2 ${
                activeStep === index ? "border-neon" : "border-gray-800"
              } pl-6 pb-8 relative cursor-pointer`}
              onClick={() => setActiveStep(index)}
            >
              <div
                className={`absolute left-[-8px] top-0 w-4 h-4 rounded-full ${
                  activeStep === index ? "bg-neon" : "bg-gray-800"
                }`}
              />
              <div className="flex items-start gap-4">
                <span className="text-neon font-mono text-xl">{step.number}</span>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};