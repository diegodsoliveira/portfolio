import { Component } from '@angular/core';
import { Project } from '../../interfaces/project';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      name: 'Portfolio Terminal',
      description:
        'Um portfolio moderno inspirado em terminais e IDEs, criado com Angular e Tailwind CSS.',
      technologies: ['Angular', 'TypeScript', 'Tailwind CSS', 'RxJS'],
      repoUrl: 'https://github.com/seu-usuario/portfolio',
      demoUrl: 'https://seu-portfolio.com',
    },
    {
      name: 'Projeto X',
      description:
        'Um sistema completo para gerenciamento de tarefas com autenticação e tempo real.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      repoUrl: 'https://github.com/seu-usuario/projeto-x',
    },
    {
      name: 'Projeto Y',
      description:
        'API RESTful para um sistema de e-commerce com processamento de pagamentos.',
      technologies: ['Express', 'PostgreSQL', 'TypeORM', 'Docker'],
      repoUrl: 'https://github.com/seu-usuario/projeto-y',
    },
    // Adicione mais projetos conforme necessário
  ];
}
