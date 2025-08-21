"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const file_entity_1 = require("../../models/file.entity");
const promises_1 = require("fs/promises");
const path_1 = require("path");
const promises_2 = require("fs/promises");
let FileService = exports.FileService = class FileService {
    constructor(fileReposiroty) {
        this.fileReposiroty = fileReposiroty;
    }
    async uploadFile(file) {
        const uploadPath = (0, path_1.join)(__dirname, '../../../uploads');
        const id = `${Date.now()}-${file.originalname}`;
        const filePath = (0, path_1.join)(uploadPath, id);
        await (0, promises_2.writeFile)(filePath, file.buffer);
        return {
            path: id,
        };
    }
    async getFile(path) {
        const filePath = (0, path_1.join)(__dirname, '../../../uploads', path);
        try {
            const fileBuffer = await (0, promises_1.readFile)(filePath);
            return fileBuffer;
        }
        catch (error) {
            throw new Error(`File not found at path: ${path}`);
        }
    }
};
exports.FileService = FileService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(file_entity_1.File)),
    __metadata("design:paramtypes", [Object])
], FileService);
//# sourceMappingURL=file.service.js.map