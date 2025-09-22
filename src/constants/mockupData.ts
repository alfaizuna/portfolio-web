const socialMediaLinks = [
  {
    name: "Facebook",
    url: "https://facebook.com/wira.achyar",
    icon: "/social-media-1.svg",
    alt: "Facebook"
  },
  {
    name: "Instagram",
    url: "https://instagram.com/wira.achyar",
    icon: "/social-media.svg",
    alt: "Instagram"
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/wira-achyar", 
    icon: "/social-media-2.svg",
    alt: "LinkedIn"
  },
  {
    name: "TikTok",
    url: "https://tiktok.com/@wira.achyar",
    icon: "/social-media-3.svg", 
    alt: "TikTok"
  }
];

const profileData = {
  name: "Wira Achyar",
  description: "a frontend developer passionate about creating seamless digital experiences that are fast, responsive, and user-friendly.",
  profileImage: "/Photo-Wira-1.png",
  // Fallback image if profileImage is not available
  defaultProfileImage: "/harmonious-purple-palette---candid-gentleman-portrait-1.png"
};

const portfolioData = [
  {
    title: "Portfolio 1",
    category: "Web Development",
    image: "/portfolio1.png",
  },
  {
    title: "Portfolio 2",
    category: "Web Development",
    image: "/portfolio2.png",
  },
  {
    title: "Portfolio 3",
    category: "Web Development",
    image: "/portfolio3.png",
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
    description: "Styling beautiful and responsive user interfaces.",
    icon: "/icon-4.png",
    highlighted: false,
  },
  {
    name: "Javascript",
    description: "Building interactive and dynamic web applications.",
    icon: "/icon-5.png",
    highlighted: true,
  },
  {
    name: "React",
    description: "Creating reusable components and modern UIs.",
    icon: "/image-6-1.png",
    highlighted: false,
  },
  {
    name: "Next.js",
    description: "Full-stack React framework for production applications.",
    icon: "/next.svg",
    highlighted: true,
  },
  {
    name: "TypeScript",
    description: "Type-safe JavaScript for better code quality, maintainability, and performance.",
    icon: "/typescript.png",
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

const mockFaq = [
  {
    id: "q1",
    q: "What technologies do you work with?",
    a: "I mainly work with HTML, CSS, JavaScript, and frameworks like React, Next.js, and Vue. I also have experience using Tailwind CSS, TypeScript, and working with APIs.",
  },
  {
    id: "q2",
    q: "Do you work on freelance or remote projects?",
    a: "Yes, I'm available for both freelance projects and remote work. I have experience collaborating with teams across different time zones and managing projects independently with clear communication and regular updates.",
  },
  {
    id: "q3",
    q: "Can you convert Figma or Sketch designs into code?",
    a: "Absolutely! I specialize in converting design mockups from Figma and Sketch into pixel-perfect, responsive code. I ensure that the final implementation matches the design specifications while maintaining clean, semantic HTML and optimized CSS.",
  },
  {
    id: "q4",
    q: "Do you collaborate with backend developers or teams?",
    a: "Yes, I have extensive experience working with backend developers and cross-functional teams. I'm proficient in integrating APIs, working with RESTful services, and collaborating using version control systems like Git to ensure smooth project delivery.",
  },
  {
    id: "q5",
    q: "Are you available for full-time roles?",
    a: "I'm open to discussing full-time opportunities that align with my skills and career goals. I'm particularly interested in roles that involve modern frontend technologies, challenging projects, and opportunities for professional growth.",
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

const testimonials = [
  {
    id: 1,
    quote:
      `Working with ${profileData.name} was a smooth experience from start to finish. He is very responsive and always goes above and beyond to ensure our project's success.`,
    name: "Sarah Tan",
    title: "Product Manager at Finovate",
    image: "/ellipse-8.png",
  },
  {
    id: 2,
    quote:
      "His attention to detail and commitment to quality are outstanding. The final product exceeded our expectations. A true professional and a pleasure to work with.",
    name: "Michael Chen",
    title: "Lead Designer at Creative Solutions",
    image: "/default-portrait.png",
  },
  {
    id: 3,
    quote:
      `${profileData.name} is a proactive and resourceful developer. He's not just a coder; he's a problem solver who contributes great ideas to the team. I would gladly work with ${profileData.name} again.`,
    name: "Jessica Liu",
    title: "Senior Frontend Developer at TechCorp",
    image: "/default-portrait.png",
  },
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
  testimonials,
  profileData,
  socialMediaLinks,
};