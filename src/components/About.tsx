import { Card, CardContent } from "@/components/ui/card";
import { Heart, Award, Users, Shield } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Passion for Excellence",
      description: "Every cleaning project is approached with dedication and attention to detail."
    },
    {
      icon: Award,
      title: "Professional Experience", 
      description: "Years of experience in hotels, airports, and private companies across Canada."
    },
    {
      icon: Users,
      title: "Community Focused",
      description: "Proudly serving families and businesses throughout the Greater Toronto Area."
    },
    {
      icon: Shield,
      title: "Trust & Reliability",
      description: "Fully insured, licensed, and committed to creating healthier spaces for all."
    }
  ];

  return (
    <section id="about" className="py-20 bg-section-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            About <span className="text-primary">Deossa</span> Cleaning Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A story of dreams, dedication, and the pursuit of excellence
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Story Content */}
          <div className="space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-foreground/90 leading-relaxed text-lg">
                <strong className="text-primary">Deossa Cleaning Services</strong> was founded with a dream of building 
                a better future through hard work and dedication. Coming to Canada from Colombia, our founder brought 
                years of hands-on experience in the cleaning industry — from maintaining world-class hotels to keeping 
                busy airports and private companies spotless.
              </p>
              
              <p className="text-foreground/90 leading-relaxed text-lg">
                This journey developed the skills, discipline, and attention to detail that set us apart. Now, as the 
                proud owner of Deossa Cleaning Services, she is in the driver's seat, bringing her passion for 
                excellence directly to homes and businesses across the GTA.
              </p>
              
              <p className="text-foreground/90 leading-relaxed text-lg">
                <strong className="text-accent">Our mission is simple yet powerful:</strong> to deliver professional, 
                reliable, and personalized cleaning services that create brighter, healthier spaces for families and 
                businesses to thrive.
              </p>
              
              <blockquote className="border-l-4 border-secondary pl-6 italic text-xl text-primary font-medium">
                "At Deossa Cleaning Services, we believe every space deserves to shine — and with care, 
                commitment, and integrity, we make that happen every single day."
              </blockquote>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="relative">
            <div className="aspect-square bg-primary/10 rounded-2xl flex items-center justify-center border-2 border-dashed border-primary/30 hover:border-primary/50 transition-smooth">
              <div className="text-center p-8">
                <Users className="w-16 h-16 text-primary mx-auto mb-4" />
                <p className="text-primary font-semibold text-lg">Professional Team</p>
                <p className="text-muted-foreground mt-2">Dedicated to excellence in every clean</p>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary rounded-full flex items-center justify-center shadow-glow">
              <Award className="w-8 h-8 text-secondary-foreground" />
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="border-0 shadow-soft hover:shadow-glow transition-smooth hover:-translate-y-1 bg-card/50 backdrop-blur">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;