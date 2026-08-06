import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CONTACT } from '../../core/constants/contact.constants';
import { NAVIGATION_ITEMS } from '../../core/constants/navigation.constants';
import { Icon } from '../../shared/components/icon/icon';

@Component({
  selector: 'app-footer',
  imports: [Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  protected readonly contact = CONTACT;
  protected readonly navigationItems = NAVIGATION_ITEMS;
  protected readonly currentYear = new Date().getFullYear();
}
