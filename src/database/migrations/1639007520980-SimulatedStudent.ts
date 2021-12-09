import {MigrationInterface, QueryRunner} from "typeorm";

export class SimulatedStudent1639007520980 implements MigrationInterface {
    name = 'SimulatedStudent1639007520980'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "SimulatedStudent" ("id" SERIAL NOT NULL, "done" boolean NOT NULL DEFAULT false, "nota" character varying NOT NULL, CONSTRAINT "PK_57a11d9bf162503767b2cef9de8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "simulated_student_simulated_simulated" ("simulatedStudentId" integer NOT NULL, "simulatedId" integer NOT NULL, CONSTRAINT "PK_8e2197a57d9711ced7b81045229" PRIMARY KEY ("simulatedStudentId", "simulatedId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_6d423205e39c59a1ee9e67ec3e" ON "simulated_student_simulated_simulated" ("simulatedStudentId") `);
        await queryRunner.query(`CREATE INDEX "IDX_0ee037c90e6c0020a1c87e8580" ON "simulated_student_simulated_simulated" ("simulatedId") `);
        await queryRunner.query(`ALTER TABLE "simulated_student_simulated_simulated" ADD CONSTRAINT "FK_6d423205e39c59a1ee9e67ec3ee" FOREIGN KEY ("simulatedStudentId") REFERENCES "SimulatedStudent"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "simulated_student_simulated_simulated" ADD CONSTRAINT "FK_0ee037c90e6c0020a1c87e8580e" FOREIGN KEY ("simulatedId") REFERENCES "simulated"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "simulated_student_simulated_simulated" DROP CONSTRAINT "FK_0ee037c90e6c0020a1c87e8580e"`);
        await queryRunner.query(`ALTER TABLE "simulated_student_simulated_simulated" DROP CONSTRAINT "FK_6d423205e39c59a1ee9e67ec3ee"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_0ee037c90e6c0020a1c87e8580"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_6d423205e39c59a1ee9e67ec3e"`);
        await queryRunner.query(`DROP TABLE "simulated_student_simulated_simulated"`);
        await queryRunner.query(`DROP TABLE "SimulatedStudent"`);
    }

}
