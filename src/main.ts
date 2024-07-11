import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Cancion } from './claseCancion/claseCancion';
import { Playlist } from './clasePlaylist/clasePlaylist';
import { Artista } from "./claseArtista/claseArtista";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
