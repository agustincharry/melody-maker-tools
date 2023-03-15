import { MelodyMaker } from './MelodyMaker';
import { NoteValueManager } from './NoteValue/NoteValueManager';
import { ScalesManager } from './Scale/ScalesManager';

const wantedValue: number = NoteValueManager.getNoteValueById('4/4').getSymbolicDuration();
const result1 = MelodyMaker.generate(wantedValue, ['2/4', '1/8', '4/4', '1/4'], [40, 10, 30, 20])
console.log(result1.toString())

console.log("===============")

const result2 = ScalesManager.getScale('C', 1);
console.log(result2?.toString());
