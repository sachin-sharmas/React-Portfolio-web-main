import p1 from '../img/p1.png'
import p2 from '../img/pro2.png'
import p3 from '../img/pro3.png'
import p4 from '../img/Pro4.png'
import p5 from '../img/pro5.png'
import p6 from '../img/pro6.png'
import p7 from '../img/pro7.png'
import p8 from '../img/pro8.png'
import h1 from '../img/h.webp'
import h2 from '../img/h2.webp'

export const Bio = {
  name: "Sachin Sharma",
  description:
    "Frontend Developer with 2+ years specialising in React.js, WordPress, and Webflow — turning complex designs into fast, pixel-perfect web experiences that perform and convert.",
  tagline: "Crafting pixel-perfect web experiences.",
  github:   process.env.REACT_APP_GITHUB   || "https://github.com/sachin-sharmas",
  resume:   process.env.REACT_APP_RESUME_URL || "https://drive.google.com/file/d/1FFU3RVDlqKoL7LAN0_6y9A6z23kLnhI0/view?usp=sharing",
  linkedin: process.env.REACT_APP_LINKEDIN  || "https://www.linkedin.com/in/sachin-sharma-b072b4231",
  email:    process.env.REACT_APP_EMAIL     || "sachins29200@gmail.com",
  phone:    process.env.REACT_APP_PHONE     || "+91 7304578100",
  location: "Mumbai, India",
};

export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React Js",
        image:
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
      },
      {
        name: "JavaScript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      },
      {
        name: "HTML5",
        image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
      },
      {
        name: "CSS3",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
      },
      {
        name: "Tailwind CSS",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
      },
      {
        name: "Bootstrap",
        image:
          "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
      },
      {
        name: "Redux",
        image:
          "https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg",
      },
      {
        name: "Context API",
        image:
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
      },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      {
        name: "WordPress",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/9/98/WordPress_blue_logo.svg",
      },
      {
        name: "Webflow",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/9/92/Webflow_logo.svg",
      },
      {
        name: "Shopify",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg",
      },
      {
        name: "Strapi CMS",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/strapi/strapi-original.svg",
      },
      {
        name: "Google Tag Manager",
        image:
          "https://www.svgrepo.com/show/353827/google-tag-manager.svg",
      },
      {
        name: "Google Analytics",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/GAnalytics.svg/1200px-GAnalytics.svg.png",
      },
      {
        name: "GitHub",
        image:
          "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      },
      {
        name: "Git",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
      },
      {
        name: "VS Code",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png",
      },
      {
        name: "Postman",
        image: "https://www.svgrepo.com/show/354202/postman-icon.svg",
      },
    ],
  },
  {
    title: "Backend & Others",
    skills: [
      {
        name: "Node.js",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Python",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      },
      {
        name: "PHP",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg",
      },
      {
        name: "MySQL",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
      },
      {
        name: "REST APIs",
        image:
          "https://www.svgrepo.com/show/375531/api.svg",
      },
      {
        name: "JSON",
        image:
          "https://www.svgrepo.com/show/353924/json.svg",
      },
    ],
  },
];

export const allSkillsFlat = [
  { name: "React.js", image: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" },
  { name: "JavaScript", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png" },
  { name: "HTML5", image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png" },
  { name: "CSS3", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png" },
  { name: "Tailwind CSS", image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
  { name: "Bootstrap", image: "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png" },
  { name: "Redux", image: "https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg" },
  { name: "WordPress", image: "https://upload.wikimedia.org/wikipedia/commons/9/98/WordPress_blue_logo.svg" },
  { name: "Webflow", image: "https://upload.wikimedia.org/wikipedia/commons/9/92/Webflow_logo.svg" },
  { name: "Shopify", image: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg" },
  { name: "Strapi CMS", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/strapi/strapi-original.svg" },
  { name: "Google Tag Manager", image: "https://www.svgrepo.com/show/353827/google-tag-manager.svg" },
  { name: "Google Analytics", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/GAnalytics.svg/1200px-GAnalytics.svg.png" },
  { name: "GitHub", image: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" },
  { name: "Git", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" },
  { name: "Node.js", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" },
  { name: "Python", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" },
  { name: "PHP", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg" },
  { name: "MySQL", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" },
  { name: "REST APIs", image: "https://www.svgrepo.com/show/375531/api.svg" },
  { name: "Postman", image: "https://www.svgrepo.com/show/354202/postman-icon.svg" },
  { name: "VS Code", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png" },
];

export const experience = [
  {
    id: 0,
    role: "Frontend Developer",
    company: "Mindseye Creative",
    location: "Mumbai",
    date: "2026 – Present",
    current: true,
    desc: [
      "Developing and maintaining responsive, high-performance web applications using React.js, JavaScript, HTML, and CSS — working closely with designers to deliver pixel-perfect, cross-browser-compatible interfaces.",
      "Designing and customising responsive websites in Webflow and WordPress, ensuring smooth UX across all devices and screen sizes.",
      "Implemented on-page SEO best practices across client websites — meta titles, meta descriptions, Open Graph tags, canonical URLs, image alt attributes, and structured heading hierarchies.",
      "Set up Google Tag Manager (GTM) containers with custom triggers, variables, and tags to track user conversions, CTA clicks, form submissions, and scroll depth.",
      "Configured Google Analytics 4 (GA4) event tracking and built goal-based reporting dashboards to support the digital marketing team's campaign performance monitoring.",
    ],
    skills: ["React.js", "JavaScript", "Tailwind CSS", "WordPress", "Webflow", "GTM", "GA4", "SEO", "Email Templates"],
  },
  {
    id: 1,
    role: "Frontend Developer",
    company: "Infozzle Software Solutions Pvt. Ltd",
    location: "Mumbai",
    date: "October 2024 – 2026",
    current: false,
    desc: [
      "Led end-to-end frontend development of The Maritime Standards (UAE) — a content-heavy web platform built with React.js, Tailwind CSS, and Strapi Headless CMS.",
      "Built a reusable, component-based UI architecture using React Hooks and Context API, significantly reducing development time for new features.",
      "Implemented on-page SEO across the platform — crafted keyword-optimised meta tags, structured heading hierarchies, internal linking strategies, XML sitemaps, and robots.txt configuration.",
      "Integrated Google Tag Manager for the marketing team — set up conversion tracking events, Google Ads conversion tags, Meta Pixel (Facebook Ads), and custom event triggers.",
      "Collaborated with the SEO team to conduct technical SEO audits, fix crawl issues, improve Core Web Vitals scores, and implement schema markup for rich results.",
      "Gained hands-on experience with PHP for server-side scripting and WordPress theme/plugin customisation.",
    ],
    skills: ["React.js", "Tailwind CSS", "Strapi CMS", "PHP", "WordPress", "GTM", "Meta Pixel", "Google Ads", "SEO", "GA4"],
  },
  {
    id: 2,
    role: "Web Developer Intern",
    company: "Express Rupya",
    location: "Mumbai",
    date: "June 2024 – September 2024",
    current: false,
    desc: [
      "Built responsive UI components with React.js, improving page load performance and overall user experience.",
      "Used Python and Node.js to automate data workflows and integrate REST APIs for backend operations.",
      "Automated routine data processing tasks using Python scripts, reducing manual effort significantly.",
      "Gained foundational exposure to web analytics and basic SEO concepts as part of the development workflow.",
    ],
    skills: ["React.js", "Python", "Node.js", "REST APIs"],
  },
];

export const seoExpertise = [
  {
    category: "Technical SEO",
    icon: "🔍",
    points: [
      "Meta titles, descriptions & Open Graph tags",
      "Canonical URLs & hreflang attributes",
      "XML sitemaps & robots.txt configuration",
      "Schema markup / structured data (JSON-LD)",
      "Core Web Vitals optimisation (LCP, CLS, FID)",
      "Image alt attributes & lazy loading",
      "Internal linking architecture",
      "Heading hierarchy (H1–H6) strategy",
    ],
  },
  {
    category: "Analytics & Tag Management",
    icon: "📊",
    points: [
      "Google Tag Manager (GTM) setup & management",
      "Custom triggers, variables & tags in GTM",
      "Google Analytics 4 (GA4) event tracking",
      "Conversion goal configuration & funnels",
      "Scroll depth, click & form submission events",
      "GA4 dashboards & report building",
      "Debug & QA via GTM Preview mode",
    ],
  },
  {
    category: "Digital Marketing Integration",
    icon: "📢",
    points: [
      "Google Ads conversion tag implementation",
      "Meta Pixel (Facebook/Instagram Ads) setup",
      "Remarketing audience & event configuration",
      "UTM parameter tracking strategy",
      "A/B testing support via GTM",
      "Landing page performance optimisation",
      "Ad tracking QA & pixel verification",
    ],
  },
];

export const education = [
  {
    id: 0,
    school: "Mumbai University",
    degree: "Bachelor of Science – Information Technology",
    date: "June 2020 – June 2023",
    type: "degree",
  },
  {
    id: 1,
    school: "NTech Global Solution",
    degree: "Web Development Certification",
    date: "December 2023 – June 2024",
    type: "certification",
  },
  {
    id: 2,
    school: "Udemy",
    degree: "SEO & Digital Marketing (Mid-Level)",
    date: "February 2025 – July 2026",
    type: "certification",
  },
];

/* ─────────────────────────────────────────────────────────────
   PROJECTS  (first 6 appear as Featured on Home page)
   client: true  →  no GitHub button, Demo only
───────────────────────────────────────────────────────────── */
export const projects = [
  // ── Client websites ──────────────────────────────────────
  {
    id: 100,
    title: "Dr. Arabia",
    description: "Dental clinic website with modern design, service listings, doctor profiles, and appointment booking sections.",
    image: "https://s0.wp.com/mshots/v1/https%3A%2F%2Fdrbarabia.com%2F?w=640&h=400",
    github: null,
    webapp: "https://drbarabia.com/",
    tags: ["React", "Bootstrap", "Strapi"],
    client: true,
  },
  {
    id: 101,
    title: "Karitek",
    description: "Custom WordPress website for a technology solutions company, featuring a modern UI, product showcase, service pages, and mobile-responsive design optimised for performance.",
    image: "https://s0.wp.com/mshots/v1/https%3A%2F%2Fkaritek.co%2F?w=640&h=400",
    github: null,
    webapp: "https://karitek.co/",
    tags: ["WordPress", "Elementor"],
    client: true,
  },
  {
    id: 102,
    title: "TMS Maritime Standards",
    description: "Content-rich maritime industry platform developed with WordPress and PHP, delivering industry standards, regulatory news, and SEO-optimised pages for a UAE-based client.",
    image: "https://s0.wp.com/mshots/v1/https%3A%2F%2Ftmstaccc.com%2F?w=640&h=400",
    github: null,
    webapp: "https://tmstaccc.com/",
    tags: ["WordPress", "PHP"],
    client: true,
  },
  {
    id: 103,
    title: "TMS Ship Finance & Trade",
    description: "Professional maritime finance and trade platform with dynamic content, data tables, and responsive layout.",
    image: "https://s0.wp.com/mshots/v1/https%3A%2F%2Ftms-shipfinanceandtrade.com%2F?w=640&h=400",
    github: null,
    webapp: "https://tms-shipfinanceandtrade.com/",
    tags: ["React", "Tailwind CSS"],
    client: true,
  },
  // ── Personal / Practice Projects ─────────────────────────
  {
    id: 0,
    title: "Teach To Connect",
    description: "An educational web platform connecting teachers and students with course listings and resources.",
    image: p1,
    github: "https://github.com/sachin-sharmas",
    webapp: "https://divyaeducationweb.netlify.app/",
    tags: ["React", "CSS"],
    client: false,
  },
  {
    id: 1,
    title: "Foodies Web App",
    description: "A food delivery web app with menu browsing, cart management, and order flow.",
    image: p2,
    github: "https://github.com/sachin-sharmas",
    webapp: "https://divya26foodiesweb.netlify.app/",
    tags: ["React", "JavaScript"],
    client: false,
  },
  // ── Additional WordPress Client Sites ────────────────────
  {
    id: 104,
    title: "Nelo Wellness",
    description: "Elegant wellness and beauty brand website built with WordPress, featuring service listings, a booking-ready layout, and a calming aesthetic optimised for conversions.",
    image: "https://s0.wp.com/mshots/v1/https%3A%2F%2Fnelowellness.co.uk%2F?w=640&h=400",
    github: null,
    webapp: "https://nelowellness.co.uk/",
    tags: ["WordPress", "CSS"],
    client: true,
  },
  {
    id: 105,
    title: "Nest At Number 20",
    description: "Property and interior lifestyle website built with WordPress, showcasing spaces with a warm editorial design, gallery pages, and responsive mobile layout.",
    image: "https://s0.wp.com/mshots/v1/https%3A%2F%2Fnestatnumber20.com%2F?w=640&h=400",
    github: null,
    webapp: "https://nestatnumber20.com/",
    tags: ["WordPress", "CSS"],
    client: true,
  },
  {
    id: 106,
    title: "ECU Tech Tune",
    description: "Automotive performance tuning company website developed with WordPress, featuring service packages, vehicle compatibility info, and a strong brand presence.",
    image: "https://s0.wp.com/mshots/v1/https%3A%2F%2Fecutechtune.co.uk%2F?w=640&h=400",
    github: null,
    webapp: "https://ecutechtune.co.uk/",
    tags: ["WordPress", "Elementor"],
    client: true,
  },
  {
    id: 107,
    title: "City Therapy",
    description: "Professional therapy and counselling practice website built with WordPress, designed for trust and accessibility with service info, therapist profiles, and an easy contact flow.",
    image: "https://s0.wp.com/mshots/v1/https%3A%2F%2Fwww.citytherapy.ie%2F?w=640&h=400",
    github: null,
    webapp: "https://www.citytherapy.ie/",
    tags: ["WordPress", "CSS"],
    client: true,
  },
  {
    id: 2,
    title: "Currency Converter",
    description: "Real-time currency converter using live exchange rate APIs with multi-currency support.",
    image: p7,
    github: "https://github.com/sachin-sharmas",
    webapp: "https://divya26currencyconverter.netlify.app/",
    tags: ["JavaScript", "API"],
    client: false,
  },
  {
    id: 3,
    title: "YouTube Clone",
    description: "YouTube clone with video listing, search, sidebar navigation, and video playback.",
    image: p4,
    github: "https://github.com/sachin-sharmas",
    webapp: "https://divya26youtubclone.netlify.app/",
    tags: ["React", "API"],
    client: false,
  },
  {
    id: 4,
    title: "Restaurant Web",
    description: "Restaurant website with menu showcase, gallery, reservations, and contact form.",
    image: p3,
    github: "https://github.com/sachin-sharmas",
    webapp: "https://divya26restaurantweb.netlify.app/",
    tags: ["React", "CSS"],
    client: false,
  },
  {
    id: 5,
    title: "Songs Clone",
    description: "Spotify-inspired music player with playlist management, audio controls, and dynamic UI.",
    image: p6,
    github: "https://github.com/sachin-sharmas",
    webapp: "https://songsclone.netlify.app/",
    tags: ["React", "JavaScript"],
    client: false,
  },
  {
    id: 6,
    title: "Notes App",
    description: "React notes app with create, edit, delete, and search functionality using local storage.",
    image: p8,
    github: "https://github.com/sachin-sharmas",
    webapp: "https://divya26notesapp.netlify.app/",
    tags: ["React", "LocalStorage"],
    client: false,
  },
  {
    id: 7,
    title: "Weather App",
    description: "Weather application with live 5-day forecast and city search using OpenWeather API.",
    image: p5,
    github: "https://github.com/sachin-sharmas",
    webapp: "https://divya26weatherapp.netlify.app/",
    tags: ["JavaScript", "API"],
    client: false,
  },
  {
    id: 8,
    title: "Admin Dashboard",
    description: "Responsive admin panel with data tables, charts, user management, and dark mode support.",
    image: h1,
    github: "https://github.com/sachin-sharmas",
    webapp: "https://github.com/sachin-sharmas",
    tags: ["React", "Tailwind CSS"],
    client: false,
  },
  {
    id: 9,
    title: "E-Commerce Store",
    description: "Full-featured e-commerce storefront with product listings, filters, cart, and checkout flow.",
    image: h2,
    github: "https://github.com/sachin-sharmas",
    webapp: "https://github.com/sachin-sharmas",
    tags: ["React", "Redux"],
    client: false,
  },
  {
    id: 10,
    title: "Chat Application",
    description: "Real-time chat app with room support, message history, and responsive mobile-first UI.",
    image: p1,
    github: "https://github.com/sachin-sharmas",
    webapp: "https://github.com/sachin-sharmas",
    tags: ["React", "JavaScript"],
    client: false,
  },
];
