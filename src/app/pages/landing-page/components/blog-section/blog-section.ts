import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blog-section',
  imports: [CommonModule,FormsModule],
  templateUrl: './blog-section.html',
  styleUrl: './blog-section.css',
})
export class BlogSection {
blogs = [
  {
    title: 'Building an Online Learning Platform with Angular',
    image: 'assets/imgs/spotlight-academy.jpg',
    tags: 'Angular · Frontend Architecture',
     dates:'Dec 21, 2025',
    preview: `Spotlight Academy is an online learning platform where students follow structured lessons,
    watch video modules, complete quizzes, and earn certificates.`,
    content: `
      <p>
        I built this project using Angular with a strong focus on component reusability and clean routing.
        Each major feature such as courses, lessons, quizzes, and certificates was implemented as a
        separate component.
      </p>
      <p>
        Responsive design was a priority, ensuring the platform works smoothly on both mobile and desktop.
        I focused on simple navigation and a clean UI to improve the learning experience.
      </p>
      <p>
        This project strengthened my understanding of scalable frontend architecture and real-world
        application design.
      </p>
    `,
    expanded: false
  },
  {
    title: 'Designing an Educational Word Game for Children',
    image: 'assets/imgs/spotlight-academy.jpg',
    tags: 'Angular · Game Logic · UX',
     dates:'Dec 21, 2025',
    preview: `Fidel Game is an educational word game designed to help children learn through interactive
    drag-and-drop puzzles.`,
    content: `
      <p>
        The game includes scoring logic, player rankings, and rewards. I implemented the core game logic
        using Angular and TypeScript while keeping the interface simple and child-friendly.
      </p>
      <p>
        Performance and usability were important considerations to ensure smooth interactions even on
        low-end devices.
      </p>
      <p>
        This project helped me improve my skills in interactive UI development and frontend logic handling.
      </p>
    `,
    expanded: false
  },
  {
    title: 'Developing a Scalable Logistics Management System',
    image: 'assets/imgs/logistics-system.jpg',
    dates:'Dec 21, 2025',
    tags: 'Angular · ASP.NET API · Real Systems',
    preview: `This logistics management system was built to support real business workflows and internal
    operations.`,
    content: `
      <p>
        I developed the frontend using Angular, implementing role-based access, routing, form validation,
        and REST API integration with an ASP.NET Web API backend.
      </p>
      <p>
        The focus was on performance, maintainability, and clean UI patterns for internal users.
      </p>
      <p>
        This project gave me strong experience working with real-world requirements and API-driven
        applications.
      </p>
    `,
    expanded: false
  },
  {
    title: 'Technologies I Use as a Frontend Developer',
    image: 'assets/imgs/header1.png',
     dates:'Dec 21, 2025',
    tags: 'Angular · TypeScript · Tailwind',
    preview: `Over time, I have worked with different tools to build responsive and maintainable web
    applications.`,
    content: `
      <p>
        Angular is my primary framework due to its strong structure, scalability, and TypeScript support.
        I also use Tailwind CSS and standard CSS for fast and responsive UI development.
      </p>
      <p>
        My IT support background helps me understand how frontend applications interact with servers,
        APIs, and infrastructure.
      </p>
      <p>
        These technologies allow me to build production-ready applications with confidence.
      </p>
    `,
    expanded: false
  }
];
toggleBlog(index: number) {
  this.blogs[index].expanded = !this.blogs[index].expanded;
}

}
