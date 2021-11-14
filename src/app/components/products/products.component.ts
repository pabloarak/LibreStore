import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [
    {
      id: '1',
      image: '../assets/images/pikachu.jpg',
      title: 'Pikachu',
      price: 80000,
      description: 'bla bla bla bla bla',
    },
    {
      id: '2',
      image: '../assets/images/charizard.jpg',
      title: 'Charizard',
      price: 80000,
      description: 'bla bla bla bla bla',
    },
    {
      id: '3',
      image: '../assets/images/articuno.jpg',
      title: 'Articuno',
      price: 80000,
      description: 'bla bla bla bla bla',
    },
    {
      id: '4',
      image: '../assets/images/dragonite.jpg',
      title: 'Dragonite',
      price: 80000,
      description: 'bla bla bla bla bla',
    },
    {
      id: '5',
      image: '../assets/images/solgaleo.jpg',
      title: 'Solgaleo',
      price: 80000,
      description: 'bla bla bla bla bla',
    },
    {
      id: '6',
      image: '../assets/images/incineroar.jpg',
      title: 'Incineroar',
      price: 80000,
      description: 'bla bla bla bla bla',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  clickProduct(id: number) {
    console.log('product');
    console.log(id);
  }
}
