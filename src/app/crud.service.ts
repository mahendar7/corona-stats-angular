import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  BASE_URL = "https://corona.lmao.ninja/v2/";

  counts: {
    total: '',
    recovered: '',
    dead: ''
  };

  counts2: any;

  constructor(private http: HttpClient) { }

  getCounts() {
    // this.http.get(this.BASE_URL + 'all').subscribe(res => {
    //   this.counts2 = res;
    //   console.log(this.counts2);
    // })
  }

}

