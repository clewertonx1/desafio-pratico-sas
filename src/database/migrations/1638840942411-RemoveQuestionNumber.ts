import {MigrationInterface, QueryRunner} from "typeorm";

export class RemoveQuestionNumber1638840942411 implements MigrationInterface {
    name = 'RemoveQuestionNumber1638840942411'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "question" DROP COLUMN "questionNumber"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "question" ADD "questionNumber" integer NOT NULL`);
    }

}
