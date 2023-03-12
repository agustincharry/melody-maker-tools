import { MelodyMaker } from './MelodyMaker';
import { NoteValueManager } from './NoteValue/NoteValueManager';

const wantedValue: number = NoteValueManager.getNoteValueById('4/4').getSymbolicDuration();
const result = MelodyMaker.generate(wantedValue, ['2/4', '1/8', '4/4', '1/4'], [10, 40, 30, 20])

console.log(result.toString())