import {MigrationInterface, QueryRunner} from "typeorm";

export class Tf1639008418402 implements MigrationInterface {
    name = 'Tf1639008418402'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Student" ADD "simulatedsId" integer`);
        await queryRunner.query(`ALTER TABLE "Student" ADD CONSTRAINT "UQ_6b9a92a8ee9c8be1dde6a26622d" UNIQUE ("simulatedsId")`);
        await queryRunner.query(`ALTER TABLE "Student" ADD CONSTRAINT "FK_6b9a92a8ee9c8be1dde6a26622d" FOREIGN KEY ("simulatedsId") REFERENCES "SimulatedStudent"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Student" DROP CONSTRAINT "FK_6b9a92a8ee9c8be1dde6a26622d"`);
        await queryRunner.query(`ALTER TABLE "Student" DROP CONSTRAINT "UQ_6b9a92a8ee9c8be1dde6a26622d"`);
        await queryRunner.query(`ALTER TABLE "Student" DROP COLUMN "simulatedsId"`);
    }

}
