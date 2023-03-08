import { ShirtData } from "../src/models/app.models";
import { Shirt } from "../src/shirt";

describe('Shirt Item Validation', () => {
  test('validate shirt item creation', () => {
    console.log("Validatin Shirt OBJ");

      const shirtData: ShirtData = {
      brand: 'Adidas',
      productName: 'Real Madrid Polera',
      productDescription: 'Product description',
      price: 350,
      size: 'XL'
    };
    const shirtObj =  new Shirt(shirtData);
    expect(shirtObj.item).toEqual(shirtData);
  });
});
