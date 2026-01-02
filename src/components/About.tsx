import { CheckCircle2, Users, Clock, MapPin } from "lucide-react";

const stats = [
  { icon: Users, value: "50,000+", label: "Happy Customers" },
  { icon: Clock, value: "13+ Years", label: "Experience" },
  { icon: CheckCircle2, value: "1,00,000+", label: "Services Completed" },
  { icon: MapPin, value: "1", label: "Convenient Location" },
];

const features = [
  "Government Authorized CSC Centre",
  "Trained & Professional Staff",
  "Quick Turnaround Time",
  "Affordable Pricing",
  "Secure Document Handling",
  "Customer Support Available",
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-secondary/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              About Us
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Trusted Digital Services
              <span className="gradient-text block">Since 2012</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              We are a government-authorized Common Service Centre (CSC) dedicated to bringing 
              digital India services to your doorstep. Our mission is to provide reliable, 
              affordable, and quick services to our community.
            </p>

            {/* Features list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-foreground font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 shadow-card hover:shadow-glow transition-all duration-300 border border-border/50 text-center group hover:-translate-y-1"
              >
                <div className="w-14 h-14 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <stat.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-1">{stat.value}</h3>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
