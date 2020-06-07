import { environment } from './../../environments/environment';
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
  URL = environment.BASE_URL;

  @Input('count') count: string;
  constructor(private crud: CrudService, private http: HttpClient) { }

  ngOnInit() {

    this.http.get(this.URL + 'all').subscribe(res => {
      this.counts = res;
      console.log(this.counts);
    });

  }
}
