import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationcardsComponent } from './donationcards.component';

describe('DonationcardsComponent', () => {
  let component: DonationcardsComponent;
  let fixture: ComponentFixture<DonationcardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonationcardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
