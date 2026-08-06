import { DOCUMENT } from '@angular/common';
import { inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { SeoMetadata } from '../models/seo-metadata.model';

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly document = inject(DOCUMENT);
  private readonly meta = inject(Meta);
  private readonly title = inject(Title);

  setMetadata(metadata: SeoMetadata): void {
    const origin = this.document.location?.origin ?? '';
    const canonicalUrl = `${origin}${metadata.path}`;
    const imageUrl = `${origin}${metadata.image ?? '/images/logo.png'}`;

    this.title.setTitle(metadata.title);
    this.meta.updateTag({ name: 'description', content: metadata.description });
    this.meta.updateTag({
      name: 'robots',
      content: metadata.noIndex ? 'noindex, follow' : 'index, follow',
    });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:locale', content: 'es_ES' });
    this.meta.updateTag({ property: 'og:site_name', content: 'MalagaCrafters' });
    this.meta.updateTag({ property: 'og:title', content: metadata.title });
    this.meta.updateTag({ property: 'og:description', content: metadata.description });
    this.meta.updateTag({ property: 'og:url', content: canonicalUrl });
    this.meta.updateTag({ property: 'og:image', content: imageUrl });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: metadata.title });
    this.meta.updateTag({ name: 'twitter:description', content: metadata.description });
    this.meta.updateTag({ name: 'twitter:image', content: imageUrl });
    this.setCanonical(canonicalUrl);
    this.setStructuredData(metadata.structuredData, origin);
  }

  private setCanonical(url: string): void {
    let canonical = this.document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = this.document.createElement('link');
      canonical.rel = 'canonical';
      this.document.head.appendChild(canonical);
    }
    canonical.href = url;
  }

  private setStructuredData(
    data: Readonly<Record<string, unknown>> | undefined,
    origin: string,
  ): void {
    this.document.getElementById('structured-data')?.remove();
    if (!data) return;
    const script = this.document.createElement('script');
    script.id = 'structured-data';
    script.type = 'application/ld+json';
    script.text = JSON.stringify(this.absolutizeUrls(data, origin));
    this.document.head.appendChild(script);
  }

  private absolutizeUrls(value: unknown, origin: string): unknown {
    if (typeof value === 'string' && value.startsWith('/')) return `${origin}${value}`;
    if (Array.isArray(value)) return value.map((item) => this.absolutizeUrls(item, origin));
    if (value && typeof value === 'object') {
      return Object.fromEntries(
        Object.entries(value).map(([key, item]) => [key, this.absolutizeUrls(item, origin)]),
      );
    }
    return value;
  }
}
