import { Body, Post, Delete, Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { Cancion } from './claseCancion/claseCancion';
import { Playlist } from './clasePlaylist/clasePlaylist';
import { Artista } from "./claseArtista/claseArtista";

@Controller()
export class AppController {
  playlist: Playlist[] = [];
  constructor(private readonly appService: AppService) {
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
}
