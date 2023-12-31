import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductCategory } from '../../database/entities/product-category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductCategoryService {
  constructor(
    @InjectRepository(ProductCategory)
    private productCategoryRepository: Repository<ProductCategory>,
  ) {}

  async getProductCategories() {
    return this.productCategoryRepository.find();
  }

  async getProductCategoryById(id: string) {
    return this.productCategoryRepository.findOneBy({
      id,
    });
  }
}
