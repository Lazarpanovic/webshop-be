import {
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  NotFoundException,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SwaggerTags } from '../../constants';
import { ProductService } from './product.service';
import { ProductRes } from './dtos/res/product.dto';
import { Product } from 'src/database/entities/product.entity';

@ApiTags(SwaggerTags.PRODUCTS)
@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  async getProducts(): Promise<Product[]> {
    return this.productService.getProducts();
  }

  @Get('/:id')
  async getProductById(
    @Param('id', ParseUUIDPipe) id: string,
  ): Promise<Product> {
    const product = await this.productService.getProductById(id);
    if (!product) {
      throw new NotFoundException();
    }
    return product;
  }
}
