import { Product } from '../../../../database/entities/product.entity';
import { ProductCategoryRes } from './product-category.dto';

export class ProductRes {
  id: string;
  name: string;
  price: number;
  imgUrl: string;
  details: string;
  stars: number;
  productCategory: ProductCategoryRes;

  constructor(product: Product) {
    this.id = product.id;
    this.name = product.name;
    this.price = product.price;
    this.imgUrl = product.imgUrl;
    this.details = product.details;
    this.stars = product.stars;
    this.productCategory = new ProductCategoryRes(product.productCategory);
  }
}
