import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import Writer from 't-writer.js'; 


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home implements AfterViewInit {
  ngAfterViewInit() {
    const target = document.getElementById('typewriter');

    if (target) {
      const writer = new Writer(target, {
        loop: true,
        typeSpeed: 70,
        deleteSpeed: 50,
        pauseSpeed: 1200,
      });

      writer
        .type('Upcoming Software Developer 👨‍💻')
        .rest(1000)
        .clear()
        .type('Front end developer 🛠️')
        .rest(1000)
        .clear()
        .type('Web Enthusiast 🌐')
        .rest(1000)
        .clear()
        .type('Problem Solver 🧠')
        .rest(1000)
        .clear()
        .start();
    }
  }
}
