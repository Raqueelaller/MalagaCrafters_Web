export interface SeoMetadata {
  readonly title: string;
  readonly description: string;
  readonly path: string;
  readonly image?: string;
  readonly noIndex?: boolean;
  readonly structuredData?: Readonly<Record<string, unknown>>;
}
