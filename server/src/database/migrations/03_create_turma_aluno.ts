import * as Knex from 'knex';


export async function up(knex: Knex){
    return knex.schema.createTable('turma_aluno', table => {
        table.increments('id').primary();
        table.integer('aluno_id')
            .references('aluno.id')
            .notNullable();
        table.integer('turma_id')
            .references('turma.id')
            .notNullable();
    });
}

export async function down(knex: Knex){
    return knex.schema.dropTable('turma_aluno');
}