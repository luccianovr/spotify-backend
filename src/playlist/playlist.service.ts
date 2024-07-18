import { Injectable, Body, Param } from '@nestjs/common';
import { Playlist } from '../clasePlaylist/clasePlaylist'

@Injectable()
export class PlaylistService {

    playlist: Playlist[] = [];

    constructor() {
        //this.playlist.push(new Playlist("Pa perrear", 1, new Date));
    }

    obtenerPlaylist(): Playlist[] {
        return this.playlist;
    }

    crearPlaylist(@Body() playlist: Playlist): Playlist {
        playlist.id = this.playlist.length + 1;
        this.playlist.push(playlist);
        return playlist;
    }

    borrarPlaylist(@Param('id') id: number): void {
        for (let i of this.playlist) {
            if (this.playlist.findIndex(i => i.id == id) != -1) {
                this.playlist.splice(this.playlist.findIndex(i => i.id == id), 1);
            }
        }
    }
}
