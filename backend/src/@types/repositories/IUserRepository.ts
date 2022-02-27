import { User } from "./../../models/UserEntity";

export interface IUserRepository { 
    save(user: User): Promise<User>;
    findById(id: number): Promise<User>;
    findAll(): Promise<User>;
    remove(entities: User | User[]): Promise<User>;
}