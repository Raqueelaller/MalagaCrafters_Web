import { afterNextRender, DestroyRef, Directive, ElementRef, inject, input } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export type RevealVariant = 'fade-up' | 'fade-in' | 'scale-in';

@Directive({
  selector: '[appReveal]',
  standalone: true,
})
export class Reveal {
  readonly variant = input<RevealVariant>('fade-up', { alias: 'appReveal' });
  readonly delay = input(0, { alias: 'revealDelay' });

  private readonly element = inject(ElementRef<HTMLElement>);
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    afterNextRender(() => {
      const target = this.element.nativeElement;
      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.set(target, this.fromState());
        const tween = gsap.to(target, {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          duration: 0.8,
          delay: this.delay(),
          ease: 'power2.out',
          scrollTrigger: {
            trigger: target,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        });
        return () => {
          tween.scrollTrigger?.kill();
          tween.kill();
        };
      });

      mm.add('(prefers-reduced-motion: reduce)', () => {
        gsap.set(target, { clearProps: 'all' });
      });

      this.destroyRef.onDestroy(() => mm.revert());
    });
  }

  private fromState(): gsap.TweenVars {
    const base: gsap.TweenVars = { opacity: 0 };
    switch (this.variant()) {
      case 'fade-in':
        return base;
      case 'scale-in':
        return { ...base, scale: 0.94 };
      case 'fade-up':
      default:
        return { ...base, y: 24 };
    }
  }
}
