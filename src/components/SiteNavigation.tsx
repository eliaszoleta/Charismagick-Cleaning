import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { BUSINESS_INFO, PHONE_HREF, SOCIAL_LINKS } from "../lib/business-data";
import { AREA_PAGES, SERVICE_PAGES } from "../lib/seo-content";
import { Mail, Menu, X, MapPin, Phone, ShieldCheck, Sparkles } from "lucide-react";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/service-areas", label: "Areas We Serve" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

// No logo file was supplied with the application -- a text wordmark avoids inventing a graphic
// mark the owner hasn't approved. Swap for an <img> once a real logo exists.
function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-accent">
        <Sparkles className="h-4.5 w-4.5" />
      </span>
      <span className="font-display text-lg sm:text-xl font-bold leading-none text-foreground">
        Charismagick
        <span className="block text-[11px] font-sans font-semibold tracking-[0.18em] uppercase text-accent">
          Cleaning
        </span>
      </span>
    </span>
  );
}

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-background/90 border-b border-border/80">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground text-[11px] sm:text-xs py-2 px-4 sm:px-8 flex justify-between items-center font-semibold">
        <div className="flex items-center gap-4 text-primary-foreground/85">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-accent" />
            New Orleans, Metairie &amp; Gretna
          </span>
          <span className="hidden md:flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-accent" />
            Friendly, detail-focused cleaning
          </span>
        </div>
        <a
          href={PHONE_HREF}
          className="flex items-center gap-1.5 hover:text-accent transition-colors"
        >
          <Phone className="w-3.5 h-3.5 text-accent" />
          <span>Call {BUSINESS_INFO.phone}</span>
        </a>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 sm:h-24 flex items-center justify-between gap-4">
        <Link to="/" aria-label={`${BUSINESS_INFO.name} home`} className="h-16 sm:h-20 py-1">
          <Logo className="h-full" />
        </Link>

        <nav className="hidden lg:flex items-center gap-1 text-sm font-semibold">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{ exact: link.to === "/" }}
              activeProps={{ className: "bg-secondary text-accent" }}
              className="px-4 py-2 rounded-full text-foreground/80 hover:text-accent hover:bg-secondary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold rounded-full bg-accent text-accent-foreground hover:brightness-105 shadow-md shadow-accent/30 transition-all hover:-translate-y-0.5"
          >
            Get a Free Quote
          </Link>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2.5 rounded-full bg-secondary text-foreground hover:text-accent"
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-background border-b border-border px-6 pt-2 pb-6 space-y-4 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col font-semibold text-base">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileMenuOpen(false)}
                className="py-3 border-b border-border/60 text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <a
              href={PHONE_HREF}
              className="w-full text-center py-3 bg-secondary text-foreground rounded-full font-bold flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-accent" />
              Call {BUSINESS_INFO.phone}
            </a>
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 bg-accent text-accent-foreground rounded-full font-bold shadow-md"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-10 rounded-t-[2.5rem] mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          <div className="space-y-4">
            <Logo className="[&_span]:text-white [&>span>span:last-child]:text-accent" />
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              {BUSINESS_INFO.tagline}. House, apartment, commercial and restaurant/bar cleaning
              across New Orleans, Metairie and Gretna.
            </p>
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs">Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/75">
              {SERVICE_PAGES.map((page) => (
                <li key={page.slug}>
                  <Link
                    to="/services/$slug"
                    params={{ slug: page.slug }}
                    className="hover:text-accent transition-colors"
                  >
                    {page.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs">
              Areas We Serve
            </h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-primary-foreground/75">
              {AREA_PAGES.map((area) => (
                <li key={area.slug}>
                  <Link
                    to="/service-areas/$slug"
                    params={{ slug: area.slug }}
                    className="hover:text-accent transition-colors"
                  >
                    {area.city}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs">Contact</h4>
            <div className="space-y-3 text-sm text-primary-foreground/85">
              <a
                href={PHONE_HREF}
                className="flex items-center gap-2.5 hover:text-accent font-semibold"
              >
                <Phone className="w-4 h-4 text-accent shrink-0" />
                Call {BUSINESS_INFO.phone}
              </a>
              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="flex items-center gap-2.5 hover:text-accent break-all"
              >
                <Mail className="w-4 h-4 text-accent shrink-0" />
                {BUSINESS_INFO.email}
              </a>
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>
                  {BUSINESS_INFO.address}, {BUSINESS_INFO.addressLine2}
                  <br />
                  Serving New Orleans, Metairie &amp; Gretna
                </span>
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-block text-center py-3 px-6 bg-accent text-accent-foreground font-bold rounded-full text-sm shadow hover:brightness-105"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-primary-foreground/60 gap-3">
          <p>
            © {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.
          </p>
          <p>House, apartment, commercial &amp; restaurant/bar cleaning in Greater New Orleans</p>
        </div>
      </div>
    </footer>
  );
}
