import { Injectable } from '@angular/core';
import { Image } from '../models/image';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  images: Image[] =
  [
    new Image
    (
      '1',
      '1ra imagen',
      'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. ',
      'https://angularbooks.com/img/angular4/img1.jpg','https://angularbooks.com/img/angular4/img1.jpg'
    ),
    new Image ('2', '2da imagen', 'Descripcion', 'https://angularbooks.com/img/angular4/img2.jpg','https://angularbooks.com/img/angular4/img2.jpg'),
    new Image ('3', '3ra imagen', 'Descripcion', 'https://angularbooks.com/img/angular4/img3.jpg','https://angularbooks.com/img/angular4/img3.jpg'),
    new Image ('4', '4ta imagen', 'Descripcion', 'https://angularbooks.com/img/angular4/img4.jpg','https://angularbooks.com/img/angular4/img4.jpg'),
    new Image ('5', '5ta imagen', 'Descripcion', 'https://angularbooks.com/img/angular4/img5.jpg','https://angularbooks.com/img/angular4/img5.jpg'),
    new Image ('6', '6ta imagen', 'Descripcion', 'https://angularbooks.com/img/angular4/img6.jpg','https://angularbooks.com/img/angular4/img6.jpg'),
    new Image ('7', '7ma imagen', 'Descripcion', 'https://angularbooks.com/img/angular4/img7.jpg','https://angularbooks.com/img/angular4/img7.jpg'),
    new Image ('8', '8va imagen', 'Descripcion', 'https://angularbooks.com/img/angular4/img8.jpg','https://angularbooks.com/img/angular4/img8.jpg')
  ];

  constructor(){}

  getImages()
  {
    return this.images;
  }
}
