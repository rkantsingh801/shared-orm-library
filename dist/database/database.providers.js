"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const user_entity_1 = require("../entities/user.entity");
const settings_entity_1 = require("../entities/settings.entity");
exports.databaseProviders = [
    {
        provide: 'USER_REPOSITORY',
        useFactory: (connection) => connection.getRepository(user_entity_1.User),
        inject: ['DATABASE_CONNECTION'],
    },
    {
        provide: 'SETTINGS_REPOSITORY',
        useFactory: (connection) => connection.getRepository(settings_entity_1.Settings),
        inject: ['DATABASE_CONNECTION'],
    },
];
