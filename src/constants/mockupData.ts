const statsData = [
  {
    value: "2+",
    label: "Years Experience",
  },
  {
    value: "99%",
    label: "Client Satisfaction",
  },
  {
    value: "3",
    label: "Project Delivered",
  },
  {
    value: "50",
    label: "Clients Worldwide",
  },
];

const socialIcons = [
  {
    src: "/icon-5.png",
    alt: "Icon",
    className:
      "w-[50.92px] h-[50.92px] mt-[-2.31px] mb-[-2.31px] ml-[-2.31px] mr-[-2.31px] relative object-cover",
  },
  {
    src: "/icon-4.png",
    alt: "Icon",
    className: "w-[34.72px] h-[40.75px] relative object-cover",
  },
  {
    src: "/icon-3.png",
    alt: "Icon",
    className: "w-[40.5px] h-[40.5px] relative object-cover",
  },
  {
    src: "/image-6-1.png",
    alt: "Image",
    className: "relative w-[43.97px] h-[39.35px] object-cover",
  },
];

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
};

const technologyData = [
  {
    name: "HTML",
    description: "Crafting semantic, accessible HTML structures.",
    icon: "/icon-3.png",
    highlighted: true,
  },
  {
    name: "CSS",
    description: "Crafting semantic, accessible HTML structures.",
    icon: "/icon-4.png",
    highlighted: false,
  },
  {
    name: "Javascript",
    description: "Crafting semantic, accessible HTML structures.",
    icon: "/icon-5.png",
    highlighted: true,
  },
  {
    name: "React",
    description: "Crafting semantic, accessible HTML structures.",
    icon: "/image-6-1.png",
    highlighted: false,
  },
];

const withMeFeatures = [
  "React Expert",
  "Precise Website Implementation",
  "TypeScript Proficiency",
  "Clean, Maintainable Code",
  "Responsive Website Development",
  "Performance Optimization",
  "UI Design Proficiency (Figma)",
];

const anotherTalentFeatures = [
  "Basic React Knowledge",
  "Inconsistent Design Translation",
  "Little to No TypeScript Knowledge",
  "Unstructured Code",
  "Inconsistent Responsiveness",
  "Slow and Heavy Websites",
  "No Design Skills",
];

const portfolioData = [
  {
    title: "Portfolio 1",
    category: "Web Development",
    image: "/portfolio-image.png",
  },
  {
    title: "Portfolio 2",
    category: "Web Development",
    image: "/portfolio-image-1.png",
  },
  {
    title: "Portfolio 3",
    category: "Web Development",
    image: "/portfolio-image-3.png",
  },
];

const experienceData = [
  {
    period: "2025 - Present",
    role: "Frontend Developer",
    logo: "/vector-3.svg",
    description:
      "Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance, implemented accessible designs, and delivered clean, reusable code to enhance user experience and scalability.",
  },
  {
    period: "2025 - Present",
    role: "Frontend Developer",
    logo: "/vector-6.svg",
    description:
      "Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance, implemented accessible designs, and delivered clean, reusable code to enhance user experience and scalability.",
  },
  {
    period: "2025 - Present",
    role: "Frontend Developer",
    logo: [
      "/vector-5.svg",
      "/vector.svg",
      "/vector-1.svg",
      "/vector-2.svg",
      "/vector-4.svg",
    ],
    description:
      "Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance, implemented accessible designs, and delivered clean, reusable code to enhance user experience and scalability.",
  },
];

const mockFaq = [
  {
    id: "q1",
    q: "What services do you offer?",
    a: "We provide custom web/app development, cloud solutions, UX/UI design, and more.",
  },
  {
    id: "q2",
    q: "How do I know if this is right for my business?",
    a: "We’ll assess your goals and propose the best approach tailored to your needs.",
  },
  {
    id: "q3",
    q: "How much does a project cost?",
    a: "Project cost depends on complexity, features, and timeline...",
  },
  {
    id: "q4",
    q: "How long does it take?",
    a: "Timelines vary by project scope, but we provide clear milestones...",
  },
  {
    id: "q5",
    q: "Can I start with a small project first?",
    a: "Yes, we often recommend starting small to validate ideas...",
  },
];

const navigationItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skill", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "FAQ", id: "faq" },
  { label: "Contact", id: "contact" },
];

export {
  statsData,
  socialIcons,
  scrollToSection,
  technologyData,
  withMeFeatures,
  anotherTalentFeatures,
  portfolioData,
  experienceData,
  mockFaq,
  navigationItems,
};