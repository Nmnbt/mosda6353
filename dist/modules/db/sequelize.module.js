"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SequelizeConfigModule = void 0;
const config_1 = require("@nestjs/config");
const sequelize_1 = require("@nestjs/sequelize");
const sequelize_service_1 = require("./sequelize.service");
exports.SequelizeConfigModule = sequelize_1.SequelizeModule.forRootAsync({
    imports: [config_1.ConfigModule],
    useClass: sequelize_service_1.SequelizeConfigService,
});
//# sourceMappingURL=sequelize.module.js.map