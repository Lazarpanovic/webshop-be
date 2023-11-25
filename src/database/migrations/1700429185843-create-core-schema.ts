import { SCHEMA_CORE } from "src/constants";
import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateCoreSchema1700429185843 implements MigrationInterface {
  name = 'CreateCoreSchema1700429185843';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`create schema ${SCHEMA_CORE}`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`drop schema ${SCHEMA_CORE}`);
  }

}
