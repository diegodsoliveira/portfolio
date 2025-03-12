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

    // Backend
    { name: 'Java', level: 4, category: 'backend' },
    { name: 'Springboot', level: 4, category: 'backend' },
    { name: 'PostgreSQL', level: 3, category: 'backend' },
    { name: 'RabbitMQ', level: 3, category: 'backend' },
    { name: 'Kafka', level: 2, category: 'backend' },

    // DevOps
    { name: 'Docker', level: 3, category: 'devops' },
    { name: 'Swarm', level: 2, category: 'devops' },
    { name: 'CI/CD', level: 3, category: 'devops' },
    { name: 'Git', level: 4, category: 'devops' },
    { name: 'Linux', level: 4, category: 'devops' },

    // Outros
    { name: 'Scrum/Agile', level: 4, category: 'outros' },
    { name: 'UI/UX Design', level: 3, category: 'outros' },
    { name: 'TDD', level: 3, category: 'outros' },
    { name: 'Elementor', level: 4, category: 'outros' },
    { name: 'Wordpress', level: 3, category: 'outros' },
    { name: 'Python', level: 2, category: 'outros' },
    { name: 'Inglês', level: 4, category: 'outros' },
  ];

  getSkillsByCategory(category: string): Skill[] {
    return this.skills.filter((skill) => skill.category === category);
  }
}
