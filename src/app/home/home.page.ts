import { CacheService } from 'ionic-cache';

import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ImageLoaderConfigService } from 'ionic-image-loader-v5';
import { IonicImageLoaderComponent } from 'ionic-image-loader-v5';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private http: HttpClient, private cache: CacheService, private imageLoaderConfig: ImageLoaderConfigService) {
    // this.imageLoaderConfig.enableSpinner(true);
    this.imageLoaderConfig.enableFallbackAsPlaceholder(true);
    this.imageLoaderConfig.setFallbackUrl('https://www.ladn.eu/wp-content/uploads/2016/08/6356938644488566691013182599_grumpy-cat-1200x630.jpg');
  }
  public apiData: any = null;

  ionViewDidEnter(){

  }

  getData(){
    const URL = "https://picsum.photos/v2/list?limit=10";

    const request = this.http.get(URL);
    this.cache.loadFromObservable('myCacheKey', request).subscribe((data)=>{
      console.log("Data", data);
      this.apiData= data;
    })
  }

  clearCache(){
    this.cache.clearAll();
  }

  clearView(){
    this.apiData = null;

  }

  onImageLoad(imgLoader: IonicImageLoaderComponent) {
    console.log(imgLoader);
    console.log("Chargement images de la liste youhouhou");
  }
}
