import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-section-heading',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './section-heading.html',
  styleUrl: './section-heading.scss',
})
export class SectionHeading {
  readonly eyebrow = input<string>();
  readonly title = input.required<string>();
  readonly description = input<string>();
  readonly align = input<'start' | 'center'>('start');
  readonly headingId = input.required<string>();
  readonly tone = input<'default' | 'inverse'>('default');
}
