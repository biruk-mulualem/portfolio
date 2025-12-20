import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from "@angular/router";
import { AboutSection } from './components/about-section/about-section';
import { BlogSection } from './components/blog-section/blog-section';
import { ContactSection } from './components/contact-section/contact-section';
import { FooterSection } from './components/footer-section/footer-section';
import { HireMeSection } from './components/hire-me-section/hire-me-section';
import { HomeSection } from './components/home-section/home-section';
import { NavSection } from './components/nav-section/nav-section';
import { ProjectsSection } from './components/projects-section/projects-section';
import { TechnicalSkillSection } from './components/technical-skill-section/technical-skill-section';
import { TestmonialSection } from './components/testmonial-section/testmonial-section';

interface Work {
  image: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  expanded: boolean;
}

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, FormsModule,

AboutSection,
BlogSection,
ContactSection,
FooterSection,
HireMeSection,
HomeSection,
NavSection,
ProjectsSection,
TechnicalSkillSection,
TestmonialSection
  ],
  templateUrl: './landing-page.html',
  styleUrls: ['./landing-page.css'],
})
export class LandingPage {
  isNavOpen = false;

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
    const sections = ['home', 'about', 'portfolio', 'testmonial', 'blog', 'contact'];

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
