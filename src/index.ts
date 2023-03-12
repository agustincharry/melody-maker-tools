import { MelodyMaker } from './MelodyMaker';

const melodyMaker = new MelodyMaker();
const result = melodyMaker.generate(192, ['2/4', '1/8', '4/4', '1/4'], [10, 40, 30, 20])

console.log(result.toString())