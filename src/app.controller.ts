import { Body, Post, Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Cancion } from './claseCancion/claseCancion';
import { Playlist } from './clasePlaylist/clasePlaylist';
import { Artista } from "./claseArtista/claseArtista";

@Controller()
export class AppController {
  artistas: Artista[] = [];
  canciones: Cancion[] = [];
  playlist: Playlist[] = [];
  constructor(private readonly appService: AppService) {
    this.artistas.push(new Artista(1, "Pink-Floyd", "Tremendísimo Grupo", "Inglaterra", ["Rock"], 12000000, "No sé", true));
    this.canciones.push(new Cancion(1, "Californication", 300, 10000000, ["Funk", "Punk"], "Devio", this.artistas[2]));
    this.playlist.push(new Playlist("Pa perrear", 1, new Date, this.canciones));
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  //METOD @GET
  //PATH ('/HOLA') es decir RUTA
  @Get('/hola')
  obtenerDatos(): string {
    return 'Hola mundo';
  }

  @Get('artistas')
  crearArtista(): Artista[] {
    return this.artistas;
  }

  @Post('artistas')
  nuevoArtista( /* MENSAJE EN EL CUERPO */ @Body() artista: Artista): Artista {
    this.artistas.push(artista);
    artista.id = this.artistas.length;
    return artista;
  }

  @Get('canciones')
  obtenerCanciones(): Cancion[] {
    return this.canciones;
  }

  @Post('canciones')
  crearCancion(@Body() cancion: Cancion): Cancion {
    this.canciones.push(cancion);
    return cancion;
  }

  @Get('/playlists')
  obtenerPlaylist(): Playlist[] {
    return this.playlist;
  }

  @Post('playlist')
  crearPlaylist(@Body() playlist: Playlist): Playlist {
    this.playlist.push(playlist);
    return playlist;
  }
}
