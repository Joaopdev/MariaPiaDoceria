import { BaseError } from "./BaseError";


export class CepNotFounded extends Error implements BaseError {
    public name: string;

    constructor() {
        super("CEP not founded!");
        this.name = "CEPNotFounded";
    }
}