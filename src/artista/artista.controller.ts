import { Body, Post, Delete, Controller, Get, Param } from '@nestjs/common';
import { Artista } from "../claseArtista/claseArtista";
import { ArtistaService } from './artista.service';

@Controller('artistas')
export class ArtistaController {
    constructor(private readonly ArtistService: ArtistaService) {
    }

    @Get()
    crearArtista(): Artista[] {
        return this.ArtistService.crearArtista();
    }

    @Post()
    generarArtista( /* MENSAJE EN EL CUERPO */ @Body() artista: Artista): Artista {
        return this.ArtistService.nuevoArtista(artista);
    }

    @Delete(':id')
    borrarArtista(@Param('id') id: number): void {
        this.ArtistService.borrarArtista(id);
    }
}
