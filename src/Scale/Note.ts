export class Note {

    private id: number;
    private names1: Array<string>;
    private names2: Array<string>;

    constructor(id: number, names1: Array<string>, names2: Array<string>) {
        this.id = id;
        this.names1 = names1;
        this.names2 = names2;
    }

    public toString = (): string => {
        return `{"id": "${this.id}", "names1": "${this.getNames1AsString()}", "names2": "${this.getNames2AsString()}"}`;
    }

    public getId = (): number => this.id;
    public getNames1 = (): Array<string> => this.names1;
    public getNames1AsString = (): string => this.names1.join('/');
    public getNames2 = (): Array<string> => this.names2;
    public getNames2AsString = (): string => this.names2.join('/');
}