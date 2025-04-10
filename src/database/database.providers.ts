import { User } from '../entities/user.entity';
import { Settings } from '../entities/settings.entity';
import { Connection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'USER_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(User),
    inject: ['DATABASE_CONNECTION'],
  },
  {
    provide: 'SETTINGS_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Settings),
    inject: ['DATABASE_CONNECTION'],
  },
];