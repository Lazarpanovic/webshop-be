import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configs } from '../core/app.config';
import { getDataSourceConfigs } from '../database/data-source';
import { ProductModule } from './product/product.module';
import { ProductCategoryModule } from './product-category/product-category.module';

@Module({
  imports: [
    ConfigModule.forRoot(configs),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return getDataSourceConfigs(configService);
      },
    }),
    ProductModule,
    ProductCategoryModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
