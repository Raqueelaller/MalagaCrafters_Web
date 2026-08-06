import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { IconName } from '../../../core/models/content.models';

@Component({
  selector: 'app-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './icon.html',
  styleUrl: './icon.scss',
})
export class Icon {
  readonly name = input.required<IconName>();
  readonly size = input<'small' | 'medium' | 'large'>('medium');
  readonly label = input<string>();
}
