import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostListener, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs';
import { NAVIGATION_ITEMS } from '../../core/constants/navigation.constants';
import { Button } from '../../shared/components/button/button';

@Component({
  selector: 'app-navbar',
  imports: [Button, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  private readonly document = inject(DOCUMENT);
  private readonly router = inject(Router);

  protected readonly navigationItems = NAVIGATION_ITEMS;
  protected readonly menuOpen = signal(false);
  protected readonly scrolled = signal(false);

  constructor() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => this.closeMenu());
  }

  @HostListener('window:scroll')
  protected onScroll(): void {
    this.scrolled.set(
      this.document.defaultView?.scrollY ? this.document.defaultView.scrollY > 16 : false,
    );
  }

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }

  protected goHome(): void {
    this.closeMenu();
    this.router.navigate(['/']).then(() => {
      this.document.defaultView?.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}
