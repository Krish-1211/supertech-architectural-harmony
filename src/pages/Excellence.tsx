import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Award, 
  Factory, 
  Microscope, 
  Recycle, 
  Users, 
  Headphones,
  ShieldCheck,
  Zap,
  Target,
  CheckCircle2,
  ArrowRight,
  Cog,
  FlaskConical,
  Leaf
} from "lucide-react";
import { Link } from "react-router-dom";
import qualityTestingImage from "@/assets/quality-testing.jpg";
import manufacturingFacilityImage from "@/assets/manufacturing-facility.jpg";

const Excellence = () => {
  const excellenceAreas = [
    {
      icon: <Award className="h-8 w-8 text-accent-foreground" />,
      title: "Quality Assurance",
      description: "Comprehensive quality control at every stage of manufacturing, from raw material inspection to final product testing.",
      features: [
        "ISO 9001:2015 Certified Manufacturing",
        "Advanced Material Testing Laboratory", 
        "Real-time Quality Monitoring Systems",
        "Statistical Process Control Implementation"
      ],
      highlight: "Zero-defect commitment with 99.8% quality rating"
    },
    {
      icon: <Microscope className="h-8 w-8 text-accent-foreground" />,
      title: "Research & Development",
      description: "Continuous innovation through dedicated R&D initiatives, developing next-generation architectural solutions.",
      features: [
        "Advanced Materials Research",
        "Coating Technology Innovation",
        "Acoustic Performance Enhancement",
        "Sustainability-focused Development"
      ],
      highlight: "20+ patents in architectural metalwork technology"
    },
    {
      icon: <Cog className="h-8 w-8 text-accent-foreground" />,
      title: "Precision Engineering",
      description: "State-of-the-art manufacturing processes ensuring dimensional accuracy and superior finish quality.",
      features: [
        "CNC Precision Machining",
        "Automated Production Lines",
        "Laser Cutting Technology",
        "Advanced Forming Processes"
      ],
      highlight: "±0.1mm dimensional tolerance achievement"
    },
    {
      icon: <Users className="h-8 w-8 text-accent-foreground" />,
      title: "Project Management",
      description: "End-to-end project execution with dedicated teams ensuring timely delivery and seamless installation.",
      features: [
        "Dedicated Project Managers",
        "Real-time Progress Tracking",
        "On-site Technical Support",
        "Installation Quality Assurance"
      ],
      highlight: "98% on-time delivery record across 100K+ projects"
    },
    {
      icon: <Headphones className="h-8 w-8 text-accent-foreground" />,
      title: "After-Sales Support",
      description: "Comprehensive post-installation support ensuring long-term performance and customer satisfaction.",
      features: [
        "24/7 Technical Helpdesk",
        "Preventive Maintenance Programs",
        "Extended Warranty Coverage",
        "Performance Monitoring Services"
      ],
      highlight: "95% customer satisfaction rating maintained"
    },
    {
      icon: <Recycle className="h-8 w-8 text-accent-foreground" />,
      title: "Zero-Waste Practices",
      description: "Environmental stewardship through comprehensive waste management and sustainable manufacturing processes.",
      features: [
        "100% Material Recovery Systems",
        "Closed-loop Water Recycling",
        "Energy Efficient Operations",
        "Carbon Footprint Reduction"
      ],
      highlight: "Achieved carbon-neutral manufacturing status"
    }
  ];

  const certifications = [
    { name: "ISO 9001:2015", category: "Quality Management", status: "Certified" },
    { name: "ISO 14001:2015", category: "Environmental Management", status: "Certified" },
    { name: "OHSAS 18001", category: "Occupational Health & Safety", status: "Certified" },
    { name: "IGBC Certified", category: "Green Building Council", status: "Member" },
    { name: "BIS Standards", category: "Bureau of Indian Standards", status: "Compliant" },
    { name: "Fire Safety Compliance", category: "National Building Code", status: "Certified" }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Design & Engineering",
      description: "CAD-based design with structural analysis and optimization"
    },
    {
      step: "02", 
      title: "Material Procurement",
      description: "Premium grade materials sourced from certified suppliers"
    },
    {
      step: "03",
      title: "Precision Manufacturing",
      description: "CNC machining and automated production with real-time monitoring"
    },
    {
      step: "04",
      title: "Quality Testing",
      description: "Comprehensive testing for dimensional accuracy and performance"
    },
    {
      step: "05",
      title: "Surface Treatment",
      description: "Advanced powder coating in climate-controlled chambers"
    },
    {
      step: "06",
      title: "Final Inspection",
      description: "Multi-point quality check before packaging and dispatch"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Excellence in Everything
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Uncompromising commitment to quality, innovation, and sustainability across 
              every aspect of our manufacturing and service delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Excellence Areas */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Our Excellence Framework
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Six pillars of excellence that drive our commitment to delivering world-class 
              architectural metal solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {excellenceAreas.map((area, index) => (
              <Card key={index} className="group hover:shadow-strong transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {area.icon}
                  </div>
                  <CardTitle className="text-xl text-primary text-center">
                    {area.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 text-center">
                    {area.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {area.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle2 className="h-4 w-4 text-success flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="p-3 bg-accent/10 rounded-lg border-l-4 border-accent">
                    <p className="text-sm font-medium text-accent-foreground">
                      {area.highlight}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Process */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Manufacturing Process Excellence
            </h2>
            <p className="text-xl text-muted-foreground">
              Six-stage precision manufacturing process ensuring consistent quality and performance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((process, index) => (
              <div key={index} className="relative">
                <Card className="h-full hover:shadow-medium transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-accent rounded-full flex items-center justify-center text-2xl font-bold text-accent-foreground">
                      {process.step}
                    </div>
                    <h3 className="text-lg font-semibold text-primary mb-3">
                      {process.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {process.description}
                    </p>
                  </CardContent>
                </Card>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/20 transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Certifications & Standards
            </h2>
            <p className="text-xl text-muted-foreground">
              Accredited by leading international bodies for quality, safety, and environmental standards.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="hover:shadow-medium transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <ShieldCheck className="h-8 w-8 text-success" />
                    <Badge variant="outline" className="text-success">
                      {cert.status}
                    </Badge>
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    {cert.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {cert.category}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-20 bg-gradient-to-r from-success/10 to-accent/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Leaf className="h-16 w-16 text-success mb-6" />
              <h2 className="text-4xl font-bold text-primary mb-6">
                Sustainable Manufacturing
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our commitment to environmental stewardship drives every aspect of our operations, 
                from material selection to waste management.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-success/20 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="h-4 w-4 text-success" />
                  </div>
                  <span className="text-muted-foreground">100% Recyclable Materials</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-success/20 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="h-4 w-4 text-success" />
                  </div>
                  <span className="text-muted-foreground">Zero Liquid Discharge Systems</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-success/20 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="h-4 w-4 text-success" />
                  </div>
                  <span className="text-muted-foreground">Carbon Neutral Operations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-success/20 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="h-4 w-4 text-success" />
                  </div>
                  <span className="text-muted-foreground">Green Energy Integration</span>
                </div>
              </div>
              
              <Button size="lg" className="bg-gradient-primary">
                Learn About Our Green Initiatives
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            
            <div className="relative">
              <div className="relative mb-6">
                <img 
                  src={qualityTestingImage} 
                  alt="Quality Testing Laboratory"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent rounded-lg"></div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-6 text-center bg-success/5">
                  <Factory className="h-12 w-12 mx-auto mb-4 text-success" />
                  <div className="text-2xl font-bold text-success mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Material Recovery</div>
                </Card>
                <Card className="p-6 text-center bg-accent/5">
                  <Zap className="h-12 w-12 mx-auto mb-4 text-accent" />
                  <div className="text-2xl font-bold text-accent mb-2">40%</div>
                  <div className="text-sm text-muted-foreground">Energy Reduction</div>
                </Card>
                <Card className="p-6 text-center bg-primary/5">
                  <Recycle className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <div className="text-2xl font-bold text-primary mb-2">0</div>
                  <div className="text-sm text-muted-foreground">Waste to Landfill</div>
                </Card>
                <Card className="p-6 text-center bg-success/5">
                  <Leaf className="h-12 w-12 mx-auto mb-4 text-success" />
                  <div className="text-2xl font-bold text-success mb-2">25%</div>
                  <div className="text-sm text-muted-foreground">Carbon Footprint Reduction</div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              Experience Excellence in Action
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Witness our commitment to excellence through successful project implementations 
              across diverse sectors and applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="secondary" size="lg">
                <Link to="/projects">
                  View Our Projects
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-primary">
                <Link to="/contact">Schedule Facility Tour</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Excellence;