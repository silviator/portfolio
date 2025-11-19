import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ContactConfig, SocialLink } from '../../config/portfolio.config';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  @Input() contact!: ContactConfig;
  @Input() socials: SocialLink[] = [];

  getSocialIcon(id: string): string | null {
    switch (id) {
      case 'github':
        return '/icons/github_light.svg';
      case 'linkedin':
        return '/icons/linkedin.svg';
      case 'email':
        return '/icons/gmail.svg';
      default:
        return null;
    }
  }
}
