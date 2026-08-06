export type IconName =
  | 'arrow-right'
  | 'check'
  | 'chevron-down'
  | 'clock'
  | 'design'
  | 'email'
  | 'file'
  | 'heart'
  | 'instagram'
  | 'material'
  | 'package'
  | 'precision'
  | 'send'
  | 'spain'
  | 'spark'
  | 'tiktok'
  | 'upload';

export interface NavigationItem {
  readonly label: string;
  readonly href: string;
  readonly sectionId: string;
}

export interface ProjectCategory {
  readonly title: string;
  readonly description: string;
  readonly image: string;
  readonly alt: string;
}

export interface MaterialItem {
  readonly name: string;
  readonly description: string;
  readonly image?: string;
  readonly alt?: string;
}

export interface GalleryItem {
  readonly image: string;
  readonly alt: string;
  readonly caption: string;
  readonly material: string;
}

export interface ProcessStep {
  readonly number: string;
  readonly title: string;
  readonly description: string;
  readonly icon: IconName;
}

export interface Benefit {
  readonly title: string;
  readonly description: string;
  readonly icon: IconName;
}

export interface FaqItem {
  readonly id: string;
  readonly question: string;
  readonly answer: string;
}

export interface SelectOption {
  readonly value: string;
  readonly label: string;
}
