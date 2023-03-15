export class Scale {

    private id: number;
    private names: Array<string>;
    private distancesFormat: Array<number>;
    private chordsFormat: Array<string>;

    constructor(id: number, names: Array<string>, distancesFormat: Array<number>, chordsFormat: Array<string>) {
        this.id = id;
        this.names = names;
        this.distancesFormat = distancesFormat;
        this.chordsFormat = chordsFormat
    }

    public toString = (): string => {
        return `{"id": "${this.id}", "names": "${this.names}", "distancesFormat": "${this.distancesFormat}", "chordsFormat": "${this.chordsFormat}"}`;
    }

    public getId = (): number => this.id;
    public getNames = (): Array<string> => this.names;
    public getNamesAsString = (): string => this.names.join('/');
    public getDistancesFormat = (): Array<number> => this.distancesFormat;
    public getChordsFormat = (): Array<string> => this.chordsFormat;

}