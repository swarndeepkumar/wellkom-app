import { Role } from "./role";

export class User {
    id: number;
    _id: any;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    role: Role;
    token?: string;
}