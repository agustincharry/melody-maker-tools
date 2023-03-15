import { Note } from './Note';

export class NotesManager {

    private static notes: Array<Note> = [
        new Note(1, ["Do"], ["C"]),
        new Note(2, ["Do#", "Reb"], ["C#", "Db"]),
        new Note(3, ["Re"], ["D"]),
        new Note(4, ["Re#", "Mib"], ["D#", "Eb"]),
        new Note(5, ["Mi"], ["E"]),
        new Note(6, ["Fa"], ["F"]),
        new Note(7, ["Fa#", "Solb"], ["F#", "Gb"]),
        new Note(8, ["Sol"], ["G"]),
        new Note(9, ["Sol#", "Lab"], ["G#", "Ab"]),
        new Note(10, ["La"], ["A"]),
        new Note(11, ["La#", "Sib"], ["A#", "Bb"]),
        new Note(12, ["Si"], ["B"])
    ];

    /**
     * Used to find a note by its Id or name.
     * @param {(string | number)} value Id or name.
     * @return {Note} Wanted note
     */
    public static searchNote = (value: (number | string)): Note | undefined => {
        const note1 = this.notes.find(note => note.getId() == value);
        const note2 = this.notes.find(note => note.getNames1().find(name => name == value));
        const note3 = this.notes.find(note => note.getNames2().find(name => name == value));
        return note1 ? note1 : (note2 ? note2 : note3)
    }

    /**
     * Used to get the distance between two notes.
     * @param {(string | number)} note1 Id or name of Note1
     * @param {(string | number)} note2 Id or name of Note2
     * @return {number} Amount of semitones between notes.
     */
    public static distanceBetweenNotes = (note1: (number | string), note2: (number | string)): number => {
        const note11 = this.searchNote(note1);
        const note22 = this.searchNote(note2);
        const dist = note11 && note22 ? note22.getId() - note11.getId() : 0;
        return dist < 0 ? 12 + dist : dist;
    }

    /**
     * Used to get the notes array
     * @return {Array<Note>} Notes Array.
     */
    public static getNotes = (): Array<Note> => this.notes;

}