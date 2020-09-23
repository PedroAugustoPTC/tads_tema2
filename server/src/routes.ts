import express from 'express';
import ProfessorController from '../controllers/ProfessorController';

const routes = express.Router();

const professorController = new ProfessorController();

routes.get('/professor', professorController.index);

routes.post('/professor', professorController.create);
export default routes;