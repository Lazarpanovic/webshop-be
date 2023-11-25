import { INestApplication } from '@nestjs/common';
import { ResourceWithOptions } from 'adminjs';
import { ProductCategory } from 'src/database/entities/product-category.entity';
import { Product } from 'src/database/entities/product.entity';

export const getProductCategoryResource = (
  app: INestApplication,
): ResourceWithOptions => {
  return {
    resource: ProductCategory,
    options: {
      navigation: {
        name: 'Product',
        icon: 'Product',
      },
    },
  };
};
