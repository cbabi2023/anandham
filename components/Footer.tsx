import { BookOpen } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="py-12 bg-secondary text-secondary-foreground"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="container">
        <div
          className="grid gap-12 mb-12"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          }}
        >
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <BookOpen size={20} />
              <span className="font-semibold">Anandham</span>
            </div>
            <p className="text-sm text-muted-foreground" style={{ maxWidth: 300 }}>
              A non-profit academic initiative to preserve, translate, and
              digitize the life and works of Sree Narayana Guru for future
              generations.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="font-semibold text-sm">Project</h4>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
              About Us
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Methodology
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Team
            </a>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="font-semibold text-sm">Resources</h4>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Sources
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Digital Library
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Academic Disclaimer
            </a>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="font-semibold text-sm">Connect</h4>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Contact
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Contribute
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Newsletter
            </a>
          </div>
        </div>
        
        <div
          className="pt-8 border-t flex justify-between items-center flex-wrap gap-4"
          style={{ borderColor: "var(--border)" }}
        >
          <div className="flex items-center gap-2">
            <div className="pill-toggle" style={{ background: "var(--background)" }}>
              <button className="pill-toggle-item active">English</button>
              <button className="pill-toggle-item">Malayalam</button>
            </div>
          </div>
          <p className="text-xs text-muted-foreground">
            © 2024 Anandham. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground">
              Privacy Policy
            </a>
            <span className="text-xs text-muted-foreground">|</span>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
