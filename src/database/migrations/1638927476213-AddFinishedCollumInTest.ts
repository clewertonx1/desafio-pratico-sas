import {MigrationInterface, QueryRunner} from "typeorm";

export class AddFinishedCollumInTest1638927476213 implements MigrationInterface {
    name = 'AddFinishedCollumInTest1638927476213'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "test" ADD "finished" boolean NOT NULL DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "test" DROP COLUMN "finished"`);
    }

}
