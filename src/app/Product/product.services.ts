import { Injectable } from "@angular/core";
import { Iproduct } from "./Iproduct";
import { HttpClient} from '@angular/common/http'
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';


@Injectable()
export class ProductService {
  private _productURL = "./api/products/products.json";
  constructor(private _httpclient: HttpClient) {

  }
  getProducts(): Observable<Iproduct[]> {
    return this._httpclient.get<Iproduct[]>(this._productURL)
                .do(data => console.log('All ' + JSON.stringify(data)))
      ;
  }
}