//protected solo comparte la accesibilidad con las clases hijas o sub-clases
export class Animal {
  constructor(protected name: string){}

  move() {
    console.log('Moving...!!!');
  }

  greeting() {
    return `Hello I'm ${this.name}`;
  }
}

export class Dog extends Animal {
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


const dog1 = new Dog('Boby', 'mike');
console.log(dog1.owner);
console.log(dog1.woof);
console.log(dog1.move());
// no se puede modificar
//dog1.name = 'Chapi';

