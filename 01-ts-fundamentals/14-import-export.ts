// Para q una variable, funcion, clase sea pueda importar hay q agregar la palabra reservada "export"
// para importar usar la nomenclatura de la linea 4 

import {createUser} from './13-function-objects';

createUser({name: '1515'});

export const exportThisVar = "exporting";