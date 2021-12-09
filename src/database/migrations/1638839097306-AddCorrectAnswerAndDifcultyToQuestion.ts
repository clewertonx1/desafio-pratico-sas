import {MigrationInterface, QueryRunner} from "typeorm";

export class AddCorrectAnswerAndDifcultyToQuestion1638839097306 implements MigrationInterface {
    name = 'AddCorrectAnswerAndDifcultyToQuestion1638839097306'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "question" ADD "correctAnswer" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "question" ADD "dificulty" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "question" DROP COLUMN "dificulty"`);
        await queryRunner.query(`ALTER TABLE "question" DROP COLUMN "correctAnswer"`);
    }

}
