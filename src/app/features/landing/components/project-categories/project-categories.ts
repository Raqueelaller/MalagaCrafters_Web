import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PROJECT_CATEGORIES } from '../../data/landing-content.constants';
import { Reveal } from '../../../../shared/directives/reveal';
import { SectionHeading } from '../../../../shared/components/section-heading/section-heading';

@Component({
  selector: 'app-project-categories',
  imports: [Reveal, SectionHeading],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './project-categories.html',
  styleUrl: './project-categories.scss',
})
export class ProjectCategories {
  protected readonly categories = PROJECT_CATEGORIES;
}
