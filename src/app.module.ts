import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarModule } from './car/car.module';
import config from '../ormconfig';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      name: 'defualt',
      useFactory: () => ({}),
      dataSourceFactory: async () => {
        const datasource = new DataSource(config);
        if (!datasource.isInitialized) {
          await datasource.initialize();
        }
        return datasource;
      },
    }),
    CarModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
