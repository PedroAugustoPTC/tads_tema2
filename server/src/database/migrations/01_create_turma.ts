import * as Knex from 'knex';


export async function up(knex: Knex){
    return knex.schema.createTable('turma', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('semestre').notNullable();
        table.string('ano').notNullable();
        table.integer('professor_id')
            .references('professor.id')
            .notNullable();
    });
}

export async function down(knex: Knex){
    return knex.schema.dropTable('turma');
}