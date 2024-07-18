import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { PlaylistService } from './playlist.service';
import { Playlist } from 'src/clasePlaylist/clasePlaylist';

@Controller('playlists')
export class PlaylistController {
    constructor(private readonly playlistService: PlaylistService) {
    }

    @Get()
    obtenerPlaylist(): Playlist[] {
        return this.playlistService.obtenerPlaylist();
    }

    @Post()
    crearPlaylist(@Body() playlist: Playlist): Playlist {
        return this.playlistService.crearPlaylist(playlist);
    }

    @Delete(':id')
    borrarPlaylist(@Param('id') id: number): void {
        this.playlistService.borrarPlaylist(id);
    }
}
