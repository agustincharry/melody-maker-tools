export class NoteValue {
    private id: string;
    private name: string;
    private symbolicDuration: number;

    constructor(id: string, name: string, symbolicDuration: number) { 
        this.id = id;
        this.name = name;
        this.symbolicDuration = symbolicDuration;
    }

    public toString = (): string => {
        return `{"id": "${this.id}", "name": "${this.name}"}`;
    };

    public getId = (): string => this.id;
    public getName = (): string => this.name;
    public getSymbolicDuration = (): number => this.symbolicDuration;
}