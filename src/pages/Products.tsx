import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Grid3x3, 
  Shield, 
  Leaf, 
  Volume2, 
  Droplets, 
  Flame,
  Wind,
  Building,
  Layers,
  Square,
  Home,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { Link } from "react-router-dom";
import metalCeilingImage from "@/assets/metal-ceiling-installation.jpg";
import exteriorLouversImage from "@/assets/exterior-louvers.jpg";
import exteriorCladdingImage from "@/assets/exterior-cladding.jpg";
import tGridSystemImage from "@/assets/t-grid-system.jpg";
import raisedFloorImage from "@/assets/raised-floor-system.jpg";
import cubicleSystemsImage from "@/assets/cubicle-systems.jpg";

const Products = () => {
  const mainProducts = [
    {
      icon: <Grid3x3 className="h-8 w-8 text-accent-foreground" />,
      title: "Metal Ceilings",
      subtitle: "Flexible & Acoustically Efficient",
      description: "Wide range of customizable metal ceiling solutions designed for superior acoustical performance and aesthetic appeal. Build-to-order flexibility ensures perfect fit for any architectural requirement.",
      features: ["Acoustic Absorption", "Customizable Design", "Easy Installation", "Low Maintenance"],
      materials: "AA 8011 / AA 3003 / AA 3105 Aluminium Alloys",
      applications: ["Corporate Offices", "Healthcare", "Education", "Retail Spaces"],
      image: metalCeilingImage
    },
    {
      icon: <Wind className="h-8 w-8 text-accent-foreground" />,
      title: "Exterior Louvers", 
      subtitle: "Aesthetics Meets Functionality",
      description: "Engineered louver systems that blend visual appeal with superior functionality. Designed for optimal airflow while maintaining weather resistance and architectural beauty.",
      features: ["Weather Resistant", "Optimal Airflow", "Architectural Beauty", "Durable Construction"],
      materials: "Galvanized Steel (IS–14246–1995, 120 GSM Zinc 277)",
      applications: ["Building Facades", "Parking Structures", "Industrial Facilities", "Commercial Buildings"],
      image: exteriorLouversImage
    },
    {
      icon: <Building className="h-8 w-8 text-accent-foreground" />,
      title: "Exterior Cladding",
      subtitle: "Stylish & Weather-Resistant", 
      description: "High-performance cladding systems that provide excellent weather protection while enhancing building aesthetics. Energy-efficient solutions for modern architecture.",
      features: ["Energy Efficient", "Weather Protection", "Thermal Performance", "Design Flexibility"],
      materials: "Premium Aluminium Alloys & Galvanized Steel",
      applications: ["Commercial Buildings", "Residential Complexes", "Industrial Structures", "Institutional Buildings"],
      image: exteriorCladdingImage
    },
    {
      icon: <Layers className="h-8 w-8 text-accent-foreground" />,
      title: '"T" Grid Systems',
      subtitle: "Strong & Reliable Support",
      description: "Robust support structures engineered for reliability and precision. Essential components for suspended ceiling installations with superior load-bearing capacity.",
      features: ["High Load Capacity", "Precision Engineering", "Easy Assembly", "Corrosion Resistant"],
      materials: "High-Grade Galvanized Steel",
      applications: ["Suspended Ceilings", "Modular Systems", "Commercial Interiors", "Industrial Applications"],
      image: tGridSystemImage
    },
    {
      icon: <Square className="h-8 w-8 text-accent-foreground" />,
      title: "Raised Floor Systems",
      subtitle: "Functional Modern Infrastructure",
      description: "Advanced access flooring solutions designed for contemporary infrastructure needs. Perfect for data centers, offices, and technical facilities requiring underfloor access.",
      features: ["Access Flexibility", "Load Distribution", "Cable Management", "Modular Design"],
      materials: "Steel & Aluminium Composite",
      applications: ["Data Centers", "Server Rooms", "Corporate Offices", "Control Rooms"],
      image: raisedFloorImage
    },
    {
      icon: <Home className="h-8 w-8 text-accent-foreground" />,
      title: "Fasttrak Cubicle Systems",
      subtitle: "Modern & Space-Saving",
      description: "Contemporary cubicle and toilet partition systems designed for hygiene, privacy, and space optimization. Modern solutions for commercial washroom facilities.",
      features: ["Hygienic Design", "Privacy Optimization", "Easy Maintenance", "Vandal Resistant"],
      materials: "Antimicrobial Coated Panels",
      applications: ["Commercial Restrooms", "Educational Facilities", "Healthcare Centers", "Public Buildings"],
      image: cubicleSystemsImage
    }
  ];

  const keyFeatures = [
    {
      icon: <Shield className="h-6 w-6 text-accent-foreground" />,
      title: "Antimicrobial Properties",
      description: "Advanced coating technology for enhanced hygiene"
    },
    {
      icon: <Volume2 className="h-6 w-6 text-accent-foreground" />,
      title: "Acoustical Absorption", 
      description: "Superior sound control for comfortable environments"
    },
    {
      icon: <Droplets className="h-6 w-6 text-accent-foreground" />,
      title: "Corrosion Resistance",
      description: "Long-lasting protection against environmental factors"
    },
    {
      icon: <Wind className="h-6 w-6 text-accent-foreground" />,
      title: "Air Tightness",
      description: "Energy-efficient sealing for optimal performance"
    },
    {
      icon: <Leaf className="h-6 w-6 text-accent-foreground" />,
      title: "Eco-Friendly Materials",
      description: "Sustainable solutions supporting green initiatives"
    },
    {
      icon: <Flame className="h-6 w-6 text-accent-foreground" />,
      title: "Fire Safety Compliance",
      description: "Meeting stringent fire safety standards"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Product Portfolio
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Comprehensive range of architectural metal solutions engineered for 
              performance, sustainability, and aesthetic excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Overview */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Product Features & Benefits
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyFeatures.map((feature, index) => (
              <div key={index} className="flex items-center space-x-4 p-4 bg-card rounded-lg shadow-soft">
                <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-primary">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Products */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Our Product Range
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Precision-engineered solutions manufactured using premium aluminium alloys 
              and galvanized steel, meeting international quality standards.
            </p>
          </div>

          <div className="space-y-12">
            {mainProducts.map((product, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-strong transition-all duration-300">
                <div className={`grid grid-cols-1 lg:grid-cols-2 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={`p-8 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <CardHeader className="p-0 mb-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center">
                          {product.icon}
                        </div>
                        <div>
                          <CardTitle className="text-2xl text-primary">{product.title}</CardTitle>
                          <p className="text-accent font-medium">{product.subtitle}</p>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="p-0">
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {product.description}
                      </p>
                      
                      <div className="space-y-4 mb-6">
                        <div>
                          <h4 className="font-semibold text-primary mb-2">Key Features:</h4>
                          <div className="grid grid-cols-2 gap-2">
                            {product.features.map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-center space-x-2">
                                <CheckCircle2 className="h-4 w-4 text-success flex-shrink-0" />
                                <span className="text-sm text-muted-foreground">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-primary mb-2">Materials:</h4>
                          <Badge variant="outline" className="text-xs">{product.materials}</Badge>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-primary mb-2">Applications:</h4>
                          <div className="flex flex-wrap gap-2">
                            {product.applications.map((app, appIndex) => (
                              <Badge key={appIndex} variant="secondary" className="text-xs">
                                {app}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <Button className="bg-gradient-primary">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </div>
                  
                  <div className={`relative overflow-hidden ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <img 
                      src={product.image} 
                      alt={`${product.title} installation`}
                      className="w-full h-64 lg:h-full object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg"></div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Technical Excellence
            </h2>
            <p className="text-xl text-muted-foreground">
              Manufactured to meet international standards with superior material specifications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-primary">Aluminium Alloy Specifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">AA 8011 Alloy</span>
                    <Badge variant="outline">Premium Grade</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">AA 3003 Alloy</span>
                    <Badge variant="outline">Standard Grade</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">AA 3105 Alloy</span>
                    <Badge variant="outline">Enhanced Grade</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-primary">Steel Specifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Standard</span>
                    <Badge variant="outline">IS–14246–1995</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Coating Weight</span>
                    <Badge variant="outline">120 GSM</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Zinc Coating</span>
                    <Badge variant="outline">Z277 Grade</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Explore Our Solutions?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Discover how our precision-engineered products can transform your architectural vision 
              into reality with sustainable, innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="secondary" size="lg">
                <Link to="/contact">
                  Request Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-primary">
                <Link to="/projects">View Applications</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;