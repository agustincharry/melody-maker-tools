import { NoteValueManager } from "./NoteValue/NoteValueManager";
import { MusicMath } from './NoteValue/MusicMath'
import { NoteValue } from "./NoteValue/NoteValue";

export class MelodyMaker {

    public static generate = (wantedDuration: number, noteValueIds: Array<string>, probabilities: Array<number>): Array<NoteValue> => {
        const symbolicDurationArray = NoteValueManager.getSymbolicDurationByIdArray(noteValueIds);
        const result: Array<number> = MusicMath.randomSum(wantedDuration, symbolicDurationArray, probabilities)
        return result.map(value => NoteValueManager.getNoteValueBySymbolicDuration(value));
    }

}