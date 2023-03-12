import { NoteValue } from "./NoteValue";

export class NoteValueManager {

    private static notesValues: Array<NoteValue> = [
        new NoteValue('1/64', 'Semifusa', 3),
        new NoteValue('1/32', 'Fusa', 6),
        new NoteValue('1/16', 'Semicorchea', 12),
        new NoteValue('1/8', 'Corchea', 24),
        new NoteValue('1/4', 'Negra', 48),
        new NoteValue('2/4', 'Blanca', 96),
        new NoteValue('4/4', 'Redonda', 192),
    ]

    public static getNoteValueById = (id: string): NoteValue => {
        return this.notesValues.filter(x => x.getId() == id)[0];
    }

    public static getNoteValueByName = (name: string): NoteValue => {
        return this.notesValues.filter(x => x.getName() == name)[0];
    }

    public static getNoteValueBySymbolicDuration = (symbolicDuration: number): NoteValue => {
        return this.notesValues.filter(x => x.getSymbolicDuration() == symbolicDuration)[0];
    }

    public static getSymbolicDurationById = (id: string): number => {
        return this.getNoteValueById(id).getSymbolicDuration();
    }

    public static getSymbolicDurationByIdArray = (ids: Array<string>): Array<number> => {
        return ids.map(id => this.getSymbolicDurationById(id));
    }
}