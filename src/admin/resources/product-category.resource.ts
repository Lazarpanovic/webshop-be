import { INestApplication } from '@nestjs/common';
import { ResourceWithOptions } from 'adminjs';
import { ProductCategory } from '../../database/entities/product-category.entity';
import { Product } from '../../database/entities/product.entity';

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
