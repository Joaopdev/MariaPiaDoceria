import { BaseError } from "./BaseError";


export class CandyTypeAlreadyExist extends Error implements BaseError {
    public name: string;
    constructor() {
        super("O tipo de brigadeiro já existe na base de dados.");
        this.name = "CandyTypeAlreadyExist";
    }
}