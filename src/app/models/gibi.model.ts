export class Gibi{
    Id!: number;
    Titulo: string;
    Valor: number;
    Editora: string;
    DataPublicacao: Date;

    constructor() {
        this.Titulo = "";
        this.Valor = 0;
        this.Editora="";
        this.DataPublicacao = new Date();
    }

}