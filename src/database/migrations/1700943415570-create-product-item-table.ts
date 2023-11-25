import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateProductItemTable1700943415570 implements MigrationInterface {
    name = 'CreateProductItemTable1700943415570'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "core"."product_item" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "serial_number" character varying NOT NULL, "product_id" uuid NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_83c3b7a80f6fe1d5ad7fa05a2a2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "core"."product_item" ADD CONSTRAINT "FK_88ef002ea2f04e6bf896da91692" FOREIGN KEY ("product_id") REFERENCES "core"."product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "core"."product_item" DROP CONSTRAINT "FK_88ef002ea2f04e6bf896da91692"`);
        await queryRunner.query(`DROP TABLE "core"."product_item"`);
    }

}
