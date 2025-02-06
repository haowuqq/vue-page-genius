import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-20 bg-dark text-white" id="contact">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Contact <span className="text-neon">Us</span>
        </h2>
        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto space-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="w-full px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg 
                       focus:border-neon focus:ring-1 focus:ring-neon outline-none"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="w-full px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg 
                       focus:border-neon focus:ring-1 focus:ring-neon outline-none"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              rows={4}
              className="w-full px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg 
                       focus:border-neon focus:ring-1 focus:ring-neon outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-neon text-dark py-3 rounded-lg font-semibold 
                     hover:bg-opacity-90 transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};