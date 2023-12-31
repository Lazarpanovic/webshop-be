import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ProductCategory } from 'src/database/entities/product-category.entity';
import { ProductCategoryService } from './product-category.service';
import { ProductCategoryController } from './product-category.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ProductCategory])],
  providers: [ProductCategoryService],
  controllers: [ProductCategoryController],
  exports: [ProductCategoryService],
})
export class ProductCategoryModule {}
