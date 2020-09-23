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
}

export default ProfessorController;