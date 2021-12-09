import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTest1638742379581 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(new Table({
            name: "test",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                },
                {
                    name: "name",
                    "type": "varchar"
                },     
            ],
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("test")
    }

}
