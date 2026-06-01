// Portfolio entity types
// Ref: 04-architecture.md - Data Model Candidates

export interface Profile {
  name: string;
  displayName: string;
  title: string;
  about: string;
  email: string;
  phone?: string;
  location: string;
  avatar?: string;
  resume?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location?: string;
  period: string;
  description: string[];
  tech?: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  link?: string;
  github?: string;
  category: 'Web' | 'App' | 'Bot' | 'Other';
  featured?: boolean;
  tech?: string[];
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface SiteMetadata {
  title: string;
  description: string;
  url: string;
  ogImage?: string;
  author: string;
  twitter?: string;
}
