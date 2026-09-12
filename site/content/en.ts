import type { Dictionary } from "./types";

/**
 * English source copy. Taken from `project/uploads/SALISCO_WEBSITE_CONTENT_EN.md`
 * and, for the homepage, from the approved prototype `design/Salisco.dc.html`
 * (the prototype wins where the two differ — it is the signed-off wording).
 */
export const en: Dictionary = {
  locale: "en",

  announcement:
    "Coming soon — a new digital experience that brings vehicle services and automotive business operations together.",

  nav: {
    links: [
      { label: "Vehicle Owners", href: "/owners" },
      { label: "Service Centers", href: "/service-centers" },
      { label: "Spare Parts", href: "/spare-parts" },
      { label: "Fleets", href: "/fleets" },
      { label: "Business", href: "/business" },
      { label: "About", href: "/about" },
    ],
    signIn: "Sign In",
    getStarted: "Get Started",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    languageSwitchTitle: "Switch to Arabic",
  },

  footer: {
    description:
      "An integrated digital platform created to simplify automotive services and help individuals and businesses manage their needs with greater efficiency and confidence.",
    groups: [
      {
        title: "SOLUTIONS",
        links: [
          { label: "Vehicle Owners", href: "/owners" },
          { label: "Service Centers", href: "/service-centers" },
          { label: "Spare Parts", href: "/spare-parts" },
          { label: "Fleets", href: "/fleets" },
          { label: "Business Solutions", href: "/business" },
        ],
      },
      {
        title: "COMPANY",
        links: [
          { label: "About", href: "/about" },
          { label: "Partners", href: "/partners" },
          { label: "Pricing", href: "/pricing" },
          { label: "Blog", href: "/blog" },
          { label: "Contact", href: "/contact" },
        ],
      },
      {
        title: "SUPPORT",
        links: [
          { label: "Help Center", href: "/help" },
          { label: "FAQs", href: "/faq" },
          { label: "Download the App", href: "/download" },
        ],
      },
      {
        title: "LEGAL",
        links: [
          { label: "Terms", href: "/legal/terms" },
          { label: "Privacy", href: "/legal/privacy" },
          { label: "Cookies", href: "/legal/cookies" },
          { label: "Refunds", href: "/legal/refunds" },
        ],
      },
    ],
    copyright: "© 2026 SALISCO. All rights reserved.",
    tagline: "Driving the future of automotive services.",
    newsletter: {
      title: "Stay ahead with the latest automotive updates",
      copy: "Subscribe for SALISCO news, vehicle-care guidance, service updates, and selected offers.",
      placeholder: "Enter your email address",
      submit: "Subscribe",
      success: "You are subscribed. Welcome to the SALISCO community.",
    },
  },

  common: {
    skipToContent: "Skip to content",
    backToHome: "Back to home",
    demoNotice: "This is a pre-launch site. Product sign-in is not yet available.",
    formDemoNotice:
      "This form is not connected to a backend yet — submissions are not sent or stored.",
    requiredLabel: "required",
    optionalLabel: "optional",
    selectPlaceholder: "Select an option",
  },

  home: {
    meta: {
      title: "SALISCO | Integrated Automotive Services and Business Solutions",
      description:
        "Discover SALISCO, the digital platform bringing vehicle services, maintenance, spare parts, workshop operations, and fleet management into one reliable experience.",
    },
    hero: {
      eyebrow: "THE AUTOMOTIVE WORLD, ALL IN ONE PLATFORM",
      title: "Everything your vehicle and business need—",
      titleAccent: "in one platform",
      copy: "SALISCO connects vehicle owners with service centers, spare-parts suppliers, insurance providers, and fleet operators through one unified digital experience. Book, purchase, track, and manage every step with greater confidence and clarity.",
      ctas: [
        { label: "Get Started", href: "/register", variant: "primary" },
        { label: "Explore Business Solutions", href: "/business", variant: "secondary" },
        { label: "Download the App", href: "/download", variant: "ghost" },
      ],
      trustLine: ["Faster service", "Clearer choices", "Better decisions"],
    },
    heroVisual: {
      booking: {
        reference: "BOOKING #A-2841",
        status: "In Progress",
        title: "Full-service maintenance",
        subtitle: "Toyota Camry · 2022 · 42,180 km",
        step: "Step 3 of 5",
        cost: "Est. cost: SAR 640",
      },
      fleet: {
        label: "FLEET OVERVIEW · TODAY",
        activeValue: "128",
        activeLabel: "Active vehicles",
        maintenanceValue: "7",
        maintenanceLabel: "In maintenance",
      },
      part: {
        name: "Brake Pad Set — Front",
        sku: "SKU · BP-04-F218",
        price: "SAR 245",
        stock: "In stock",
      },
    },
    valueProps: {
      eyebrow: "— WHY SALISCO",
      title: "Automotive services, made simpler",
      copy: "Instead of dealing with disconnected providers and systems, SALISCO gives you one place to manage your vehicle needs or business operations—with current information, continuous updates, and an experience designed for the Saudi market.",
      cards: [
        {
          icon: "◈",
          title: "Everything in one place",
          copy: "Book maintenance, request spare parts, track vehicles, and access supporting services from one account.",
        },
        {
          icon: "✓",
          title: "Clarity and trust",
          copy: "Review available service details, pricing, and status before making a decision.",
        },
        {
          icon: "⚡",
          title: "A faster digital experience",
          copy: "Complete tasks online and reduce unnecessary calls, paperwork, and manual follow-ups.",
          accent: true,
        },
        {
          icon: "◉",
          title: "Individuals & businesses",
          copy: "A flexible experience for vehicle owners, workshops, parts suppliers, and fleet managers.",
        },
      ],
    },
    solutions: {
      eyebrow: "— SOLUTIONS",
      title: "Specialized solutions for every part of the automotive ecosystem",
      cards: [
        {
          index: "01",
          kicker: "OWNERS",
          title: "For Vehicle Owners",
          copy: "Create a digital vehicle profile, book services, follow maintenance progress, request parts, and keep service records and invoices organized.",
          cta: "Explore Owner Services",
          href: "/owners",
          tone: "blue",
        },
        {
          index: "02",
          kicker: "WORKSHOPS",
          title: "Service Centers & Workshops",
          copy: "Manage appointments, work orders, technicians, inventory, customers, and invoices from one operational dashboard.",
          cta: "Grow Your Service Center",
          href: "/service-centers",
          tone: "blue",
        },
        {
          index: "03",
          kicker: "SPARE PARTS",
          title: "Spare-Parts Stores & Suppliers",
          copy: "Manage products, orders, inventory, pricing, and customers while gaining access to new sales opportunities.",
          cta: "Start Selling",
          href: "/spare-parts",
          tone: "orange",
        },
        {
          index: "04",
          kicker: "FLEETS",
          title: "Fleet Operators",
          copy: "Monitor vehicles, maintenance, costs, and renewals with operational insights that help reduce downtime and unnecessary spending.",
          cta: "Explore Fleet Management",
          href: "/fleets",
          tone: "blue",
        },
        {
          index: "05",
          kicker: "INSURANCE",
          title: "Insurance & Supporting Services",
          copy: "Use digital channels to connect with customers and service providers and accelerate requests and follow-up.",
          cta: "Become a Partner",
          href: "/insurance",
          tone: "blue",
        },
        {
          index: "06",
          kicker: "ENTERPRISE",
          title: "Business Solutions",
          copy: "One system for customers, sales, inventory, invoices, and reports—without the complexity of traditional enterprise systems.",
          cta: "Talk to Solutions Team",
          href: "/business",
          tone: "silver",
        },
      ],
    },
    howItWorks: {
      eyebrow: "— HOW IT WORKS",
      title: "Five steps from account to invoice",
      steps: [
        {
          title: "Create your account",
          copy: "Select your account type and enter your essential information.",
        },
        {
          title: "Add vehicle or business",
          copy: "Register vehicles, branches, services, or company details.",
        },
        {
          title: "Choose a service",
          copy: "Review suitable options and submit a request or book an appointment.",
        },
        {
          title: "Track every step",
          copy: "Receive updates and monitor status, approvals, and expected costs.",
        },
        {
          title: "Keep your records",
          copy: "Access services, invoices, documents, and reports whenever needed.",
        },
      ],
    },
    why: {
      eyebrow: "— WHY SALISCO",
      title: "Built for the Saudi automotive market",
      copy: "Arabic-first, right-to-left, with the roles, permissions, and integrations that actual operations need.",
      cta: { label: "Request a Demo", href: "/contact", variant: "primary" },
      reasons: [
        "An Arabic-first platform designed for the Saudi market.",
        "Full Arabic and right-to-left interface support.",
        "Access through web and supported mobile devices.",
        "Multiple users, roles, and permissions for business teams.",
        "Clear dashboards and operational reports.",
        "Scalable architecture and service-provider integrations.",
        "Strong focus on privacy and information protection.",
      ],
    },
    pricing: {
      eyebrow: "— PLANS",
      title: "Flexible plans for every stage of growth",
      copy: "Choose the plan that matches your organization's size and operating needs. Modules, branches, and advanced services may be added based on the final agreement.",
      tiers: [
        {
          tierLabel: "TIER 01",
          name: "Essential",
          copy: "For small businesses beginning their digital transformation.",
          features: [
            "Customer management",
            "Vehicles & bookings",
            "Work orders",
            "Basic invoices",
          ],
          cta: { label: "Get Started", href: "/register", variant: "secondary" },
        },
        {
          tierLabel: "TIER 02",
          name: "Professional",
          copy: "For growing businesses requiring broader control and visibility.",
          features: [
            "Everything in Essential",
            "Inventory management",
            "Reports & analytics",
            "Permissions & team management",
          ],
          cta: { label: "Request Pricing", href: "/contact", variant: "primary" },
          popular: true,
          popularLabel: "POPULAR",
        },
        {
          tierLabel: "TIER 03",
          name: "Enterprise",
          copy: "For networks, fleets, and multi-branch organizations with specialized requirements.",
          features: [
            "Tailored configuration",
            "Integrations & APIs",
            "Advanced permissions",
            "Agreed support levels",
          ],
          cta: { label: "Contact Sales", href: "/contact", variant: "secondary" },
        },
      ],
    },
    mainCta: {
      title: "Ready for a smarter automotive experience?",
      copy: "Whether you own one vehicle or manage hundreds, SALISCO gives you the tools to make faster decisions, improve service quality, and operate more efficiently.",
      ctas: [
        { label: "Create Your Account", href: "/register", variant: "primary" },
        { label: "Request a Demo", href: "/contact", variant: "secondary" },
      ],
    },
  },

  owners: {
    meta: {
      title: "Vehicle Owner Services | SALISCO",
      description:
        "Manage your vehicle from one place — book maintenance, request spare parts, review service history, monitor expenses, and receive reminders for important dates.",
    },
    hero: {
      eyebrow: "01 · FOR VEHICLE OWNERS",
      title: "Your vehicle, with every detail ",
      titleAccent: "within reach",
      copy: "Manage your vehicle from one place. Book maintenance, request spare parts, review service history, monitor expenses, and receive reminders for important dates.",
      ctas: [
        { label: "Add Your Vehicle", href: "/register", variant: "primary" },
        { label: "Download the App", href: "/download", variant: "secondary" },
      ],
    },
    features: {
      eyebrow: "— OWNER SERVICES",
      title: "Everything your vehicle needs, in one profile",
      cards: [
        {
          icon: "◈",
          title: "Digital Vehicle Profile",
          copy: "Keep vehicle data, documents, service history, and invoices together in one organized profile.",
        },
        {
          icon: "◷",
          title: "Maintenance Booking",
          copy: "Find an appropriate service, select a time, and submit your booking online.",
        },
        {
          icon: "◉",
          title: "Live Service Tracking",
          copy: "See what has been completed, what requires approval, and how the expected cost changes.",
          accent: true,
        },
        {
          icon: "⚙︎",
          title: "Spare-Parts Requests",
          copy: "Find parts suitable for your vehicle and compare available options before ordering.",
        },
        {
          icon: "◔",
          title: "Smart Reminders",
          copy: "Receive reminders for routine maintenance, insurance, inspection, and registration when available.",
        },
        {
          icon: "▤",
          title: "Expense and Service Records",
          copy: "Review maintenance history and vehicle costs to make better ownership decisions.",
        },
      ],
    },
    closingCta: {
      title: "Make managing your vehicle easier—from the first booking to the final invoice.",
      ctas: [
        { label: "Start Free", href: "/register", variant: "primary" },
        { label: "Browse Spare Parts", href: "/spare-parts", variant: "secondary" },
      ],
    },
  },

  serviceCenters: {
    meta: {
      title: "Service Center and Workshop Management System | SALISCO",
      description:
        "Manage bookings, work orders, technicians, inventory, invoices, and customer experience with SALISCO's digital workshop solutions.",
    },
    hero: {
      eyebrow: "02 · FOR SERVICE CENTERS & WORKSHOPS",
      title: "Run your workshop more efficiently. ",
      titleAccent: "Serve every customer better.",
      copy: "An integrated system that helps service centers organize appointments, work orders, technicians, spare parts, invoices, and customer relationships.",
      ctas: [
        { label: "Request a Demo", href: "/contact", variant: "primary" },
        { label: "Register Your Business", href: "/register", variant: "secondary" },
      ],
    },
    bulletGroups: [
      {
        title: "Capabilities",
        items: [
          "Receive bookings and manage appointment schedules.",
          "Create work orders and define required services.",
          "Assign tasks to technicians and monitor progress.",
          "Prepare estimates and obtain customer approval.",
          "Manage spare-parts inventory and low-stock alerts.",
          "Issue invoices and record payments.",
          "Maintain a complete history for every customer and vehicle.",
          "Track sales, productivity, delayed jobs, and service performance.",
          "Assign appropriate permissions to managers, service advisors, technicians, and accountants.",
        ],
      },
    ],
    outcome: {
      title: "The outcome",
      copy: "Less time spent on administration, fewer operational errors, better business visibility, and a more professional customer experience.",
    },
    closingCta: {
      title: "See it running on your own workflow",
      copy: "Our team can walk through appointments, work orders, and invoicing with your branch setup.",
      ctas: [
        { label: "Request a Demo", href: "/contact", variant: "primary" },
        { label: "Compare Plans", href: "/pricing", variant: "secondary" },
      ],
    },
  },

  spareParts: {
    meta: {
      title: "Automotive Spare-Parts Platform for Buyers and Suppliers | SALISCO",
      description:
        "Find suitable spare parts and manage products, inventory, pricing, and orders through SALISCO.",
    },
    hero: {
      eyebrow: "03 · SPARE PARTS",
      title: "The right part, found faster and ",
      titleAccent: "with greater clarity",
      copy: "SALISCO helps customers and workshops find suitable spare-parts options while enabling stores and suppliers to manage catalogs, inventory, prices, and orders efficiently.",
      ctas: [
        { label: "Register as a Spare-Parts Supplier", href: "/register", variant: "primary" },
        { label: "Talk to Sales", href: "/contact", variant: "secondary" },
      ],
    },
    bulletGroups: [
      {
        title: "For customers and workshops",
        items: [
          "Search by vehicle, part number, or category.",
          "Review compatible alternatives where available.",
          "Compare pricing, availability, and preparation time.",
          "Submit requests and track order status.",
          "Store invoices and purchase history.",
        ],
      },
      {
        title: "For stores and suppliers",
        items: [
          "Build an organized digital product catalog.",
          "Manage prices, inventory, branches, and availability.",
          "Receive orders and update their status.",
          "Manage quotations and customer relationships.",
          "Review sales and best-selling product reports.",
          "Prepare for future inventory and accounting integrations.",
        ],
      },
    ],
    closingCta: {
      title: "List your catalog where the demand already is",
      copy: "Suppliers joining before launch help shape the catalog and fulfilment experience.",
      ctas: [
        { label: "Register as a Spare-Parts Supplier", href: "/register", variant: "primary" },
        { label: "Become a Partner", href: "/partners", variant: "secondary" },
      ],
    },
  },

  fleets: {
    meta: {
      title: "Vehicle Fleet Maintenance and Management System | SALISCO",
      description:
        "Monitor vehicles, maintenance, costs, and documents with clearer fleet-performance insights.",
    },
    hero: {
      eyebrow: "04 · FLEET MANAGEMENT",
      title: "Complete fleet visibility ",
      titleAccent: "from one dashboard",
      copy: "Track vehicle condition, maintenance, operating costs, and documents. Turn fleet information into practical decisions that reduce downtime and waste.",
      ctas: [
        { label: "Request a Fleet Demo", href: "/contact", variant: "primary" },
        { label: "Explore Business Solutions", href: "/business", variant: "secondary" },
      ],
    },
    bulletGroups: [
      {
        title: "Capabilities",
        items: [
          "Central vehicle and driver records.",
          "Preventive-maintenance schedules and reminders.",
          "Repair-order and cost tracking.",
          "Insurance, inspection, and document alerts.",
          "Per-vehicle cost and total-cost-of-ownership reports.",
          "Downtime monitoring and cause analysis.",
          "Branch, permission, and cost-center management.",
        ],
      },
    ],
    closingCta: {
      title: "Bring your fleet into one view",
      copy: "Walk through vehicle records, maintenance schedules, and cost reporting with our team.",
      ctas: [
        { label: "Request a Fleet Demo", href: "/contact", variant: "primary" },
        { label: "Compare Plans", href: "/pricing", variant: "secondary" },
      ],
    },
  },

  insurance: {
    meta: {
      title: "Insurance and Supporting Services | SALISCO",
      description:
        "SALISCO connects vehicle needs with insurance, roadside assistance, and claims services through a clear digital journey.",
    },
    hero: {
      eyebrow: "05 · INSURANCE & SUPPORTING SERVICES",
      title: "Connected services for ",
      titleAccent: "an easier customer journey",
      copy: "SALISCO is designed to connect vehicle needs with insurance, roadside assistance, and claims services through a clear digital journey, subject to service availability and active partnerships.",
      ctas: [{ label: "Join Our Partner Network", href: "/partners", variant: "primary" }],
    },
    bulletGroups: [
      {
        title: "Planned services",
        items: [
          "Request insurance quotations and compare essential information.",
          "Save policy details and renewal dates.",
          "Start an assistance request or claim and track its status.",
          "Connect customers with approved service providers.",
          "Exchange information and documents securely with user permission.",
        ],
      },
    ],
    outcome: {
      title: "Availability",
      copy: "These services are planned and depend on service availability and active partnerships. Available and planned services are identified separately at launch.",
    },
    closingCta: {
      title: "Partner with us before launch",
      copy: "Insurance and assistance providers joining early help define the integration and customer journey.",
      ctas: [
        { label: "Join Our Partner Network", href: "/partners", variant: "primary" },
        { label: "Contact Us", href: "/contact", variant: "secondary" },
      ],
    },
  },

  business: {
    meta: {
      title: "Business Solutions for Automotive Companies | SALISCO",
      description:
        "One system for customers, sales, inventory, invoices, and reports — without the complexity of traditional enterprise systems.",
    },
    hero: {
      eyebrow: "06 · BUSINESS SOLUTIONS",
      title: "One system to help ",
      titleAccent: "automotive businesses grow",
      copy: "SALISCO brings essential business operations together—from customers and sales to inventory, invoices, and reports—without the complexity of traditional enterprise systems.",
      ctas: [
        { label: "Talk to Our Solutions Team", href: "/contact", variant: "primary" },
        { label: "Compare Plans", href: "/pricing", variant: "secondary" },
      ],
    },
    bulletGroups: [
      {
        title: "Business modules",
        items: [
          "Customer and vehicle management.",
          "Bookings and work orders.",
          "Products, inventory, and purchasing.",
          "Quotations, sales, and invoices.",
          "Expenses and essential operating accounts.",
          "Employees, roles, and permissions.",
          "Reports and performance dashboards.",
          "Multi-branch management.",
          "Integrations and APIs.",
        ],
      },
    ],
    outcome: {
      title: "Operating multiple branches?",
      copy: "Do you operate multiple branches or require specialized workflows? Our team can assess your requirements and recommend the appropriate modules, integrations, and implementation plan.",
    },
    closingCta: {
      title: "Let's scope the right configuration",
      ctas: [
        { label: "Talk to Our Solutions Team", href: "/contact", variant: "primary" },
        { label: "View Pricing", href: "/pricing", variant: "secondary" },
      ],
    },
  },

  about: {
    meta: {
      title: "About SALISCO | Digital Infrastructure for Automotive Services",
      description:
        "SALISCO is building a digital ecosystem that connects the automotive sector and makes accessing, managing, and tracking services easier and more transparent.",
    },
    hero: {
      eyebrow: "— ABOUT SALISCO",
      title: "Building the digital infrastructure for ",
      titleAccent: "the future of automotive services",
      copy: "SALISCO is a modern automotive and digital-solutions brand built around speed, innovation, and trust.",
    },
    story: {
      title: "Our story",
      copy: "SALISCO was created to simplify an experience often fragmented across providers, systems, and manual processes. We are building a digital ecosystem that connects the automotive sector and makes accessing, managing, and tracking services easier and more transparent.",
    },
    vision: {
      title: "Our vision",
      copy: "To become the region's most trusted and integrated digital platform for automotive services and related business operations.",
    },
    mission: {
      title: "Our mission",
      copy: "To empower individuals, service providers, and companies with connected digital tools that improve efficiency, enhance customer experience, and support better decisions.",
    },
    values: {
      eyebrow: "— OUR VALUES",
      title: "What we hold ourselves to",
      cards: [
        { icon: "✓", title: "Trust", copy: "We promote clarity, accountability, and responsible data handling." },
        { icon: "⚡", title: "Innovation", copy: "We use technology to solve genuine operational problems.", accent: true },
        { icon: "◈", title: "Simplicity", copy: "We make complex processes feel clear and manageable." },
        { icon: "◉", title: "Quality", copy: "We care about detail, performance, and consistency." },
        { icon: "◎", title: "Partnership", copy: "We grow alongside customers and service providers." },
        { icon: "▲", title: "Impact", copy: "We measure success through time, effort, and cost saved." },
      ],
    },
    logoMeaning: {
      title: "Meaning behind the logo",
      copy: "The flowing “S” represents movement, roads, and integration. Blue communicates trust and technology; silver reflects quality and professionalism; and orange adds energy and forward momentum. The layered form represents connected participants moving through one digital ecosystem.",
    },
    closingCta: {
      title: "Build the automotive ecosystem with us",
      ctas: [
        { label: "Become a Partner", href: "/partners", variant: "primary" },
        { label: "Contact Us", href: "/contact", variant: "secondary" },
      ],
    },
  },

  partners: {
    meta: {
      title: "Partner With SALISCO",
      description:
        "We welcome partnerships with service centers, spare-parts suppliers, fleet companies, insurers, payment providers, logistics companies, and technology partners.",
    },
    hero: {
      eyebrow: "— PARTNERS",
      title: "Let's build a better ",
      titleAccent: "automotive experience together",
      copy: "We welcome partnerships with service centers, spare-parts suppliers, fleet companies, insurers, payment providers, logistics companies, and technology partners.",
    },
    reasons: {
      eyebrow: "— WHY PARTNER",
      title: "Why partner with SALISCO?",
      items: [
        "Reach new customer segments.",
        "Digitize requests and simplify operations.",
        "Improve visibility and customer experience.",
        "Explore integration and joint-service opportunities.",
        "Gain clearer insight into demand and performance.",
      ],
    },
    form: {
      title: "Apply for partnership",
      copy: "Tell us about your business and the appropriate team will get in touch.",
      fields: [
        { name: "company", label: "Company Name", type: "text", required: true },
        {
          name: "businessType",
          label: "Business Type",
          type: "select",
          required: true,
          options: [
            "Service Center or Workshop",
            "Spare-Parts Store or Supplier",
            "Fleet Company",
            "Insurance Provider",
            "Payment Provider",
            "Logistics Company",
            "Technology Partner",
          ],
        },
        { name: "city", label: "City", type: "text", required: true },
        { name: "contactPerson", label: "Contact Person", type: "text", required: true },
        { name: "mobile", label: "Mobile Number", type: "tel", required: true },
        { name: "email", label: "Email", type: "email", required: true },
        { name: "branches", label: "Number of Branches", type: "text" },
        { name: "interest", label: "Partnership Interest", type: "textarea" },
      ],
      submit: "Submit",
      success:
        "Thank you for your interest. We have received your application and the partnerships team will review it as soon as possible.",
    },
  },

  pricing: {
    meta: {
      title: "Pricing and Plans | SALISCO",
      description:
        "Choose the plan that matches your organization's size and operating needs. Additional modules, branches, and advanced services may be added based on the final agreement.",
    },
    hero: {
      eyebrow: "— PLANS",
      title: "Flexible plans for ",
      titleAccent: "every stage of growth",
      copy: "Choose the plan that matches your organization's size and operating needs. Additional modules, branches, and advanced services may be added based on the final agreement.",
    },
    tiers: [
      {
        tierLabel: "TIER 01",
        name: "Essential",
        copy: "For small businesses beginning their digital transformation.",
        features: [
          "Customer management",
          "Vehicles & bookings",
          "Work orders",
          "Basic invoices",
        ],
        cta: { label: "Get Started", href: "/register", variant: "secondary" },
      },
      {
        tierLabel: "TIER 02",
        name: "Professional",
        copy: "For growing businesses requiring broader control and visibility.",
        features: [
          "Everything in Essential",
          "Inventory management",
          "Reports & analytics",
          "Permissions & team management",
        ],
        cta: { label: "Request Pricing", href: "/contact", variant: "primary" },
        popular: true,
        popularLabel: "POPULAR",
      },
      {
        tierLabel: "TIER 03",
        name: "Enterprise",
        copy: "For networks, fleets, and multi-branch organizations with specialized requirements.",
        features: [
          "Tailored configuration",
          "Integrations & APIs",
          "Advanced permissions",
          "Agreed support levels",
        ],
        cta: { label: "Contact Sales", href: "/contact", variant: "secondary" },
      },
    ],
    note: "Final prices are published once plan scope and commercial terms are approved. Request pricing and our team will confirm the modules and terms that fit your operation.",
    faqLink: { label: "Read the frequently asked questions", href: "/faq" },
  },

  faq: {
    meta: {
      title: "Frequently Asked Questions | SALISCO",
      description:
        "Answers about SALISCO accounts, vehicles, bookings, branches, pricing, privacy, and support.",
    },
    hero: {
      eyebrow: "— FAQ",
      title: "Frequently asked ",
      titleAccent: "questions",
      copy: "Answers to the questions we hear most about accounts, vehicles, bookings, and business features.",
    },
    items: [
      {
        question: "What is SALISCO?",
        answer:
          "SALISCO is a digital platform that brings automotive services and business-management solutions together for individuals, providers, and companies.",
      },
      {
        question: "Who can use it?",
        answer:
          "Vehicle owners, workshops, service centers, parts stores and suppliers, fleet operators, and supporting-service partners.",
      },
      {
        question: "Does SALISCO work on mobile devices?",
        answer:
          "The experience is designed for web and supported mobile devices. Official download links will identify available operating systems at launch.",
      },
      {
        question: "Can I add more than one vehicle?",
        answer:
          "Yes. Multiple vehicles may be managed through one account, subject to account type and plan.",
      },
      {
        question: "Does the platform support multiple branches?",
        answer:
          "Yes. Branch and permission management is available within suitable business plans.",
      },
      {
        question: "How do I register as a service center or supplier?",
        answer:
          "Select “Join as a Service Provider” and complete your business information. Verification documents may be required before certain features are activated.",
      },
      {
        question: "Are displayed prices final?",
        answer:
          "Prices and availability depend on the provider and request details. Available information is displayed before confirmation whenever possible.",
      },
      {
        question: "How is my information protected?",
        answer:
          "SALISCO applies technical and organizational controls to protect information and processes it according to the Privacy Policy and user permissions.",
      },
      {
        question: "Can I cancel a booking?",
        answer:
          "Cancellation or modification depends on request status and the provider's policy displayed during booking.",
      },
      {
        question: "How can I contact support?",
        answer:
          "Use the contact form or the support channels shown inside the platform during published operating hours.",
      },
    ],
    closingCta: {
      title: "Still have a question?",
      copy: "Send us your details and the appropriate team will contact you.",
      ctas: [
        { label: "Contact Us", href: "/contact", variant: "primary" },
        { label: "Visit the Help Center", href: "/help", variant: "secondary" },
      ],
    },
  },

  contact: {
    meta: {
      title: "Contact SALISCO",
      description:
        "Questions about SALISCO solutions, support, partnerships, or media? Send us your details and the appropriate team will contact you.",
    },
    hero: {
      eyebrow: "— CONTACT",
      title: "How can ",
      titleAccent: "we help?",
      copy: "Whether you have a question, want to explore SALISCO solutions, or would like to become a partner, send us your details and the appropriate team will contact you.",
    },
    categories: [
      { icon: "◈", title: "Sales", copy: "Plans, quotations, and business solutions." },
      { icon: "◉", title: "Support", copy: "Assistance with accounts, services, and orders." },
      { icon: "◎", title: "Partnerships", copy: "Service centers, suppliers, and ecosystem partners.", accent: true },
      { icon: "▤", title: "Media", copy: "Press and corporate collaboration enquiries." },
    ],
    form: {
      title: "Send us a message",
      fields: [
        { name: "fullName", label: "Full Name", type: "text", required: true },
        { name: "company", label: "Company Name", type: "text" },
        { name: "mobile", label: "Mobile Number", type: "tel", required: true },
        { name: "email", label: "Email", type: "email", required: true },
        {
          name: "enquiryType",
          label: "Enquiry Type",
          type: "select",
          required: true,
          options: ["Sales", "Support", "Partnerships", "Media"],
        },
        { name: "city", label: "City", type: "text" },
        { name: "message", label: "Message", type: "textarea", required: true },
      ],
      consent:
        "I consent to SALISCO processing the information above in order to respond to my enquiry, in line with the Privacy Policy.",
      submit: "Send Message",
      success:
        "Thank you for contacting us. We have received your message, and the appropriate team will review it as soon as possible.",
    },
  },

  help: {
    meta: {
      title: "Help Center | SALISCO",
      description:
        "Guidance on accounts, vehicles, bookings, spare parts, payments, business accounts, privacy, and technical issues.",
    },
    hero: {
      eyebrow: "— HELP CENTER",
      title: "Hello. How can ",
      titleAccent: "we help today?",
      copy: "Browse the topics below, or contact support if you cannot find what you need.",
    },
    searchPlaceholder: "Search accounts, vehicles, bookings, orders, or invoices…",
    categories: [
      "Getting started and account access.",
      "Adding and managing vehicles.",
      "Bookings and service orders.",
      "Spare parts and purchases.",
      "Payments and invoices.",
      "Business accounts and branches.",
      "Privacy and security.",
      "Technical issues.",
    ],
    closingCta: {
      title: "Can't find the answer?",
      copy: "Our support team is happy to help.",
      ctas: [
        { label: "Contact Support", href: "/contact", variant: "primary" },
        { label: "Read the FAQs", href: "/faq", variant: "secondary" },
      ],
    },
  },

  blog: {
    meta: {
      title: "Blog and Knowledge Center | SALISCO",
      description:
        "Practical knowledge for better vehicle care and stronger automotive businesses.",
    },
    hero: {
      eyebrow: "— KNOWLEDGE CENTER",
      title: "Practical knowledge for better vehicle care and ",
      titleAccent: "stronger businesses",
      copy: "Guides on maintenance, spare parts, workshop operations, and fleet performance — published as the platform rolls out.",
    },
    categories: [
      "Vehicle Care",
      "Maintenance",
      "Spare Parts",
      "Workshop Management",
      "Fleet Management",
      "Technology and Innovation",
      "SALISCO News",
    ],
    comingSoonLabel: "COMING SOON",
    articles: [
      { title: "How to Build the Right Maintenance Schedule for Your Vehicle", category: "Maintenance" },
      { title: "Original, Aftermarket, and Remanufactured Parts: What Is the Difference?", category: "Spare Parts" },
      { title: "Warning Signs That Your Vehicle Needs Immediate Inspection", category: "Vehicle Care" },
      { title: "How to Choose a Reliable Service Center", category: "Vehicle Care" },
      { title: "Seven Ways to Reduce Fleet Operating Costs", category: "Fleet Management" },
      { title: "How Digital Work Orders Improve Workshop Performance", category: "Workshop Management" },
      { title: "The Essentials of Spare-Parts Inventory Management", category: "Spare Parts" },
      { title: "What Does Total Cost of Vehicle Ownership Mean?", category: "Fleet Management" },
      { title: "How to Improve the Customer Experience at a Service Center", category: "Workshop Management" },
      { title: "SALISCO's Journey Toward a Connected Automotive Ecosystem", category: "SALISCO News" },
    ],
  },

  download: {
    meta: {
      title: "Download the SALISCO App",
      description:
        "Access your vehicles, services, and orders from anywhere. Official iOS and Android download links will be published when the applications are released.",
    },
    hero: {
      eyebrow: "— MOBILE APP",
      title: "Your vehicle services, ",
      titleAccent: "wherever you are",
      copy: "Use SALISCO to access your vehicles, services, and orders from anywhere. Official iOS and Android download links will be published when the applications are released.",
    },
    storeButtons: [
      { label: "App Store", sublabel: "Download on the" },
      { label: "Google Play", sublabel: "Get it on" },
    ],
    qrCopy: "Scan the code to download the app or open SALISCO on your phone.",
    availabilityNote:
      "The applications have not been released yet. These links are placeholders and will be activated at launch.",
  },

  register: {
    meta: {
      title: "Create Your SALISCO Account",
      description:
        "Create your account in minutes. Choose the account type that matches how you use vehicles or run your automotive business.",
    },
    hero: {
      eyebrow: "— GET STARTED",
      title: "Start your journey ",
      titleAccent: "with SALISCO",
      copy: "Create your account in minutes. You can complete the remaining information later.",
    },
    accountTypesTitle: "Which account is right for you?",
    accountTypes: [
      { icon: "◈", title: "Vehicle Owner", copy: "Manage your vehicle, bookings, parts requests, and records." },
      { icon: "⚙︎", title: "Service Center or Workshop", copy: "Run appointments, work orders, technicians, and invoices." },
      { icon: "▤", title: "Spare-Parts Store or Supplier", copy: "Manage catalog, inventory, pricing, and orders." },
      { icon: "◉", title: "Company or Fleet Operator", copy: "Track vehicles, maintenance, costs, and documents.", accent: true },
      { icon: "◎", title: "Insurance or Supporting-Service Provider", copy: "Connect with customers and approved providers." },
    ],
    start: {
      title: "Create your account",
      copy: "Registration opens with the platform launch. Leave your details and we will let you know the moment accounts are available.",
      cta: "Create Account",
      signInPrompt: "Already registered?",
      signInCta: "Sign In",
      consent:
        "By creating an account, you agree to the Terms and Conditions and the Privacy Policy.",
    },
  },

  legal: {
    terms: {
      meta: {
        title: "Terms and Conditions | SALISCO",
        description: "The terms governing use of the SALISCO platform, websites, applications, and digital services.",
      },
      title: "Terms and Conditions",
      updated: "Draft — pending legal review",
      intro:
        "These Terms govern the use of the SALISCO platform, websites, applications, and digital services. By accessing the platform or creating an account, the user confirms that they have read, understood, and accepted these Terms. Responsibility for providing a service or supplying a product may rest with the provider identified in the relevant request.",
      sections: [
        {
          title: "Scope of these Terms",
          copy: "The full scope, definitions, and the identity of the contracting legal entity are pending confirmation and legal review before publication.",
        },
        {
          title: "Accounts and eligibility",
          copy: "Account types, verification requirements, and eligibility conditions are pending confirmation and legal review before publication.",
        },
        {
          title: "Services and providers",
          copy: "The allocation of responsibility between SALISCO and the service provider identified in a request is pending confirmation and legal review before publication.",
        },
        {
          title: "Payments, cancellation, and refunds",
          copy: "Payment flows, cancellation windows, and refund rules are pending confirmation and legal review before publication. See the Cancellation and Refund Policy.",
        },
        {
          title: "Governing law",
          copy: "The governing law and dispute-resolution process are pending confirmation and legal review before publication.",
        },
      ],
      reviewNotice:
        "This page is foundational copy only. Final legal pages must be reviewed by a qualified Saudi lawyer. The legal entity, commercial-registration details, tax information, address, contact channels, payment flows, refund rules, and provider responsibilities must be confirmed before publication.",
    },
    privacy: {
      meta: {
        title: "Privacy Policy | SALISCO",
        description: "How SALISCO collects, uses, stores, and shares user information.",
      },
      title: "Privacy Policy",
      updated: "Draft — pending legal review",
      intro:
        "This Privacy Policy explains how user information is collected, used, stored, and shared when SALISCO services are used. We aim to process data for legitimate and disclosed purposes, apply appropriate protective measures, and enable users to exercise their rights under applicable laws.",
      sections: [
        {
          title: "Information we collect",
          copy: "The categories of personal and business information collected are pending confirmation and legal review before publication.",
        },
        {
          title: "How information is used",
          copy: "The specific processing purposes and legal bases are pending confirmation and legal review before publication.",
        },
        {
          title: "Sharing with service providers",
          copy: "Information may be shared with the provider handling a request, with user permission. Exact sharing rules are pending confirmation and legal review before publication.",
        },
        {
          title: "Retention and security",
          copy: "Retention periods and the technical and organizational controls applied are pending confirmation and legal review before publication.",
        },
        {
          title: "Your rights",
          copy: "The process for exercising data-subject rights under applicable Saudi law is pending confirmation and legal review before publication.",
        },
      ],
      reviewNotice:
        "This page is foundational copy only. Final legal pages must be reviewed by a qualified Saudi lawyer before publication.",
    },
    cookies: {
      meta: {
        title: "Cookie Policy | SALISCO",
        description: "How SALISCO uses cookies and similar technologies.",
      },
      title: "Cookie Policy",
      updated: "Draft — pending legal review",
      intro:
        "This Cookie Policy explains how cookies and similar technologies are used across SALISCO websites and applications, and the choices available to users.",
      sections: [
        {
          title: "What cookies are used",
          copy: "The specific cookies, their purposes, and their durations are pending confirmation and legal review before publication.",
        },
        {
          title: "Managing your choices",
          copy: "Consent controls and browser-level options are pending confirmation and legal review before publication.",
        },
      ],
      reviewNotice:
        "This page is foundational copy only. Final legal pages must be reviewed by a qualified Saudi lawyer before publication.",
    },
    refunds: {
      meta: {
        title: "Cancellation and Refund Policy | SALISCO",
        description:
          "How cancellation and refunds work, subject to request status, service type, and the provider's policy.",
      },
      title: "Cancellation and Refund Policy",
      updated: "Draft — pending legal review",
      intro:
        "The ability to cancel an order or booking and receive a refund depends on request status, service type, and the provider's policy. Applicable conditions and potential charges should be displayed before confirmation whenever possible.",
      sections: [
        {
          title: "Cancelling a booking",
          copy: "Cancellation windows by service type and request status are pending confirmation and legal review before publication.",
        },
        {
          title: "Refund processing",
          copy: "Refund methods, timelines, and any applicable charges are pending confirmation and legal review before publication.",
        },
        {
          title: "Provider policies",
          copy: "Where a provider sets its own policy, the applicable terms are displayed during booking. The precedence between provider and platform terms is pending legal review.",
        },
      ],
      reviewNotice:
        "This page is foundational copy only. Final legal pages must be reviewed by a qualified Saudi lawyer before publication.",
    },
  },
};
