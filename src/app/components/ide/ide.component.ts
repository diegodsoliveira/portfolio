import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CodeFile } from '../../interfaces/code-file';
import { EditorNavComponent } from '../editor-nav/editor-nav.component';
import Prism from  'prismjs';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-markup'; // para HTML

@Component({
  selector: 'app-ide',
  imports: [EditorNavComponent, RouterModule, CommonModule],
  templateUrl: './ide.component.html',
  styleUrl: './ide.component.scss',
})
export class IdeComponent {
  files = signal<CodeFile[]>([
    {
      name: 'about.ts',
      language: 'typescript',
      content: [
        'export class About {',
        '  name: string = "Seu Nome";',
        '  title: string = "Desenvolvedor Full Stack";',
        '  description: string = `',
        '    Desenvolvedor apaixonado por criar soluções elegantes',
        '    e eficientes para problemas complexos.',
        '    Especializado em Angular, Node.js e tecnologias modernas.`',
        '}',
      ],
    },
    {
      name: 'projects.json',
      language: 'json',
      content: [
        '{',
        '  "projects": [',
        '    {',
        '      "name": "Portfolio",',
        '      "description": "Um portfolio moderno inspirado em IDEs e terminais",',
        '      "technologies": ["Angular", "TypeScript", "Tailwind CSS"]',
        '    },',
        '    {',
        '      "name": "Projeto X",',
        '      "description": "Descrição do projeto X",',
        '      "technologies": ["React", "Node.js", "MongoDB"]',
        '    },',
        '    {',
        '      "name": "Projeto Y",',
        '      "description": "Descrição do projeto Y",',
        '      "technologies": ["Vue.js", "Express", "PostgreSQL"]',
        '    }',
        '  ]',
        '}',
      ],
    },
    {
      name: 'skills.ts',
      language: 'typescript',
      content: [
        'export interface Skill {',
        '  name: string;',
        '  level: number; // 1-5',
        '}',
        '',
        'export const frontendSkills: Skill[] = [',
        '  { name: "Angular", level: 5 },',
        '  { name: "TypeScript", level: 5 },',
        '  { name: "JavaScript", level: 5 },',
        '  { name: "HTML/CSS", level: 4 },',
        '  { name: "Tailwind CSS", level: 4 },',
        '  { name: "React", level: 3 }',
        '];',
        '',
        'export const backendSkills: Skill[] = [',
        '  { name: "Node.js", level: 4 },',
        '  { name: "Express", level: 4 },',
        '  { name: "NestJS", level: 3 },',
        '  { name: "Python", level: 3 },',
        '  { name: "MongoDB", level: 4 },',
        '  { name: "PostgreSQL", level: 3 }',
        '];',
      ],
    },
    {
      name: 'contact.html',
      language: 'html',
      content: [
        '<div class="contact-info">',
        '  <h2>Informações de Contato</h2>',
        '  <ul>',
        '    <li><strong>Email:</strong> <a href="mailto:diegodsoliveira@gmail.com">diegodsoliveira@gmail.com</a></li>',
        '    <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/diegodsoliveira/">linkedin.com/in/diegodsoliveira/</a></li>',
        '    <li><strong>GitHub:</strong> <a href="https://github.com/diegodsoliveira">github.com/diegodsoliveira</a></li>',
        '  </ul>',
        '</div>',
      ],
    },
  ]);

  activeFileIndex = signal(0);

  get activeFile(): CodeFile {
    return this.files()[this.activeFileIndex()];
  }

  ngOnInit() {
    // Certifique-se de que o Prism está disponível
    if (typeof Prism !== 'undefined') {
      Prism.highlightAll();
    }
  }

  highlightSyntax(line: string, language: string): string {
    const languageMap: { [key: string]: string } = {
      typescript: 'typescript',
      json: 'json',
      html: 'markup',
    };

    const prismLanguage = languageMap[language] || 'markup';

    try {
      // Verifique se o idioma está carregado
      if (Prism.languages[prismLanguage]) {
        return Prism.highlight(
          line,
          Prism.languages[prismLanguage],
          prismLanguage
        );
      } else {
        console.warn(`Idioma '${prismLanguage}' não carregado no Prism`);
        return line;
      }
    } catch (error) {
      console.error(`Erro ao destacar sintaxe: ${error}`);
      return line;
    }
  }
}
