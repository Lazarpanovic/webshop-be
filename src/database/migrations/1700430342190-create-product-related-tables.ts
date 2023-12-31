import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateProductRelatedTables1700430342190
  implements MigrationInterface
{
  name = 'CreateProductRelatedTables1700430342190';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "core"."product_category" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_0dce9bc93c2d2c399982d04bef1" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "core"."product" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "brand" character varying NOT NULL, "price" integer NOT NULL, "quantity" integer NOT NULL, "img_url" character varying NOT NULL, "details" character varying NOT NULL, "stars" integer NOT NULL, "product_category_id" uuid NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "core"."product" ADD CONSTRAINT "FK_c385a97195418da0bd3a08ceced" FOREIGN KEY ("product_category_id") REFERENCES "core"."product_category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "core"."product" DROP CONSTRAINT "FK_c385a97195418da0bd3a08ceced"`,
    );
    await queryRunner.query(`DROP TABLE "core"."product"`);
    await queryRunner.query(`DROP TABLE "core"."product_category"`);
  }
}
