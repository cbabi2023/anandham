import { BookOpen, Mail, Github, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <BookOpen size={24} style={{ color: "var(--primary)" }} />
              <span className="footer-logo-text">Anandham</span>
            </div>
            <p className="footer-description">
              A non-profit academic initiative dedicated to preserving, translating, and digitizing the life and works of Sree Narayana Guru for scholarly research and future generations.
            </p>
            <div className="footer-social">
              <a href="#" className="social-link" aria-label="Email">
                <Mail size={18} />
              </a>
              <a href="#" className="social-link" aria-label="GitHub">
                <Github size={18} />
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4 className="footer-heading">Project</h4>
              <ul className="footer-list">
                <li><a href="#" className="footer-link">About Us</a></li>
                <li><a href="#" className="footer-link">Methodology</a></li>
                <li><a href="#" className="footer-link">Team</a></li>
                <li><a href="#" className="footer-link">Partners</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-heading">Resources</h4>
              <ul className="footer-list">
                <li><a href="#" className="footer-link">Digital Library</a></li>
                <li><a href="#" className="footer-link">Research Archive</a></li>
                <li><a href="#" className="footer-link">Publications</a></li>
                <li><a href="#" className="footer-link">Academic Disclaimer</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-heading">Connect</h4>
              <ul className="footer-list">
                <li><a href="#" className="footer-link">Contact</a></li>
                <li><a href="#" className="footer-link">Contribute</a></li>
                <li><a href="#" className="footer-link">Newsletter</a></li>
                <li><a href="#" className="footer-link">Support</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-heading">Legal</h4>
              <ul className="footer-list">
                <li><a href="#" className="footer-link">Privacy Policy</a></li>
                <li><a href="#" className="footer-link">Terms of Service</a></li>
                <li><a href="#" className="footer-link">Copyright</a></li>
                <li><a href="#" className="footer-link">Accessibility</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              © {new Date().getFullYear()} Anandham Digital Library. All rights reserved.
            </p>
            <div className="footer-meta">
              <span className="footer-meta-text">Academic • Non-profit • Open Access</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
