import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SeoService } from '../../../../core/services/seo.service';
import { FAQ_ITEMS } from '../../data/landing-content.constants';
import { Benefits } from '../../components/benefits/benefits';
import { Contact } from '../../components/contact/contact';
import { Faq } from '../../components/faq/faq';
import { Gallery } from '../../components/gallery/gallery';
import { Hero } from '../../components/hero/hero';
import { Materials } from '../../components/materials/materials';
import { Process } from '../../components/process/process';
import { ProjectCategories } from '../../components/project-categories/project-categories';

@Component({
  selector: 'app-home-page',
  imports: [Hero, ProjectCategories, Materials, Gallery, Process, Benefits, Faq, Contact],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<main id="main-content">
    <app-hero /><app-project-categories /><app-materials /><app-gallery /><app-process /><app-benefits /><app-faq /><app-contact />
  </main>`,
})
export default class HomePage {
  private readonly seo = inject(SeoService);

  constructor() {
    this.seo.setMetadata({
      title: 'MalagaCrafters | Corte y grabado láser personalizado',
      description:
        'Diseño, corte y grabado láser personalizado en madera, metacrilato, vidrio, aluminio y cuero. Piezas bajo pedido y envíos a toda España.',
      path: '/',
      structuredData: {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Organization',
            '@id': '#organization',
            name: 'MalagaCrafters',
            url: '/',
            email: 'malagacrafters@gmail.com',
            logo: '/images/logo.png',
            sameAs: [
              'https://www.instagram.com/malagacrafters/',
              'https://www.tiktok.com/@malagacrafters',
            ],
            areaServed: { '@type': 'Country', name: 'España' },
          },
          {
            '@type': 'WebSite',
            '@id': '#website',
            name: 'MalagaCrafters',
            url: '/',
            publisher: { '@id': '#organization' },
            inLanguage: 'es-ES',
          },
          {
            '@type': 'FAQPage',
            mainEntity: FAQ_ITEMS.map((item) => ({
              '@type': 'Question',
              name: item.question,
              acceptedAnswer: { '@type': 'Answer', text: item.answer },
            })),
          },
        ],
      },
    });
  }
}
