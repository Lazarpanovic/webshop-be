import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { SCHEMA_CORE } from '../../constants';
import { Product } from './product.entity';

@Entity('product_item', { schema: SCHEMA_CORE })
export class ProductItem extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    name: 'serial_number',
  })
  serialNumber: string;

  // relations
  @ManyToOne(() => Product, (p) => p.productItems)
  @JoinColumn([{ name: 'product_id', referencedColumnName: 'id' }])
  product?: Product;
  @Column({ type: 'uuid', name: 'product_id' })
  productId?: string;

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
