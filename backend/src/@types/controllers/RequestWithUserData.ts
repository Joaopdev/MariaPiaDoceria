import { Request } from "express";
import { TokenPayLoad } from "./TokenPayLoad";


export default interface RequestWithUserData extends Request {
    user: TokenPayLoad;
}