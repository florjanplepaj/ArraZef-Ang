import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataCovers {
  private covers = [
    {
      id: '1e4e7f90-ad6f-4f50-b71e-20dcae6d82f9',
      name: 'Piscina a Sfioro',
      location: 'Turin, Italy',
      pics: [
        'Image/Covers/cover-pic-2.jpg',
        'Image/Projects/pictures-of-pic-2/pic-8.jpg',
        'Image/Projects/pictures-of-pic-2/pic-10.jpg',
        'Image/Projects/pictures-of-pic-2/pic-16.jpg',
      ],
      type: 'piscina',
    },
    {
      id: 'ec53161d-4e81-4dff-8eaa-7c650f012dcf',
      name: 'Concrete Pool',
      location: 'Turin, Italy',
      pics: [
        'Image/Projects/pictures-of-pic-3/cover-pic-3.jpg',
        'Image/Projects/pictures-of-pic-3/pic-7.jpg',
        'Image/Projects/pictures-of-pic-3/pic-9.jpg',
        'Image/Projects/pictures-of-pic-3/pic-11.jpg',
        'Image/Projects/pictures-of-pic-3/pic-15.jpg',
        'Image/Projects/pictures-of-pic-3/pic-18.jpg',
      ],
      type: 'piscina',
    },
    {
      id: '88ae39bc-f1ee-4c44-a4d2-b819973710c0',
      name: 'Ristrutturazione Cascina',
      location: 'Roddino(CN), Italy',
      pics: [
        'Image/Covers/cover-pic-4.jpg',
        'Image/Projects/pictures-of-pic-4/pic-21.jpg',
        'Image/Projects/pictures-of-pic-4/pic-22.jpg',
        'Image/Projects/pictures-of-pic-4/pic-25.jpg',
        'Image/Projects/pictures-of-pic-4/pic-26.jpg',
      ],
      type: 'restruction',
    },

    {
      id: '5e38987d-5656-4440-a41d-cf3e4a677a66',
      name: 'Costruzione Edificio Comunale',
      location: 'Cissone, Italy',
      pics: [
        'Image/Covers/cover-pic-5.jpg',
        'Image/Projects/pictures-of-pic-5/pic-20.jpg',
      ],
      type: 'residenza',
    },
    {
      id: '62a39ac0-6ac1-4097-9d4f-5342ff6dcf55',
      name: 'Costruzione Villa Residenziale',
      location: 'Alba Turin, Italy',
      pics: [
        'Image/Covers/cover-pic-1.jpg',
        'Image/Projects/pictures-of-pic-6/pic-1.JPG',
        'Image/Projects/pictures-of-pic-6/pic-2.JPG',
        'Image/Projects/pictures-of-pic-6/pic-3.JPG',

        'Image/Projects/pictures-of-pic-1/pic-2.jpg',
        'Image/Projects/pictures-of-pic-1/pic-3.jpg',
        'Image/Projects/pictures-of-pic-1/pic-4.jpg',
        'Image/Projects/pictures-of-pic-1/pic-5.jpg',
        'Image/Projects/pictures-of-pic-1/pic-6.jpg',
        'Image/Projects/pictures-of-pic-1/pic-12.jpg',
        'Image/Projects/pictures-of-pic-1/pic-13.jpg',
        'Image/Projects/pictures-of-pic-1/pic-14.jpg',
      ],
      type: 'residenza',
    },

    {
      id: 'ac222d2a-8075-4b7d-8325-0cdb082db49a',
      name: '',
      location: 'Farigliano, Italy',
      pics: [
        'Image/Projects/pictures-of-pic-8/costuzione-pic-8.jpg',
        'Image/Projects/pictures-of-pic-8/costuzione-pic-10.jpg',
        'Image/Projects/pictures-of-pic-8/costuzione-pic-11.jpg',
        'Image/Projects/pictures-of-pic-8/costuzione-pic-12.jpg',
      ],
      type: 'piscina',
    },
    {
      id: '604f7558-54ce-49fc-9840-b6cceec7f3a8',
      name: 'Ristrutturazione Cascina Del 1700',
      location: 'Novello (CN), Italy',
      pics: [
        'Image/Projects/pictures-of-pic-9/costuzione-pic-48.jpg',
        'Image/Projects/pictures-of-pic-9/costuzione-pic-49.jpg',
        'Image/Projects/pictures-of-pic-9/costuzione-pic-50.jpg',
        'Image/Projects/pictures-of-pic-9/costuzione-pic-51.jpg',
        'Image/Projects/pictures-of-pic-9/costuzione-pic-52.jpg',
        'Image/Projects/pictures-of-pic-9/costuzione-pic-53.jpg',
        'Image/Projects/pictures-of-pic-9/costuzione-pic-54.jpg',
        'Image/Projects/pictures-of-pic-9/costuzione-pic-55.jpg',
        'Image/Projects/pictures-of-pic-9/costuzione-pic-56.jpg',
        'Image/Projects/pictures-of-pic-9/costuzione-pic-57.jpg',
        'Image/Projects/pictures-of-pic-9/costuzione-pic-58.jpg',
      ],
      type: 'restruction',
    },
  ];

  constructor() {}

  getCovers() {
    return this.covers;
  }

  getCover(coverId: string) {
    return this.covers.find((cover) => cover.id === coverId);
  }
}
