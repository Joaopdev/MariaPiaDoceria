import { BaseError } from "./BaseError";


export class BrigadeiroTypesDoesNotExist extends Error implements BaseError {
    public name: string;
    constructor() {
        super("Este brigadeiro já existe na base de dados.");
        this.name = "BrigadeiroTypesDoesNotExist";
    }
}