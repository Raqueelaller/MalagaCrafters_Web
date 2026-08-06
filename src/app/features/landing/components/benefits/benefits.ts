import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BENEFITS } from '../../data/landing-content.constants';
import { Icon } from '../../../../shared/components/icon/icon';
import { SectionHeading } from '../../../../shared/components/section-heading/section-heading';

@Component({
  selector: 'app-benefits',
  imports: [Icon, SectionHeading],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './benefits.html',
  styleUrl: './benefits.scss',
})
export class Benefits {
  protected readonly benefits = BENEFITS;
}
