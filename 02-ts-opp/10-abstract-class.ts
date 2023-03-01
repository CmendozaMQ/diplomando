// Reducir la creacion de objetos de las clases base o clases padres
export abstract class Animal2 {
  constructor(protected name: string){}

  move() {
    console.log('Moving...!!!');
  }

  greeting() {
    return `Hello I'm ${this.name}`;
  }
}
//NO.....!!!! Puedo heredar 2 veces
export class Dog extends Animal2 {
  owner: string;

  constructor(name: string, owner: string){
    super(name);
    this.owner = owner;
  }

  woof(){
    console.log('WOOOf...!!');
    this.name;
  }

  //Sobre escribiendo funciones
  move() {
    console.log('Moving as a Dog');
    super.move();
  }
}

//Una clase Abstracta nunca puede ser instanciada
//const pet1 = new Animal2('fif');

const dog1 = new Dog('Boby', 'mike');
console.log(dog1.greeting);
console.log(dog1.woof);
console.log(dog1.move());
// no se puede modificar
//dog1.name = 'Chapi';

