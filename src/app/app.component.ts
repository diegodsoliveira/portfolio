import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { IdeComponent } from './components/ide/ide.component';
import { InterfaceComponent } from './components/interface/interface.component';
import { TerminalComponent } from './components/terminal/terminal.component';

@Component({
  selector: 'app-root',
  imports: [
    TerminalComponent,
    IdeComponent,
    InterfaceComponent,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'portfolio';
  activeView = signal<'terminal' | 'editor'>('terminal');
}
