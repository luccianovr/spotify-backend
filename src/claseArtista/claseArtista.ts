class Artista {
    id?: number;
    nombre: string;
    biografia: string;
    pais: string;
    generoMusical: string[];
    oyentesMensuales: number;
    tipo: string;
    verificado: boolean;

    constructor(id: number, nombre: string, biografia: string, pais: string, generoMusical: string[], oyentesMensuales: number, tipo: string, verificado: boolean) {
        this.id = id;
        this.nombre = nombre;
        this.biografia = biografia;
        this.pais = pais;
        this.generoMusical = generoMusical;
        this.oyentesMensuales = oyentesMensuales;
        this.tipo = tipo;
        this.verificado = verificado;
    }

    getArtista(): Artista {
        return this;
    }
}

export { Artista };