import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { StatsCard } from "@/components/ui/stats-card";
import { 
  Building2, 
  Shield, 
  Leaf, 
  Award, 
  ArrowRight, 
  CheckCircle2,
  Users,
  Target,
  Factory
} from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-manufacturing.jpg";
import showcaseImage from "@/assets/metal-ceiling-showcase.jpg";

const Home = () => {
  const features = [
    {
      icon: <Shield className="h-6 w-6 text-accent-foreground" />,
      title: "Antimicrobial Properties",
      description: "Advanced coating technology for hygienic environments"
    },
    {
      icon: <Leaf className="h-6 w-6 text-accent-foreground" />,
      title: "Eco-Friendly Solutions",
      description: "Sustainable materials supporting green building initiatives"
    },
    {
      icon: <Building2 className="h-6 w-6 text-accent-foreground" />,
      title: "Precision Engineering",
      description: "State-of-the-art manufacturing with 25+ years expertise"
    },
    {
      icon: <Award className="h-6 w-6 text-accent-foreground" />,
      title: "Fire Safety Compliance",
      description: "Meeting the highest safety standards for commercial spaces"
    }
  ];

  const products = [
    { name: "Metal Ceilings", description: "Flexible, acoustically efficient ceiling solutions" },
    { name: "Exterior Louvers", description: "Aesthetic functionality with superior durability" },
    { name: "Exterior Cladding", description: "Weather-resistant, energy-efficient building envelopes" },
    { name: "\"T\" Grid Systems", description: "Reliable support structures for modern architecture" },
    { name: "Raised Floor Systems", description: "Functional flooring for contemporary infrastructure" },
    { name: "Cubicle Systems", description: "Modern, space-saving washroom solutions" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-overlay"></div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Driven by Innovation,
              <span className="block text-accent"> Built on Excellence</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Transforming architectural visions into reality with precision-engineered 
              metal ceiling solutions. Over 25 years of expertise in sustainable innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent-light text-lg px-8">
                Explore Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 text-white border-white hover:bg-white hover:text-primary">
                View Projects
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StatsCard
              title="Square Meters Covered"
              value="18M+"
              description="Architectural excellence delivered"
              icon={<Building2 className="h-6 w-6 text-accent-foreground" />}
            />
            <StatsCard
              title="Clients Served"
              value="25K+"
              description="Trusted partnerships built"
              icon={<Users className="h-6 w-6 text-accent-foreground" />}
            />
            <StatsCard
              title="Projects Completed"
              value="100K+"
              description="Successful implementations"
              icon={<Target className="h-6 w-6 text-accent-foreground" />}
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Why Choose SUPERTECH Metal Ceilings?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Combining cutting-edge technology with sustainable practices to deliver 
              architectural solutions that exceed expectations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 bg-gradient-accent rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Showcase */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">
                Comprehensive Product Portfolio
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                From metal ceilings to complete architectural systems, our products are 
                manufactured using premium aluminium alloys and galvanized steel, 
                meeting the highest industry standards.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {products.map((product, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-primary">{product.name}</h4>
                      <p className="text-sm text-muted-foreground">{product.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <Button asChild size="lg" className="bg-gradient-primary">
                <Link to="/products">
                  View All Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            
            <div className="relative">
              <img 
                src={showcaseImage} 
                alt="Modern metal ceiling installation" 
                className="rounded-lg shadow-strong w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <Factory className="h-16 w-16 mx-auto mb-6 text-accent" />
            <h2 className="text-4xl font-bold text-white mb-6">
              Committed to Sustainable Excellence
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Our state-of-the-art manufacturing facilities in Gujarat, India, feature 
              in-house powder coating units and zero-waste practices, supporting India's 
              green building initiatives while delivering world-class quality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="secondary" size="lg">
                <Link to="/excellence">Learn About Our Process</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-primary">
                <Link to="/projects">View Our Projects</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;