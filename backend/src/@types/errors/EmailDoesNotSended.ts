import { BaseError } from "./BaseError";


export class EmailDoesNotSended extends Error implements BaseError {
    public name: string;
    constructor() {
        super("E-mail não enviado!");
        this.name = "EmailDoesNotSended";
    }
}