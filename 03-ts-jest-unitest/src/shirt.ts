import { Item } from "./item";
import { ItemData, ShirtData } from "./models/app.models";

export class Shirt extends Item {

  constructor(itemData:ShirtData){
    super(itemData);
  }
}

// const shirtData: ShirtData = {
//   brand: 'Nike',
//   productName: 'Polera',
//   productDescription: 'Product description',
//   price: 150,
//   size: 'M'
// };
// const shirtObj =  new Shirt(shirtData);
// console.log(shirtObj.item);
