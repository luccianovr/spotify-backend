import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Cancion } from './claseCancion/claseCancion';
import { Playlist } from './clasePlaylist/clasePlaylist';
import { Artista } from "./claseArtista/claseArtista";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

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

  @Get('/artistas')
  crearArtista(): Artista[] {
    let artista1: Artista = new Artista(0, "Radio-head", "Gran Grupo", "Inglaterra", ["Rock"], 12311111, "No sé", true);
    let artista2: Artista = new Artista(1, "Pink-Floyd", "Tremendísimo Grupo", "Inglaterra", ["Rock"], 12000000, "No sé", true);
    return [artista1.getArtista(), artista2.getArtista()];
  }

  @Get('/canciones')
  crearCancion(): Cancion[] {
    let artistaCancion1: Artista = new Artista(0, "Radio-head", "Gran Grupo", "Inglaterra", ["Rock"], 10000000, "No sé", true);
    let cancion1: Cancion = new Cancion(0, "Jigsaw Falling Into Place", 240, 100221111, ["Rock"], "In Rainbows", artistaCancion1);

    let artistaCancion2: Artista = new Artista(1, "Pink-Floyd", "Tremendísimo Grupo", "Inglaterra", ["Rock"], 12000000, "No sé", true);
    let cancion2: Cancion = new Cancion(1, "Dogs", 1000, 2000, ["Rock"], "Animals", artistaCancion2);
    return [cancion1, cancion2];
  }

  @Get('/playlists')
  crearPlaylist(): Playlist[] {
    let artistaCancion1: Artista = new Artista(0, "Radio-head", "Gran Grupo", "Inglaterra", ["Rock"], 10000000, "No sé", true);
    let cancion1: Cancion = new Cancion(0, "Jigsaw Falling Into Place", 240, 100221111, ["Rock"], "In Rainbows", artistaCancion1);

    let artistaCancion2: Artista = new Artista(1, "Pink-Floyd", "Tremendísimo Grupo", "Inglaterra", ["Rock"], 12000000, "No sé", true);
    let cancion2: Cancion = new Cancion(1, "Dogs", 1000, 2000, ["Rock"], "Animals", artistaCancion2);

    let canciones: Cancion[] = [cancion1, cancion2];
    //canciones.push(cancion1, cancion2);

    let playlist1: Playlist = new Playlist("A rockear", 1, new Date, canciones);

    return [playlist1];
  }
}
