import { NavigationItem } from '../models/content.models';

export const NAVIGATION_ITEMS: readonly NavigationItem[] = [
  { label: 'Ideas', href: '/#ideas', sectionId: 'ideas' },
  { label: 'Materiales', href: '/#materiales', sectionId: 'materiales' },
  { label: 'Trabajos', href: '/#trabajos', sectionId: 'trabajos' },
  { label: 'Proceso', href: '/#proceso', sectionId: 'proceso' },
  { label: 'Preguntas', href: '/#preguntas', sectionId: 'preguntas' },
] as const;
