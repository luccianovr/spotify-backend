import { Delete, Param, Body, Injectable } from '@nestjs/common';
import { Artista } from "../claseArtista/claseArtista";

@Injectable()
export class ArtistaService {

    private artistas: Artista[] = [];

    constructor() {
        this.artistas.push(new Artista(1, "Pink-Floyd", "Tremendísimo Grupo", "Inglaterra", ["Rock"], 12000000, "No sé", true));
    };

    crearArtista(): Artista[] {
        return this.artistas;
    }

    nuevoArtista( /* MENSAJE EN EL CUERPO */ @Body() artista: Artista): Artista {
        this.artistas.push(artista);
        artista.id = this.artistas.length;
        return artista;
    }

    borrarArtista(@Param('id') id: number): void {
        for (let i of this.artistas) {
            //let thisId: number = i.id;
            //console.log("id recibido: ", id);
            //SOLUCION: ENCONTRAR EL INDICE DENTRO DEL ARRAY Y SI ESTÁ, BORRARLO
            //let index: number = this.artistas.findIndex(i => i.id == id);
            if (this.artistas.findIndex(i => i.id == id) != -1) {
                this.artistas.splice(this.artistas.findIndex(i => i.id == id), 1);
            }
            /* if (i.id == id) {
                this.artistas.splice(i.id - 1, 1);
            } */
        }
        console.log(this.artistas);
    }
};
