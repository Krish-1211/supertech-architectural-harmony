import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Building, 
  Factory, 
  GraduationCap, 
  Heart, 
  ShoppingBag, 
  Plane,
  ArrowRight,
  MapPin,
  Calendar,
  Users,
  Target,
  Trophy,
  CheckCircle2
} from "lucide-react";
import { Link } from "react-router-dom";
import { StatsCard } from "@/components/ui/stats-card";
import ongcProjectImage from "@/assets/ongc-project.jpg";
import industrialProjectImage from "@/assets/industrial-project.jpg";
import educationalProjectImage from "@/assets/educational-project.jpg";
import healthcareProjectImage from "@/assets/healthcare-project.jpg";

const Projects = () => {
  const projectCategories = [
    {
      icon: <Building className="h-8 w-8 text-accent-foreground" />,
      title: "Corporate Offices",
      count: "45K+",
      description: "Premium ceiling solutions for India's leading corporate headquarters"
    },
    {
      icon: <Factory className="h-8 w-8 text-accent-foreground" />,
      title: "Industrial Facilities", 
      count: "30K+",
      description: "Robust architectural systems for manufacturing and processing plants"
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-accent-foreground" />,
      title: "Educational Institutions",
      count: "15K+", 
      description: "Acoustic ceiling solutions for universities and schools nationwide"
    },
    {
      icon: <Heart className="h-8 w-8 text-accent-foreground" />,
      title: "Healthcare Centers",
      count: "8K+",
      description: "Hygienic, antimicrobial ceiling systems for hospitals and clinics"
    },
    {
      icon: <ShoppingBag className="h-8 w-8 text-accent-foreground" />,
      title: "Retail Spaces",
      count: "12K+",
      description: "Aesthetic ceiling designs for malls and commercial retail outlets"
    },
    {
      icon: <Plane className="h-8 w-8 text-accent-foreground" />,
      title: "Infrastructure Projects",
      count: "5K+",
      description: "Large-scale installations for airports, metros, and public buildings"
    }
  ];

  const featuredProjects = [
    {
      title: "ONGC Corporate Headquarters",
      category: "Corporate",
      location: "Mumbai, Maharashtra",
      year: "2023",
      area: "250,000 sq ft",
      products: ["Metal Ceilings", "T-Grid Systems", "Louvers"],
      description: "Complete architectural metal solution for India's largest oil and gas corporation, featuring advanced acoustic ceiling systems and contemporary design elements.",
      features: [
        "Acoustic Performance Enhancement",
        "Energy Efficient Design", 
        "Fire Safety Compliance",
        "Sustainable Materials"
      ],
      status: "Completed",
      image: ongcProjectImage
    },
    {
      title: "Indian Oil Refinery Complex",
      category: "Industrial",
      location: "Gujarat",
      year: "2022",
      area: "500,000 sq ft", 
      products: ["Exterior Cladding", "Louvers", "Industrial Ceilings"],
      description: "Comprehensive cladding and ceiling solution for petrochemical facility requiring superior corrosion resistance and safety compliance.",
      features: [
        "Corrosion Resistant Coating",
        "Explosion-Proof Design",
        "Weather Protection",
        "Low Maintenance Systems"
      ],
      status: "Completed",
      image: industrialProjectImage
    },
    {
      title: "IIT Delhi Academic Complex",
      category: "Educational",
      location: "New Delhi",
      year: "2023",
      area: "180,000 sq ft",
      products: ["Metal Ceilings", "Cubicle Systems", "Access Floors"],
      description: "State-of-the-art ceiling and partition systems for premier technical institute, emphasizing acoustics and sustainability.",
      features: [
        "Superior Acoustic Control",
        "Modular Design Flexibility",
        "Green Building Compliance",
        "Advanced Ventilation Integration"
      ],
      status: "Completed",
      image: educationalProjectImage
    },
    {
      title: "AIIMS Medical Center",
      category: "Healthcare",
      location: "Hyderabad, Telangana", 
      year: "2024",
      area: "320,000 sq ft",
      products: ["Antimicrobial Ceilings", "Cubicle Systems", "Clean Room Solutions"],
      description: "Hygienic ceiling and partition systems for premier medical facility with advanced antimicrobial properties and infection control.",
      features: [
        "Antimicrobial Surface Treatment",
        "Easy Clean Technology",
        "Infection Control Compliance", 
        "Seamless Joint Design"
      ],
      status: "In Progress",
      image: healthcareProjectImage
    }
  ];

  const clientSegments = [
    { name: "Oil & Gas PSUs", projects: "25K+", companies: "ONGC, IOC, BPCL, HPCL" },
    { name: "Power Sector", projects: "18K+", companies: "NTPC, PowerGrid, NHPC" },
    { name: "Steel & Mining", projects: "22K+", companies: "SAIL, NMDC, Coal India" },
    { name: "Banking & Finance", projects: "15K+", companies: "SBI, HDFC, ICICI, Axis Bank" },
    { name: "IT & Telecom", projects: "20K+", companies: "TCS, Infosys, Airtel, BSNL" },
    { name: "Railways", projects: "12K+", companies: "Indian Railways, Metro Rail" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Project Portfolio
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Over 100,000 successful installations across India's leading corporations, 
              PSUs, and institutions, establishing us as the preferred architectural partner.
            </p>
          </div>
        </div>
      </section>

      {/* Project Stats */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <StatsCard
              title="Projects Completed"
              value="100K+"
              description="Successful installations"
              icon={<Target className="h-6 w-6 text-accent-foreground" />}
            />
            <StatsCard
              title="Corporate Clients"
              value="25K+"
              description="Enterprise partnerships"
              icon={<Building className="h-6 w-6 text-accent-foreground" />}
            />
            <StatsCard
              title="Coverage Area"
              value="18M+"
              description="Square meters installed"
              icon={<MapPin className="h-6 w-6 text-accent-foreground" />}
            />
            <StatsCard
              title="Client Satisfaction"
              value="98%"
              description="Customer retention rate"
              icon={<Trophy className="h-6 w-6 text-accent-foreground" />}
            />
          </div>
        </div>
      </section>

      {/* Project Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Diverse Project Experience
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive architectural solutions delivered across multiple sectors, 
              from corporate offices to critical infrastructure projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectCategories.map((category, index) => (
              <Card key={index} className="group hover:shadow-strong transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    {category.title}
                  </h3>
                  <div className="text-2xl font-bold text-accent mb-3">
                    {category.count}
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {category.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Featured Project Implementations
            </h2>
            <p className="text-xl text-muted-foreground">
              Showcasing our expertise through successful collaborations with India's leading organizations.
            </p>
          </div>

          <div className="space-y-8">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-strong transition-shadow duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                  <div className="lg:col-span-2 p-8">
                    <CardHeader className="p-0 mb-6">
                      <div className="flex items-center justify-between mb-4">
                        <Badge variant="outline" className="text-accent">
                          {project.category}
                        </Badge>
                        <Badge variant={project.status === 'Completed' ? 'default' : 'secondary'}>
                          {project.status}
                        </Badge>
                      </div>
                      <CardTitle className="text-2xl text-primary mb-2">
                        {project.title}
                      </CardTitle>
                      <div className="flex items-center text-muted-foreground text-sm space-x-4">
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span>{project.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{project.year}</span>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="p-0">
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {project.description}
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h4 className="font-semibold text-primary mb-3">Project Features:</h4>
                          <div className="space-y-2">
                            {project.features.map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-center space-x-2">
                                <CheckCircle2 className="h-4 w-4 text-success flex-shrink-0" />
                                <span className="text-sm text-muted-foreground">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-primary mb-3">Products Installed:</h4>
                          <div className="space-y-2">
                            {project.products.map((product, productIndex) => (
                              <Badge key={productIndex} variant="secondary" className="mr-2 mb-1">
                                {product}
                              </Badge>
                            ))}
                          </div>
                          <div className="mt-4 text-sm text-muted-foreground">
                            <strong>Coverage Area:</strong> {project.area}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                  
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={`${project.title} project`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent flex items-end p-6">
                      <Button variant="secondary" size="sm">
                        View Details
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Segments */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Trusted by India's Leading Organizations
            </h2>
            <p className="text-xl text-muted-foreground">
              Serving India's top 500 companies and public sector undertakings across diverse industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clientSegments.map((segment, index) => (
              <Card key={index} className="hover:shadow-medium transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-primary">
                      {segment.name}
                    </h3>
                    <Badge variant="outline" className="text-accent">
                      {segment.projects}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    <strong>Key Clients:</strong> {segment.companies}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Users className="h-16 w-16 mx-auto mb-6 text-primary" />
            <blockquote className="text-2xl md:text-3xl font-medium text-primary mb-8 leading-relaxed">
              "SUPERTECH Metal Ceilings has consistently delivered exceptional quality and 
              innovative solutions for our facilities nationwide. Their expertise in large-scale 
              installations and commitment to sustainability aligns perfectly with our values."
            </blockquote>
            <div className="text-lg text-muted-foreground">
              <div className="font-semibold">Senior Project Manager</div>
              <div>Oil and Natural Gas Corporation (ONGC)</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Join the ranks of India's leading organizations who trust SUPERTECH Metal Ceilings 
              for their architectural metal solution requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="secondary" size="lg">
                <Link to="/contact">
                  Discuss Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-primary">
                <Link to="/products">Explore Solutions</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;