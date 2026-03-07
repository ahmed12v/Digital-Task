import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';


@Component({
  selector: 'app-scroll-btn',
  imports: [CommonModule],
  templateUrl: './scroll-btn.html',
  styleUrl: './scroll-btn.css',
})
export class ScrollBtn {
  showBtn = false ; 
  @HostListener('window:scroll', [])
  onWindowScroll(){
    const scroly = window.scrollY || document.documentElement.scrollTop ;
    this.showBtn = scroly > 200 

  }
  
    scrolTop(){
      window.scrollTo({
        top : 0 ,
        behavior : 'smooth'
      })
    }

}
