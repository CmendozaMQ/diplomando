class Singleton {
  static instance: Singleton;
  private id: string;
  private constructor(id: string){
    this.id = id;
  };

  getID() {
    return this.id;
  }

  static createSingleton(id: string) {
    if(Singleton.instance === undefined) {
        Singleton.instance = new Singleton(id);
    }
    return Singleton.instance;
  }
}

//const call1 = new Singleton('F12');
const call1 = Singleton.createSingleton('F9');
console.log(call1.getID());

//const call2 = new Singleton('F5');
const call2 = Singleton.createSingleton('F1');
console.log(call2.getID());


