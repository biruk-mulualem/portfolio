import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild, AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './projects-section.html',
  styleUrls: ['./projects-section.css'],
})
export class ProjectsSection implements AfterViewInit {
  @ViewChild('videoModal') videoModal!: ElementRef<HTMLDivElement>;
  @ViewChild('modalFrame') modalFrame!: ElementRef<HTMLDivElement>;

  currentVideo!: SafeResourceUrl;
 videoLoaded = false;

  currentYear = new Date().getFullYear();
  activeSection = 'home';
  isNavOpen = false;
  showDescription = false;

  // Draggable modal
  isDragging = false;
  offset = { x: 0, y: 0 };

  constructor(private sanitizer: DomSanitizer) {}

 projects = [

  {
    title: 'Spotlight Academy',
    description: ` An online learning platform where students complete structured lessons, watch video modules,
    take quizzes, and receive certificates upon course completion.`,
    stack: ['Angular', 'HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    image: 'assets/imgs/spotlight-academy.jpg',
    liveDemo: 'https://example.com', // optional
    github: 'https://github.com/yourusername/spotlight-academy', // optional
    video: 'https://youtu.be/example', // optional
    showFullDescription: false
  },
{
  title: 'Fidel Game',
  description: `Educational word game for children with drag-and-drop puzzles, scoring system, player rankings, rewards, and a simple, child-friendly interface focused usability.`,

  stack: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Game Logic'],
  image: 'assets/imgs/fidel-game.jpg',
  liveDemo: 'https://example.com', // optional
  github: 'https://github.com/yourusername/fidel-game', // optional
  video: 'https://youtu.be/example', // optional
  showFullDescription: false
},

 {
  title: 'Logistics Management System',
  description: `Logistics management system with real-time data handling, role-based access, form validation, routing, and a scalable, performance-focused user interface.`,
  stack: ['Angular', 'TypeScript', 'REST API', 'ASP.NET Web API', 'TailwindCSS'],
  image: 'assets/imgs/logistics-system.jpg',
  liveDemo: '', // optional
  github: 'https://github.com/yourusername/logistics-management-system', // optional
  video: '',
  showFullDescription: false
},
{
  title: 'Super Website',
  description: `Company website designed to showcase products and corporate information to the public, providing clear navigation and an accessible, user-friendly browsing experience.`,
  stack: ['HTML', 'CSS', 'JavaScript'],
  image: 'assets/imgs/super-website.jpg',
  liveDemo: 'https://rodaspaints.netlify.app',
  github: '',
  video: '',
  showFullDescription: false
},


];


  // ================= Scroll / Nav Methods =================
  smoothScroll(event: Event): void {
    event.preventDefault();
    const target = event.target as HTMLAnchorElement;
    const hash = target.getAttribute('href');
    if (hash) {
      const element = document.querySelector(hash);
      if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.pushState(null, '', hash);
    }
  }

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

  // ================= YouTube Video Modal =================

openVideoModal(videoUrl: string) {
  const videoId = this.getYoutubeId(videoUrl);
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  this.currentVideo = this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
  this.videoLoaded = false; // show loader until iframe loads

  this.videoModal.nativeElement.classList.remove('hidden');
}

closeVideoModal() {
  this.videoModal.nativeElement.classList.add('hidden');
  this.currentVideo = null!;
}

  private getYoutubeId(url: string): string {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : '';
  }

  // ================= Draggable Modal =================
ngAfterViewInit() {
  const modal = this.modalFrame.nativeElement;

  // Drag only from border (not iframe)
  modal.addEventListener('mousedown', (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.tagName === 'IFRAME') return; // avoid iframe
    this.isDragging = true;
    this.offset.x = e.clientX - modal.offsetLeft;
    this.offset.y = e.clientY - modal.offsetTop;
    modal.style.position = 'absolute';
    e.preventDefault();
  });

  document.addEventListener('mousemove', (e: MouseEvent) => {
    if (!this.isDragging) return;
    modal.style.left = `${e.clientX - this.offset.x}px`;
    modal.style.top = `${e.clientY - this.offset.y}px`;
  });

  document.addEventListener('mouseup', () => (this.isDragging = false));
}

}
