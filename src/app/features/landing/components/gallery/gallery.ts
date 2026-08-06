import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GALLERY_ITEMS } from '../../data/landing-content.constants';
import { Reveal } from '../../../../shared/directives/reveal';
import { Button } from '../../../../shared/components/button/button';
import { SectionHeading } from '../../../../shared/components/section-heading/section-heading';

@Component({
  selector: 'app-gallery',
  imports: [Button, Reveal, SectionHeading],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss',
})
export class Gallery {
  protected readonly items = GALLERY_ITEMS;
}
