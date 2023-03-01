// Math es un ejemplo de clase statica
console.log(Math.abs(12));
console.log(Math.max(1, 2, 3, 8, 5, 9));

class MyMathv2 {
  //El uso de readonly restringe que la variable se edite
  static readonly PI = 3.14;
  static CONSTANTE = 99;

  static max(...numbers: number[]) {
    return Math.max(...numbers);
  }
}

// const math = new MyMath();
// console.log(math.PI);
console.log(MyMathv2.PI);
console.log(MyMathv2.max(5, 9, 18, 36, 88, 2, 1));


