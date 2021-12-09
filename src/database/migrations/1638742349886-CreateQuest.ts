import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateQuestion1638739142388 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(new Table({
            name: "question",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                },
                {
                    name: "questionStatement",
                    "type": "varchar"
                },
                {
                    name: "questionNumber",
                    "type": "int"
                },
            ],
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("question")
    }

}
