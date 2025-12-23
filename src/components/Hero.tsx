import { ArrowRight, Shield, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import computerImage from "@/assets/computer-workstation.png";

const Hero = () => {
  const features = [
    { icon: Shield, text: "100% Secure" },
    { icon: Clock, text: "Quick Service" },
    { icon: Award, text: "Trusted by 10K+" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 text-accent mb-8 animate-fade-in">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-sm font-medium">Government Authorized CSC Centre</span>
            </div>

            {/* Main heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground mb-6 animate-slide-up">
              Your One-Stop
              <span className="block mt-2 bg-gradient-to-r from-accent via-orange-300 to-accent bg-clip-text text-transparent">
                Digital Service Hub
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-xl mx-auto lg:mx-0 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              From Xerox & printing to travel bookings, job applications, and certificate services — 
              we bring all digital services under one roof for your convenience.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <Button variant="hero" size="lg" className="group">
                Explore Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="heroOutline" size="lg">
                Contact Us
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-primary-foreground/70">
                  <feature.icon className="w-5 h-5 text-accent" />
                  <span className="font-medium">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Computer Image */}
          <div className="hidden lg:block animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 rounded-3xl blur-3xl transform scale-95" />
              
              {/* Image container */}
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-4 border border-white/20 shadow-2xl">
                <img 
                  src={computerImage} 
                  alt="Modern computer workstation at Bulbul Computer Centre" 
                  className="w-full h-auto rounded-2xl"
                />
              </div>

              {/* Floating decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent/30 rounded-full blur-xl animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/30 rounded-full blur-xl animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            className="fill-background"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
