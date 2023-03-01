import { Item } from "./item";
import { ItemData, MobileData, ShirtData } from "./models/app.models";
import { Shirt } from "./shirt";
import { SmartPhone } from "./smartphone";

export class StoreItems {
  items:Item[];

  constructor() {
    this.items = [];
  }

  addProduct(dataItem: Item){
    this.items.push(dataItem);
  }

  getProduct(productName: string){
    for(const product of this.items) {
        if(product.item.productName === productName){
            return product
        }
    }
  }
  deleteProduct(productName: string){
    for(const index in this.items) {
      if(this.items[index].item.productName === productName){
          const i = index as unknown as number;
          this.items.splice(i, 1);
      }
    }
  }

  getProducts(){
    return this.items;
  }
}

// const item1: MobileData = {
//       brand: 'Apple',
//       productName: 'iPhone 13',
//       productDescription: 'Product description',
//       price: 1500,
//       versions: '512GB'
// };
// const item1Obj = new SmartPhone(item1);

// const item2: MobileData = {
//   brand: 'Apple',
//   productName: 'iPhone 15',
//   productDescription: 'Product description',
//   price: 950,
//   versions: '128GB'
// };
// const item2Obj = new SmartPhone(item2);

// const shirtData1: ShirtData = {
//   brand: 'Nike',
//   productName: 'Polera',
//   productDescription: 'Product description',
//   price: 150,
//   size: 'M'
// };
// const shirtData1Obj = new Shirt(shirtData1);

// const container = new StoreItems();
// container.addProduct(item1Obj);
// container.addProduct(item2Obj);
// container.addProduct(shirtData1Obj);

// //console.log(container.getProducts());

// //console.log(container.getProduct('Polera'));
// container.deleteProduct('Polera');
// console.log(container.getProducts());



