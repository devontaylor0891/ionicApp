import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-offers-item',
  templateUrl: './offers-item.component.html',
  styleUrls: ['./offers-item.component.scss'],
})
export class OffersItemComponent implements OnInit {

  @Input() offer: any;

  constructor() { }

  ngOnInit() {}

  getDummyDate() {
    return new Date()
  }

}
