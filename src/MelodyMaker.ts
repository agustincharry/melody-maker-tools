import { NoteValueManager } from "./NoteValue/NoteValueManager";
import { MusicMath } from './NoteValue/MusicMath'
import { NoteValue } from "./NoteValue/NoteValue";

export class MelodyMaker {

    private noteValueManager: NoteValueManager;

    constructor(){
        this.noteValueManager = new NoteValueManager();
    }

    public generate = (wantedDuration: number, noteValueIds: Array<string>, probabilities: Array<number>): Array<NoteValue> => {
        const symbolicDurationArray = this.noteValueManager.getSymbolicDurationByIdArray(noteValueIds);
        const result: Array<number> = MusicMath.randomSum(wantedDuration, symbolicDurationArray, probabilities)
        return result.map(value => this.noteValueManager.getNoteValueBySymbolicDuration(value));
    }

}