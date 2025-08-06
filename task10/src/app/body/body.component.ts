import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss',
})
export class BodyComponent {
  products: any[] = [];

  product = {
    name: '',
    price: 0,
    category: 'Fruits',
  };

  onSubmit() {
    this.products.push({ ...this.product });
    console.log(this.products);

    this.product = {
      name: '',
      price: 0,
      category: 'Fruits',
    };
  }

  deleteProduct(index: number) {
    this.products.splice(index, 1);
  }
}
