import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PROCESS_STEPS } from '../../data/landing-content.constants';
import { Button } from '../../../../shared/components/button/button';
import { Icon } from '../../../../shared/components/icon/icon';
import { SectionHeading } from '../../../../shared/components/section-heading/section-heading';

@Component({
  selector: 'app-process',
  imports: [Button, Icon, SectionHeading],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './process.html',
  styleUrl: './process.scss',
})
export class Process {
  protected readonly steps = PROCESS_STEPS;
}
