import {MigrationInterface, QueryRunner} from "typeorm";

export class AddProfissionais1645140638389 implements MigrationInterface {
    name = 'AddProfissionais1645140638389'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`profissionais\` (\`id\` int NOT NULL, \`numeroConselho\` varchar(255) NOT NULL, \`conselho\` varchar(8) NOT NULL, UNIQUE INDEX \`REL_a6a3048111c78bd06ecd3b1360\` (\`id\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`usuarios\` ADD \`senha\` varchar(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`usuarios\` ADD \`endereco\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`usuarios\` ADD \`cep\` varchar(8) NULL`);
        await queryRunner.query(`ALTER TABLE \`usuarios\` ADD \`cidade\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`usuarios\` ADD \`uf\` varchar(2) NULL`);
        await queryRunner.query(`ALTER TABLE \`usuarios\` ADD \`dataNascimento\` date NULL`);
        await queryRunner.query(`ALTER TABLE \`usuarios\` CHANGE \`email\` \`email\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`profissionais\` ADD CONSTRAINT \`FK_a6a3048111c78bd06ecd3b1360c\` FOREIGN KEY (\`id\`) REFERENCES \`usuarios\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`profissionais\` DROP FOREIGN KEY \`FK_a6a3048111c78bd06ecd3b1360c\``);
        await queryRunner.query(`ALTER TABLE \`usuarios\` CHANGE \`email\` \`email\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`usuarios\` DROP COLUMN \`dataNascimento\``);
        await queryRunner.query(`ALTER TABLE \`usuarios\` DROP COLUMN \`uf\``);
        await queryRunner.query(`ALTER TABLE \`usuarios\` DROP COLUMN \`cidade\``);
        await queryRunner.query(`ALTER TABLE \`usuarios\` DROP COLUMN \`cep\``);
        await queryRunner.query(`ALTER TABLE \`usuarios\` DROP COLUMN \`endereco\``);
        await queryRunner.query(`ALTER TABLE \`usuarios\` DROP COLUMN \`senha\``);
        await queryRunner.query(`DROP INDEX \`REL_a6a3048111c78bd06ecd3b1360\` ON \`profissionais\``);
        await queryRunner.query(`DROP TABLE \`profissionais\``);
    }

}
