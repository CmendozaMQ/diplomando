import { MobileData } from "../src/models/app.models";
import { SmartPhone } from "../src/smartphone";


describe('Smartphone Item Validation', () => {
  test('validate Smartphone item creation', () => {
    console.log("Validatin Smartphone OBJ");

      const mobileData: MobileData = {
      brand: 'Adidas',
      productName: 'Real Madrid Polera',
      productDescription: 'Product description',
      price: 350,
      versions: '256GB'
    };
    const mobileObj =  new SmartPhone(mobileData);
    expect(mobileObj.item).toEqual(mobileData);
  });
});
