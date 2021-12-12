import { BaseError } from "./BaseError";


export class CandyTypesDoesNotExist extends Error implements BaseError {
    public name: string;
    constructor() {
        super("Este brigadeiro já existe na base de dados.");
        this.name = "CandyTypesDoesNotExist";
    }
}