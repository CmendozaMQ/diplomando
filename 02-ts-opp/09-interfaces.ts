// Interface no tiene una implementacion da comportamiento
export interface Driver {

  //Atributos
  database: string;
  password: string;
  port: string;

  //metodos
  connect(): void;
  disconnect(): void;
  isConnected(name: string): boolean;
}

//const driverX = new Driver();

//Las Clases que implementen la interfaz estan forzadas a agregar las funciones y variables de la interfaz es un contrato entre la clase y la interfaz
const driver: Driver = {
  database: '',
  password: '',
  port: '456',
  connect: function (): void {
    throw new Error("Function not implemented.");
  },
  disconnect: function (): void {
    throw new Error("Function not implemented.");
  },
  isConnected: function (name: string): boolean {
    throw new Error("Function not implemented.");
  }
}

class PostgressDriver implements Driver {
  database: string;
  password: string;
  port: string;

  constructor(database: string, password: string, port: string) {
    this.database = database;
    this.password = password;
    this.port = port;
  }
  disconnect(): void {
    throw new Error("Method not implemented.");
  }
  isConnected(name: string): boolean {
    throw new Error("Method not implemented.");
  }
  connect(): void {
    throw new Error("Method not implemented.");
  }

}

class OracleDriver implements Driver {
  database: string;
  password: string;
  port: string;

  constructor(database: string, password: string, port: string) {
    this.database = database;
    this.password = password;
    this.port = port;
  }
  disconnect(): void {
    throw new Error("Method not implemented.");
  }
  isConnected(name: string): boolean {
    throw new Error("Method not implemented.");
  }
  connect(): void {
    throw new Error("Method not implemented.");
  }
}
