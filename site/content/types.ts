/**
 * Content model for the SALISCO marketing site.
 *
 * Every string that reaches the screen lives in `content/en.ts` and
 * `content/ar.ts`. Components never hard-code copy, so a locale is a complete,
 * independently reviewable artefact — which matters here because the Arabic is
 * a translation of an English source and needs a native pass before launch.
 */

export type CtaVariant = "primary" | "secondary" | "ghost";

export interface Cta {
  label: string;
  /** Locale-agnostic path, e.g. "/pricing". Prefixed at render time. */
  href: string;
  variant?: CtaVariant;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Feature {
  title: string;
  copy: string;
  /** Glyph from the prototype's icon set. */
  icon?: string;
  /** Orange rather than blue icon tile. */
  accent?: boolean;
}

export interface NumberedItem {
  title: string;
  copy: string;
}

export interface Hero {
  eyebrow?: string;
  title: string;
  /** Rendered with the orange gradient, appended to `title`. */
  titleAccent?: string;
  copy: string;
  ctas?: Cta[];
  /** Small mono line under the CTAs, e.g. "Faster service · Clearer choices". */
  trustLine?: string[];
}

export interface SectionIntro {
  eyebrow?: string;
  title: string;
  copy?: string;
}

export interface SolutionCard {
  /** "01", "02" … */
  index: string;
  /** Mono label beside the index, e.g. "OWNERS". */
  kicker: string;
  title: string;
  copy: string;
  cta: string;
  href: string;
  tone: "blue" | "orange" | "silver";
}

export interface PricingTier {
  tierLabel: string;
  name: string;
  copy: string;
  features: string[];
  cta: Cta;
  popular?: boolean;
  popularLabel?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FormField {
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "select" | "textarea" | "checkbox";
  options?: string[];
  required?: boolean;
}

export interface BulletSection {
  title: string;
  items: string[];
}

/* ------------------------------------------------------------------ pages */

export interface HomeContent {
  meta: PageMeta;
  hero: Hero;
  /** Copy inside the three floating dashboard cards in the hero visual. */
  heroVisual: {
    booking: {
      reference: string;
      status: string;
      title: string;
      subtitle: string;
      step: string;
      cost: string;
    };
    fleet: {
      label: string;
      activeValue: string;
      activeLabel: string;
      maintenanceValue: string;
      maintenanceLabel: string;
    };
    part: {
      name: string;
      sku: string;
      price: string;
      stock: string;
    };
  };
  valueProps: SectionIntro & { cards: Feature[] };
  solutions: SectionIntro & { cards: SolutionCard[] };
  howItWorks: SectionIntro & { steps: NumberedItem[] };
  why: SectionIntro & { cta: Cta; reasons: string[] };
  pricing: SectionIntro & { tiers: PricingTier[] };
  mainCta: { title: string; copy: string; ctas: Cta[] };
}

export interface PageMeta {
  title: string;
  description: string;
}

/** Shape shared by the audience/solution pages (owners, fleets, parts, …). */
export interface SolutionPageContent {
  meta: PageMeta;
  hero: Hero;
  features?: SectionIntro & { cards: Feature[] };
  /** One or more titled bullet groups, e.g. "For customers" / "For suppliers". */
  bulletGroups?: BulletSection[];
  outcome?: { title: string; copy: string };
  closingCta?: { title: string; copy?: string; ctas: Cta[] };
}

export interface AboutContent {
  meta: PageMeta;
  hero: Hero;
  story: { title: string; copy: string };
  vision: { title: string; copy: string };
  mission: { title: string; copy: string };
  values: SectionIntro & { cards: Feature[] };
  logoMeaning: { title: string; copy: string };
  closingCta: { title: string; copy?: string; ctas: Cta[] };
}

export interface PartnersContent {
  meta: PageMeta;
  hero: Hero;
  reasons: SectionIntro & { items: string[] };
  form: {
    title: string;
    copy: string;
    fields: FormField[];
    submit: string;
    success: string;
  };
}

export interface PricingPageContent {
  meta: PageMeta;
  hero: Hero;
  tiers: PricingTier[];
  note: string;
  faqLink: { label: string; href: string };
}

export interface FaqContent {
  meta: PageMeta;
  hero: Hero;
  items: FaqItem[];
  closingCta: { title: string; copy?: string; ctas: Cta[] };
}

export interface ContactContent {
  meta: PageMeta;
  hero: Hero;
  categories: Feature[];
  form: {
    title: string;
    fields: FormField[];
    consent: string;
    submit: string;
    success: string;
  };
}

export interface HelpContent {
  meta: PageMeta;
  hero: Hero;
  searchPlaceholder: string;
  categories: string[];
  closingCta: { title: string; copy?: string; ctas: Cta[] };
}

export interface BlogContent {
  meta: PageMeta;
  hero: Hero;
  categories: string[];
  comingSoonLabel: string;
  articles: { title: string; category: string }[];
}

export interface DownloadContent {
  meta: PageMeta;
  hero: Hero;
  storeButtons: { label: string; sublabel: string }[];
  qrCopy: string;
  availabilityNote: string;
}

export interface RegisterContent {
  meta: PageMeta;
  hero: Hero;
  accountTypesTitle: string;
  accountTypes: Feature[];
  start: { title: string; copy: string; cta: string; signInPrompt: string; signInCta: string; consent: string };
}

export interface LegalPageContent {
  meta: PageMeta;
  title: string;
  updated: string;
  intro: string;
  sections: { title: string; copy: string }[];
  reviewNotice: string;
}

/* ----------------------------------------------------------------- chrome */

export interface Dictionary {
  /** Applied to <html lang>. */
  locale: string;
  announcement: string;
  nav: {
    links: NavLink[];
    signIn: string;
    getStarted: string;
    menuOpen: string;
    menuClose: string;
    languageSwitchTitle: string;
  };
  footer: {
    description: string;
    groups: { title: string; links: NavLink[] }[];
    copyright: string;
    tagline: string;
    newsletter: {
      title: string;
      copy: string;
      placeholder: string;
      submit: string;
      success: string;
    };
  };
  common: {
    skipToContent: string;
    backToHome: string;
    demoNotice: string;
    formDemoNotice: string;
    requiredLabel: string;
    optionalLabel: string;
    selectPlaceholder: string;
  };
  home: HomeContent;
  owners: SolutionPageContent;
  serviceCenters: SolutionPageContent;
  spareParts: SolutionPageContent;
  fleets: SolutionPageContent;
  insurance: SolutionPageContent;
  business: SolutionPageContent;
  about: AboutContent;
  partners: PartnersContent;
  pricing: PricingPageContent;
  faq: FaqContent;
  contact: ContactContent;
  help: HelpContent;
  blog: BlogContent;
  download: DownloadContent;
  register: RegisterContent;
  legal: {
    terms: LegalPageContent;
    privacy: LegalPageContent;
    cookies: LegalPageContent;
    refunds: LegalPageContent;
  };
}
