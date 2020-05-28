import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';

import { SegmentChangeEventDetail } from '@ionic/core'

import { Place } from '../place.model';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  loadedPlaces: Place[];

  constructor(private placesService: PlacesService,
              private menuCtrl: MenuController) { }

  ngOnInit() {

    this.loadedPlaces = this.placesService.places;

  };

  onOpenMenu() {
    this.menuCtrl.toggle();
  }

  onFilterUpdate(event: CustomEvent<SegmentChangeEventDetail>) {
    console.log('event: ', event.detail);
  }

}
