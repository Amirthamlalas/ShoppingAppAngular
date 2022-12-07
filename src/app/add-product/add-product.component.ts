import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  productCode=""
  productName=""
manudate=""
 expdate=""
  brand=""
 price=""
 sellerName=""
distributorName=""
image=""
constructor(private api:ApiService){}

  Product=()=>
{
  let data:any={
    "image":this.image,
    "productCode":this.productCode,
    "productName":this.productName,
    "manudate":this.manudate,
    "expdate":this.expdate,
    "brand":this.brand,
    "price":this.price,
    "sellerName":this.sellerName,
    "distributorName":this.distributorName

  }
  console.log(data)
  this.api.addCourse(data).subscribe(
    (response:any)=>{
      console.log(response)
      if (response.status="success") {
        alert("product added successfully")
      } else {
        alert("something went wrong")
      }
    }
  )
}

}
