import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateStudentEntity1638928091670 implements MigrationInterface {
    name = 'CreateStudentEntity1638928091670'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Student" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_dc3573f6f2de5aa3aefca0c1f1a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "student_history_simulateds_simulated" ("studentId" integer NOT NULL, "simulatedId" integer NOT NULL, CONSTRAINT "PK_cf3e9335f6f2d18fe00ff61584d" PRIMARY KEY ("studentId", "simulatedId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_6553ac07f643ffa8bf11b94931" ON "student_history_simulateds_simulated" ("studentId") `);
        await queryRunner.query(`CREATE INDEX "IDX_7545eabf13fb7e61e527509637" ON "student_history_simulateds_simulated" ("simulatedId") `);
        await queryRunner.query(`ALTER TABLE "student_history_simulateds_simulated" ADD CONSTRAINT "FK_6553ac07f643ffa8bf11b949317" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "student_history_simulateds_simulated" ADD CONSTRAINT "FK_7545eabf13fb7e61e5275096374" FOREIGN KEY ("simulatedId") REFERENCES "simulated"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "student_history_simulateds_simulated" DROP CONSTRAINT "FK_7545eabf13fb7e61e5275096374"`);
        await queryRunner.query(`ALTER TABLE "student_history_simulateds_simulated" DROP CONSTRAINT "FK_6553ac07f643ffa8bf11b949317"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_7545eabf13fb7e61e527509637"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_6553ac07f643ffa8bf11b94931"`);
        await queryRunner.query(`DROP TABLE "student_history_simulateds_simulated"`);
        await queryRunner.query(`DROP TABLE "Student"`);
    }

}
