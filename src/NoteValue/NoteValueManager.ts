import { NoteValue } from "./NoteValue";

export class NoteValueManager {
    private notesValues: Array<NoteValue>;

    constructor(){
        const oneOver64: NoteValue = new NoteValue('1/64', 'Semifusa', 3);
        const oneOver32: NoteValue = new NoteValue('1/32', 'Fusa', 6);
        const oneOver16: NoteValue = new NoteValue('1/16', 'Semicorchea', 12);
        const oneOver8: NoteValue = new NoteValue('1/8', 'Corchea', 24);
        const oneOver4: NoteValue = new NoteValue('1/4', 'Negra', 48);
        const twoOver4: NoteValue = new NoteValue('2/4', 'Blanca', 96);
        const fourOver4: NoteValue = new NoteValue('4/4', 'Redonda', 192);

        this.notesValues = [oneOver64, oneOver32, oneOver16, oneOver8, oneOver4, twoOver4, fourOver4];
    }

    public getNoteValueById = (id: string): NoteValue => {
        return this.notesValues.filter(x => x.getId() == id)[0];
    }

    public getNoteValueByName = (name: string): NoteValue => {
        return this.notesValues.filter(x => x.getName() == name)[0];
    }

    public getNoteValueBySymbolicDuration = (symbolicDuration: number): NoteValue => {
        return this.notesValues.filter(x => x.getSymbolicDuration() == symbolicDuration)[0];
    }

    public getSymbolicDurationById = (id: string): number => {
        return this.getNoteValueById(id).getSymbolicDuration();
    }

    public getSymbolicDurationByIdArray = (ids: Array<string>): Array<number> => {
        return ids.map(id => this.getSymbolicDurationById(id));
    }
}