import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillCard } from '../components/skill-card/skill-card';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebase';

@Component({
  selector: 'app-skills',
  imports: [CommonModule, SkillCard],
  standalone: true,
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills {

  skills: { name: string; icon: string }[] = [];

  async ngOnInit() {
    const querySnapshot = await getDocs(collection(db, 'skills'));
    this.skills = querySnapshot.docs.map(doc => doc.data() as any);
  }
}
