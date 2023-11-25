import { ProductCategory } from "src/database/entities/product-category.entity";

export class ProductCategoryRes {
  id: string;
  name: string;

  constructor(
    product: ProductCategory,
  ) {
    this.id = product.id;
    this.name = product.name;
  }
}
