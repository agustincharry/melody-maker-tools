import { MusicMath } from "../src/MusicMath";

describe('sumOfarray function', () => {
    const sumOfarray = MusicMath['sumOfarray'];

    const testData: Array<any> = [
        {
            "array": [],
            "expectedResult": 0
        },
        {
            "array": [7],
            "expectedResult": 7
        },
        {
            "array": [1, 2],
            "expectedResult": 3
        },
        {
            "array": [1, 2, 3, 4, 5],
            "expectedResult": 15
        }
    ];

    testData.forEach(item => {
        test('sumOfarray : ' + item['array'], () => {
            const result: number = sumOfarray(item['array']);
            expect(result).toBe(item['expectedResult']);
        });
    });
});


describe('randomIntFromInterval function', () => {
    const randomIntFromInterval = MusicMath['randomIntFromInterval'];

    const testData: Array<any> = [
        {
            "min": 1,
            "max": 5
        },
        {
            "min": 90,
            "max": 100
        },
        {
            "min": 0,
            "max": 1
        },
        {
            "min": 11,
            "max": 19
        },
    ];

    testData.forEach(item => {
        test('randomIntFromInterval: min:' + item['min'] + ' max:' + item['max'], () => {
            expect(randomIntFromInterval(item['min'], item['max'])).toBeGreaterThanOrEqual(item['min']);
            expect(randomIntFromInterval(item['min'], item['max'])).toBeLessThanOrEqual(item['max']);
        });
    });
});


describe('sortArray function', () => {
    const sortArray = MusicMath['sortArray']

    const testData: Array<any> = [
        {
            "array": [4, 1, 3, 5],
            "expectedResult": [1, 3, 4, 5]
        },
        {
            "array": [10, 20, 5, 1],
            "expectedResult": [1, 5, 10, 20]
        },
        {
            "array": [6, 7, 100, 80],
            "expectedResult": [6, 7, 80, 100]
        },
        {
            "array": [],
            "expectedResult": []
        }
        ,
        {
            "array": [1],
            "expectedResult": [1]
        }
    ];

    testData.forEach(item => {
        test('sortArray: ' + item['array'], () => {
            expect(sortArray(item['array'])).toStrictEqual(item['expectedResult']);
        });
    });
});


describe('getRandomNumberFromArray function', () => {
    const getRandomNumberFromArray = MusicMath['getRandomNumberFromArray'];

    const testData: Array<any> = [
        {
            "array": [4, 1, 3, 5]
        },
        {
            "array": [2, 4]
        },
        {
            "array": [1]
        },
        {
            "array": [7, 8, 1, 4, 100, 3]
        }
    ];

    testData.forEach(item => {
        test('getRandomNumberFromArray : ' + item['array'], () => {
            const result: number = getRandomNumberFromArray(item['array']);
            expect(item['array'].indexOf(result) >= 0).toBe(true);
        });
    });
});


describe('getRandomNumberWithProbabilitiesFromArray function', () => {
    const getRandomNumberWithProbabilitiesFromArray = MusicMath['getRandomNumberWithProbabilitiesFromArray'];

    const testData: Array<any> = [
        {
            "array": [4, 1, 3, 5],
            "probabilities": [10, 20, 20, 50]
        },
        {
            "array": [2, 4],
            "probabilities": [10, 90]
        },
        {
            "array": [1],
            "probabilities": [100]
        },
        {
            "array": [7, 8, 1, 4, 100, 3],
            "probabilities": [10, 10, 10, 20, 25, 25]
        }
    ];

    testData.forEach(item => {
        test('getRandomNumberWithProbabilitiesFromArray: ' + item['array'] + ' probabilities: ' + item['probabilities'], () => {
            const result: number = getRandomNumberWithProbabilitiesFromArray(item['array'], item['probabilities']);
            expect(item['array'].indexOf(result) >= 0).toBe(true);
        });
    });


    const testData100: Array<any> = [
        {
            "array": [1, 2],
            "probabilities": [100, 0],
            "expectedResult": 1
        },
        {
            "array": [15, 23],
            "probabilities": [0, 100],
            "expectedResult": 23
        }
    ];

    testData100.forEach(item => {
        test('getRandomNumberWithProbabilitiesFromArray: ' + item['array'] + ' probabilities: ' + item['probabilities'], () => {
            const result: number = getRandomNumberWithProbabilitiesFromArray(item['array'], item['probabilities']);
            expect(result).toBe(item['expectedResult']);
        });
    });
});


describe('removeAndAddPrevious function', () => {
    const removeAndAddPrevious = MusicMath['removeAndAddPrevious'];

    const testData: Array<any> = [
        {
            "possibleValues": [1, 2, 3, 4, 5],
            "resultingValues": [2, 3, 5],
            "expectedResultFunction": true
        },
        {
            "possibleValues": [10, 20],
            "resultingValues": [10],
            "expectedResultFunction": false
        },
        {
            "possibleValues": [5, 10, 15, 20],
            "resultingValues": [10],
            "expectedResultFunction": true
        },
        {
            "possibleValues": [],
            "resultingValues": [],
            "expectedResultFunction": false
        },
        {
            "possibleValues": [5, 10],
            "resultingValues": [],
            "expectedResultFunction": false
        },
    ];

    testData.forEach(item => {
        test('removeAndAddPrevious: possibleValues:' + item['possibleValues'] + ' expectedResultFunction: ' + item['expectedResultFunction'], () => {
            const result: boolean = removeAndAddPrevious(item['possibleValues'], item['resultingValues']);
            expect(result).toBe(item['expectedResultFunction']);
        });
    });
});


describe('randomSum function', () => {
    const randomSum = MusicMath['randomSum'];

    const testData: Array<any> = [
        {
            "wantedValue": 70,
            "possibleValues": [10, 20, 30, 50],
            "probabilities": [20, 30, 20, 30]
        },
        {
            "wantedValue": 50,
            "possibleValues": [3, 5, 7, 10],
            "probabilities": [50, 10, 10, 30]
        },
        {
            "wantedValue": 100,
            "possibleValues": [100, 125, 160],
            "probabilities": [10, 70, 20]
        },
    ];

    testData.forEach(item => {
        test('randomSum: wantedValue:' + item['wantedValue'] + ' possibleValues: ' + item['possibleValues'], () => {
            const result: Array<number> = randomSum(item['wantedValue'], item['possibleValues'], item['probabilities']);
            const sum = result.reduce((a, b) => a + b, 0);
            expect(result.length > 0).toBe(true);
            expect(sum).toBe(item['wantedValue']);
        });
    });


    const testDataNegative: Array<any> = [
        {
            "wantedValue": 5,
            "possibleValues": [10, 20, 30, 50],
            "probabilities": [20, 30, 20, 30]
        },
        {
            "wantedValue": 5,
            "possibleValues": [2, 4, 6],
            "probabilities": [30, 30, 40]
        },
    ];

    testDataNegative.forEach(item => {
        test('randomSum WithoutSolution: wantedValue:' + item['wantedValue'] + ' possibleValues: ' + item['possibleValues'], () => {
            const result: Array<number> = randomSum(item['wantedValue'], item['possibleValues'], item['probabilities']);
            expect(result.length).toBe(0);
        });
    });
});