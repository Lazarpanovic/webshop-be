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

@ApiTags(SwaggerTags.PRODUCTS)
@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  async getProducts() {
    return this.productService.getProducts();
  }

  @Get('/:id')
  async getProductById(
    @Param('id', ParseUUIDPipe) id: string,
  ): Promise<ProductRes> {
    const product = await this.productService.getProduct(id);
    if (!product) {
      throw new NotFoundException();
    }
    return new ProductRes(product);
  }
}
