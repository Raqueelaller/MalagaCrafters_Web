import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { IconName } from '../../../core/models/content.models';
import { Icon } from '../icon/icon';

@Component({
  selector: 'app-button',
  imports: [Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {
  readonly href = input.required<string>();
  readonly variant = input<'primary' | 'secondary' | 'ghost'>('primary');
  readonly icon = input<IconName>();
  readonly target = input<'_blank' | '_self'>('_self');
  readonly ariaLabel = input<string>();
}
