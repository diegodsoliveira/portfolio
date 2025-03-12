import { Component } from '@angular/core';

@Component({
  selector: 'app-interface',
  imports: [],
  templateUrl: './interface.component.html',
  styleUrl: './interface.component.scss',
})
export class InterfaceComponent {
  get currentYear(): number {
    return new Date().getFullYear();
  }
}
