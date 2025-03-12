import { Component, signal } from '@angular/core';
import { EditorNavComponent } from "../editor-nav/editor-nav.component";
import { RouterOutlet } from '@angular/router';
import { CodeFile } from '../../interfaces/code-file';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ide',
  imports: [EditorNavComponent, RouterOutlet, CommonModule],
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
        '    <li><strong>Email:</strong> <a href="mailto:seu.email@exemplo.com">seu.email@exemplo.com</a></li>',
        '    <li><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/seu-perfil">linkedin.com/in/seu-perfil</a></li>',
        '    <li><strong>GitHub:</strong> <a href="https://github.com/seu-usuario">github.com/seu-usuario</a></li>',
        '  </ul>',
        '</div>',
      ],
    },
  ]);

  activeFileIndex = signal(0);

  get activeFile(): CodeFile {
    return this.files()[this.activeFileIndex()];
  }

  highlightSyntax(line: string, language: string): string {
    // Implementação simples de destaque de sintaxe
    let highlighted = line;

    if (language === 'typescript') {
      // Destacar palavras-chave
      highlighted = highlighted.replace(
        /(export|class|interface|const|let|function|return|if|else|for|while|import|from|extends|implements)/g,
        '<span class="text-editor-keyword">$1</span>'
      );

      // Destacar tipos
      highlighted = highlighted.replace(
        /:\s*([A-Za-z]+)(\[\])?/g,
        ': <span class="text-editor-function">$1$2</span>'
      );

      // Destacar strings
      highlighted = highlighted.replace(
        /(['"`])(.*?)(['"`])/g,
        '<span class="text-editor-string">$1$2$3</span>'
      );

      // Destacar números
      highlighted = highlighted.replace(
        /\b(\d+)\b/g,
        '<span class="text-editor-number">$1</span>'
      );

      // Destacar comentários
      highlighted = highlighted.replace(
        /(\/\/.*$)/g,
        '<span class="text-editor-comment">$1</span>'
      );
    } else if (language === 'json') {
      // Destacar chaves
      highlighted = highlighted.replace(
        /"([^"]+)":/g,
        '"<span class="text-editor-keyword">$1</span>":'
      );

      // Destacar strings
      highlighted = highlighted.replace(
        /("[^"]*")(,)?/g,
        '<span class="text-editor-string">$1</span>$2'
      );

      // Destacar números
      highlighted = highlighted.replace(
        /\b(\d+)\b/g,
        '<span class="text-editor-number">$1</span>'
      );
    } else if (language === 'html') {
      // Destacar tags
      highlighted = highlighted.replace(
        /(&lt;[\/]?)([a-zA-Z0-9]+)([^&gt;]*&gt;)/g,
        '$1<span class="text-editor-keyword">$2</span>$3'
      );

      // Destacar atributos
      highlighted = highlighted.replace(
        /(\s)([a-zA-Z0-9-]+)(=)/g,
        '$1<span class="text-editor-function">$2</span>$3'
      );

      // Destacar strings
      highlighted = highlighted.replace(
        /("[^"]*")/g,
        '<span class="text-editor-string">$1</span>'
      );
    }

    return highlighted;
  }
}
