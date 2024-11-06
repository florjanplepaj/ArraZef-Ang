import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-services-c',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './services-c.component.html',
  styleUrls: ['./services-c.component.css', './services-c.component.media.css'],
})
export class ServicesCComponent {
  translate: TranslateService = inject(TranslateService);
  translatText(lang: string) {
    this.translate.use(lang);
  }
}
