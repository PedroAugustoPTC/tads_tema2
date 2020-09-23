import{ Request, Response } from 'express';
import knex from '../database/connection';

class ProfessorController{
    async index (request: Request, response: Response){
        const professors = await knex('professor').select('*');

        const selectedProfessors = professors.map(professor => {
            return {
                id: professor.id,
                name: professor.name,
            };
        });

        return response.json(selectedProfessors);
    }

    async create (request: Request, response: Response){
        const {
            id,
            name
        } = request.body;

        const trx = await knex.transaction();

        const professor = {
            id,
            name
        };

        await trx('professor').insert(professor);

        await trx.commit();

        return response.status(201).send();
    }
}

export default ProfessorController;