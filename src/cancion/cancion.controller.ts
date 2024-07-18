import { Controller, Get, Post, Body } from '@nestjs/common';
import { CancionService } from './cancion.service';
import { Cancion } from '../claseCancion/claseCancion';

@Controller('canciones')
export class CancionController {

    constructor(private readonly CancionService: CancionService) {
    }
    @Get()
    obtenerCanciones(): Cancion[] {
        return this.CancionService.obtenerCanciones();
    }

    @Post()
    crearCancion(@Body() cancion: Cancion): Cancion {
        return this.CancionService.crearCancion(cancion);
    }


}
