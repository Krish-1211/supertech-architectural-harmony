import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { StatsCard } from "@/components/ui/stats-card";
import { 
  Building2, 
  Users, 
  Target, 
  Award, 
  Leaf, 
  Factory,
  Shield,
  Zap,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import manufacturingFacilityImage from "@/assets/manufacturing-facility.jpg";

const About = () => {
  const values = [
    {
      icon: <Shield className="h-8 w-8 text-accent-foreground" />,
      title: "Quality Excellence",
      description: "Uncompromising commitment to superior materials and precision manufacturing processes."
    },
    {
      icon: <Leaf className="h-8 w-8 text-accent-foreground" />,
      title: "Sustainability Focus",
      description: "Environmental responsibility through eco-friendly materials and zero-waste manufacturing."
    },
    {
      icon: <Users className="h-8 w-8 text-accent-foreground" />,
      title: "Customer Centricity",
      description: "Building long-term partnerships through exceptional service and customized solutions."
    },
    {
      icon: <Zap className="h-8 w-8 text-accent-foreground" />,
      title: "Innovation Drive",
      description: "Continuous R&D investment to pioneer next-generation architectural solutions."
    }
  ];

  const milestones = [
    { year: "1998", title: "Company Founded", description: "Started with a vision to revolutionize architectural metalwork in India" },
    { year: "2005", title: "First Major Project", description: "Completed installation for leading PSU, establishing market presence" },
    { year: "2012", title: "Manufacturing Expansion", description: "Established state-of-the-art facility in Gujarat with powder coating unit" },
    { year: "2018", title: "Sustainability Initiative", description: "Achieved zero-waste manufacturing and eco-friendly product certification" },
    { year: "2023", title: "Market Leadership", description: "Recognized as preferred supplier for India's top 500 companies" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About SUPERTECH
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Over 25 years of pioneering excellence in architectural metalwork, 
              transforming spaces across India with innovative, sustainable solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">
                Our Story
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Founded in 1998, SUPERTECH Metal Ceilings emerged from a simple yet powerful vision: 
                to revolutionize architectural metalwork in India through precision engineering and 
                sustainable practices.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                What began as a small manufacturing unit has grown into one of India's most trusted 
                names in architectural metal solutions, serving over 25,000 clients and completing 
                more than 100,000 projects across diverse sectors.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Today, our state-of-the-art facilities in Gujarat stand as a testament to our 
                commitment to innovation, quality, and environmental responsibility.
              </p>
              <Button asChild size="lg" className="bg-gradient-primary">
                <Link to="/excellence">
                  Discover Our Excellence
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            
            <div className="relative">
              <div className="relative overflow-hidden rounded-lg">
                <img 
                  src={manufacturingFacilityImage} 
                  alt="SUPERTECH Manufacturing Facility"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-primary/80 p-8 flex flex-col justify-end">
                  <Factory className="h-16 w-16 text-primary-foreground mb-6" />
                  <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                    Manufacturing Excellence
                  </h3>
                  <p className="text-primary-foreground/90">
                    Our Gujarat facilities feature cutting-edge technology, 
                    in-house powder coating units, and zero-waste processes, 
                    ensuring every product meets international quality standards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide every decision and drive our commitment to excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-accent rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Achievements That Speak
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <StatsCard
              title="Years of Excellence"
              value="25+"
              description="Industry expertise"
              icon={<Award className="h-6 w-6 text-accent-foreground" />}
            />
            <StatsCard
              title="Square Meters"
              value="18M+"
              description="Area covered"
              icon={<Building2 className="h-6 w-6 text-accent-foreground" />}
            />
            <StatsCard
              title="Satisfied Clients"
              value="25K+"
              description="Partnerships built"
              icon={<Users className="h-6 w-6 text-accent-foreground" />}
            />
            <StatsCard
              title="Projects Delivered"
              value="100K+"
              description="Successful completions"
              icon={<Target className="h-6 w-6 text-accent-foreground" />}
            />
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-muted-foreground">
              Key milestones in our path to becoming India's leading metal ceiling manufacturer.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20"></div>
              
              {milestones.map((milestone, index) => (
                <div key={index} className="relative flex items-center mb-12 last:mb-0">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg shadow-medium relative z-10">
                    {milestone.year.slice(-2)}
                  </div>
                  <div className="ml-8 flex-1">
                    <Card className="hover:shadow-medium transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="text-sm text-accent font-medium mb-1">
                          {milestone.year}
                        </div>
                        <h3 className="text-xl font-semibold text-primary mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {milestone.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Space?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Partner with SUPERTECH Metal Ceilings for innovative, sustainable architectural solutions 
              backed by 25 years of expertise and unwavering commitment to excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="secondary" size="lg">
                <Link to="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-primary">
                <Link to="/products">Explore Products</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;