import {MigrationInterface, QueryRunner} from "typeorm";

export class AddIdInStudentQuestTestSImulated1639182780340 implements MigrationInterface {
    name = 'AddIdInStudentQuestTestSImulated1639182780340'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "StudentQuest" DROP CONSTRAINT "FK_f737256be64f926d35264bb1236"`);
        await queryRunner.query(`ALTER TABLE "StudentTest" DROP CONSTRAINT "FK_54bff2f237e4b8f94c754572637"`);
        await queryRunner.query(`ALTER TABLE "StudentQuest" DROP COLUMN "studentTestTestId"`);
        await queryRunner.query(`ALTER TABLE "StudentTest" DROP COLUMN "simulatedStudentSimulatedId"`);
        await queryRunner.query(`ALTER TABLE "StudentQuest" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "StudentQuest" DROP CONSTRAINT "PK_dd00f74d26921f0609ce7cc4b5c"`);
        await queryRunner.query(`ALTER TABLE "StudentQuest" ADD CONSTRAINT "PK_cb4c836bf9d3b17742358011c62" PRIMARY KEY ("questId", "id")`);
        await queryRunner.query(`ALTER TABLE "StudentQuest" ADD "studentTestId" integer`);
        await queryRunner.query(`ALTER TABLE "StudentTest" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "StudentTest" DROP CONSTRAINT "PK_9adb884147ecc97b329d75df251"`);
        await queryRunner.query(`ALTER TABLE "StudentTest" ADD CONSTRAINT "PK_695540e2f1c7ad05838f4c3bb25" PRIMARY KEY ("testId", "id")`);
        await queryRunner.query(`ALTER TABLE "StudentTest" ADD "simulatedStudentId" integer`);
        await queryRunner.query(`ALTER TABLE "StudentSimulated" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "StudentSimulated" DROP CONSTRAINT "PK_e73f7b249d9c7db647712113f96"`);
        await queryRunner.query(`ALTER TABLE "StudentSimulated" ADD CONSTRAINT "PK_148ae16a15c5f3e25633196049f" PRIMARY KEY ("simulatedId", "id")`);
        await queryRunner.query(`ALTER TABLE "StudentQuest" DROP CONSTRAINT "PK_cb4c836bf9d3b17742358011c62"`);
        await queryRunner.query(`ALTER TABLE "StudentQuest" ADD CONSTRAINT "PK_60ad9ef8d7e8be3853b384bcd5a" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "StudentQuest" DROP COLUMN "questId"`);
        await queryRunner.query(`ALTER TABLE "StudentQuest" ADD "questId" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "StudentTest" DROP CONSTRAINT "PK_695540e2f1c7ad05838f4c3bb25"`);
        await queryRunner.query(`ALTER TABLE "StudentTest" ADD CONSTRAINT "PK_18a7a42b7d5fbc464b1b285ce1d" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "StudentTest" DROP COLUMN "testId"`);
        await queryRunner.query(`ALTER TABLE "StudentTest" ADD "testId" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "StudentSimulated" DROP CONSTRAINT "PK_148ae16a15c5f3e25633196049f"`);
        await queryRunner.query(`ALTER TABLE "StudentSimulated" ADD CONSTRAINT "PK_89cd0a6b97018891a0ce774ac5a" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "StudentSimulated" DROP COLUMN "simulatedId"`);
        await queryRunner.query(`ALTER TABLE "StudentSimulated" ADD "simulatedId" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "StudentQuest" ADD CONSTRAINT "FK_f528a0b24854319f6e31fd754fb" FOREIGN KEY ("studentTestId") REFERENCES "StudentTest"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "StudentTest" ADD CONSTRAINT "FK_50b9488f308a7cffc61b7a2d244" FOREIGN KEY ("simulatedStudentId") REFERENCES "StudentSimulated"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "StudentTest" DROP CONSTRAINT "FK_50b9488f308a7cffc61b7a2d244"`);
        await queryRunner.query(`ALTER TABLE "StudentQuest" DROP CONSTRAINT "FK_f528a0b24854319f6e31fd754fb"`);
        await queryRunner.query(`ALTER TABLE "StudentSimulated" DROP COLUMN "simulatedId"`);
        await queryRunner.query(`ALTER TABLE "StudentSimulated" ADD "simulatedId" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "StudentSimulated" DROP CONSTRAINT "PK_89cd0a6b97018891a0ce774ac5a"`);
        await queryRunner.query(`ALTER TABLE "StudentSimulated" ADD CONSTRAINT "PK_148ae16a15c5f3e25633196049f" PRIMARY KEY ("simulatedId", "id")`);
        await queryRunner.query(`ALTER TABLE "StudentTest" DROP COLUMN "testId"`);
        await queryRunner.query(`ALTER TABLE "StudentTest" ADD "testId" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "StudentTest" DROP CONSTRAINT "PK_18a7a42b7d5fbc464b1b285ce1d"`);
        await queryRunner.query(`ALTER TABLE "StudentTest" ADD CONSTRAINT "PK_695540e2f1c7ad05838f4c3bb25" PRIMARY KEY ("testId", "id")`);
        await queryRunner.query(`ALTER TABLE "StudentQuest" DROP COLUMN "questId"`);
        await queryRunner.query(`ALTER TABLE "StudentQuest" ADD "questId" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "StudentQuest" DROP CONSTRAINT "PK_60ad9ef8d7e8be3853b384bcd5a"`);
        await queryRunner.query(`ALTER TABLE "StudentQuest" ADD CONSTRAINT "PK_cb4c836bf9d3b17742358011c62" PRIMARY KEY ("questId", "id")`);
        await queryRunner.query(`ALTER TABLE "StudentSimulated" DROP CONSTRAINT "PK_148ae16a15c5f3e25633196049f"`);
        await queryRunner.query(`ALTER TABLE "StudentSimulated" ADD CONSTRAINT "PK_e73f7b249d9c7db647712113f96" PRIMARY KEY ("simulatedId")`);
        await queryRunner.query(`ALTER TABLE "StudentSimulated" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "StudentTest" DROP COLUMN "simulatedStudentId"`);
        await queryRunner.query(`ALTER TABLE "StudentTest" DROP CONSTRAINT "PK_695540e2f1c7ad05838f4c3bb25"`);
        await queryRunner.query(`ALTER TABLE "StudentTest" ADD CONSTRAINT "PK_9adb884147ecc97b329d75df251" PRIMARY KEY ("testId")`);
        await queryRunner.query(`ALTER TABLE "StudentTest" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "StudentQuest" DROP COLUMN "studentTestId"`);
        await queryRunner.query(`ALTER TABLE "StudentQuest" DROP CONSTRAINT "PK_cb4c836bf9d3b17742358011c62"`);
        await queryRunner.query(`ALTER TABLE "StudentQuest" ADD CONSTRAINT "PK_dd00f74d26921f0609ce7cc4b5c" PRIMARY KEY ("questId")`);
        await queryRunner.query(`ALTER TABLE "StudentQuest" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "StudentTest" ADD "simulatedStudentSimulatedId" integer`);
        await queryRunner.query(`ALTER TABLE "StudentQuest" ADD "studentTestTestId" integer`);
        await queryRunner.query(`ALTER TABLE "StudentTest" ADD CONSTRAINT "FK_54bff2f237e4b8f94c754572637" FOREIGN KEY ("simulatedStudentSimulatedId") REFERENCES "StudentSimulated"("simulatedId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "StudentQuest" ADD CONSTRAINT "FK_f737256be64f926d35264bb1236" FOREIGN KEY ("studentTestTestId") REFERENCES "StudentTest"("testId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
