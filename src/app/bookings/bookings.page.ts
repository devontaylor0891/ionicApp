import { Component, OnInit } from '@angular/core';
import { BookingsService } from './bookings.service';
import { IonItemSliding } from '@ionic/angular';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {

  loadedBookings: any[];

  constructor(private bookingsService: BookingsService) { }

  ngOnInit() {

    this.loadedBookings = this.bookingsService._bookings;

  };

  onCancelBooking(id, slidingBooking: IonItemSliding) {
    slidingBooking.close();
    console.log('delete booking: ', id);
  }

}
