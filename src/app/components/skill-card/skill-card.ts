import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill-card',
  imports: [],
  standalone: true,
  templateUrl: './skill-card.html',
  styleUrl: './skill-card.css'
})
export class SkillCard {

  @Input() skill!: { name: string; icon: string };
}
