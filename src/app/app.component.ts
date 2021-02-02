import { Component } from '@angular/core';
import { CacheService } from 'ionic-cache';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(cache: CacheService) {
    cache.setDefaultTTL(60*60);
    cache.setOfflineInvalidate(false);
  }
}
