import {MigrationInterface, QueryRunner} from "typeorm";

export class AddScoreToStudentSimulated1639265285936 implements MigrationInterface {
    name = 'AddScoreToStudentSimulated1639265285936'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "StudentSimulated" ADD "score" character varying NOT NULL DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "StudentSimulated" DROP COLUMN "score"`);
    }

}
