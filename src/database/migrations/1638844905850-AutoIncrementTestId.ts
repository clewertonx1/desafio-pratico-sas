import {MigrationInterface, QueryRunner} from "typeorm";

export class AutoIncrementTestId1638844905850 implements MigrationInterface {
    name = 'AutoIncrementTestId1638844905850'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "test_questions_question" DROP CONSTRAINT "FK_21da142a525b221958bfac9bfd4"`);
        await queryRunner.query(`ALTER TABLE "test" DROP CONSTRAINT "PK_5417af0062cf987495b611b59c7"`);
        await queryRunner.query(`ALTER TABLE "test" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "test" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "test" ADD CONSTRAINT "PK_5417af0062cf987495b611b59c7" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "test_questions_question" DROP CONSTRAINT "PK_988c77d8cb8becbee58da42494e"`);
        await queryRunner.query(`ALTER TABLE "test_questions_question" ADD CONSTRAINT "PK_c4765474979216820ca0fbf8445" PRIMARY KEY ("questionId")`);
        await queryRunner.query(`DROP INDEX "public"."IDX_21da142a525b221958bfac9bfd"`);
        await queryRunner.query(`ALTER TABLE "test_questions_question" DROP COLUMN "testId"`);
        await queryRunner.query(`ALTER TABLE "test_questions_question" ADD "testId" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "test_questions_question" DROP CONSTRAINT "PK_c4765474979216820ca0fbf8445"`);
        await queryRunner.query(`ALTER TABLE "test_questions_question" ADD CONSTRAINT "PK_988c77d8cb8becbee58da42494e" PRIMARY KEY ("questionId", "testId")`);
        await queryRunner.query(`CREATE INDEX "IDX_21da142a525b221958bfac9bfd" ON "test_questions_question" ("testId") `);
        await queryRunner.query(`ALTER TABLE "test_questions_question" ADD CONSTRAINT "FK_21da142a525b221958bfac9bfd4" FOREIGN KEY ("testId") REFERENCES "test"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "test_questions_question" DROP CONSTRAINT "FK_21da142a525b221958bfac9bfd4"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_21da142a525b221958bfac9bfd"`);
        await queryRunner.query(`ALTER TABLE "test_questions_question" DROP CONSTRAINT "PK_988c77d8cb8becbee58da42494e"`);
        await queryRunner.query(`ALTER TABLE "test_questions_question" ADD CONSTRAINT "PK_c4765474979216820ca0fbf8445" PRIMARY KEY ("questionId")`);
        await queryRunner.query(`ALTER TABLE "test_questions_question" DROP COLUMN "testId"`);
        await queryRunner.query(`ALTER TABLE "test_questions_question" ADD "testId" character varying NOT NULL`);
        await queryRunner.query(`CREATE INDEX "IDX_21da142a525b221958bfac9bfd" ON "test_questions_question" ("testId") `);
        await queryRunner.query(`ALTER TABLE "test_questions_question" DROP CONSTRAINT "PK_c4765474979216820ca0fbf8445"`);
        await queryRunner.query(`ALTER TABLE "test_questions_question" ADD CONSTRAINT "PK_988c77d8cb8becbee58da42494e" PRIMARY KEY ("testId", "questionId")`);
        await queryRunner.query(`ALTER TABLE "test" DROP CONSTRAINT "PK_5417af0062cf987495b611b59c7"`);
        await queryRunner.query(`ALTER TABLE "test" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "test" ADD "id" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "test" ADD CONSTRAINT "PK_5417af0062cf987495b611b59c7" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "test_questions_question" ADD CONSTRAINT "FK_21da142a525b221958bfac9bfd4" FOREIGN KEY ("testId") REFERENCES "test"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

}
