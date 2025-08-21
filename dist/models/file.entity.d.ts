import { Model } from 'sequelize-typescript';
export declare class File extends Model<File> {
    id: string;
    size: number;
    path: string;
    filename: string;
}
