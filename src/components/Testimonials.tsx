import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Veronica Velez",
      role: "Homeowner",
      rating: 5,
      text: "Deossa Cleaning Services transformed our home! Their attention to detail is incredible, and the team is always professional and reliable. I couldn't be happier with their service.",
      location: "Toronto, ON"
    },
    {
      name: "Mark Kolakowski", 
      role: "Business Owner",
      rating: 5,
      text: "We've been using Deossa for our office cleaning for over a year. They're consistently excellent, always on time, and our workplace has never looked better. Highly recommended!",
      location: "Mississauga, ON"
    },
    {
      name: "Heidy Nuñez",
      role: "Property Manager",
      rating: 5,
      text: "Professional, trustworthy, and thorough. Deossa handles all our move-in/move-out cleanings and they exceed expectations every single time. The tenants are always impressed.",
      location: "Brampton, ON"
    },
    {
      name: "David Thompson",
      role: "Homeowner",
      rating: 5,
      text: "After trying several cleaning services, Deossa is by far the best. They use eco-friendly products, which is important for our family, and the results speak for themselves.",
      location: "Vaughan, ON"
    },
    {
      name: "Jennifer Lee",
      role: "Restaurant Owner", 
      rating: 5,
      text: "Deossa understands the unique cleaning needs of food service. They're flexible with our schedule and maintain the highest standards. Our health inspector was very impressed!",
      location: "Markham, ON"
    },
    {
      name: "Robert Wilson",
      role: "Homeowner",
      rating: 5,
      text: "The team at Deossa is amazing! They've been cleaning our home for 6 months now and it's always spotless. Great communication and very reasonable prices too.",
      location: "Richmond Hill, ON"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-section-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What Our <span className="text-primary">Customers</span> Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it - hear from the families and businesses who trust Deossa
          </p>
          
          {/* Overall Rating */}
          <div className="flex items-center justify-center mt-8 gap-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-secondary text-secondary" />
              ))}
            </div>
            <div className="text-left">
              <div className="text-2xl font-bold text-foreground">4.9/5</div>
              <div className="text-muted-foreground text-sm">Based on 200+ reviews</div>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-soft hover:shadow-glow transition-all duration-300 hover:-translate-y-1 bg-card group">
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="flex justify-between items-start mb-4">
                  <Quote className="w-8 h-8 text-primary/30" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                    ))}
                  </div>
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-foreground/90 leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </blockquote>

                {/* Customer Info */}
                <div className="border-t border-border pt-4">
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-primary text-sm font-medium">{testimonial.role}</div>
                  <div className="text-muted-foreground text-sm">{testimonial.location}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 text-center">
          <div className="bg-card/50 backdrop-blur rounded-2xl p-8 shadow-soft">
            <h3 className="text-2xl font-bold text-foreground mb-6">Trusted by 200+ Happy Customers</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">200+</div>
                <div className="text-muted-foreground text-sm">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">5,000+</div>
                <div className="text-muted-foreground text-sm">Cleanings Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">99%</div>
                <div className="text-muted-foreground text-sm">Customer Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-muted-foreground text-sm">Available Service</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;