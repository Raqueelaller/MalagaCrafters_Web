import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { FaqItem } from '../../../core/models/content.models';
import { Icon } from '../icon/icon';

@Component({
  selector: 'app-accordion',
  imports: [Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './accordion.html',
  styleUrl: './accordion.scss',
})
export class Accordion {
  readonly items = input.required<readonly FaqItem[]>();
  readonly tone = input<'default' | 'inverse'>('default');
  protected readonly openItem = signal<string | null>(null);
  protected toggle(id: string): void {
    this.openItem.update((current) => (current === id ? null : id));
  }
}
