
export class MusicMath {

    public static randomSum = (wantedValue: number, possibleValues: Array<number>, probabilities: Array<number>): Array<number> => {
        return this.searchRandomSum(wantedValue, possibleValues, probabilities, []);
    }

    /**
     * Return the combination of "possibleValues" that summed got the "wantedValue"
     * @param {number} wantedValue Wanted value of the sum
     * @param {Array<number>} possibleValues SORTED Possibles values to sum in the algorithm
     * @param {Array<number>} probabilities Probabilities of choose the values
     * @param {Array<number>} resultingValues Values that are be processing by the algorithm
     */
    private static searchRandomSum = (wantedValue: number, possibleValues: Array<number>, probabilities: Array<number>, resultingValues: Array<number>): Array<number> => {
        let amount = this.sumOfarray(resultingValues);
        
        if (amount == wantedValue){
            return resultingValues;
        }
        else if (amount > wantedValue){
            let added = this.removeAndAddPrevious(possibleValues, resultingValues)
            if(!added){
                return []; // To review!!!!!!!!!!!!!!!!
            }
        }
        else {
            let value: number = !probabilities ? this.getRandomNumberFromArray(possibleValues) : this.getRandomNumberWithProbabilitiesFromArray(possibleValues, probabilities);
            resultingValues.push(value);
        }
        return this.searchRandomSum(wantedValue, possibleValues, probabilities, resultingValues);
    }


    /**
     * Used to remove the last element of "resultingValues" array and change it for its previous value
     * @param {Array<number>} possibleValues Possibles values to sum in the algorithm
     * @param {Array<number>} resultingValues Values that are be processing by the algorithm
     * @returns {boolean} True if all "resultingValues" has a new element, False if is not possible get previous "possibleValues"
     */
    private static removeAndAddPrevious = (possibleValues: Array<number>, resultingValues: Array<number>): boolean => {
        let added: boolean = false;
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
     * Used to sum the elements of an array
     * @param {Array<number>} array Array that will be summed
     * @returns {number} Sum of the array elements
     */
    private static sumOfarray = (array: Array<number>): number => {
        return array.reduce((a, b) => a + b, 0);
    }


    /**
     * Used to generate random number between range
     * @param {number} min Minimum number
     * @param {number} max Maximum number
     * @returns {number} Random number
     */
    private static randomIntFromInterval = (min: number, max: number): number => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }


    /**
     * Sort Array
     * @param {Array<number>} array Array that will be sorted
     * @returns {Array<number>} Sorted array
     */
    private static sortArray = (array: Array<number>): Array<number> => {
        return array.sort(function(a, b){return a-b});
    }


   /**
     * Used to get a random value of a list
     * @param {Array<number>} values Possible values to choose
     * @returns {number} Random element of the values array
     */
   private static getRandomNumberFromArray = (values: Array<number>): number => {
        let i: number = this.randomIntFromInterval(0, values.length-1);
        return values[i];
    }


    /**
     * Used to obtain a random value from a list taking into account certain probabilities.
     * @param {Array<number>} values Possible values to choose
     * @param {Array<number>} probabilities Probabilities of choose the values
     * @returns {number} Random value
     */
    private static getRandomNumberWithProbabilitiesFromArray = (values: Array<number>, probabilities: Array<number>): number => {
        let allValues: Array<number> = [];
        for(let i: number = 0; i < values.length; i++){
            for(let j: number = 0; j < probabilities[i]; j++){
                allValues.push(values[i]);
            }   
        }
        return this.getRandomNumberFromArray(allValues)
    }

}