import { 
  Printer, 
  Camera, 
  CreditCard, 
  Plane, 
  Train, 
  Bus, 
  Hotel, 
  Briefcase, 
  FileText, 
  Globe, 
  ShoppingBag,
  ArrowRight,
  IdCard
} from "lucide-react";

const services = [
  {
    icon: Printer,
    title: "Xerox & Printing",
    description: "High-quality photocopying, color & B/W printing at competitive rates",
    color: "from-blue-500 to-indigo-600",
  },
  {
    icon: Camera,
    title: "Photo Printing",
    description: "Passport photos, ID photos, and custom photo prints",
    color: "from-pink-500 to-rose-600",
  },
  {
    icon: CreditCard,
    title: "PVC Card Printing",
    description: "ID cards, membership cards, and custom PVC cards",
    color: "from-emerald-500 to-teal-600",
  },
  {
    icon: Plane,
    title: "Flight Booking",
    description: "Domestic & international flight tickets at best prices",
    color: "from-cyan-500 to-blue-600",
  },
  {
    icon: Train,
    title: "Train Booking",
    description: "IRCTC train tickets, Tatkal booking & cancellation",
    color: "from-orange-500 to-red-600",
  },
  {
    icon: Bus,
    title: "Bus Booking",
    description: "State & private bus tickets across all routes",
    color: "from-green-500 to-emerald-600",
  },
  {
    icon: Hotel,
    title: "Hotel Booking",
    description: "Best hotel deals for your travel needs",
    color: "from-purple-500 to-violet-600",
  },
  {
    icon: Globe,
    title: "Online Work",
    description: "Form filling, online applications & digital services",
    color: "from-amber-500 to-orange-600",
  },
  {
    icon: Briefcase,
    title: "Job Applications",
    description: "Government & private job form filling assistance",
    color: "from-slate-500 to-zinc-600",
  },
  {
    icon: FileText,
    title: "Certificate Apply",
    description: "Birth, income, caste, domicile & other certificates",
    color: "from-indigo-500 to-purple-600",
  },
  {
    icon: ShoppingBag,
    title: "Digital Shop",
    description: "Mobile recharge, bill payments & more",
    color: "from-rose-500 to-pink-600",
  },
  {
    icon: IdCard,
    title: "PAN Card Apply",
    description: "New PAN card application, correction & reprinting services",
    color: "from-yellow-500 to-amber-600",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Everything You Need,
            <span className="gradient-text"> One Place</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            From document services to travel bookings, we provide comprehensive digital solutions 
            to make your life easier.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl p-6 shadow-card hover:shadow-glow transition-all duration-500 hover:-translate-y-2 border border-border/50 overflow-hidden"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Link */}
              <a
                href="#contact"
                className="inline-flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0"
              >
                Learn more
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
