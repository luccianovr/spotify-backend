import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArtistaController } from './artista/artista.controller';
import { ArtistaService } from './artista/artista.service';
import { CancionController } from './cancion/cancion.controller';
import { CancionService } from './cancion/cancion.service';
import { PlaylistController } from './playlist/playlist.controller';
import { PlaylistService } from './playlist/playlist.service';

@Module({
  imports: [],
  controllers: [AppController, ArtistaController, CancionController, PlaylistController],
  providers: [AppService, ArtistaService, CancionService, PlaylistService],
})
export class AppModule {}
