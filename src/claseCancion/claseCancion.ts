import { Artista } from "../claseArtista/claseArtista";

class Cancion {
    id?: number;
    nombre: string;
    duracion: number;
    reproducciones: number;
    generoMusical: string[];
    artista: Artista;
    album: string;

    constructor(id: number, nombre: string, duracion: number, reproducciones: number, generoMusical: string[], album: string, artista: Artista) {
        this.nombre = nombre;
        this.artista = artista;
        this.album = album;
        this.duracion = duracion;
        this.id = id;
        this.reproducciones = reproducciones;
        this.generoMusical = generoMusical;
    }
}

export { Cancion };