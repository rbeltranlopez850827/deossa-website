import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Reviews", href: "#testimonials" },
    { name: "Contact", href: "#contact" }
  ];

  const services = [
    "Residential Cleaning",
    "Commercial Cleaning", 
    "Deep Cleaning",
    "Move-in/Move-out",
    "Post-Construction",
    "Carpet Cleaning"
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <img
                src="/lovable-uploads/a5de9406-ff5e-46d9-8a11-f9a0a876f8c1.png"
                alt="Deossa Cleaning Services"
                className="h-16 w-auto mb-4 filter brightness-0 invert"
              />
              <p className="text-primary-foreground/90 leading-relaxed">
                Professional cleaning services across the GTA. We bring excellence, 
                reliability, and personalized care to every space we clean.
              </p>
            </div>
            <div className="flex space-x-4">
              <a
                href="tel:+14168443543"
                className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-secondary/80 transition-colors"
              >
                <Phone className="w-5 h-5 text-secondary-foreground" />
              </a>
              <a
                href="mailto:info@deossacleaning.ca"
                className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-secondary/80 transition-colors"
              >
                <Mail className="w-5 h-5 text-secondary-foreground" />
              </a>
              <a
                href="https://wa.me/+14168443543"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-secondary/80 transition-colors"
              >
                <MessageCircle className="w-5 h-5 text-secondary-foreground" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-primary-foreground/90 hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-primary-foreground/90">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <Phone className="w-5 h-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Phone</p>
                  <a href="tel:+14168443543" className="text-primary-foreground/90 hover:text-secondary transition-colors">
                    +1 416-844-3543
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="w-5 h-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:info@deossacleaning.ca" className="text-primary-foreground/90 hover:text-secondary transition-colors">
                    info@deossacleaning.ca
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Service Area</p>
                  <p className="text-primary-foreground/90">Greater Toronto Area</p>
                </div>
              </div>

              <div className="flex items-start">
                <MessageCircle className="w-5 h-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">WhatsApp</p>
                  <a 
                    href="https://wa.me/+14168443543"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-foreground/90 hover:text-secondary transition-colors"
                  >
                    Chat with us instantly
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/80 text-sm">
              © {currentYear} Deossa Cleaning Services. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <button className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm">
                Privacy Policy
              </button>
              <button className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;