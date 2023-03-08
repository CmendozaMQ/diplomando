import { Item } from "./item";
import { MobileData } from "./models/app.models";

export class SmartPhone extends Item {

  constructor(itemData:MobileData){
    super(itemData);
  }
}

// const mobData: MobileData = {
//   brand: 'Apple',
//   productName: 'iPhone 13',
//   productDescription: 'Product description',
//   price: 1500,
//   versions: '512GB'
// };
// const mobObj =  new SmartPhone(mobData);
// console.log(mobObj.item);
