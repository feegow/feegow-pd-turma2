import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateUsuarioPaciente1644535342661 implements MigrationInterface {
    name = 'CreateUsuarioPaciente1644535342661'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`usuarios\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nome\` varchar(255) NOT NULL, \`cpf\` varchar(11) NOT NULL, \`email\` varchar(255) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`pacientes\` (\`id\` int NOT NULL, UNIQUE INDEX \`REL_aa9c9f624ff22fc06c44d8b160\` (\`id\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`pacientes\` ADD CONSTRAINT \`FK_aa9c9f624ff22fc06c44d8b1609\` FOREIGN KEY (\`id\`) REFERENCES \`usuarios\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`pacientes\` DROP FOREIGN KEY \`FK_aa9c9f624ff22fc06c44d8b1609\``);
        await queryRunner.query(`DROP INDEX \`REL_aa9c9f624ff22fc06c44d8b160\` ON \`pacientes\``);
        await queryRunner.query(`DROP TABLE \`pacientes\``);
        await queryRunner.query(`DROP TABLE \`usuarios\``);
    }

}
