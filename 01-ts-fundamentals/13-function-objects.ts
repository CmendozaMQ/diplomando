// Podemos mandar objetos parametrizados como parametro a una funcion
type UserFormat = {
    name: string, 
    lastname?: string, 
    birthDay?: Date
}

export function createUser(data: UserFormat) {
    
    
}

const objCustom = {
    name: "string", 
    lastname: "string", 
    birthDay: new Date()
}

//nameFunction("gg", 15);
