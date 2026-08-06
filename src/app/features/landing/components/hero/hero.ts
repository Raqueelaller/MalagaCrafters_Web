import { ChangeDetectionStrategy, Component, DestroyRef, ElementRef, afterNextRender, inject } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '../../../../shared/components/button/button';
import { Icon } from '../../../../shared/components/icon/icon';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-hero',
  imports: [Button, Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  private readonly element = inject(ElementRef<HTMLElement>);
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    afterNextRender(() => {
      const scope = this.element.nativeElement;
      const visual = scope.querySelector('.hero__visual') as HTMLElement | null;

      if (!visual) {
        return;
      }

      const mm = gsap.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const tween = gsap.to(visual, {
          y: 40,
          ease: 'none',
          scrollTrigger: {
            trigger: scope,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });
        return () => {
          tween.scrollTrigger?.kill();
          tween.kill();
        };
      });

      this.destroyRef.onDestroy(() => mm.revert());
    });
  }
}
