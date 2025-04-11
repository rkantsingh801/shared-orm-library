"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var DatabaseModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const database_providers_1 = require("./database.providers");
let DatabaseModule = DatabaseModule_1 = class DatabaseModule {
    static forRoot() {
        return {
            module: DatabaseModule_1,
            providers: [
                {
                    provide: 'DATABASE_CONNECTION',
                    useFactory: async () => await (0, typeorm_1.createConnection)({
                        type: 'postgres',
                        host: 'localhost',
                        port: 5432,
                        username: 'postgres',
                        password: 'root',
                        database: 'my_account',
                        entities: [__dirname + '/../entities/*.entity{.ts,.js}'],
                        synchronize: false,
                        migrations: [__dirname + '/../migrations/*{.ts,.js}'],
                        migrationsRun: true,
                    }),
                },
                ...database_providers_1.databaseProviders,
            ],
            exports: ['DATABASE_CONNECTION', ...database_providers_1.databaseProviders],
        };
    }
};
DatabaseModule = DatabaseModule_1 = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        providers: [...database_providers_1.databaseProviders],
        exports: [...database_providers_1.databaseProviders],
    })
], DatabaseModule);
exports.DatabaseModule = DatabaseModule;
