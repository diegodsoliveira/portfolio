import { Injectable, signal } from '@angular/core';

export interface TerminalLine {
  type: 'prompt' | 'command' | 'output' | 'error' | 'title';
  content: string;
}

@Injectable({
  providedIn: 'root',
})
export class TerminalService {
  history = signal<TerminalLine[]>([
    { type: 'title', content: 'Welcome to Diego Portfolio v1.0.0' },
    { type: 'output', content: "Type 'help' to see available commands." },
  ]);

  private readonly availableCommands = {
    help: 'Mostra a lista de comandos disponíveis',
    about: 'Mostra informações sobre mim',
    projects: 'Lista os projetos que desenvolvi',
    skills: 'Mostra minhas habilidades técnicas',
    contact: 'Mostra minhas informações de contato',
    clear: 'Limpa o terminal',
    exit: 'Volta para o modo de visualização padrão',
  };

  constructor() {}

  executeCommand(command: string) {
    // Adiciona o comando à história
    this.addLine('command', command);

    // Executa o comando
    const cmd = command.trim().toLowerCase();

    if (cmd === 'help') {
      this.showHelp();
    } else if (cmd === 'about') {
      this.showAbout();
    } else if (cmd === 'projects') {
      this.showProjects();
    } else if (cmd === 'skills') {
      this.showSkills();
    } else if (cmd === 'contact') {
      this.showContact();
    } else if (cmd === 'clear') {
      this.clearTerminal();
    } else if (cmd === '') {
      // Não faz nada para comando vazio
    } else {
      this.addLine(
        'error',
        `Command not found: ${command}. Type 'help' to see available commands.`
      );
    }

    // Adiciona um novo prompt
    this.addLine('prompt', '> ');
  }

  private addLine(type: TerminalLine['type'], content: string) {
    this.history.update((lines) => [...lines, { type, content }]);
  }

  private showHelp() {
    this.addLine('output', 'Available commands:');
    for (const [cmd, desc] of Object.entries(this.availableCommands)) {
      this.addLine('output', `  ${cmd.padEnd(10)} - ${desc}`);
    }
  }

  private showAbout() {
    this.addLine('output', '=== Sobre Mim ===');
    this.addLine(
      'output',
      'Desenvolvedor Full Stack apaixonado por criar soluções elegantes e eficientes.'
    );
    this.addLine(
      'output',
      'Especializado em Angular, Node.js e tecnologias modernas de desenvolvimento web.'
    );
    // Adicione mais informações sobre você aqui
  }

  private showProjects() {
    this.addLine('output', '=== Meus Projetos ===');
    this.addLine(
      'output',
      '1. Portfolio - Um portfolio moderno inspirado em terminais e IDEs'
    );
    this.addLine('output', '2. Projeto X - Descrição do projeto X');
    this.addLine('output', '3. Projeto Y - Descrição do projeto Y');
    // Adicione seus projetos aqui
  }

  private showSkills() {
    this.addLine('output', '=== Minhas Habilidades ===');
    this.addLine(
      'output',
      'Frontend: Angular, React, TypeScript, JavaScript, HTML, CSS, Tailwind'
    );
    this.addLine('output', 'Backend: Node.js, Express, NestJS, Python');
    this.addLine('output', 'Bancos de Dados: MongoDB, PostgreSQL, MySQL');
    this.addLine('output', 'DevOps: Docker, Kubernetes, CI/CD, AWS');
    // Adicione suas habilidades aqui
  }

  private showContact() {
    this.addLine('output', '=== Contato ===');
    this.addLine('output', 'Email: seu.email@exemplo.com');
    this.addLine('output', 'LinkedIn: linkedin.com/in/seu-perfil');
    this.addLine('output', 'GitHub: github.com/seu-usuario');
    // Adicione suas informações de contato aqui
  }

  private clearTerminal() {
    this.history.set([{ type: 'output', content: 'Terminal limpo.' }]);
  }
}
