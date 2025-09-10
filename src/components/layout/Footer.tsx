import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-lg">ST</span>
              </div>
              <div>
                <span className="text-xl font-bold">SUPERTECH</span>
                <div className="text-sm opacity-80 leading-none">Metal Ceilings</div>
              </div>
            </div>
            <p className="text-sm opacity-80 mb-4">
              Driving innovation in architectural metalwork for over 25 years. 
              Precision engineered solutions for modern infrastructure.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="sm" className="p-2 text-primary-foreground hover:text-accent">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 text-primary-foreground hover:text-accent">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 text-primary-foreground hover:text-accent">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 text-primary-foreground hover:text-accent">
                <Instagram className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/products" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">Products</Link></li>
              <li><Link to="/excellence" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">Excellence</Link></li>
              <li><Link to="/projects" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">Projects</Link></li>
              <li><Link to="/blog" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-sm">
              <li><span className="opacity-80">Metal Ceilings</span></li>
              <li><span className="opacity-80">Exterior Louvers</span></li>
              <li><span className="opacity-80">Exterior Cladding</span></li>
              <li><span className="opacity-80">"T" Grid Systems</span></li>
              <li><span className="opacity-80">Raised Floor Systems</span></li>
              <li><span className="opacity-80">Cubicle Systems</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 opacity-60" />
                <span className="opacity-80">Gujarat, India</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 opacity-60" />
                <span className="opacity-80">+91 (XXX) XXX-XXXX</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 opacity-60" />
                <span className="opacity-80">info@supertechmetal.in</span>
              </div>
            </div>
            <div className="mt-4">
              <Button variant="secondary" size="sm" className="w-full">
                Get Quote
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-light/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm opacity-80">
            <div>
              © {new Date().getFullYear()} SUPERTECH Metal Ceilings. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="#" className="hover:opacity-100 transition-opacity">Privacy Policy</Link>
              <Link to="#" className="hover:opacity-100 transition-opacity">Terms of Service</Link>
              <Link to="#" className="hover:opacity-100 transition-opacity">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;