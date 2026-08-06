import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeoService } from '../../../../core/services/seo.service';
import { LEGAL_CONTENT, LegalPageKey } from '../../data/legal-content.constants';

@Component({
  selector: 'app-legal-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './legal-page.html',
  styleUrl: './legal-page.scss',
})
export default class LegalPage {
  private readonly route = inject(ActivatedRoute);
  private readonly seo = inject(SeoService);
  protected readonly content = LEGAL_CONTENT[this.route.snapshot.data['page'] as LegalPageKey];

  constructor() {
    const path = this.route.snapshot.routeConfig?.path ?? '';
    this.seo.setMetadata({
      title: `${this.content.title} | MalagaCrafters`,
      description: this.content.description,
      path: `/${path}`,
    });
  }
}
