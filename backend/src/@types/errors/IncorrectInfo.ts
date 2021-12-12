import { BaseError } from "./BaseError";


export class IncorrectInfo extends Error implements BaseError {
    public name: string;
    constructor() {
        super("As informações fornecidas estão incorretas e/ou incompletas!");
        this.name = "IncorrectInfo";
    }
}