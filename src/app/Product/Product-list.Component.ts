import { Component, OnInit} from '@angular/core'
import { Iproduct } from './Iproduct';
import { ProductService } from './product.services';


@Component({
  selector: 'pm-products',
  templateUrl: "./product-list.component.html"

})
export class ProductListComponent implements OnInit {
 
  productTitle: string = "product list1";
  showImage: boolean = true;
  imageWidth: number = 50;
  _filterKeyword: string;
  get filterKeyword(): string
  {
    return this._filterKeyword;
  }
  set filterKeyword(value:string) {
    this._filterKeyword = value;
    this.filteredProducts = this.filterKeyword ? this.performFilter(this.filterKeyword) : this.products;
  }

 
  filteredProducts: Iproduct[] = [];
  products: Iproduct[] ;

  constructor(private _productServices: ProductService) {
  
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  performFilter(filterKeyword: string): any {
    filterKeyword = filterKeyword.toLocaleLowerCase();
    return this.products.filter((product) =>
      product.productName.toLocaleLowerCase().indexOf(filterKeyword) !== -1);      
  }
  
  ngOnInit(): void {
    console.log("component created");


    this._productServices.getProducts().subscribe(product => {
      this.products = product;
      this.filteredProducts = this.products;
    });
   

  }

}