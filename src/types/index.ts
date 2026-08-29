export interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  video?: string; // ← Nueva propiedad opcional para video
  tech: string;
  category: string;
  isExecutable: boolean;
  downloadUrl?: string;      // ← Enlace al .exe (Google Drive o GitHub Releases)
  githubUrl: string;
  URL?: string;
}


export interface Skill {
  name: string;
  icon: string;
  color: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}