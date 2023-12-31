import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from '../../database/entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  async getProducts() {
    return this.productRepository.find({
      relations: {
        productCategory: true,
      },
    });
  }

  async getProductById(id: string) {
    return this.productRepository.findOneBy({
      id,
    });
  }
}
