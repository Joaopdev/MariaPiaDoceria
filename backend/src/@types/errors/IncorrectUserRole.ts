import { BaseError } from "./BaseError";


export class IncorrectUserRole extends Error implements BaseError {
    public name: string;
    constructor() {
        super("Role de usuário incorreta!");
        this.name = "IncorrectUserRole";
    }
}