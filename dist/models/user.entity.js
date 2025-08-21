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
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const sequelize_1 = require("sequelize");
const sequelize_typescript_1 = require("sequelize-typescript");
const bcrypt = require("bcrypt");
let User = exports.User = class User extends sequelize_typescript_1.Model {
    static async hashPassword(user) {
        if (user.changed('password')) {
            user.password = await bcrypt.hash(user.password, await bcrypt.genSalt(10));
        }
    }
};
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.STRING),
    }),
    __metadata("design:type", Array)
], User.prototype, "role", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], User.prototype, "firstName", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], User.prototype, "lastName", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], User.prototype, "phoneNumber", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    sequelize_typescript_1.BeforeSave,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [User]),
    __metadata("design:returntype", Promise)
], User, "hashPassword", null);
exports.User = User = __decorate([
    (0, sequelize_typescript_1.DefaultScope)(() => ({
        attributes: {
            exclude: ['password'],
        },
    })),
    (0, sequelize_typescript_1.Scopes)({
        authService: {
            attributes: ['id', 'phoneNumber', 'password'],
        },
    }),
    (0, sequelize_typescript_1.Table)({
        tableName: 'User',
    })
], User);
//# sourceMappingURL=user.entity.js.map