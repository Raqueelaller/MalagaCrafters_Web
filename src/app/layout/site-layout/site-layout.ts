import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from '../footer/footer';
import { Navbar } from '../navbar/navbar';

@Component({
  selector: 'app-site-layout',
  imports: [RouterOutlet, Navbar, Footer],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <a class="skip-link" href="#main-content">Saltar al contenido</a>
    <app-navbar />
    <router-outlet />
    <app-footer />
  `,
})
export class SiteLayout {}
