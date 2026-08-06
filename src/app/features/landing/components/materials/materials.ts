import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MATERIALS } from '../../data/landing-content.constants';
import { Reveal } from '../../../../shared/directives/reveal';
import { Icon } from '../../../../shared/components/icon/icon';
import { SectionHeading } from '../../../../shared/components/section-heading/section-heading';

@Component({
  selector: 'app-materials',
  imports: [Icon, Reveal, SectionHeading],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './materials.html',
  styleUrl: './materials.scss',
})
export class Materials {
  protected readonly materials = MATERIALS;

  protected resolveImage(material: (typeof MATERIALS)[number]): string | null {
    return material.image ?? (material.name === 'Cuero' ? '/images/llavero_cuero.png' : null);
  }

  protected resolveAlt(material: (typeof MATERIALS)[number]): string {
    return material.alt ?? (material.name === 'Cuero' ? 'Llavero de cuero personalizado mediante grabado láser' : '');
  }
}
