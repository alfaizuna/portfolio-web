// Type definitions for HeroSection component
export interface StatData {
  value: string;
  label: string;
}

export interface NavigationItem {
  label: string;
  id: string;
}

export interface SocialIcon {
  src: string;
  alt: string;
  className: string;
}

export interface HeroSectionProps {
  className?: string;
}
