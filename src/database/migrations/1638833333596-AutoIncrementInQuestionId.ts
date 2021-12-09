import {MigrationInterface, QueryRunner} from "typeorm";

export class AutoIncrementInQuestionId1638833333596 implements MigrationInterface {
    name = 'AutoIncrementInQuestionId1638833333596'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "test_questions_question" DROP CONSTRAINT "FK_c4765474979216820ca0fbf8445"`);
        await queryRunner.query(`ALTER TABLE "question" DROP CONSTRAINT "PK_21e5786aa0ea704ae185a79b2d5"`);
        await queryRunner.query(`ALTER TABLE "question" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "question" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "question" ADD CONSTRAINT "PK_21e5786aa0ea704ae185a79b2d5" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "test_questions_question" DROP CONSTRAINT "PK_988c77d8cb8becbee58da42494e"`);
        await queryRunner.query(`ALTER TABLE "test_questions_question" ADD CONSTRAINT "PK_21da142a525b221958bfac9bfd4" PRIMARY KEY ("testId")`);
        await queryRunner.query(`DROP INDEX "public"."IDX_c4765474979216820ca0fbf844"`);
        await queryRunner.query(`ALTER TABLE "test_questions_question" DROP COLUMN "questionId"`);
        await queryRunner.query(`ALTER TABLE "test_questions_question" ADD "questionId" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "test_questions_question" DROP CONSTRAINT "PK_21da142a525b221958bfac9bfd4"`);
        await queryRunner.query(`ALTER TABLE "test_questions_question" ADD CONSTRAINT "PK_988c77d8cb8becbee58da42494e" PRIMARY KEY ("testId", "questionId")`);
        await queryRunner.query(`CREATE INDEX "IDX_c4765474979216820ca0fbf844" ON "test_questions_question" ("questionId") `);
        await queryRunner.query(`ALTER TABLE "test_questions_question" ADD CONSTRAINT "FK_c4765474979216820ca0fbf8445" FOREIGN KEY ("questionId") REFERENCES "question"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "test_questions_question" DROP CONSTRAINT "FK_c4765474979216820ca0fbf8445"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_c4765474979216820ca0fbf844"`);
        await queryRunner.query(`ALTER TABLE "test_questions_question" DROP CONSTRAINT "PK_988c77d8cb8becbee58da42494e"`);
        await queryRunner.query(`ALTER TABLE "test_questions_question" ADD CONSTRAINT "PK_21da142a525b221958bfac9bfd4" PRIMARY KEY ("testId")`);
        await queryRunner.query(`ALTER TABLE "test_questions_question" DROP COLUMN "questionId"`);
        await queryRunner.query(`ALTER TABLE "test_questions_question" ADD "questionId" character varying NOT NULL`);
        await queryRunner.query(`CREATE INDEX "IDX_c4765474979216820ca0fbf844" ON "test_questions_question" ("questionId") `);
        await queryRunner.query(`ALTER TABLE "test_questions_question" DROP CONSTRAINT "PK_21da142a525b221958bfac9bfd4"`);
        await queryRunner.query(`ALTER TABLE "test_questions_question" ADD CONSTRAINT "PK_988c77d8cb8becbee58da42494e" PRIMARY KEY ("testId", "questionId")`);
        await queryRunner.query(`ALTER TABLE "question" DROP CONSTRAINT "PK_21e5786aa0ea704ae185a79b2d5"`);
        await queryRunner.query(`ALTER TABLE "question" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "question" ADD "id" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "question" ADD CONSTRAINT "PK_21e5786aa0ea704ae185a79b2d5" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "test_questions_question" ADD CONSTRAINT "FK_c4765474979216820ca0fbf8445" FOREIGN KEY ("questionId") REFERENCES "question"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

}
