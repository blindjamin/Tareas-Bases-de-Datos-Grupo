import express from 'express';
import UsersController from './controllers/UsersController.js';
import morgan from 'morgan';

const ENV = process.env;
const app = express();

//middleware
app.use(express.json());
app.use(morgan('dev'));

//endpoints(Routes)
//Personajes
app.get('/personajes', UsersController.getPersonajes)
app.get('/personajes/:id', UsersController.getPersonajeById)
app.post('/personajes', UsersController.createPersonaje)
app.put('/personajes:id', UsersController.updatePersonaje)
app.delete('/personajes:id', UsersController.deletePersonaje)

//Trabajos
app.get('/trabajos', UsersController.getTrabajos)
app.get('/trabajos/:id', UsersController.getTrabajosById)
app.post('/trabajos', UsersController.createTrabajo)
app.put('/trabajos:id', UsersController.updateTrabajo)
app.delete('/trabajos:id', UsersController.deleteTrabajo)

//Persona_Tiene_Trabajo
app.get('/persona-tiene-trabajo', UsersController.getPersonaTieneTrabajo)
app.get('/persona-tiene-trabajo/:id', UsersController.getPersonaTieneTrabajoById)
app.post('/persona-tiene-trabajo', UsersController.createPersonaTieneTrabajo)
app.put('/persona-tiene-trabajo:id', UsersController.updatePersonaTieneTrabajo)
app.delete('/persona-tiene-trabajo:id', UsersController.deletePersonaTieneTrabajo)

//Karts
app.get('/karts', UsersController.getKarts)
app.get('/karts/:id', UsersController.getKartById)
app.post('/karts', UsersController.createKart)
app.put('/karts:id', UsersController.updateKart)
app.delete('/karts:id', UsersController.deleteKart)

//Personaje_Habita_Reino
app.get('/personaje-habita-reino', UsersController.getPersonajesHabitanReino)
app.get('/personaje-habita-reino/:id', UsersController.getPersonaTieneTrabajoById)
app.post('/personaje-habita-reino', UsersController.createPersonajeHabitaReino)
app.put('/personaje-habita-reino:id', UsersController.updatePersonajeHabitaReino)
app.delete('/personaje-habita-reino:id', UsersController.deletePersonajeHabitaReino)


//Reinos.
app.get('/reinos', UsersController.getReinos)
app.get('/reinos/:id', UsersController.getReinoById)
app.post('/reinos', UsersController.createReino)
app.put('/reinos:id', UsersController.updateReino)
app.delete('/reinos:id', UsersController.deleteReino)

//Defensas. 
app.get('/defensas', UsersController.getDefensas)
app.get('/defensas/:id', UsersController.getDefensaById)
app.post('/defensas', UsersController.createDefensa)
app.put('/defensas:id', UsersController.updateDefensa)
app.delete('/defensas:id', UsersController.deleteDefensa)


//Defensas_Reinos. 
app.get('/defensa-reinos', UsersController.getDefensasReinos)
app.get('/defensa-reinos/:id', UsersController.getDefensaReinoById)
app.post('/defensa-reinos', UsersController.createDefensaReino)
app.put('/defensa-reinos:id', UsersController.updateDefensaReino)
app.delete('/defensa-reinos:id', UsersController.deleteDefensaReino)


//Diplomacias. 
app.get('/diplomacias', UsersController.getDiplomacias)
app.get('/diplomacias/:id', UsersController.getDiplomaciaById)
app.post('/diplomacias', UsersController.createDiplomacia)
app.put('/diplomacias:id', UsersController.updateDiplomacia)
app.delete('/diplomacias:id', UsersController.deleteDiplomacia)


//==========================================================//
app.get('/', (req, res) => {
    res.json({ message: 'Hello World!!' });
})
//==========================================================//


// 404 not found route
app.use((_, res) => {
    res.status(404).json({ message: 'Not found Crack!' });
})


//Init server
app.listen(ENV.API_PORT, () => {
    console.log(`Server running on port ${ENV.API_PORT}`);
})