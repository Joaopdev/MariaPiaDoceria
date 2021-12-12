import { AdressDTO } from "../dto/AdressDTO";

export interface ICepClient {
    findAdressByCep(cep: string): Promise<AdressDTO>;
}
