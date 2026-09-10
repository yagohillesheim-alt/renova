export interface Service {
  id: string;
  name: string;
  description: string;
  problemSolved: string;
  targetAudience: string;
  benefits: string[];
  steps: string[];
  image: string;
  path: string;
}

export interface Unit {
  id: string;
  name: string;
  city: string;
  state: string;
  services: string[];
  address: string;
  phone: string;
  email: string;
  hours: string;
  coords: { lat: number; lng: number };
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
}

export interface Document {
  id: string;
  name: string;
  category: 'conduta' | 'privacidade' | 'transparencia' | 'certificacao' | 'licenca' | 'tecnico';
  updatedAt: string;
  validUntil?: string;
  status: 'ativo' | 'revisao' | 'expirado';
  url: string;
}
