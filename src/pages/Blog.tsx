import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowRight,
  Leaf,
  Building2,
  Lightbulb,
  TrendingUp,
  BookOpen,
  Search
} from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const categories = [
    { name: "Sustainability", count: 12, color: "bg-success/10 text-success" },
    { name: "Innovation", count: 8, color: "bg-accent/10 text-accent" },
    { name: "Architecture", count: 15, color: "bg-primary/10 text-primary" },
    { name: "Technology", count: 10, color: "bg-secondary text-secondary-foreground" },
    { name: "Industry Insights", count: 6, color: "bg-muted text-muted-foreground" }
  ];

  const featuredPosts = [
    {
      id: 1,
      title: "The Future of Sustainable Architecture: Metal Ceilings Leading the Green Revolution",
      excerpt: "Exploring how innovative metal ceiling technologies are driving sustainable building practices and contributing to India's green building initiatives.",
      author: "Dr. Rajesh Kumar",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "Sustainability",
      image: "sustainability",
      featured: true,
      tags: ["Green Building", "Sustainability", "Innovation"]
    },
    {
      id: 2, 
      title: "Acoustic Excellence in Modern Office Design: Beyond Aesthetics",
      excerpt: "How advanced acoustic ceiling solutions are transforming workplace productivity and employee well-being in corporate environments.",
      author: "Priya Sharma",
      date: "2024-01-10", 
      readTime: "6 min read",
      category: "Architecture",
      image: "acoustics",
      featured: false,
      tags: ["Acoustics", "Office Design", "Workplace"]
    },
    {
      id: 3,
      title: "Digital Manufacturing Revolution: Industry 4.0 in Metal Fabrication",
      excerpt: "Examining the integration of IoT, AI, and automation technologies in precision metal manufacturing processes.",
      author: "Amit Patel",
      date: "2024-01-05",
      readTime: "10 min read", 
      category: "Technology",
      image: "manufacturing",
      featured: false,
      tags: ["Industry 4.0", "Manufacturing", "Automation"]
    }
  ];

  const recentPosts = [
    {
      id: 4,
      title: "Fire Safety Standards in Commercial Ceiling Systems: A Comprehensive Guide",
      excerpt: "Understanding the latest fire safety regulations and compliance requirements for commercial architectural installations.",
      author: "Safety Team",
      date: "2023-12-28",
      readTime: "7 min read",
      category: "Industry Insights"
    },
    {
      id: 5,
      title: "Antimicrobial Coatings: The Science Behind Hygienic Architecture",
      excerpt: "Deep dive into the technology and applications of antimicrobial surface treatments in healthcare and commercial spaces.",
      author: "R&D Team", 
      date: "2023-12-20",
      readTime: "9 min read",
      category: "Innovation"
    },
    {
      id: 6,
      title: "Cost Optimization Strategies for Large-Scale Ceiling Installations",
      excerpt: "Proven approaches to achieving cost efficiency without compromising quality in enterprise-level architectural projects.",
      author: "Project Management",
      date: "2023-12-15",
      readTime: "5 min read",
      category: "Industry Insights"
    },
    {
      id: 7,
      title: "Material Science Advances in Aluminum Alloy Applications",
      excerpt: "Latest developments in aluminum alloy technology and their implications for architectural metalwork applications.",
      author: "Materials Team",
      date: "2023-12-10", 
      readTime: "8 min read",
      category: "Technology"
    },
    {
      id: 8,
      title: "Biophilic Design Integration with Metal Ceiling Systems",
      excerpt: "Exploring ways to incorporate natural elements and biophilic principles in contemporary metal ceiling designs.",
      author: "Design Team",
      date: "2023-12-05",
      readTime: "6 min read",
      category: "Architecture"
    }
  ];

  const trendingTopics = [
    "Sustainable Manufacturing",
    "Acoustic Performance",
    "Fire Safety Compliance", 
    "Green Building Standards",
    "Digital Transformation",
    "Material Innovation"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Industry Insights & Innovation
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Stay ahead with the latest trends, technologies, and best practices 
              in architectural metalwork and sustainable building solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input 
                  type="text" 
                  placeholder="Search articles..."
                  className="pl-10 pr-4 py-3 bg-white rounded-lg text-primary border-0 focus:ring-2 focus:ring-accent w-full sm:w-80"
                />
              </div>
              <Button variant="secondary" size="lg">
                <BookOpen className="mr-2 h-5 w-5" />
                Browse All Articles
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant="ghost"
                className={`${category.color} hover:opacity-80 transition-opacity`}
              >
                {category.name} ({category.count})
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredPosts.filter(post => post.featured).map((post) => (
        <section key={post.id} className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="overflow-hidden shadow-strong">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative bg-gradient-to-br from-primary/10 to-accent/10 p-12 flex items-center justify-center">
                  <div className="text-center">
                    <Leaf className="h-24 w-24 mx-auto mb-6 text-success" />
                    <Badge className="bg-success/20 text-success">Featured Article</Badge>
                  </div>
                </div>
                <div className="p-8 lg:p-12">
                  <div className="flex items-center space-x-4 mb-4">
                    <Badge variant="outline">{post.category}</Badge>
                    {post.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-4 leading-tight">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                  <Button size="lg" className="bg-gradient-primary">
                    Read Full Article
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>
      ))}

      {/* Recent Articles Grid */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-primary">Recent Articles</h2>
                <Button variant="outline">
                  View All
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              
              <div className="space-y-6">
                {recentPosts.map((post) => (
                  <Card key={post.id} className="hover:shadow-medium transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <Badge variant="outline">{post.category}</Badge>
                        <div className="text-sm text-muted-foreground">
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-primary mb-3 hover:text-accent transition-colors">
                        <Link to={`/blog/${post.id}`}>{post.title}</Link>
                      </h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <User className="h-4 w-4" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          Read More
                          <ArrowRight className="ml-1 h-3 w-3" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Trending Topics */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5 text-accent" />
                    <span>Trending Topics</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {trendingTopics.map((topic, index) => (
                      <Button 
                        key={index}
                        variant="ghost" 
                        className="w-full justify-start text-left h-auto p-3 hover:bg-accent/10"
                      >
                        <span className="text-sm">{topic}</span>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter Signup */}
              <Card className="bg-gradient-primary text-primary-foreground">
                <CardContent className="p-6 text-center">
                  <Lightbulb className="h-12 w-12 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-3">
                    Stay Updated with Industry Insights
                  </h3>
                  <p className="text-sm opacity-90 mb-4">
                    Get the latest articles, trends, and innovations delivered to your inbox.
                  </p>
                  <div className="space-y-3">
                    <input 
                      type="email" 
                      placeholder="Enter your email"
                      className="w-full px-3 py-2 rounded text-primary bg-primary-foreground border-0"
                    />
                    <Button variant="secondary" className="w-full">
                      Subscribe Now
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Links */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Links</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Link to="/products" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                      Product Specifications
                    </Link>
                    <Link to="/excellence" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                      Quality Standards
                    </Link>
                    <Link to="/projects" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                      Case Studies
                    </Link>
                    <Link to="/contact" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                      Technical Support
                    </Link>
                  </div>
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
            <Building2 className="h-16 w-16 mx-auto mb-6 text-accent" />
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Implement These Innovations?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Transform insights into action. Connect with our experts to discuss how 
              the latest innovations can benefit your architectural projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="secondary" size="lg">
                <Link to="/contact">
                  Consult Our Experts
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

export default Blog;