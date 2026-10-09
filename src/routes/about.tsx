import { createFileRoute } from "@tanstack/react-router";
import { BadgeCheck, Heart, Phone, Quote, ShieldCheck, Sparkles } from "lucide-react";
import { BUSINESS_INFO, PHONE_HREF } from "../lib/business-data";
import { BUSINESS_ID, breadcrumbJsonLd, pageHead } from "../lib/seo";
import { absoluteUrl } from "../lib/site-config";
import {
  AreaLinkList,
  Breadcrumbs,
  DecorSparkles,
  QuoteSection,
  ServiceLinkGrid,
} from "../components/SeoSections";

const ABOUT_IMAGE = "/images/commercial-cleaning-new-orleans.jpg";

export const Route = createFileRoute("/about")({
  head: () =>
    pageHead({
      title: "About Us | Charismagick Cleaning, New Orleans",
      description:
        "Meet Charismagick Cleaning: a New Orleans cleaning company serving New Orleans, Metairie and Gretna with friendly, detail-focused care.",
      path: "/about",
      image: ABOUT_IMAGE,
      imageAlt: "Clean, organized space",
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@type": "AboutPage",
          url: absoluteUrl("/about"),
          name: "About Charismagick Cleaning",
          about: { "@id": BUSINESS_ID },
        },
        breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ]),
      ],
    }),
  component: AboutPage,
});

const VALUES = [
  {
    icon: Heart,
    title: "Respect for every space",
    text: "We care for every home and business with respect, treating your space like our own.",
  },
  {
    icon: BadgeCheck,
    title: "Detail, every visit",
    text: "We work room by room with a consistent checklist, so nothing gets skipped.",
  },
  {
    icon: ShieldCheck,
    title: "Trust & reliability",
    text: "Clear communication and transparent pricing, with no hidden fees.",
  },
  {
    icon: Sparkles,
    title: "A little charisma",
    text: "Friendly, personal service led directly by the owner, not a rotating cast of strangers.",
  },
];

function AboutPage() {
  return (
    <div className="py-10 md:py-16 space-y-16 md:space-y-20">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "About" }]} />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <p className="eyebrow flex items-center gap-2 text-accent text-sm">
              <Sparkles className="w-3.5 h-3.5" />
              Our story
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight">
              About Charismagick Cleaning
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              We're a New Orleans cleaning company serving New Orleans, Metairie and Gretna. Homes,
              apartments, offices, restaurants and bars: whatever the space, we leave it clean,
              fresh and organized.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href="#quote-form"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-accent text-accent-foreground font-bold rounded-full shadow-lg shadow-black/10"
              >
                Get a Free Quote
              </a>
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-secondary text-foreground font-bold rounded-full hover:text-primary"
              >
                <Phone className="w-4 h-4 text-accent" /> Call {BUSINESS_INFO.phone}
              </a>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden ring-4 ring-accent/30 shadow-xl aspect-4/3">
              <img
                src={ABOUT_IMAGE}
                alt="Clean, organized commercial space"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-primary text-primary-foreground py-16">
        <DecorSparkles className="opacity-50" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">
            Why "Charismagick"?
          </h2>
          <figure className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 sm:p-10 rounded-2xl space-y-5">
            <Quote className="w-8 h-8 text-accent" />
            <blockquote className="space-y-4 text-base sm:text-lg text-primary-foreground/90 leading-relaxed">
              <p>
                Cleaning is a personal thing — you're letting someone into your home or your
                business. We bring a little charisma and a little magick to every job: friendly,
                reliable, detail-focused cleaning that makes your space feel like it's taken care
                of, because it is.
              </p>
              <p>
                We care for every home, apartment, office, restaurant and bar with respect, leaving
                every space clean and organized.
              </p>
            </blockquote>
            <figcaption className="pt-4 border-t border-white/10 text-sm">
              <p className="font-bold text-white">{BUSINESS_INFO.owner}</p>
              <p className="text-primary-foreground/70">Owner, {BUSINESS_INFO.name}</p>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 mb-10">
          <p className="eyebrow flex items-center justify-center gap-2 text-accent text-sm">
            <Sparkles className="w-3.5 h-3.5" />
            What we stand for
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Our Values</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {VALUES.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="bg-card p-6 rounded-2xl border border-border shadow-xs space-y-3"
            >
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                <Icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-bold text-foreground">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <ServiceLinkGrid title="How We Can Help" />

      <AreaLinkList title="Where We Clean" />

      <QuoteSection heading="Let's Make Your Space Shine" />
    </div>
  );
}
