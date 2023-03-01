import { isPalindromo } from "../01_isPalindromo";
import { getMaxNumber } from "../02_highestNumber";
import { stringToArray } from "../03_arrayOfString";

describe('stringToArray', () => {
  test('01_isPalindromo validate if a text is palindrome', () => {
    expect(isPalindromo('ANA LAVA LANA')).toEqual(true);
    expect(isPalindromo('ANA LAVKA LANA')).toEqual(false);
  });

  test('02_highestNumber.ts returns the highest number of an array', () => {
    expect(getMaxNumber([2, 88, 65, 17, 95, 39])).toEqual(95);
  });

  test('03_arrayOfString.ts returns an array of strings with input string', () => {
    expect(stringToArray('Hello')).toEqual(['H', 'e', 'l', 'l', 'o']);
    // expect(stringToArray('Twitter')).toEqual(['T', 'w', 'i', 't', 't', 'e', 'r']);
  });
});