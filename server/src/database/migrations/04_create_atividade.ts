import * as Knex from 'knex';


export async function up(knex: Knex){
    return knex.schema.createTable('atividade', table => {
        table.increments('id').primary();
        table.double('valor').notNullable();
        table.date('data').notNullable();
        table.integer('turma_id')
            .references('turma.id')
            .notNullable();
    });
}

export async function down(knex: Knex){
    return knex.schema.dropTable('atividade');
}