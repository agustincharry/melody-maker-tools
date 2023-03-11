import { NoteValue } from "../src/NoteValue";
import { NoteValueManager } from "../src/NoteValueManager";

let noteValueManager: NoteValueManager = new NoteValueManager();
let testData: Array<any> = [
    {
        "id": '1/64',
        "name": 'Semifusa'
    },
    {
        "id": '1/32',
        "name": 'Fusa'
    },
    {
        "id": '1/16',
        "name": 'Semicorchea'
    },
    {
        "id": '1/8',
        "name": 'Corchea'
    },
    {
        "id": '1/4',
        "name": 'Negra'
    },
    {
        "id": '2/4',
        "name": 'Blanca'
    },
    {
        "id": '4/4',
        "name": 'Redonda'
    }
];


describe('getNoteValueById function', () => {
    testData.forEach(item => {
        test('getNoteValueById: id: ' + item['id'], () => {
            const result: NoteValue = noteValueManager.getNoteValueById(item['id']);
            expect(result.getId()).toBe(item['id']);
            expect(result.getName()).toBe(item['name']);

            const result2: NoteValue = noteValueManager.getNoteValueBySymbolicDuration(result.getSymbolicDuration());
            expect(result2.getId()).toBe(item['id']);
            expect(result2.getName()).toBe(item['name']);

            const result3: number = noteValueManager.getSymbolicDurationById(result.getId());
            expect(result3).toBe(result.getSymbolicDuration());
            expect(result3 > 0).toBe(true);
        });
    });
});


describe('getNoteValueByName function', () => {
    testData.forEach(item => {
        test('getNoteValueByName: name: ' + item['name'], () => {
            const result: NoteValue = noteValueManager.getNoteValueByName(item['name']);
            expect(result.getId()).toBe(item['id']);
            expect(result.getName()).toBe(item['name']);

            const result2: NoteValue = noteValueManager.getNoteValueBySymbolicDuration(result.getSymbolicDuration());
            expect(result2.getId()).toBe(item['id']);
            expect(result2.getName()).toBe(item['name']);

            const result3: number = noteValueManager.getSymbolicDurationById(result.getId());
            expect(result3).toBe(result.getSymbolicDuration());
            expect(result3 > 0).toBe(true);
        });
    });
});


describe('getSymbolicDurationByIdArray function', () => {
    const ids: Array<string> = testData.map(x => x['id']);
    const durations: Array<number> = noteValueManager.getSymbolicDurationByIdArray(ids);

    ids.forEach((id, index) => {
        const result: NoteValue = noteValueManager.getNoteValueById(id);
        expect(result.getId()).toBe(id);
        expect(result.getSymbolicDuration()).toBe(durations[index]);
    });
});