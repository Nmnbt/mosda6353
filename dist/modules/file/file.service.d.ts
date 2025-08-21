/// <reference types="node" />
import { File as FileModel } from 'models/file.entity';
import { File } from '@nest-lab/fastify-multer';
export declare class FileService {
    private readonly fileReposiroty;
    constructor(fileReposiroty: typeof FileModel);
    uploadFile(file: File): Promise<{
        path: string;
    }>;
    getFile(path: string): Promise<Buffer>;
}
