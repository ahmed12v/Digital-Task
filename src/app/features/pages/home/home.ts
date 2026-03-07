import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Navbar } from '../../../layout/navbar/navbar';
import { Footer } from '../../../layout/footer/footer';
import { AboutUs } from '../../../components/about-us/about-us';
import { ContactUs } from '../../../components/contact-us/contact-us';
import { HeroSection } from '../../../components/hero-section/hero-section';
import { Reviews } from '../../../components/reviews/reviews';
import { OurServices } from '../../../components/our-services/our-services';
import { ScrollRevealDirective } from '../../../shared/directives/danimation';

@Component({
  selector: 'app-home',
  imports: [Navbar, Footer, AboutUs, ContactUs, HeroSection, Reviews, OurServices , ScrollRevealDirective],
  templateUrl: './home.html',
  styleUrl: './home.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Home {}
