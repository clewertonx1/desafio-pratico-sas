import {MigrationInterface, QueryRunner} from "typeorm";

export class Fix1639179913942 implements MigrationInterface {
    name = 'Fix1639179913942'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "StudentQuest" DROP CONSTRAINT "FK_9bdffff9ac55080b02982eee502"`);
        await queryRunner.query(`ALTER TABLE "StudentQuest" RENAME COLUMN "testStudentTestId" TO "studentTestTestId"`);
        await queryRunner.query(`ALTER TABLE "StudentQuest" ADD CONSTRAINT "FK_f737256be64f926d35264bb1236" FOREIGN KEY ("studentTestTestId") REFERENCES "StudentTest"("testId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "StudentQuest" DROP CONSTRAINT "FK_f737256be64f926d35264bb1236"`);
        await queryRunner.query(`ALTER TABLE "StudentQuest" RENAME COLUMN "studentTestTestId" TO "testStudentTestId"`);
        await queryRunner.query(`ALTER TABLE "StudentQuest" ADD CONSTRAINT "FK_9bdffff9ac55080b02982eee502" FOREIGN KEY ("testStudentTestId") REFERENCES "StudentTest"("testId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
