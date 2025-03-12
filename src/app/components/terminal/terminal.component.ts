import { FormsModule } from '@angular/forms';
import { Component, effect, ElementRef, ViewChild } from '@angular/core';
import { TerminalService } from '../../../services/terminal.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-terminal',
  imports: [CommonModule, FormsModule],
  templateUrl: './terminal.component.html',
  styleUrl: './terminal.component.scss',
})
export class TerminalComponent {
  @ViewChild('terminalContainer') terminalContainer!: ElementRef;
  @ViewChild('commandInput') commandInput!: ElementRef;

  currentCommand = '';

  constructor(public terminalService: TerminalService) {
    effect(() => {
      // Quando o histórico muda, rola para o final
      this.terminalService.history();
      setTimeout(() => this.scrollToBottom(), 0);
    });
  }

  ngAfterViewInit() {
    this.focusCommandInput();
    this.scrollToBottom();
  }

  executeCommand() {
    if (this.currentCommand.trim()) {
      this.terminalService.executeCommand(this.currentCommand);
      this.currentCommand = '';
      setTimeout(() => this.focusCommandInput(), 0);
    }
  }

  focusCommandInput() {
    if (this.commandInput?.nativeElement) {
      this.commandInput.nativeElement.focus();
    }
  }

  scrollToBottom() {
    if (this.terminalContainer?.nativeElement) {
      const container = this.terminalContainer.nativeElement;
      container.scrollTop = container.scrollHeight;
    }
  }
}
