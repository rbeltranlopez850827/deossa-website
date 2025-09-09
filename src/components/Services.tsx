import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Building2, Sparkles, Calendar, CheckCircle } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Residential Cleaning",
      description: "Complete home cleaning services for apartments, condos, and houses.",
      features: ["Deep cleaning", "Regular maintenance", "Move-in/out cleaning", "Post-construction cleanup"],
      color: "primary"
    },
    {
      icon: Building2,
      title: "Commercial Cleaning",
      description: "Professional cleaning solutions for offices, retail spaces, and businesses.",
      features: ["Office cleaning", "Retail maintenance", "Industrial spaces", "24/7 availability"],
      color: "accent"
    },
    {
      icon: Sparkles,
      title: "Specialized Services",
      description: "Tailored cleaning solutions for unique requirements and spaces.",
      features: ["Carpet cleaning", "Window washing", "Pressure washing", "Event cleanup"],
      color: "secondary"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-primary">Cleaning</span> Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Professional cleaning solutions tailored to your specific needs, delivered with excellence and care
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="border-0 shadow-soft hover:shadow-glow transition-all duration-300 hover:-translate-y-2 bg-card group">
              <CardHeader className="text-center pb-4">
                <div className={`w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                  service.color === 'primary' ? 'bg-primary/10 group-hover:bg-primary/20' :
                  service.color === 'accent' ? 'bg-accent/10 group-hover:bg-accent/20' :
                  'bg-secondary/10 group-hover:bg-secondary/20'
                }`}>
                  <service.icon className={`w-10 h-10 ${
                    service.color === 'primary' ? 'text-primary' :
                    service.color === 'accent' ? 'text-accent' :
                    'text-secondary'
                  }`} />
                </div>
                <CardTitle className="text-2xl font-bold text-foreground mb-3">{service.title}</CardTitle>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-foreground/90">
                      <CheckCircle className={`w-5 h-5 mr-3 ${
                        service.color === 'primary' ? 'text-primary' :
                        service.color === 'accent' ? 'text-accent' :
                        'text-secondary'
                      }`} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={scrollToContact}
                  className={`w-full mt-6 font-semibold transition-all duration-300 ${
                    service.color === 'primary' ? 'bg-primary hover:bg-primary/90 text-primary-foreground' :
                    service.color === 'accent' ? 'bg-accent hover:bg-accent/90 text-accent-foreground' :
                    'bg-secondary hover:bg-secondary/90 text-secondary-foreground'
                  }`}
                >
                  Get Quote
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="bg-primary/5 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Why Choose <span className="text-primary">Deossa</span>?
            </h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the difference that professional expertise and genuine care make
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Calendar, title: "Flexible Scheduling", desc: "We work around your schedule" },
              { icon: CheckCircle, title: "Quality Guaranteed", desc: "100% satisfaction promise" },
              { icon: Sparkles, title: "Eco-Friendly Products", desc: "Safe for family and pets" },
              { icon: Building2, title: "Fully Licensed", desc: "Insured and bonded service" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-lg font-bold text-foreground mb-2">{item.title}</h4>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;