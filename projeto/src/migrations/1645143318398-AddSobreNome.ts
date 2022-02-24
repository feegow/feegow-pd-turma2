import {MigrationInterface, QueryRunner} from "typeorm";

export class AddSobreNome1645143318398 implements MigrationInterface {
    name = 'AddSobreNome1645143318398'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`usuarios\` ADD \`sobreNome\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`usuarios\` DROP COLUMN \`sobreNome\``);
    }

}
