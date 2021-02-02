import { CacheService } from 'ionic-cache';

import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private http: HttpClient, private cache: CacheService) {}
  public apiData: any = null;

  ionViewDidEnter(){
    this.getData();

  }

  getData(){
    const URL = "https://picsum.photos/v2/list?limit=10";
    //  this.http.get(URL).subscribe((data)=>{
    //    console.log(data);
    //  })

    const request = this.http.get(URL);
    this.cache.loadFromObservable('myCacheKey', request).subscribe((data)=>{
      console.log("Data", data);
      this.apiData= data;
    })
  }
}
