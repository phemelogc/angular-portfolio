import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css'
})
export class ProjectCard {

  @Input() project!: {
    title: string;
    description: string;
    image: string;
    github: string;
  };

  hover = false;
}
