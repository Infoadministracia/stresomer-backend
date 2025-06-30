import { defineDatabaseConfig } from '@strapi/types';

export default defineDatabaseConfig(({ env }) => ({
  connection: {
    client: 'sqlite',
    connection: {
      filename: env('DATABASE_FILENAME', '.tmp/data.db'),
    },
    useNullAsDefault: true,
  },
}));
