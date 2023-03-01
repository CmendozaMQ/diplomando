// Nos permiten crear tipo custom de tipos de variable
type Custom = number | boolean[] | string;

let variableX: Custom = 15 ;
variableX = [false] ;

type Size = 'XL' | 'S' | 'M' | 'XXL';
let shirtSize: Size = 'XXL';