import { Phone, Mail, MapPin, Clock, Send, Upload, FileText, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useRef } from "react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "+91 98592 98707",
    link: "tel:+919859298707",
  },
  {
    icon: Mail,
    title: "Email",
    value: "hussainjakir21@gmail.com",
    link: "mailto:hussainjakir21@gmail.com",
  },
  {
    icon: MapPin,
    title: "Address",
    value: "Jashodar Pam Tiniali Chok, Near High School, 781311",
    link: "https://maps.app.goo.gl/yJ7T6QVbWSbMPhKi6",
  },
  {
    icon: Clock,
    title: "Working Hours",
    value: "Mon - Sun: 8:00 AM - 8:00 PM",
    link: "#",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
    copies: "1",
    customCopies: "",
  });
  const [files, setFiles] = useState<File[]>([]);
  const [showCustomCopies, setShowCustomCopies] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFiles((prev) => [...prev, ...newFiles]);
    }
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleCopiesChange = (value: string) => {
    if (value === "custom") {
      setShowCustomCopies(true);
      setFormData({ ...formData, copies: "custom" });
    } else {
      setShowCustomCopies(false);
      setFormData({ ...formData, copies: value, customCopies: "" });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: `We'll get back to you within 24 hours.${files.length > 0 ? ` ${files.length} file(s) received.` : ""}`,
    });
    setFormData({ name: "", phone: "", service: "", message: "", copies: "1", customCopies: "" });
    setFiles([]);
    setShowCustomCopies(false);
  };

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Contact Us
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Get In Touch
            <span className="gradient-text"> Today</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Have questions or need a service? Reach out to us and we'll be happy to help!
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-6">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                target={info.link.startsWith("http") ? "_blank" : undefined}
                rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border/50 hover:shadow-card hover:border-primary/20 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <info.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                  <p className="text-muted-foreground text-sm">{info.value}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Contact form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="bg-card rounded-2xl p-8 shadow-card border border-border/50"
            >
              <h3 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground"
                    placeholder="Enter your phone"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Service Required
                  </label>
                  <select
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground"
                  >
                    <option value="">Select a service</option>
                    <option value="xerox">Xerox & Printing</option>
                    <option value="photo">Photo Printing</option>
                    <option value="pvc">PVC Card Printing</option>
                    <option value="flight">Flight Booking</option>
                    <option value="train">Train Booking</option>
                    <option value="bus">Bus Booking</option>
                    <option value="hotel">Hotel Booking</option>
                    <option value="online">Online Work</option>
                    <option value="job">Job Applications</option>
                    <option value="certificate">Certificate Apply</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Number of Copies
                  </label>
                  <select
                    required
                    value={formData.copies}
                    onChange={(e) => handleCopiesChange(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground"
                  >
                    <option value="1">1 Copy</option>
                    <option value="2">2 Copies</option>
                    <option value="3">3 Copies</option>
                    <option value="4">4 Copies</option>
                    <option value="5">5 Copies</option>
                    <option value="custom">Custom (More than 5)</option>
                  </select>
                  {showCustomCopies && (
                    <input
                      type="number"
                      min="6"
                      required
                      value={formData.customCopies}
                      onChange={(e) => setFormData({ ...formData, customCopies: e.target.value })}
                      className="w-full px-4 py-3 mt-3 rounded-lg bg-secondary border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground"
                      placeholder="Enter number of copies"
                    />
                  )}
                </div>
              </div>

              {/* Document Upload */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Upload Documents (Photos, PDFs, etc.)
                </label>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  multiple
                  accept="image/*,.pdf,.doc,.docx"
                  className="hidden"
                />
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full px-4 py-6 rounded-lg bg-secondary border-2 border-dashed border-border hover:border-primary/50 focus:border-primary cursor-pointer transition-all text-center"
                >
                  <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                  <p className="text-muted-foreground text-sm">
                    Click to upload files for printing
                  </p>
                  <p className="text-muted-foreground text-xs mt-1">
                    Supports: Images, PDF, Word documents
                  </p>
                </div>

                {/* File list */}
                {files.length > 0 && (
                  <div className="mt-4 space-y-2">
                    {files.map((file, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 bg-secondary rounded-lg border border-border"
                      >
                        <div className="flex items-center gap-3">
                          <FileText className="w-5 h-5 text-primary" />
                          <span className="text-sm text-foreground truncate max-w-[200px]">
                            {file.name}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            ({(file.size / 1024).toFixed(1)} KB)
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFile(index)}
                          className="p-1 hover:bg-destructive/10 rounded-full transition-colors"
                        >
                          <X className="w-4 h-4 text-destructive" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground resize-none"
                  placeholder="Tell us about your requirements..."
                />
              </div>

              <Button type="submit" size="lg" className="w-full group">
                Send Message
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>
        </div>

        {/* Google Maps Embed */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Find Us Here</h3>
          <div className="rounded-2xl overflow-hidden shadow-card border border-border/50">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000!2d91.164420!3d26.350089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDIxJzAwLjMiTiA5McKwMDknNTIuMCJF!5e0!3m2!1sen!2sin!4v1703606400000!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Bulbul Computer Centre Location"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
