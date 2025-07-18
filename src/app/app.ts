import { Component, HostListener, OnInit } from '@angular/core';
import { Home } from "./home/home";
import { About } from './about/about';
import { Projects } from './projects/projects';
import { Skills } from './skills/skills';
import { Contact } from './contact/contact';


import AOS from 'aos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Home,
    About,
    Projects,
    Skills,
    Contact
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit {
  protected title = 'my-portfolio';

  // Scroll listener for highlighting active nav link and refreshing AOS
  @HostListener('window:scroll', [])
  onScroll(): void {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    let currentSectionId = '';
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 150 && rect.bottom >= 150) {
        currentSectionId = section.id;
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });

    //  Refreshing AOS animations on scroll
    AOS.refresh();
  }

  // Smooth scroll and AOS init
  ngOnInit(): void {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', event => {
        event.preventDefault();
        const targetId = link.getAttribute('href')?.substring(1);
        const targetSection = document.getElementById(targetId!);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

    
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out'
    });
  }
}
