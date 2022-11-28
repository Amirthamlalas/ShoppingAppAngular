import { Component } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  image=""
  title=""
  description=""
  rating=""
  seller=""
  quant=""

  Product=()=>
{
  let data:any={
    "image":this.image,
    "title":this.title,
    "description":this.description,
    "rating":this.rating,
    "seller":this.seller,
    "quant":this.quant

  }
  console.log(data)
}

}
