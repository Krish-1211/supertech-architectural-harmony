import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Send,
  Building2,
  Users,
  MessageSquare,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    message: "",
  });
  
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    toast({
      title: "Thank you for your inquiry!",
      description: "Our team will get back to you within 24 hours.",
    });
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      projectType: "",
      message: "",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-accent-foreground" />,
      title: "Phone Support",
      details: [
        "+91 (XXX) XXX-XXXX - Main Office",
        "+91 (XXX) XXX-XXXX - Technical Support"
      ],
      availability: "Mon-Fri: 9:00 AM - 6:00 PM IST"
    },
    {
      icon: <Mail className="h-6 w-6 text-accent-foreground" />,
      title: "Email Support", 
      details: [
        "info@supertechmetal.in - General Inquiries",
        "projects@supertechmetal.in - Project Discussions",
        "support@supertechmetal.in - Technical Support"
      ],
      availability: "Response within 4-6 hours"
    },
    {
      icon: <MapPin className="h-6 w-6 text-accent-foreground" />,
      title: "Manufacturing Facility",
      details: [
        "SUPERTECH Metal Ceilings Pvt. Ltd.",
        "Industrial Area, Phase-II",
        "Gujarat 380XXX, India"
      ],
      availability: "Facility tours by appointment"
    }
  ];

  const officeLocations = [
    {
      city: "Gujarat (HQ)",
      address: "Industrial Area, Phase-II, Gujarat 380XXX",
      phone: "+91 (XXX) XXX-XXXX",
      type: "Manufacturing & Head Office"
    },
    {
      city: "Mumbai",
      address: "Commercial Complex, Andheri East, Mumbai 400069",
      phone: "+91 (XXX) XXX-XXXX", 
      type: "Regional Office"
    },
    {
      city: "Delhi",
      address: "Business Center, Connaught Place, New Delhi 110001",
      phone: "+91 (XXX) XXX-XXXX",
      type: "Regional Office"
    },
    {
      city: "Bangalore",
      address: "Tech Park, Electronic City, Bangalore 560100",
      phone: "+91 (XXX) XXX-XXXX",
      type: "Regional Office"
    }
  ];

  const quickActions = [
    {
      icon: <MessageSquare className="h-6 w-6 text-accent-foreground" />,
      title: "Quick Quote Request",
      description: "Get instant pricing for standard products",
      action: "Request Quote"
    },
    {
      icon: <Users className="h-6 w-6 text-accent-foreground" />,
      title: "Schedule Consultation",
      description: "Book a meeting with our technical experts", 
      action: "Book Meeting"
    },
    {
      icon: <Building2 className="h-6 w-6 text-accent-foreground" />,
      title: "Facility Tour",
      description: "Visit our state-of-the-art manufacturing facility",
      action: "Schedule Tour"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Let's Create Something Extraordinary Together
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Ready to transform your architectural vision into reality? Our experts are here 
              to guide you through every step of your project journey.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickActions.map((action, index) => (
              <Card key={index} className="hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 bg-gradient-accent rounded-lg flex items-center justify-center">
                    {action.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    {action.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {action.description}
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    {action.action}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="shadow-strong">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">
                    Start Your Project Discussion
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Share your requirements and our experts will provide customized solutions.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="your.email@company.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          placeholder="+91 XXXXX XXXXX"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Company Name</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => handleInputChange("company", e.target.value)}
                          placeholder="Your organization"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="projectType">Project Type</Label>
                      <Select onValueChange={(value) => handleInputChange("projectType", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select project type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="metal-ceilings">Metal Ceilings</SelectItem>
                          <SelectItem value="exterior-louvers">Exterior Louvers</SelectItem>
                          <SelectItem value="cladding">Exterior Cladding</SelectItem>
                          <SelectItem value="grid-systems">T-Grid Systems</SelectItem>
                          <SelectItem value="floor-systems">Raised Floor Systems</SelectItem>
                          <SelectItem value="cubicles">Cubicle Systems</SelectItem>
                          <SelectItem value="complete-solution">Complete Architectural Solution</SelectItem>
                          <SelectItem value="consultation">Consultation Only</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Project Details</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder="Please describe your project requirements, timeline, and any specific technical needs..."
                        rows={6}
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-gradient-primary">
                      <Send className="mr-2 h-5 w-5" />
                      Submit Project Inquiry
                    </Button>

                    <div className="text-center text-sm text-muted-foreground">
                      By submitting this form, you agree to our privacy policy and terms of service.
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">
                  Multiple Ways to Connect
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Choose the most convenient way to reach us. Our dedicated team is ready 
                  to assist with technical queries, project planning, and business partnerships.
                </p>
              </div>

              {contactInfo.map((info, index) => (
                <Card key={index} className="hover:shadow-medium transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center flex-shrink-0">
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-primary mb-2">
                          {info.title}
                        </h3>
                        <div className="space-y-1 mb-3">
                          {info.details.map((detail, detailIndex) => (
                            <p key={detailIndex} className="text-sm text-muted-foreground">
                              {detail}
                            </p>
                          ))}
                        </div>
                        <div className="flex items-center text-xs text-accent">
                          <Clock className="h-3 w-3 mr-1" />
                          {info.availability}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Response Time Promise */}
              <Card className="bg-gradient-to-r from-success/10 to-accent/10 border-success/20">
                <CardContent className="p-6 text-center">
                  <CheckCircle2 className="h-12 w-12 mx-auto mb-4 text-success" />
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    Our Response Promise
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    We guarantee a response to all inquiries within 24 hours during business days. 
                    For urgent technical support, we provide same-day assistance.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Our Locations Across India
            </h2>
            <p className="text-xl text-muted-foreground">
              Strategically positioned to serve clients nationwide with local expertise and support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {officeLocations.map((location, index) => (
              <Card key={index} className="hover:shadow-medium transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-4 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold text-primary mb-2">
                      {location.city}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {location.address}
                    </p>
                    <p className="text-sm text-primary mb-3 font-medium">
                      {location.phone}
                    </p>
                    <div className="text-xs text-accent">
                      {location.type}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-muted-foreground">
                Quick answers to common questions about our services and processes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What is the typical project timeline?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Project timelines vary based on complexity and scale. Standard ceiling installations 
                    typically take 2-4 weeks from approval, while large-scale projects may require 
                    6-12 weeks including design and manufacturing phases.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Do you provide installation services?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Yes, we offer comprehensive installation services through our certified installation 
                    partners nationwide. All installations are supervised by our technical team to ensure 
                    quality compliance.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What warranty do you provide?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    We offer comprehensive warranties ranging from 5-15 years depending on the product 
                    type and application. This covers manufacturing defects, coating durability, 
                    and structural integrity.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Can you customize products for specific needs?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Absolutely! We specialize in build-to-order solutions. Our engineering team can 
                    customize dimensions, finishes, colors, and performance characteristics to meet 
                    your specific architectural requirements.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Take the first step towards transforming your architectural vision. 
              Our team is excited to collaborate with you on creating exceptional spaces.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-primary">
                Call Now: +91 (XXX) XXX-XXXX
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;