import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  imports: [],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.css',
})
export class HeroSection {
   scrollToServices() {
  const element = document.getElementById('services-section');
  if(element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
}
