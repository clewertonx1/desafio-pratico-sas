import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class AddStudentQuest1639174633601 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(new Table({
            name: "StudentQuest",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                },     
                {
                    name: "response",
                    "type": "varchar"
                },  
            ],
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("StudentQuest")
    }


}
