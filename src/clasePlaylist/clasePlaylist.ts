import { Cancion } from '../claseCancion/claseCancion';

class Playlist {
    id?: number;
    nombre: string;
    fechaCreacion: Date;
    canciones: Cancion[];

    constructor(nombre: string, id: number, fechaCreacion: Date, canciones: Cancion[]) {
        this.nombre = nombre;
        this.id = id;
        this.fechaCreacion = fechaCreacion;
        this.canciones = canciones;
    }
}

export { Playlist };