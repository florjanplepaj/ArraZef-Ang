import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css', './about.component.media.css'],
})
export class AboutComponent {
  translate: TranslateService = inject(TranslateService);
  translatText(lang: string) {
    this.translate.use(lang);
  }
}
