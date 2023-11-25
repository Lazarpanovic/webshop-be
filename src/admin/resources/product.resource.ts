import { INestApplication } from '@nestjs/common';
import { ResourceWithOptions } from 'adminjs';
import { Product } from 'src/database/entities/product.entity';

export const getProductResource = (
  app: INestApplication,
): ResourceWithOptions => {
  return {
    resource: Product,
    options: {
      navigation: {
        name: 'Product',
        icon: 'Product',
      },
    },
  };
};
