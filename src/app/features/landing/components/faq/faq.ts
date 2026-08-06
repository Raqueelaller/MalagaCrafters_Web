import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FAQ_ITEMS } from '../../data/landing-content.constants';
import { Accordion } from '../../../../shared/components/accordion/accordion';
import { Button } from '../../../../shared/components/button/button';
import { SectionHeading } from '../../../../shared/components/section-heading/section-heading';

@Component({
  selector: 'app-faq',
  imports: [Accordion, Button, SectionHeading],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './faq.html',
  styleUrl: './faq.scss',
})
export class Faq {
  protected readonly items = FAQ_ITEMS;
}
