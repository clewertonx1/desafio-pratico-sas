import {MigrationInterface, QueryRunner} from "typeorm";

export class AddRelation1639175810446 implements MigrationInterface {
    name = 'AddRelation1639175810446'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "test" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_5417af0062cf987495b611b59c7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "simulated" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_ddca9cda9acd3f51cb4fe878c8b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "test_questions_question" ("testId" integer NOT NULL, "questionId" integer NOT NULL, CONSTRAINT "PK_988c77d8cb8becbee58da42494e" PRIMARY KEY ("testId", "questionId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_21da142a525b221958bfac9bfd" ON "test_questions_question" ("testId") `);
        await queryRunner.query(`CREATE INDEX "IDX_c4765474979216820ca0fbf844" ON "test_questions_question" ("questionId") `);
        await queryRunner.query(`CREATE TABLE "simulated_tests_test" ("simulatedId" integer NOT NULL, "testId" integer NOT NULL, CONSTRAINT "PK_5624c9d15697992d5032c399e9d" PRIMARY KEY ("simulatedId", "testId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_9c5b4bf5f611aa05e4e2eb894f" ON "simulated_tests_test" ("simulatedId") `);
        await queryRunner.query(`CREATE INDEX "IDX_6ec5b30241fccf7fa600d17bc4" ON "simulated_tests_test" ("testId") `);
        await queryRunner.query(`ALTER TABLE "StudentQuest" DROP CONSTRAINT "PK_60ad9ef8d7e8be3853b384bcd5a"`);
        await queryRunner.query(`ALTER TABLE "StudentQuest" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "StudentTest" DROP CONSTRAINT "PK_18a7a42b7d5fbc464b1b285ce1d"`);
        await queryRunner.query(`ALTER TABLE "StudentTest" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "StudentSimulated" DROP CONSTRAINT "PK_89cd0a6b97018891a0ce774ac5a"`);
        await queryRunner.query(`ALTER TABLE "StudentSimulated" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "StudentQuest" ADD "questId" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "StudentQuest" ADD CONSTRAINT "PK_dd00f74d26921f0609ce7cc4b5c" PRIMARY KEY ("questId")`);
        await queryRunner.query(`ALTER TABLE "StudentQuest" ADD "done" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "StudentQuest" ADD "testStudentTestId" integer`);
        await queryRunner.query(`ALTER TABLE "StudentTest" ADD "testId" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "StudentTest" ADD CONSTRAINT "PK_9adb884147ecc97b329d75df251" PRIMARY KEY ("testId")`);
        await queryRunner.query(`ALTER TABLE "StudentTest" ADD "done" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "StudentTest" ADD "simulatedStudentSimulatedId" integer`);
        await queryRunner.query(`ALTER TABLE "StudentSimulated" ADD "simulatedId" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "StudentSimulated" ADD CONSTRAINT "PK_e73f7b249d9c7db647712113f96" PRIMARY KEY ("simulatedId")`);
        await queryRunner.query(`ALTER TABLE "StudentSimulated" ADD "done" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "StudentSimulated" ADD "studentId" integer`);
        await queryRunner.query(`CREATE SEQUENCE IF NOT EXISTS "question_id_seq" OWNED BY "question"."id"`);
        await queryRunner.query(`ALTER TABLE "question" ALTER COLUMN "id" SET DEFAULT nextval('"question_id_seq"')`);
        await queryRunner.query(`CREATE SEQUENCE IF NOT EXISTS "Student_id_seq" OWNED BY "Student"."id"`);
        await queryRunner.query(`ALTER TABLE "Student" ALTER COLUMN "id" SET DEFAULT nextval('"Student_id_seq"')`);
        await queryRunner.query(`ALTER TABLE "StudentQuest" ADD CONSTRAINT "FK_9bdffff9ac55080b02982eee502" FOREIGN KEY ("testStudentTestId") REFERENCES "StudentTest"("testId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "StudentTest" ADD CONSTRAINT "FK_54bff2f237e4b8f94c754572637" FOREIGN KEY ("simulatedStudentSimulatedId") REFERENCES "StudentSimulated"("simulatedId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "StudentSimulated" ADD CONSTRAINT "FK_542ae3c383d8cc003ba359f6995" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "test_questions_question" ADD CONSTRAINT "FK_21da142a525b221958bfac9bfd4" FOREIGN KEY ("testId") REFERENCES "test"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "test_questions_question" ADD CONSTRAINT "FK_c4765474979216820ca0fbf8445" FOREIGN KEY ("questionId") REFERENCES "question"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "simulated_tests_test" ADD CONSTRAINT "FK_9c5b4bf5f611aa05e4e2eb894fe" FOREIGN KEY ("simulatedId") REFERENCES "simulated"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "simulated_tests_test" ADD CONSTRAINT "FK_6ec5b30241fccf7fa600d17bc43" FOREIGN KEY ("testId") REFERENCES "test"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "simulated_tests_test" DROP CONSTRAINT "FK_6ec5b30241fccf7fa600d17bc43"`);
        await queryRunner.query(`ALTER TABLE "simulated_tests_test" DROP CONSTRAINT "FK_9c5b4bf5f611aa05e4e2eb894fe"`);
        await queryRunner.query(`ALTER TABLE "test_questions_question" DROP CONSTRAINT "FK_c4765474979216820ca0fbf8445"`);
        await queryRunner.query(`ALTER TABLE "test_questions_question" DROP CONSTRAINT "FK_21da142a525b221958bfac9bfd4"`);
        await queryRunner.query(`ALTER TABLE "StudentSimulated" DROP CONSTRAINT "FK_542ae3c383d8cc003ba359f6995"`);
        await queryRunner.query(`ALTER TABLE "StudentTest" DROP CONSTRAINT "FK_54bff2f237e4b8f94c754572637"`);
        await queryRunner.query(`ALTER TABLE "StudentQuest" DROP CONSTRAINT "FK_9bdffff9ac55080b02982eee502"`);
        await queryRunner.query(`ALTER TABLE "Student" ALTER COLUMN "id" DROP DEFAULT`);
        await queryRunner.query(`DROP SEQUENCE "Student_id_seq"`);
        await queryRunner.query(`ALTER TABLE "question" ALTER COLUMN "id" DROP DEFAULT`);
        await queryRunner.query(`DROP SEQUENCE "question_id_seq"`);
        await queryRunner.query(`ALTER TABLE "StudentSimulated" DROP COLUMN "studentId"`);
        await queryRunner.query(`ALTER TABLE "StudentSimulated" DROP COLUMN "done"`);
        await queryRunner.query(`ALTER TABLE "StudentSimulated" DROP CONSTRAINT "PK_e73f7b249d9c7db647712113f96"`);
        await queryRunner.query(`ALTER TABLE "StudentSimulated" DROP COLUMN "simulatedId"`);
        await queryRunner.query(`ALTER TABLE "StudentTest" DROP COLUMN "simulatedStudentSimulatedId"`);
        await queryRunner.query(`ALTER TABLE "StudentTest" DROP COLUMN "done"`);
        await queryRunner.query(`ALTER TABLE "StudentTest" DROP CONSTRAINT "PK_9adb884147ecc97b329d75df251"`);
        await queryRunner.query(`ALTER TABLE "StudentTest" DROP COLUMN "testId"`);
        await queryRunner.query(`ALTER TABLE "StudentQuest" DROP COLUMN "testStudentTestId"`);
        await queryRunner.query(`ALTER TABLE "StudentQuest" DROP COLUMN "done"`);
        await queryRunner.query(`ALTER TABLE "StudentQuest" DROP CONSTRAINT "PK_dd00f74d26921f0609ce7cc4b5c"`);
        await queryRunner.query(`ALTER TABLE "StudentQuest" DROP COLUMN "questId"`);
        await queryRunner.query(`ALTER TABLE "StudentSimulated" ADD "id" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "StudentSimulated" ADD CONSTRAINT "PK_89cd0a6b97018891a0ce774ac5a" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "StudentTest" ADD "id" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "StudentTest" ADD CONSTRAINT "PK_18a7a42b7d5fbc464b1b285ce1d" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "StudentQuest" ADD "id" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "StudentQuest" ADD CONSTRAINT "PK_60ad9ef8d7e8be3853b384bcd5a" PRIMARY KEY ("id")`);
        await queryRunner.query(`DROP INDEX "public"."IDX_6ec5b30241fccf7fa600d17bc4"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_9c5b4bf5f611aa05e4e2eb894f"`);
        await queryRunner.query(`DROP TABLE "simulated_tests_test"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_c4765474979216820ca0fbf844"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_21da142a525b221958bfac9bfd"`);
        await queryRunner.query(`DROP TABLE "test_questions_question"`);
        await queryRunner.query(`DROP TABLE "simulated"`);
        await queryRunner.query(`DROP TABLE "test"`);
    }

}
