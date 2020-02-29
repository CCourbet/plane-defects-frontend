import { Component } from '@angular/core';
import { ElectronService } from './core/services';
import { TranslateService } from '@ngx-translate/core';
import { AppConfig } from '../environments/environment';
import { LoginService } from './shared/services/login.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    public electronService: ElectronService,
    private translate: TranslateService,
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {
    this.translate.setDefaultLang('en');
    console.log('AppConfig', AppConfig);
    this.registerSVGImages(this.iconRegistry, this.sanitizer);

  }

  /**
  * Register all project SVG icons
  * @param iconRegistry the object allowing to register the SVG
  * @param sanitizer the object allowing to bypass the Security Trust Resource url
  */
  registerSVGImages(iconRegistry, sanitizer) {
    iconRegistry.addSvgIcon('visibility', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/visibility.svg'));
    iconRegistry.addSvgIcon('visibility_off', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/visibility_off.svg'));
  }

}
