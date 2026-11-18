export const companyData = {
  name: "Scientia",
  legalName: "Scientia Innovation Private Limited",
  tagline: "Engineering Digital Experiences. Building Tomorrow's Technology.",
  subtagline: "At Scientia, we build scalable digital products, cloud platforms, and modern enterprise software that empower businesses and people.",
  philosophy: "Products are evolved, not built.",
  philosophyDescription: "We believe in lean thinking, user empathy, and continuous agile evolution to transform ambitious ideas into market-fitting products.",
  vision: "Bringing technology to people by removing hurdles in technology adoption.",
  establishedYear: 2016,
  
  contact: {
    email: "mail@scientiaindia.com",
    supportEmail: "support@scientiaindia.com",
    phones: [
      { label: "Bangalore Office", number: "+91 9663330146" },
      { label: "Cochin Office", number: "+91 9447226824" }
    ],
    hours: "Monday – Saturday: 9:00 AM – 6:30 PM IST"
  },

  offices: [
    {
      city: "Bangalore",
      role: "Engineering & Innovation Hub",
      address: "113, Regal, Whitefield, Bangalore, Karnataka - 560048",
      phone: "+91 9663330146"
    },
    {
      city: "Cochin",
      role: "Incubation Center",
      address: "Startup Village, Kinfra Hi-Tech Park, Kalamassery, Cochin, Kerala - 683503",
      phone: "+91 9447226824"
    }
  ],

  leadership: [
    {
      name: "Shaiju C K",
      role: "CEO & Co-Founder",
      bio: "Former Vice President at JP Morgan Chase with over two decades of enterprise engineering leadership across HP and Satyam.",
      initials: "SC"
    },
    {
      name: "Mili Sreedharan",
      role: "CTO & Co-Founder",
      bio: "Former Senior Product Engineer at Sasken Communications with deep expertise in embedded systems, mobile platforms, and cloud infrastructure.",
      initials: "MS"
    }
  ],

  stats: [
    { value: "10+", label: "Years Experience" },
    { value: "50,000+", label: "Active Users" },
    { value: "99.9%", label: "System Uptime" },
    { value: "2", label: "Innovation Hubs" }
  ],

  // 2 Flagship Products requested by the user
  products: [
    {
      id: "parenteye",
      name: "ParentEye",
      category: "Education Technology (EdTech)",
      tagline: "Smart School Management & Real-Time Parent Communication",
      description: "ParentEye bridges the gap between schools, teachers, parents, and students. A unified cloud ERP and mobile app featuring automated attendance alerts, digital homework diaries, online fee collection, and real-time GPS school bus tracking.",
      url: "https://parenteye.org",
      badge: "EdTech Platform",
      accent: "#526BFF",
      features: [
        "Real-time attendance tracking with instant parent alerts",
        "Digital school diary & homework portal",
        "Live GPS school bus tracking with arrival notifications",
        "Secure fee payments with digital receipts",
        "Scholastic & non-scholastic performance analytics"
      ],
      stats: [
        { label: "Active Students & Parents", value: "50,000+" },
        { label: "Partner Institutions", value: "120+" }
      ]
    },
    {
      id: "shreekhata",
      name: "Shree Khata",
      category: "FinTech & Business Accounting",
      tagline: "Smart Digital Ledger & Business Accounts Management",
      description: "Shree Khata simplifies financial record-keeping for modern merchants, businesses, and enterprises. Replace manual paper ledgers with automated credit/debit tracking, instant customer payment reminders via WhatsApp/SMS, digital invoicing, and real-time cash flow analytics.",
      url: "https://shreekhata.in/",
      badge: "FinTech Platform",
      accent: "#10B981",
      features: [
        "Digital credit & debit ledger (Hisab-Kitab) with 100% cloud backup",
        "Automated WhatsApp & SMS payment collection reminders",
        "Instant GST-ready digital invoices & receipt generation",
        "Real-time cash flow summaries & business profit analytics",
        "Multi-device sync for store owners & accounting teams"
      ],
      stats: [
        { label: "Time Saved on Reconciliation", value: "75%" },
        { label: "Faster Payment Collections", value: "3x" }
      ]
    }
  ],

  // Streamlined 4 core capabilities
  services: [
    {
      id: "product-engineering",
      title: "Product Engineering",
      description: "We turn ambitious concepts into market-ready digital products using lean MVP methodologies, high-cadence sprint cycles, and scalable architectures.",
      tags: ["React", "Node.js", "TypeScript", "PostgreSQL", "AWS"]
    },
    {
      id: "cloud-software",
      title: "Cloud & Software Development",
      description: "Full-stack software engineering delivering secure, high-throughput web applications, microservices, and resilient REST & GraphQL APIs.",
      tags: ["Next.js", "Python", "Go", "Kubernetes", "Redis"]
    },
    {
      id: "digital-transformation",
      title: "Digital Transformation",
      description: "Modernizing legacy operations, eliminating paperwork, and automating business workflows with custom cloud enterprise portals.",
      tags: ["Workflow Automation", "Legacy Refactoring", "Microservices"]
    },
    {
      id: "iot-telematics",
      title: "IoT & Connected Systems",
      description: "Connecting edge hardware with cloud intelligence: real-time GPS telemetry, sensor data streaming, and fleet monitoring pipelines.",
      tags: ["MQTT", "WebSockets", "GPS Telematics", "AWS IoT"]
    }
  ]
};
