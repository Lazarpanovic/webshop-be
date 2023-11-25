import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductCategory } from 'src/database/entities/product-category.entity';
import { Product } from 'src/database/entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
    @InjectRepository(ProductCategory)
    private productCategoryRepository: Repository<ProductCategory>,
  ) { }

  async getProducts() {
    return this.productRepository.find({
      relations: {
        productCategory: true,
      },
    });
  }

  async getProduct(id: string) {
    return this.productRepository.findOneBy({
      id
    });
  }

  async getProductCategories() {
    return this.productCategoryRepository.find();
  }
}
