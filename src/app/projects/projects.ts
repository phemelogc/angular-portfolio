import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCard } from '../components/project-card/project-card';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebase';
@Component({
  selector: 'app-projects',
  imports: [CommonModule, ProjectCard],
  standalone: true,
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects implements OnInit {

  projects: {
    title: string;
    description: string;
    image: string;
    github: string;
  }[] = [];

  async ngOnInit() {
    const querySnapshot = await getDocs(collection(db, 'projects'));
    this.projects = querySnapshot.docs.map(doc => doc.data() as any)
  }
}