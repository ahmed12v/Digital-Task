import { ChangeDetectionStrategy, Component, HostListener } from '@angular/core';
import { ScrollRevealDirective } from '../../shared/directives/danimation';

@Component({
  selector: 'app-about-us',
  imports: [ScrollRevealDirective],
  templateUrl: './about-us.html',
  styleUrl: './about-us.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutUs {
  stats = [
    { id: 1, label: 'Satisfied Clients', target: 120, current: 0 },
    { id: 2, label: 'Success Partners', target: 50, current: 0 },
    { id: 3, label: 'Creative Ideas', target: 300, current: 0 },
    { id: 4, label: 'Pending Projects', target: 15, current: 0 },
  ];
  trackById(index: number, item: any): number {
    return item.id;
  }

  counterStarted = false;

  @HostListener('window:scroll', [])
  onScroll() {
    const section = document.querySelector('.numbers-section');
    if (section && !this.counterStarted) {
      const top = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (top <= windowHeight * 0.8) {
        this.startCounting();
        this.counterStarted = true;
      }
    }
  }

  startCounting() {
    this.stats.forEach((stat) => {
      const increment = Math.ceil(stat.target / 100);
      const interval = setInterval(() => {
        if (stat.current < stat.target) {
          stat.current += increment;
          if (stat.current > stat.target) stat.current = stat.target;
        } else {
          clearInterval(interval);
        }
      }, 20);
    });
  }
}
