// Herencia sirve para reusar atributos y funciones y abstraer la logica de un problema
//export class I{}
export class Animal {
    constructor(public name: string){}

    move() {
      console.log('Moving...!!!');
    }

    greeting() {
      return `Hello I'm ${this.name}`;
    }
}

//No Puedo heredar 2 veces
export class Cat extends Animal {}
export class Dog extends Animal {
  owner: string;

  constructor(name: string, owner: string){
    super(name);
    this.owner = owner;
  }

  woof(){
    console.log('WOOOf...!!');

  }
}

const pet1 = new Animal('pelusa');
console.log(pet1.greeting());

const dog1 = new Dog('Boby', 'mike');
console.log(dog1.greeting());
// console.log(dog1.woof());

// Polimorfismo
const pet3: Animal = new Dog('petname', 'owner');

