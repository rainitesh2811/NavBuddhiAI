import { GraduationCap, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-foreground text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-8 h-8 text-primary" />
              <span className="text-xl">DigitalSkillSathi</span>
            </div>
            <p className="text-white/70 leading-relaxed">
              Empowering learners worldwide with quality education and expert-led courses to achieve their dreams.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/70 hover:text-primary transition-colors">About Us</a>
              </li>
              <li>
                <a href="#courses" className="text-white/70 hover:text-primary transition-colors">All Courses</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-primary transition-colors">Blog</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-primary transition-colors">Success Stories</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg mb-4">Categories</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/70 hover:text-primary transition-colors">Web Development</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-primary transition-colors">Digital Marketing</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-primary transition-colors">Data Science</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-primary transition-colors">Business & Finance</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-primary transition-colors">Design & Creativity</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div id="contact">
            <h3 className="text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-white/70">123 Education Street, Learning City, LC 12345</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-white/70">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-white/70">info@digitalskillsathi.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-white/10 pt-12 mb-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl mb-3">Subscribe to Our Newsletter</h3>
            <p className="text-white/70 mb-6">Get the latest courses and updates delivered to your inbox</p>
            <div className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 outline-none focus:border-primary"
              />
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <p>© 2025 EduLearn. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
