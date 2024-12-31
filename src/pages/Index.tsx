import { Brain, Sparkles, Plus } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { DemoSection } from "@/components/DemoSection";
import { WaitlistForm } from "@/components/WaitlistForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <img 
            src="/lovable-uploads/2ed47fb1-e6cc-49dd-947c-6531a64de4f3.png" 
            alt="MindflowOS Logo" 
            className="h-16 w-auto mx-auto mb-8"
          />
          <span className="inline-block px-3 py-1 text-sm font-medium bg-accent/10 text-accent rounded-full mb-8">
            Coming Soon
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Transform Your Business Plan
            <br />
            Into a Living System
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Use AI to turn your static business plans into interactive mind maps and dynamic
            operating systems. Visualize, adapt, and execute your strategy in real-time.
          </p>
          <WaitlistForm />
        </div>
      </section>

      <DemoSection />

      {/* Features Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "AI-Powered Insights",
                description:
                  "Our AI analyzes your business plan to provide intelligent suggestions and real-time analytics",
              },
              {
                icon: Sparkles,
                title: "Visual Planning",
                description:
                  "Transform complex business plans into clear, interactive visual maps",
              },
              {
                icon: Plus,
                title: "Team Collaboration",
                description:
                  "Work together seamlessly with real-time updates and collaborative tools",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group p-8 bg-white rounded-2xl border border-gray-100 hover:border-accent/20 transition-all hover:shadow-lg"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <img 
            src="/lovable-uploads/2ed47fb1-e6cc-49dd-947c-6531a64de4f3.png" 
            alt="MindflowOS Logo" 
            className="h-12 w-auto mx-auto mb-8"
          />
          <p className="text-gray-600 mb-8">
            Join us in revolutionizing business planning
          </p>
          <WaitlistForm />
        </div>
      </footer>
    </div>
  );
};

export default Index;