import { Model } from 'sequelize-typescript';
export declare class User extends Model {
    role: string[];
    firstName: string;
    lastName: string;
    phoneNumber: string;
    password: string;
    static hashPassword(user: User): Promise<void>;
}
