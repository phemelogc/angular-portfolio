import { Component } from '@angular/core';
import emailjs from 'emailjs-com';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule], // ✅ Add FormsModule here
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {

  onSubmit() {
    emailjs.sendForm(
      'service_41bqtcf',       
      'template_vl1ddfj',      
      document.querySelector('form')!,
      '11y2lTvIPJazh-l-x'        
    ).then(
      (result) => {
        alert('Message sent successfully!');
      },
      (error) => {
        alert('There was an error. Please try again.');
        console.error(error);
      }
    );
  }
}
