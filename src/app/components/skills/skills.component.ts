import { Component } from '@angular/core';
import { Skill } from '../../interfaces/skill';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  skills: Skill[] = [
    // Frontend
    { name: 'Angular', level: 5, category: 'frontend' },
    { name: 'TypeScript', level: 5, category: 'frontend' },
    { name: 'JavaScript', level: 5, category: 'frontend' },
    { name: 'HTML/CSS', level: 4, category: 'frontend' },
    { name: 'Tailwind CSS', level: 4, category: 'frontend' },
    { name: 'React', level: 3, category: 'frontend' },

    // Backend
    { name: 'Node.js', level: 4, category: 'backend' },
    { name: 'Express', level: 4, category: 'backend' },
    { name: 'NestJS', level: 3, category: 'backend' },
    { name: 'Python', level: 3, category: 'backend' },
    { name: 'MongoDB', level: 4, category: 'backend' },
    { name: 'PostgreSQL', level: 3, category: 'backend' },

    // DevOps
    { name: 'Docker', level: 3, category: 'devops' },
    { name: 'CI/CD', level: 3, category: 'devops' },
    { name: 'AWS', level: 2, category: 'devops' },
    { name: 'Git', level: 4, category: 'devops' },

    // Outros
    { name: 'Scrum/Agile', level: 4, category: 'outros' },
    { name: 'UI/UX Design', level: 3, category: 'outros' },
    { name: 'TDD', level: 3, category: 'outros' },
    { name: 'Inglês', level: 4, category: 'outros' },
  ];

  getSkillsByCategory(category: string): Skill[] {
    return this.skills.filter((skill) => skill.category === category);
  }
}
