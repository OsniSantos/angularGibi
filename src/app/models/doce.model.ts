export class Doce {
    Id!: number;
    Descricao: string;
    Valor: number;
    DataFab: Date;

    constructor() {
        this.Descricao = "";
        this.Valor = 0;
        this.DataFab = new Date();
    }
}