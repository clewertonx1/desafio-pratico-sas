import {MigrationInterface, QueryRunner} from "typeorm";

export class AddScoreToTestStudent1639260720489 implements MigrationInterface {
    name = 'AddScoreToTestStudent1639260720489'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "StudentTest" ADD "score" character varying NOT NULL DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "StudentTest" DROP COLUMN "score"`);
    }

}
