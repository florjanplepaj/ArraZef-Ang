import { NgIf } from '@angular/common';
import {
  HttpClient,
  HttpClientModule,
  HttpHeaders,
} from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule, NgIf, HttpClientModule, TranslateModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css', './contact.component.media.css'],
})
export class ContactComponent {
  formSubmitted = false;
  formError = false;

  translate: TranslateService = inject(TranslateService);
  translatText(lang: string) {
    this.translate.use(lang);
  }

  constructor(private http: HttpClient) {}
  isEmailValid: boolean = true;
  onSubmit(f: NgForm) {
    const formData = f.value;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    // Ensure you replace 'YOUR_FORM_ID' with the actual form ID
    this.http
      .post('https://formspree.io/f/xbljgwpw', JSON.stringify(formData), {
        headers,
      })
      .subscribe({
        next: (response) => {
          // Handle success
          console.log('Success!', response);
          this.formSubmitted = true;
          this.formError = false;
          f.resetForm(); // Reset the form after successful submission
        },
        error: (error) => {
          // Handle error
          console.error('Error!', error);
          this.formSubmitted = false;
          this.formError = true;
        },
        complete: () => {
          // Optional: code that runs when the observable completes
          console.log('Form submission complete');
          console.log(formData);
        },
      });
  }
}
