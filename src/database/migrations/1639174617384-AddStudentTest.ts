import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class AddStudentTest1639174617384 implements MigrationInterface {

  
    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(new Table({
            name: "StudentTest",
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
        await queryRunner.dropTable("StudentTest")
    }

}
