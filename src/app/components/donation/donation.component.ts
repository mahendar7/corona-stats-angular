import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ExternalLibraryService } from './util';

declare let Razorpay: any;

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.scss']
})
export class DonationComponent implements OnInit {
  closeResult = '';

  name: string;
  amount: string;

  response;
  razorpayResponse;
  showModal = false;

  constructor(
    private modalService: NgbModal,
    private razorpayService: ExternalLibraryService,
    private cd: ChangeDetectorRef,
    private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.razorpayService
      .lazyLoadLibrary('https://checkout.razorpay.com/v1/checkout.js')
      .subscribe();
  }

  /* Assigning Options */
  RAZORPAY_OPTIONS = {
    "key": "rzp_live_u6VelclugdamMx",
    "amount": this.amount,
    "name": this.name,
    "order_id": "",
    "description": "Covid-19 Donation",
    "image": "https://images.financialexpress.com/2020/03/coronav660.jpg",
    "prefill": {
      "name": name,
      "email": '',
      "contact": '',
      "method": ""
    },
    "modal": {},
    "theme": {
      "color": "#0096C5"
    }
  };

  /* Function to Intialize RazorPay*/
  public payNow() {
    this.RAZORPAY_OPTIONS.amount = this.amount + '00';

    // binding this object to both success and dismiss handler
    this.RAZORPAY_OPTIONS['handler'] = this.razorPaySuccessHandler.bind(this);

    // this.showPopup();
    let razorpay = new Razorpay(this.RAZORPAY_OPTIONS)
    razorpay.open();
  }

  /* Response Handling */
  public razorPaySuccessHandler(response) {
    if (response.razorpay_payment_id) {
      this.openSnackBar("Payment Success ,Transaction ID : " + response.razorpay_payment_id, 'OK')
    }
    this.razorpayResponse = `Razorpay Response`;
    this.cd.detectChanges()
  }


  /* SnackBar for Payment Success */
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  /* Donation-Form-Model */
  open(donationform) {
    console.log('opened')
    this.modalService.open(donationform, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  /*Donation Form Close */
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }


}

