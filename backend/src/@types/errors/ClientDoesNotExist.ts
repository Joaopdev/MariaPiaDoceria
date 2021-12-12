import { BaseError } from "./BaseError";


export class ClientDoesNotExist extends Error implements BaseError {
    public name: string;
    constructor() {
        super("Cliente não encontrado no banco de dados!");
        this.name = "ClientDoesNotExist";
    }
}