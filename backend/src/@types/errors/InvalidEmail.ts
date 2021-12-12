import { BaseError } from "./BaseError";


export class InvalidEmail extends Error implements BaseError {
    public name: string;
    constructor() {
        super("E-mail inválido!");
        this.name = "InvalidEmail";
    }
}