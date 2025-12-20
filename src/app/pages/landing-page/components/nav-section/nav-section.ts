import { Component, HostListener } from '@angular/core';
import { App } from '../../../../app';

@Component({
  selector: 'app-nav-section',
  imports: [],
  templateUrl: './nav-section.html',
  styleUrl: './nav-section.css',
})
export class NavSection {












    isNavOpen = false;
  showDescription = false;

  // Smooth scroll (700ms like jQuery)
  smoothScroll(event: Event): void {
    event.preventDefault();

    const target = event.target as HTMLAnchorElement;
    const hash = target.getAttribute('href');

    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });

        // update URL hash
        history.pushState(null, '', hash);
      }
    }
  }

  currentYear = new Date().getFullYear();

  activeSection = 'home';

  toggleNav(): void {
    this.isNavOpen = !this.isNavOpen;
  }

  scrollTo(event: Event, sectionId: string): void {
    event.preventDefault();

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.activeSection = sectionId;
      history.pushState(null, '', `#${sectionId}`);
      this.isNavOpen = false;
    }
  }

  // 🔥 Auto-update active menu on scroll
  @HostListener('window:scroll', [])
  onScroll(): void {
    const sections = ['home', 'about', 'projects', 'testmonial', 'blog', 'contact'];

    for (const id of sections) {
      const el = document.getElementById(id);
      if (!el) continue;

      const rect = el.getBoundingClientRect();
      if (rect.top <= 120 && rect.bottom >= 120) {
        this.activeSection = id;
        break;
      }
    }
  }
}


