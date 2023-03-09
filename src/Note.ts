export class Note {
    private id: string;
    private name: string;
    private symbol: string;

    constructor(id: string, name: string, symbol: string) { 
        this.id = id;
        this.name = name;
        this.symbol = symbol;
    }

    public getId = (): string => this.id;
    public getName = (): string => this.name;
    public getSymbol = (): string => this.symbol;

}