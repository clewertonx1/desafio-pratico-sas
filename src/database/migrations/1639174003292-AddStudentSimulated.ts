import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class AddStudentSimulated1639174003292 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(new Table({
            name: "StudentSimulated",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                },       
            ],
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("StudentSimulated")
    }

}
