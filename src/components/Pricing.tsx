import { Check } from "lucide-react";

const pricingData = [
  {
    category: "Document Services",
    services: [
      { name: "Xerox (Black & White)", price: "₹1 - ₹2", unit: "per page" },
      { name: "Xerox (Color)", price: "₹5 - ₹10", unit: "per page" },
      { name: "Photo Printing (Passport Size)", price: "₹30", unit: "8 photos" },
      { name: "Photo Printing (Stamp Size)", price: "₹20", unit: "12 photos" },
      { name: "A4 Color Print", price: "₹10 - ₹15", unit: "per page" },
      { name: "A4 B&W Print", price: "₹2 - ₹5", unit: "per page" },
    ],
  },
  {
    category: "Card & Lamination",
    services: [
      { name: "PVC ID Card", price: "₹50 - ₹100", unit: "per card" },
      { name: "Lamination (A4)", price: "₹20 - ₹30", unit: "per sheet" },
      { name: "Lamination (ID Size)", price: "₹10", unit: "per piece" },
      { name: "Spiral Binding", price: "₹30 - ₹50", unit: "per book" },
    ],
  },
  {
    category: "Booking Services",
    services: [
      { name: "Ticket Booking (Train/Bus/Flight)", price: "₹20 - ₹200", unit: "per ticket" },
      { name: "Hotel Booking", price: "₹50 - ₹100", unit: "per booking" },
    ],
  },
  {
    category: "Online Services",
    services: [
      { name: "Form Filling", price: "₹50 - ₹100", unit: "per form" },
      { name: "Certificate Apply", price: "₹100 - ₹300", unit: "varies" },
      { name: "Job Application", price: "₹50 - ₹150", unit: "per application" },
      { name: "Document Scanning", price: "₹5 - ₹10", unit: "per page" },
    ],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Transparent Pricing
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Affordable Rates for All Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We believe in transparent pricing. Check our competitive rates for all services below.
          </p>
        </div>

        {/* Pricing Tables Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {pricingData.map((category, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl shadow-soft border border-border/50 overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {/* Category Header */}
              <div className="bg-gradient-to-r from-primary to-primary/80 px-6 py-4">
                <h3 className="text-xl font-semibold text-primary-foreground">
                  {category.category}
                </h3>
              </div>

              {/* Services Table */}
              <div className="p-6">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 text-sm font-semibold text-foreground">
                        Service
                      </th>
                      <th className="text-right py-3 text-sm font-semibold text-foreground">
                        Price
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {category.services.map((service, serviceIndex) => (
                      <tr
                        key={serviceIndex}
                        className="border-b border-border/50 last:border-0 hover:bg-muted/50 transition-colors"
                      >
                        <td className="py-4">
                          <div className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span className="text-foreground">{service.name}</span>
                          </div>
                        </td>
                        <td className="py-4 text-right">
                          <span className="font-semibold text-primary">{service.price}</span>
                          <span className="text-xs text-muted-foreground block">
                            {service.unit}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-muted-foreground mt-8 text-sm">
          * Prices may vary based on quantity and specific requirements. Contact us for bulk discounts.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
