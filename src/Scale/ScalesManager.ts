import { Scale } from './Scale';
import { Note } from './Note';
import { TonesConstants as tc} from './TonesConstants';
import { ChordsConstants as cc} from './ChordsConstants';
import { NotesManager } from './NotesManager';
import { Chord } from './Chord';

export class ScalesManager {
    
    private static scales: Array<Scale> = [
        new Scale(
            1, 
            ["Escala menor natural", "Modo eólico"],
            [tc.tone, tc.semiTone, tc.tone, tc.tone, tc.semiTone, tc.tone],
            [cc.minor, cc.dim, cc.major, cc.minor, cc.minor, cc.major, cc.major]
        ),
        new Scale(
            2,
            ["Escala menor armónica"],
            [tc.tone, tc.semiTone, tc.tone, tc.tone, tc.semiTone, (tc.tone + tc.semiTone)],
            [cc.minor, cc.dim, cc.incr, cc.minor, cc.major, cc.major, cc.dim]
        ),
        new Scale(
            3,
            ["Escala menor melódica"],
            [tc.tone, tc.semiTone, tc.tone, tc.tone, tc.tone, tc.tone],
            [cc.minor, cc.minor, cc.incr, cc.major, cc.major, cc.dim, cc.dim]
        ),
        new Scale(
            4,
            ["Escala dórica"],
            [tc.tone, tc.semiTone, tc.tone, tc.tone, tc.tone, tc.semiTone],
            [cc.minor, cc.minor, cc.major, cc.major, cc.minor, cc.dim, cc.major]
        ),
        new Scale(
            5,
            ["Escala frigia"],
            [tc.semiTone, tc.tone, tc.tone, tc.tone, tc.semiTone, tc.tone],
            [cc.minor, cc.major, cc.major, cc.minor, cc.dim, cc.major, cc.minor]
        ),
        new Scale(
            6,
            ["Escala locria"],
            [tc.semiTone, tc.tone, tc.tone, tc.semiTone, tc.tone, tc.tone],
            [cc.dim, cc.major, cc.minor, cc.minor, cc.major, cc.major, cc.minor]
        ),
        new Scale(
            7,
            ["Escala del blues"],
            [(tc.tone + tc.semiTone), tc.tone, tc.semiTone, tc.semiTone, (tc.tone + tc.semiTone)],
            []
        ),
        new Scale(
            8,
            ["Escala pentatónica menor"],
            [(tc.tone + tc.semiTone), tc.tone, tc.tone, (tc.tone + tc.semiTone)],
            []
        ),
        new Scale(
            9,
            ["Escala mayor natural", "Escala jónica"],
            [tc.tone, tc.tone, tc.semiTone, tc.tone, tc.tone, tc.tone],
            [cc.major, cc.minor, cc.minor, cc.major, cc.major, cc.minor, cc.dim]
        ),
        new Scale(
            10,
            ["Escala mayor artificial"],
            [tc.tone, tc.tone, tc.semiTone, tc.tone, tc.semiTone, (tc.tone + tc.semiTone)],
            [cc.major, cc.dim, cc.minor, cc.minor, cc.major, cc.incr, cc.dim]
        ),
        new Scale(
            11,
            ["Escala lidia"],
            [tc.tone, tc.tone, tc.tone, tc.semiTone, tc.tone, tc.tone],
            [cc.major, cc.major, cc.minor, cc.dim, cc.major, cc.minor, cc.minor]
        ),
        new Scale(
            12,
            ["Escala mixolidia"],
            [tc.tone, tc.tone, tc.semiTone, tc.tone, tc.tone, tc.semiTone],
            [cc.major, cc.minor, cc.dim, cc.major, cc.minor, cc.minor, cc.major]
        ),
        new Scale(
            13,
            ["Escala pentatónica mayor"],
            [tc.tone, tc.tone, (tc.tone + tc.semiTone), tc.tone, (tc.tone + tc.semiTone)],
            []
        ),
        new Scale(
            14,
            ["Escala pentatónica mayor - variación"],
            [tc.tone, (tc.tone + tc.semiTone), tc.tone, tc.tone],
            []
        )
    ];

    /**
     * Used to get the chords of a scale
     * @param {(string | number)} value Note Id or Note name.
     * @param {number} scaleId Scale Id.
     * @return {Array<Chord>} List of scale chords.
     */
    public static getScale(value: (string | number), scaleId: number): Array<Chord> | undefined{
        const note = NotesManager.searchNote(value);
        const scale = this.getScaleById(scaleId);
        if (!note || !scale) {
            return undefined;
        }
        const fullNotes: Array<Note> = NotesManager.getNotes().concat(NotesManager.getNotes());
        let noteIndex = fullNotes.indexOf(fullNotes.filter(x => x.getId() == note.getId())[0]);

        const scaleNotes: Array<Note> = [note];
        scale.getDistancesFormat().forEach(distance => {
            scaleNotes.push(fullNotes[noteIndex + distance]);
            noteIndex += distance;
        });

        const result: Array<Chord> = [];
        scaleNotes.forEach((tonic, i) => {
            const third: Note = scaleNotes.concat(scaleNotes)[i + 2];
            const fifth: Note = scaleNotes.concat(scaleNotes)[i + 4];
            const chord = new Chord(scale.getChordsFormat()[i], tonic, third, fifth);
            result.push(chord);
        });
        
        return result;
    }

    /**
     * Used to get a scale by its Id.
     * @param {number} scaleId Scale Id.
     * @return {Scale} Wanted scale.
     */
    public static getScaleById = (scaleId: number): Scale | undefined => {
        return this.scales.find(x => x.getId() == scaleId);
    }
}
