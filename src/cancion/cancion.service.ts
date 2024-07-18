import { Injectable, Body } from '@nestjs/common';
import { Cancion } from '../claseCancion/claseCancion';

@Injectable()
export class CancionService {

    private canciones: Cancion[] = [];

    constructor() {
    };

    obtenerCanciones(): Cancion[] {
        return this.canciones;
    }

    crearCancion(@Body() cancion: Cancion): Cancion {
        cancion.id = this.canciones.length + 1;
        this.canciones.push(cancion);
        //console.log(this.canciones);
        return cancion;
    }
}
