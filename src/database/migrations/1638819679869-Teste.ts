import {MigrationInterface, QueryRunner} from "typeorm";

export class Teste1638819679869 implements MigrationInterface {
    name = 'Teste1638819679869'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "test_questions_question" ("testId" character varying NOT NULL, "questionId" character varying NOT NULL, CONSTRAINT "PK_988c77d8cb8becbee58da42494e" PRIMARY KEY ("testId", "questionId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_21da142a525b221958bfac9bfd" ON "test_questions_question" ("testId") `);
        await queryRunner.query(`CREATE INDEX "IDX_c4765474979216820ca0fbf844" ON "test_questions_question" ("questionId") `);
        await queryRunner.query(`ALTER TABLE "question" DROP CONSTRAINT "PK_21e5786aa0ea704ae185a79b2d5"`);
        await queryRunner.query(`ALTER TABLE "question" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "question" ADD "id" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "question" ADD CONSTRAINT "PK_21e5786aa0ea704ae185a79b2d5" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "test" DROP CONSTRAINT "PK_5417af0062cf987495b611b59c7"`);
        await queryRunner.query(`ALTER TABLE "test" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "test" ADD "id" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "test" ADD CONSTRAINT "PK_5417af0062cf987495b611b59c7" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "test_questions_question" ADD CONSTRAINT "FK_21da142a525b221958bfac9bfd4" FOREIGN KEY ("testId") REFERENCES "test"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "test_questions_question" ADD CONSTRAINT "FK_c4765474979216820ca0fbf8445" FOREIGN KEY ("questionId") REFERENCES "question"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "test_questions_question" DROP CONSTRAINT "FK_c4765474979216820ca0fbf8445"`);
        await queryRunner.query(`ALTER TABLE "test_questions_question" DROP CONSTRAINT "FK_21da142a525b221958bfac9bfd4"`);
        await queryRunner.query(`ALTER TABLE "test" DROP CONSTRAINT "PK_5417af0062cf987495b611b59c7"`);
        await queryRunner.query(`ALTER TABLE "test" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "test" ADD "id" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "test" ADD CONSTRAINT "PK_5417af0062cf987495b611b59c7" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "question" DROP CONSTRAINT "PK_21e5786aa0ea704ae185a79b2d5"`);
        await queryRunner.query(`ALTER TABLE "question" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "question" ADD "id" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "question" ADD CONSTRAINT "PK_21e5786aa0ea704ae185a79b2d5" PRIMARY KEY ("id")`);
        await queryRunner.query(`DROP INDEX "public"."IDX_c4765474979216820ca0fbf844"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_21da142a525b221958bfac9bfd"`);
        await queryRunner.query(`DROP TABLE "test_questions_question"`);
    }

}
