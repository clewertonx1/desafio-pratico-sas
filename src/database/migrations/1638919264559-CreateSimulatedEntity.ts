import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateSimulatedEntity1638919264559 implements MigrationInterface {
    name = 'CreateSimulatedEntity1638919264559'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "simulated" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_ddca9cda9acd3f51cb4fe878c8b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "simulated_tests_test" ("simulatedId" integer NOT NULL, "testId" integer NOT NULL, CONSTRAINT "PK_5624c9d15697992d5032c399e9d" PRIMARY KEY ("simulatedId", "testId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_9c5b4bf5f611aa05e4e2eb894f" ON "simulated_tests_test" ("simulatedId") `);
        await queryRunner.query(`CREATE INDEX "IDX_6ec5b30241fccf7fa600d17bc4" ON "simulated_tests_test" ("testId") `);
        await queryRunner.query(`ALTER TABLE "simulated_tests_test" ADD CONSTRAINT "FK_9c5b4bf5f611aa05e4e2eb894fe" FOREIGN KEY ("simulatedId") REFERENCES "simulated"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "simulated_tests_test" ADD CONSTRAINT "FK_6ec5b30241fccf7fa600d17bc43" FOREIGN KEY ("testId") REFERENCES "test"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "simulated_tests_test" DROP CONSTRAINT "FK_6ec5b30241fccf7fa600d17bc43"`);
        await queryRunner.query(`ALTER TABLE "simulated_tests_test" DROP CONSTRAINT "FK_9c5b4bf5f611aa05e4e2eb894fe"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_6ec5b30241fccf7fa600d17bc4"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_9c5b4bf5f611aa05e4e2eb894f"`);
        await queryRunner.query(`DROP TABLE "simulated_tests_test"`);
        await queryRunner.query(`DROP TABLE "simulated"`);
    }

}
