import { BaseError } from "./BaseError";


export class UserNotFounded extends Error implements BaseError {
    public name: string;
    constructor() {
        super("Usuário não encontrado.");
        this.name = "UserNotFounded";
    }
}