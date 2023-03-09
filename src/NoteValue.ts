export class NoteValue {
    private id: string;
    private name: string;
    private value: number;

    constructor(id: string, name: string, value: number) { 
        this.id = id;
        this.name = name;
        this.value = value;
    }

    public getId = (): string => this.id;
    public getName = (): string => this.name;
    public getValue = (): number => this.value;
}