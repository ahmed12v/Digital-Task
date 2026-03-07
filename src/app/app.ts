import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ScrollBtn } from './shared/Addtions/scroll-btn/scroll-btn';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet , ScrollBtn],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('DigitalBondTask');
}
