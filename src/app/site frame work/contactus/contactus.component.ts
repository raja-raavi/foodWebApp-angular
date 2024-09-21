import { Component } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {
  submissionMessage: string = '';

  onSubmit(form: any) {
    if (form.valid) {
      // Simulate form submission
      this.submissionMessage = 'Thank you for contacting us! We will get back to you soon.';
      form.reset(); // Reset the form after submission
    } else {
      this.submissionMessage = 'Please fill out the form correctly before submitting.';
    }
  }
}
