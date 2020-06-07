import { CrudService } from './../crud.service';
import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  counts: any;
  BASE_URL = "https://corona.lmao.ninja/v2/";

  @Input('count') count: string;
  constructor(private crud: CrudService, private http: HttpClient) { }

  ngOnInit() {

    this.http.get(this.BASE_URL + 'all').subscribe(res => {
      this.counts = res;
      console.log(this.counts);
    });

  }
}
