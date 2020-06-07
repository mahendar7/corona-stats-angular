import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() openDonationFormForMe = new EventEmitter()

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  openDonationForm() {
    this.openDonationFormForMe.emit();
    console.log('emitted')
  }

  openGoogle() {
    window.location.href = 'https://www.google.com/search?q=covid-19&oq=covid-19';
  }

}
