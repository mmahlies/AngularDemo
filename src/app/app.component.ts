//import { Component } from '@angular/core';

//@Component({
//  selector: 'pm-root',
//  templateUrl: './app.component.html',
//  styleUrls: ['./app.component.css']
//})
//export class AppComponent {
//  title = 'Angular: Getting Started';
//}
import { Component} from '@angular/core'
import { ProductService } from './Product/product.services';

@Component({
  selector: 'pm-root',
  //template: `          <div style= "text-align:center" >
  //                      <h1>          Welcome to {{pageTitle }}!!          from my machine</h1>
  //                  </div>         `
  templateUrl: './app.component.html',
  providers: [ProductService]
})
export class AppComponent {
  pageTitle: string = 'my page title';
}
