import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Home,
  Building2,
  Sparkles,
  Calendar,
  CheckCircle,
  MonitorPlay,
  Star,
  Briefcase,
  Layers,
  Droplets,
  Users,
  ClipboardList,
  Clock,
  Stethoscope,
  Store,
  UtensilsCrossed,
  Landmark,
  Dumbbell,
  GraduationCap,
  ShieldCheck,
  DollarSign,
  Phone,
} from "lucide-react";

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
      description: "We help businesses maintain clean, healthy and professional environments that leave a lasting impression.",
      features: ["Office buildings", "Medical clinics", "Retail stores & banks", "Customized cleaning plans"],
      color: "accent",
      featured: true
    },
    {
      icon: Sparkles,
      title: "Specialized Services",
      description: "Tailored cleaning solutions for unique requirements and spaces.",
      features: ["Carpet cleaning", "Window washing", "Pressure washing", "Event cleanup"],
      color: "secondary"
    },
    {
      icon: MonitorPlay,
      title: "Digital Signage Services",
      description: "Modern digital signage installation and management to elevate how your business communicates.",
      features: ["Screen installation", "Content management", "Menu & promo boards", "Ongoing tech support"],
      color: "primary"
    }
  ];

  // Detailed commercial cleaning offering, mirrored from the Deossa print materials
  const commercialChecklist = [
    { icon: Building2, title: "Office Cleaning", desc: "Daily or scheduled cleaning to keep your office environment clean, healthy and productive." },
    { icon: Briefcase, title: "Janitorial Services", desc: "Complete janitorial solutions tailored to your facility's unique needs." },
    { icon: Sparkles, title: "Carpet Cleaning", desc: "Deep cleaning that removes dirt, stains and odors for a fresher look." },
    { icon: Layers, title: "Floor Care", desc: "Stripping, waxing and polishing to protect and extend the life of your floors." },
    { icon: Droplets, title: "Restroom Sanitization", desc: "Thorough disinfection for a clean, safe and hygienic space." },
    { icon: Users, title: "Common Area Cleaning", desc: "Lobbies, break rooms, kitchens and high-traffic areas always spotless." },
    { icon: ClipboardList, title: "Customized Cleaning Programs", desc: "Flexible plans designed around your schedule and budget." },
    { icon: Clock, title: "Daily, Weekly & Flexible Service", desc: "We work around your business hours to minimize disruption." },
  ];

  const industries = [
    { icon: Building2, label: "Office Buildings" },
    { icon: Stethoscope, label: "Medical Clinics" },
    { icon: Dumbbell, label: "Gyms & Fitness Centers" },
    { icon: GraduationCap, label: "Schools" },
    { icon: Landmark, label: "Banks" },
    { icon: Store, label: "Retail Stores" },
    { icon: UtensilsCrossed, label: "Restaurants" },
  ];

  const trustBar = [
    { icon: ShieldCheck, title: "Reliable", desc: "You can count on us." },
    { icon: Briefcase, title: "Professional", desc: "Trained team, quality results." },
    { icon: DollarSign, title: "Affordable", desc: "Top-notch cleaning at fair prices." },
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`relative border-0 shadow-soft hover:shadow-glow transition-all duration-300 hover:-translate-y-2 bg-card group ${
                service.featured
                  ? "ring-2 ring-secondary lg:scale-105 lg:-translate-y-2 z-10"
                  : ""
              }`}
            >
              {service.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground text-xs font-bold px-4 py-1.5 rounded-full shadow-glow flex items-center gap-1 whitespace-nowrap">
                  <Star className="w-3.5 h-3.5 fill-secondary-foreground" />
                  MOST REQUESTED
                </div>
              )}
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
                <CardTitle className={`font-bold text-foreground mb-3 ${service.featured ? "text-3xl" : "text-2xl"}`}>
                  {service.title}
                </CardTitle>
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

        {/* Commercial Cleaning Spotlight — mirrors the Deossa print flyers */}
        <div className="relative bg-deossa-dark rounded-3xl p-8 lg:p-14 mb-16 overflow-hidden border border-white/5">
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <div className="text-center mb-4">
              <span className="inline-block bg-secondary text-secondary-foreground text-xs font-bold tracking-wide px-4 py-1.5 rounded-full mb-4">
                FEATURED SERVICE
              </span>
              <h3 className="text-3xl lg:text-5xl font-extrabold text-white mb-2">
                Professional <span className="text-secondary">Commercial</span> Cleaning
              </h3>
              <p className="text-lg lg:text-xl">
                <span className="text-primary-foreground/90">Clean Spaces. </span>
                <span className="text-secondary font-semibold">Strong </span>
                <span className="text-accent font-semibold">Impressions.</span>
              </p>
              <p className="text-white/70 max-w-2xl mx-auto mt-4 leading-relaxed">
                Your business deserves a cleaner standard. Focus on your business — we'll take care of the clean.
              </p>
            </div>

            {/* Detailed checklist */}
            <div className="grid md:grid-cols-2 gap-x-10 gap-y-6 my-10">
              {commercialChecklist.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-11 h-11 shrink-0 rounded-full bg-primary flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="text-secondary font-bold mb-1">{item.title}</h4>
                    <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Industries we serve */}
            <div className="mb-10">
              <h4 className="text-center text-white font-bold text-xl mb-6">
                Industries We <span className="text-secondary">Serve</span>
              </h4>
              <div className="flex flex-wrap justify-center gap-4">
                {industries.map((ind, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2"
                  >
                    <ind.icon className="w-4 h-4 text-secondary" />
                    <span className="text-white/90 text-sm font-medium">{ind.label}</span>
                  </div>
                ))}
                <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2">
                  <span className="text-white/70 text-sm font-medium">...and more!</span>
                </div>
              </div>
            </div>

            {/* Trust bar */}
            <div className="grid sm:grid-cols-3 gap-6 border-t border-white/10 pt-8 mb-10">
              {trustBar.map((item, index) => (
                <div key={index} className="flex items-center gap-3 justify-center text-center sm:text-left sm:justify-start">
                  <div className="w-10 h-10 shrink-0 rounded-full bg-secondary/20 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">{item.title}</div>
                    <div className="text-white/60 text-xs">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold text-lg px-8 py-6 shadow-glow transition-bounce hover:scale-105"
              >
                <Phone className="w-5 h-5 mr-2" />
                Get Your Free Estimate
              </Button>
              <p className="text-white/50 text-sm mt-3">No obligation. Just exceptional service.</p>
            </div>
          </div>
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
