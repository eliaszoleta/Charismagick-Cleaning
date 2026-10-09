import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  CheckCircle2,
  ClipboardList,
  Heart,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Tag,
} from "lucide-react";
import { pageHead, faqJsonLd } from "../lib/seo";
import { HOME_FAQS, servicePathForSpecialty, AREA_PAGES } from "../lib/seo-content";
import { FaqSection, ServiceImage, DecorSparkles } from "../components/SeoSections";
import { BUSINESS_INFO, CORE_SPECIALTIES, PHONE_HREF } from "../lib/business-data";
import { QuoteRequestForm } from "../components/QuoteRequestForm";
import { WorkShowcaseGallery } from "../components/WorkShowcaseGallery";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead({
      title: "Cleaning Services in New Orleans, Metairie & Gretna | Charismagick Cleaning",
      description:
        "House, apartment, commercial and restaurant/bar cleaning across New Orleans, Metairie and Gretna, LA. Friendly, detail-focused team. Free quote.",
      path: "/",
      jsonLd: [faqJsonLd(HOME_FAQS)],
    }),
  component: Index,
});

// Small tracked label with a sparkle glyph -- the site's eyebrow motif, used in place of a
// cursive script tagline.
function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="eyebrow flex items-center gap-2 text-accent text-xs sm:text-sm">
      <Sparkles className="w-3.5 h-3.5" />
      {children}
    </p>
  );
}

const TRUST_POINTS = [
  { icon: ShieldCheck, title: "Careful & Trusted", sub: "Treats your space with respect" },
  { icon: BadgeCheck, title: "Detail-Focused", sub: "Room by room, every visit" },
  { icon: Tag, title: "Upfront Pricing", sub: "No hidden fees" },
  { icon: MapPin, title: "Local to NOLA", sub: "New Orleans, Metairie & Gretna" },
];

const WHY_US = [
  {
    title: "Transparent, upfront pricing",
    text: "You get a clear quote before we start, with no hidden fees or surprise charges.",
  },
  {
    title: "Four specialties, one team",
    text: "House, apartment, commercial and restaurant/bar cleaning, all handled with the same care.",
  },
  {
    title: "Flexible scheduling",
    text: "Weekly, bi-weekly, monthly or one-time cleans that fit around your life or your business hours.",
  },
  {
    title: "Personally led",
    text: "Charisma brings hands-on attention to every job, not a rotating cast of strangers.",
  },
];

const STEPS = [
  {
    icon: ClipboardList,
    title: "Tell us about your space",
    text: "Fill out the quote form or give us a call. It takes about a minute.",
  },
  {
    icon: CalendarCheck,
    title: "Get your price & pick a time",
    text: "We send a clear, upfront quote and book a day that works for you.",
  },
  {
    icon: Heart,
    title: "Enjoy your clean space",
    text: "We leave every space clean and organized. You get your time back.",
  },
];

export function Index() {
  return (
    <div className="space-y-20 md:space-y-28">
      {/* Hero -- asymmetric split with a framed photo and a gold corner rule, instead of a
          floating-badge collage over a blob-rounded image. */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground pt-12 pb-20 md:pt-20 md:pb-28">
        <DecorSparkles className="opacity-60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <Eyebrow>House · Apartment · Commercial · Restaurant &amp; Bar</Eyebrow>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
              Cleaning with a Little Charisma, a Little Magick
            </h1>
            <p className="text-base sm:text-lg text-primary-foreground/80 max-w-xl leading-relaxed">
              <strong className="text-white">Charismagick Cleaning</strong> cleans homes,
              apartments, offices, restaurants and bars across New Orleans, Metairie and Gretna.
              Friendly, detail-focused and built around your schedule.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              <a
                href="#quote-section"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-bold rounded-full shadow-lg shadow-black/20 hover:-translate-y-0.5 transition-all"
              >
                Get a Free Quote <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white/10 text-white font-bold rounded-full border border-white/25 hover:bg-white/15 transition-colors"
              >
                <Phone className="w-4 h-4 text-accent" /> Call {BUSINESS_INFO.phone}
              </a>
            </div>

            <ul className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3">
              {TRUST_POINTS.map(({ icon: Icon, title, sub }) => (
                <li key={title} className="flex items-center gap-2.5">
                  <span className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-accent" />
                  </span>
                  <span className="leading-tight">
                    <span className="block text-sm font-bold text-white">{title}</span>
                    <span className="block text-[11px] text-primary-foreground/65">{sub}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="absolute -top-3 -left-3 right-6 bottom-6 rounded-2xl border-2 border-accent/50 pointer-events-none" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3.4] bg-secondary">
              <img
                src="/images/residential-home-new-orleans.jpg"
                alt="Bright, open kitchen and living area in a freshly cleaned New Orleans home"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      <WorkShowcaseGallery />

      {/* Services */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <Eyebrow>
            <span className="mx-auto">What we do</span>
          </Eyebrow>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Cleaning Services for Every Space
          </h2>
          <p className="text-muted-foreground">
            From homes to restaurants, one trusted team across New Orleans, Metairie and Gretna.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CORE_SPECIALTIES.map((item) => (
            <Link
              key={item.id}
              to={servicePathForSpecialty(item.id)}
              className="group bg-card rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col"
            >
              <div className="relative aspect-[16/11] overflow-hidden">
                <ServiceImage
                  src={item.image}
                  alt={item.imageAlt ?? item.title}
                  label={item.title}
                  slug={item.id}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-primary/90 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow">
                  {item.badge}
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col gap-2.5">
                <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.summary}</p>
                <span className="mt-auto pt-2 inline-flex items-center gap-1.5 text-xs font-bold text-primary">
                  Learn more{" "}
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Why us */}
      <section className="bg-primary text-primary-foreground py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 space-y-4">
            <Eyebrow>Why choose us</Eyebrow>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Detail-Focused Cleaning in Greater New Orleans
            </h2>
            <p className="text-primary-foreground/75 leading-relaxed">
              We treat every home and business with care and attention, so you get the same reliable
              result every time we come through the door.
            </p>
          </div>
          <ul className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {WHY_US.map((item) => (
              <li key={item.title} className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <CheckCircle2 className="w-6 h-6 text-accent mb-3" />
                <h3 className="font-bold text-white mb-1">{item.title}</h3>
                <p className="text-sm text-primary-foreground/70 leading-relaxed">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Quote */}
      <section id="quote-section" className="scroll-mt-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-4 space-y-5 lg:sticky lg:top-32">
            <Eyebrow>Get started</Eyebrow>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Get a Free Cleaning Quote
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Ready for affordable, professional cleaning in New Orleans, Metairie or Gretna? Fill
              out the form and we'll get back to you with a customized quote. No obligations, no
              hidden fees.
            </p>
            <div className="rounded-2xl bg-secondary p-6 space-y-3 text-sm">
              <a
                href={PHONE_HREF}
                className="flex items-center gap-3 font-bold text-foreground hover:text-primary"
              >
                <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                  <Phone className="w-5 h-5 text-accent" />
                </span>
                Call {BUSINESS_INFO.phone}
              </a>
              <p className="flex items-center gap-3 text-foreground">
                <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-accent" />
                </span>
                New Orleans, Metairie &amp; Gretna
              </p>
            </div>
          </div>
          <div className="lg:col-span-8">
            <QuoteRequestForm />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-10">
          <Eyebrow>
            <span className="mx-auto">Simple &amp; fast</span>
          </Eyebrow>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">How It Works</h2>
        </div>
        <ol className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STEPS.map(({ icon: Icon, title, text }, i) => (
            <li
              key={title}
              className="relative text-center bg-card border border-border rounded-2xl p-8 shadow-xs"
            >
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-accent text-accent-foreground font-bold flex items-center justify-center shadow">
                {i + 1}
              </span>
              <Icon className="w-10 h-10 text-primary mx-auto mb-4 mt-2" />
              <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Areas */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-primary text-primary-foreground p-8 sm:p-12">
          <DecorSparkles className="opacity-40" />
          <div className="relative max-w-2xl space-y-3 mb-8">
            <Eyebrow>Where we clean</Eyebrow>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Serving New Orleans, Metairie &amp; Gretna
            </h2>
            <p className="text-primary-foreground/75">
              Find cleaning services in your city. Don't see yours? Reach out and we'll let you know
              if we can reach you.
            </p>
          </div>
          <ul className="relative grid grid-cols-1 sm:grid-cols-3 gap-3">
            {AREA_PAGES.map((area) => (
              <li key={area.slug}>
                <Link
                  to="/service-areas/$slug"
                  params={{ slug: area.slug }}
                  className="flex items-center gap-2 bg-white/10 border border-white/15 rounded-xl px-4 py-3.5 font-bold text-sm text-white shadow-sm hover:bg-white/15 transition-all"
                >
                  <MapPin className="w-4 h-4 text-accent shrink-0" />
                  {area.city}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FaqSection faqs={HOME_FAQS} />
    </div>
  );
}
