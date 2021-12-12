import { BaseError } from "./BaseError";


export class ClientAlreadyExist extends Error implements BaseError {
    public static CODE = "ER_DUP_ENTRY";
    public name: string;

    constructor() {
        super("Cliente já existe");
        this.name = "ClientAlreadyExist";
    }
}