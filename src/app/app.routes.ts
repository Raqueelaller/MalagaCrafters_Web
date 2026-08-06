import { Routes } from '@angular/router';
import { SiteLayout } from './layout/site-layout/site-layout';

export const routes: Routes = [
  {
    path: '',
    component: SiteLayout,
    children: [
      { path: '', loadComponent: () => import('./features/landing/pages/home-page/home-page') },
      {
        path: 'aviso-legal',
        data: { page: 'legal' },
        loadComponent: () => import('./features/legal/pages/legal-page/legal-page'),
      },
      {
        path: 'politica-privacidad',
        data: { page: 'privacy' },
        loadComponent: () => import('./features/legal/pages/legal-page/legal-page'),
      },
      {
        path: 'politica-cookies',
        data: { page: 'cookies' },
        loadComponent: () => import('./features/legal/pages/legal-page/legal-page'),
      },
    ],
  },
  { path: '**', redirectTo: '' },
];
