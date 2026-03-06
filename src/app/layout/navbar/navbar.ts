import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    if (this.menuOpen) {
    document.body.classList.add('no-scroll');
  } else {
    document.body.classList.remove('no-scroll');
  }
  }
  closeMenu() {
    this.menuOpen = false;
    document.body.classList.remove('no-scroll');
  }

 

}
