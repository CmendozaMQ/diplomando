import { Item } from "../src/item";
import { MobileData, ShirtData } from "../src/models/app.models";
import { Shirt } from "../src/shirt";
import { SmartPhone } from "../src/smartphone";
import { StoreItems } from "../src/store-items";


describe('Store Items Validation', () => {
  const itemList = new StoreItems();
  beforeEach(() => {
    //#region Items Creation
    const item1: MobileData = {
      brand: 'Apple',
      productName: 'iPhone 13',
      productDescription: 'Product description',
      price: 1500,
      versions: '512GB'
    };

    const item2: MobileData = {
      brand: 'Apple',
      productName: 'iPhone 15',
      productDescription: 'Product description',
      price: 950,
      versions: '128GB'
    };

    const shirtData1: ShirtData = {
      brand: 'Nike',
      productName: 'Polera',
      productDescription: 'Product description',
      price: 150,
      size: 'M'
    };

    const shirtData2: ShirtData = {
      brand: 'Adidas',
      productName: 'Sudadera',
      productDescription: 'Product description',
      price: 450,
      size: 'XL'
    };

    const item1Obj = new SmartPhone(item1);
    const item2Obj = new SmartPhone(item2);
    const shirtData1Obj = new Shirt(shirtData1);
    const shirtData2Obj = new Shirt(shirtData2);

    //#endregion

    //Store Items

    itemList.items.push(shirtData1Obj);
    itemList.items.push(shirtData2Obj);
    itemList.items.push(item1Obj);
    itemList.items.push(item2Obj);
  });

  test('Validate Get Product', () => {
      //console.log(itemList.items);
      const expected = {
        item: {
          brand: 'Apple',
          productName: 'iPhone 13',
          productDescription: 'Product description',
          price: 1500,
          versions: '512GB'
        }
      }
      const actual = itemList.getProduct('iPhone 13');
      expect(actual).toEqual(expected);
  });

  test('Add Product Test', () => {

    // Add Products Steps
    const newProduct: MobileData = {
      brand: 'Apple',
      productName: 'iPhone 14 Max',
      productDescription: 'Product description iPhone',
      price: 2000,
      versions: '256GB'
    }
    const newSmartphone =  new SmartPhone(newProduct);
    itemList.addProduct(newSmartphone);

    const actualProductAdded = itemList.getProduct('iPhone 14 Max');
    expect(actualProductAdded?.item.productName).toBe('iPhone 14 Max')
  });
});
