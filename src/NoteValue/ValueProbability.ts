export class ValueProbability {
    private value: number;
    private probability: number;

    constructor(value: number, probability: number){
        this.value = value;
        this.probability = probability;
    }

    public toString = (): string => {
        return `{"value": "${this.value}", "probability": "${this.probability}"}`;
    };

    public getValue = () => this.value;
    public getProbability = () => this.probability;
}