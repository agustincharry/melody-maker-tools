import { ValueProbability } from "./ValueProbability";

export class MusicMath {

    /**
     * Return the combination of "possibleValues" that summed got the "wantedValue"
     * @param {number} wantedValue Wanted value of the sum.
     * @param {Array<number>} possibleValues Possibles values to sum in the algorithm.
     * @param {Array<number>} probabilities Probabilities of choose the values.
     * @returns {Array<number>} Array with numbers that added together return the "wantedValue". Empty array if there is no solution.
     */
    public static randomSum = (wantedValue: number, possibleValues: Array<number>, probabilities: Array<number>): Array<number> => {
        const values: Array<ValueProbability> = possibleValues.map((item, index) => new ValueProbability(item, probabilities[index]));
        return this.searchRandomSum(wantedValue, this.sortArray(values), []);
    }

    /**
     * Return the combination of "possibleValues" that summed got the "wantedValue"
     * @param {number} wantedValue Wanted value of the sum.
     * @param {Array<ValueProbability>} values SORTED Possibles values to sum in the algorithm with its Probabilities.
     * @param {Array<number>} resultingValues Values that are be processing by the algorithm. Here is stored the possible solution.
     * @returns {Array<number>} Array with numbers that added together return the "wantedValue". Empty array if there is no solution.
     */
    private static searchRandomSum = (wantedValue: number, values: Array<ValueProbability>, resultingValues: Array<number>): Array<number> => {
        let amount = this.sumOfarray(resultingValues);
        
        if (amount == wantedValue){
            return resultingValues;
        }
        else if (amount > wantedValue){
            let added = this.removeAndAddPrevious(values, resultingValues)
            if(!added){
                return []; // Empty array if there is no solution.
            }
        }
        else {
            let value: number = this.getRandomNumberWithProbabilitiesFromArray(values);
            resultingValues.push(value);
        }
        return this.searchRandomSum(wantedValue, values, resultingValues);
    }


    /**
     * Used to remove the last element of "resultingValues" array and change it for its previous value.
     * @param {Array<number>} values Possibles values to sum in the algorithm.
     * @param {Array<number>} resultingValues Values that are be processing by the algorithm.
     * @returns {boolean} True if all "resultingValues" has a new element, False if is not possible get previous "possibleValues"
     */
    private static removeAndAddPrevious = (values: Array<ValueProbability>, resultingValues: Array<number>): boolean => {
        let added: boolean = false;
        const possibleValues: Array<number> = values.map(x => x.getValue());
        while(!added && resultingValues.length > 0){
            let lastValue: number | undefined = resultingValues.pop();
            let i: number | undefined = lastValue ? possibleValues.indexOf(lastValue) : 0;
            if (i > 0){
                resultingValues.push(possibleValues[i-1]);
                added = true;
            }
        }
        return added;
    }


    /**
     * Used to sum the elements of an array.
     * @param {Array<number>} array Array that will be summed.
     * @returns {number} Sum of the array elements.
     */
    private static sumOfarray = (array: Array<number>): number => {
        return array.reduce((a, b) => a + b, 0);
    }


    /**
     * Used to generate random number between range.
     * @param {number} min Minimum number.
     * @param {number} max Maximum number.
     * @returns {number} Random number.
     */
    private static randomIntFromInterval = (min: number, max: number): number => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }


    /**
     * Sort Array.
     * @param {Array<number>} values Array that will be sorted based on its value.
     * @returns {Array<number>} Sorted array.
     */
    private static sortArray = (values: Array<ValueProbability>): Array<ValueProbability> => {
        return values.sort(function(a, b){return a.getValue() - b.getValue()});
    }


   /**
     * Used to get a random value of a list.
     * @param {Array<number>} values Possible values to choose.
     * @returns {number} Random element of the values array.
     */
   private static getRandomNumberFromArray = (values: Array<number>): number => {
        let i: number = this.randomIntFromInterval(0, values.length-1);
        return values[i];
    }


    /**
     * Used to obtain a random value from a list taking into account certain probabilities.
     * @param {Array<number>} values Possible values to choose.
     * @param {Array<number>} probabilities Probabilities of choose the values.
     * @returns {number} Random value.
     */
    private static getRandomNumberWithProbabilitiesFromArray = (values: Array<ValueProbability>): number => {
        let allValues: Array<number> = [];
        for(let i: number = 0; i < values.length; i++){
            for(let j: number = 0; j < values[i].getProbability(); j++){
                allValues.push(values[i].getValue());
            }   
        }
        return this.getRandomNumberFromArray(allValues)
    }

}