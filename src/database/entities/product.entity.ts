import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { SCHEMA_CORE } from '../../constants';
import { ProductCategory } from './product-category.entity';
import { Brand } from '../../application/product/types/product.types';
import { ProductItem } from './product-item.entity';

@Entity('product', { schema: SCHEMA_CORE })
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  brand: Brand;

  @Column()
  price: number;

  @Column()
  quantity: number;

  @Column({
    name: 'img_url',
  })
  imgUrl: string;

  @Column()
  details: string;

  @Column()
  stars: number;

  // relations
  @ManyToOne(() => ProductCategory, (pc) => pc.products)
  @JoinColumn([{ name: 'product_category_id', referencedColumnName: 'id' }])
  productCategory?: ProductCategory;
  @Column({ type: 'uuid', name: 'product_category_id' })
  productCategoryId?: string;

  @OneToMany(() => ProductItem, (p) => p.product)
  productItems: ProductItem[];

  // timestamps
  @CreateDateColumn({
    type: 'timestamp without time zone',
    name: 'created_at',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp without time zone',
    name: 'updated_at',
  })
  updatedAt: Date;
}
