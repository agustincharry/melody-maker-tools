import { Note } from "./Note";

export class Chord {

    private chord: string;
    private tonic: Note;
    private third: Note;
    private fifth: Note;

    constructor(chord: string, tonic: Note, third: Note, fifth: Note){
        this.chord = chord;
        this.tonic = tonic;
        this.third = third;
        this.fifth = fifth;
    }

    public toString = (): string => {
        return `{"chord": "${this.chord}", "tonic": ${this.tonic.toString()}, "third": ${this.third.toString()}, "fifth": ${this.fifth.toString()}}`;
    }

    public getChord = (): string => this.chord;
    public getTonic = (): Note => this.tonic;
    public getThird = (): Note => this.third;
    public getFifth = (): Note => this.fifth;
}