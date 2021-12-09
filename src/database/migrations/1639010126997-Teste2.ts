import {MigrationInterface, QueryRunner} from "typeorm";

export class Teste21639010126997 implements MigrationInterface {
    name = 'Teste21639010126997'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Student" DROP CONSTRAINT "FK_6b9a92a8ee9c8be1dde6a26622d"`);
        await queryRunner.query(`ALTER TABLE "Student" DROP CONSTRAINT "UQ_6b9a92a8ee9c8be1dde6a26622d"`);
        await queryRunner.query(`ALTER TABLE "Student" DROP COLUMN "simulatedsId"`);
        await queryRunner.query(`ALTER TABLE "SimulatedStudent" ADD "studentId" integer`);
        await queryRunner.query(`ALTER TABLE "SimulatedStudent" ADD CONSTRAINT "FK_25c5ac64a9c0acdb9deb4077f0c" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "SimulatedStudent" DROP CONSTRAINT "FK_25c5ac64a9c0acdb9deb4077f0c"`);
        await queryRunner.query(`ALTER TABLE "SimulatedStudent" DROP COLUMN "studentId"`);
        await queryRunner.query(`ALTER TABLE "Student" ADD "simulatedsId" integer`);
        await queryRunner.query(`ALTER TABLE "Student" ADD CONSTRAINT "UQ_6b9a92a8ee9c8be1dde6a26622d" UNIQUE ("simulatedsId")`);
        await queryRunner.query(`ALTER TABLE "Student" ADD CONSTRAINT "FK_6b9a92a8ee9c8be1dde6a26622d" FOREIGN KEY ("simulatedsId") REFERENCES "SimulatedStudent"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
