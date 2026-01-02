import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    "Xerox & Printing",
    "Photo Printing",
    "PVC Card Printing",
    "Ticket Booking",
    "Hotel Booking",
    "Online Work",
    "Job Applications",
    "Certificate Services",
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img src={logo} alt="Bulbul Computer Centre Logo" className="w-10 h-10 rounded-xl object-contain" />
              <div>
                <h3 className="font-bold text-xl">Bulbul Computer Centre</h3>
                <p className="text-xs text-background/60">CSC Centre</p>
              </div>
            </div>
            <p className="text-background/70 text-sm leading-relaxed mb-6">
              Your trusted partner for all digital services. We bring government 
              and online services to your doorstep with ease and reliability.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.slice(0, 6).map((service, index) => (
                <li key={index}>
                  <a href="#services" className="text-background/70 hover:text-accent text-sm transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* More Services */}
          <div>
            <h4 className="font-bold text-lg mb-6">More Services</h4>
            <ul className="space-y-3">
              {services.slice(6).map((service, index) => (
                <li key={index}>
                  <a href="#services" className="text-background/70 hover:text-accent text-sm transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a href="https://maps.app.goo.gl/yJ7T6QVbWSbMPhKi6" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-background/70 hover:text-accent transition-colors">
                  <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm">
                    Jashodar Pam Tiniali Chok,<br />Near High School, 781311
                  </span>
                </a>
              </li>
              <li>
                <a href="tel:+919859298707" className="flex items-center gap-3 text-background/70 hover:text-accent transition-colors text-sm">
                  <Phone className="w-5 h-5 text-accent" />
                  +91 98592 98707
                </a>
              </li>
              <li>
                <a href="mailto:hussainjakir21@gmail.com" className="flex items-center gap-3 text-background/70 hover:text-accent transition-colors text-sm">
                  <Mail className="w-5 h-5 text-accent" />
                  hussainjakir21@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/60 text-sm">
              © {currentYear} Bulbul Computer Centre. All rights reserved. | Developed by Jahangir Hussain
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-background/60 hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-background/60 hover:text-accent transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
