import { DataSourceOptions } from 'typeorm';

const databaseConfig: DataSourceOptions = {
  type: 'postgres',
  host: '',
  port: 5432,
  username: '',
  password: '',
  database: '',
  entities: ['dist/**/*.entity.js'],
  synchronize: false,
};

export default databaseConfig;
