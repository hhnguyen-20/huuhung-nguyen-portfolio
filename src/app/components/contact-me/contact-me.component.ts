import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent {
  formspreeUrl: string = 'https://formspree.io/f/xldeygoo';

  emailSent = false; // Flag to indicate if email was successfully sent
  emailError = false; // Flag to indicate if there was an error

  emailForm = this.fb.group({
    name: ['', Validators.required],
    subject: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required],
  });

  constructor(private fb: FormBuilder, private httpClient: HttpClient) {
  }

  sendEmail() {
    const formValue = this.emailForm.value;
    const name = encodeURIComponent(formValue.name as string);
    const subject = encodeURIComponent(formValue.subject as string);
    const email = encodeURIComponent(formValue.email as string);
    const message = encodeURIComponent(formValue.message as string);

    const data = `name=${name}&subject=${subject}&email=${email}&message=${message}`;

    const httpOptions = {
      headers: new HttpHeaders({
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      }),
    };

    this.httpClient.post<any>(this.formspreeUrl, data, httpOptions).subscribe({
      next: (res) => {
        console.log('Email sent successfully:', res);
        this.emailForm.reset();
        this.emailSent = true;
        this.emailError = false;
      },
      error: (error) => {
        console.error('Error sending email:', error);
        this.emailError = true;
        this.emailSent = false;
      },
    });
  }
}
