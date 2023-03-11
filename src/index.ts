import { MelodyMaker } from './MelodyMaker';

const melodyMaker = new MelodyMaker();
const result = melodyMaker.generate(192, ['1/8', '1/4', '2/4', '4/4'], [10, 40, 30, 20])

console.log(result.toString())