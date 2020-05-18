import { Injectable } from '@angular/core';

import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private _places: Place[] = [
    new Place(
      'p1',
      'Manhattan Mansion',
      'In the heart of NYC.',
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/residence-belonging-to-jeffrey-epstein-at-east-71st-street-news-photo-1154623802-1562773477.jpg?crop=1.00xw:0.669xh;0,0.178xh&resize=480:*',
      500.01
    ),
    new Place(
      'p2',
      'Long Island Mansion',
      'In the heart of Long Island.',
      'https://static1.mansionglobal.com/production/media/article-images/5b4e02e5d88bf8472133e226bb136a3d/large_fifthavenue.jpg',
      49.00
    ),
    new Place(
      'p3',
      'Hell House',
      'Uh oh',
      'https://filmschoolrejects.com/wp-content/uploads/2019/09/hell-house-llc-1280x720.jpg',
      159.99
    )
  ];

  get places() {
    return [...this._places];
  };

  getPlace(id: string) {
    return {...this._places.find(p => p.id === id)};
  }

  constructor() { }
}
