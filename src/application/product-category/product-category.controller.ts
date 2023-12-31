import {
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  NotFoundException,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SwaggerTags } from '../../constants';
import { ProductCategoryService } from './product-category.service';
import { ProductCategory } from 'src/database/entities/product-category.entity';

@ApiTags(SwaggerTags.PRODUCT_CATEGORY)
@Controller('product-category')
export class ProductCategoryController {
  constructor(private productCategoryService: ProductCategoryService) {}

  @Get()
  async getProductCategories(): Promise<ProductCategory[]> {
    return this.productCategoryService.getProductCategories();
  }

  @Get('/:id')
  async getProductById(
    @Param('id', ParseUUIDPipe) id: string,
  ): Promise<ProductCategory> {
    const productCategory =
      await this.productCategoryService.getProductCategoryById(id);
    if (!productCategory) {
      throw new NotFoundException();
    }
    return productCategory;
  }
}
