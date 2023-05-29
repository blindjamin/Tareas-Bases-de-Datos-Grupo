import express from 'express';
import PersonajesController from './controllers/PersonajesController.js';
import TrabajosController from './controllers/TrabajosController.js';
import DefensasController from './controllers/DefensasController.js';
import DefensasReinoController from './controllers/DefensasReinoController.js';
import DiplomaciasController from './controllers/DiplomaciasController.js';
import KartsController from './controllers/KartsController.js'
import PersonajeHabitaReinoController from './controllers/PersonajeHabitaReinoController.js';
import PersonajeTieneTrabajoController from './controllers/PersonajeTieneTrabajoController.js'
import ReinosController from './controllers/ReinosController.js';

import morgan from 'morgan';

const ENV = process.env;
const app = express();

//middleware
app.use(express.json());
app.use(morgan('dev'));

//endpoints(Routes)
//Personajes
app.get('/personajes', PersonajesController.getPersonajes)
app.get('/personajes/:id', PersonajesController.getPersonajeById)
app.post('/personajes', PersonajesController.createPersonaje)
app.put('/personajes:id', PersonajesController.updatePersonaje)
app.delete('/personajes:id', PersonajesController.deletePersonaje)

//Trabajos
app.get('/trabajos', TrabajosController.getTrabajos)
app.get('/trabajos/:id', TrabajosController.getTrabajosById)
app.post('/trabajos', TrabajosController.createTrabajo)
app.put('/trabajos:id', TrabajosController.updateTrabajo)
app.delete('/trabajos:id', TrabajosController.deleteTrabajo)

//Persona_Tiene_Trabajo
app.get('/persona-tiene-trabajo', PersonajeTieneTrabajoController.getPersonaTieneTrabajo)
app.get('/persona-tiene-trabajo/:id', PersonajeTieneTrabajoController.getPersonaTieneTrabajoById)
app.post('/persona-tiene-trabajo', PersonajeTieneTrabajoController.createPersonaTieneTrabajo)
app.put('/persona-tiene-trabajo:id', PersonajeTieneTrabajoController.updatePersonaTieneTrabajo)
app.delete('/persona-tiene-trabajo:id', PersonajeTieneTrabajoController.deletePersonaTieneTrabajo)

//Karts
app.get('/karts', KartsController.getKarts)
app.get('/karts/:id', KartsController.getKartById)
app.post('/karts', KartsController.createKart)
app.put('/karts:id', KartsController.updateKart)
app.delete('/karts:id', KartsController.deleteKart)

//Personaje_Habita_Reino
app.get('/personaje-habita-reino', PersonajeHabitaReinoController.getPersonajesHabitanReino)
app.get('/personaje-habita-reino/:id', PersonajeHabitaReinoController.getPersonaTieneTrabajoById)
app.post('/personaje-habita-reino', PersonajeHabitaReinoController.createPersonajeHabitaReino)
app.put('/personaje-habita-reino:id', PersonajeHabitaReinoController.updatePersonajeHabitaReino)
app.delete('/personaje-habita-reino:id', PersonajeHabitaReinoController.deletePersonajeHabitaReino)


//Reinos.
app.get('/reinos', ReinosController.getReinos)
app.get('/reinos/:id', ReinosController.getReinoById)
app.post('/reinos', ReinosController.createReino)
app.put('/reinos:id', ReinosController.updateReino)
app.delete('/reinos:id', ReinosController.deleteReino)

//Defensas. 
app.get('/defensas', DefensasController.getDefensas)
app.get('/defensas/:id', DefensasController.getDefensaById)
app.post('/defensas', DefensasController.createDefensa)
app.put('/defensas:id', DefensasController.updateDefensa)
app.delete('/defensas:id', DefensasController.deleteDefensa)


//Defensas_Reinos. 
app.get('/defensa-reinos', DefensasReinoController.getDefensasReinos)
app.get('/defensa-reinos/:id', DefensasReinoController.getDefensaReinoById)
app.post('/defensa-reinos', DefensasReinoController.createDefensaReino)
app.put('/defensa-reinos:id', DefensasReinoController.updateDefensaReino)
app.delete('/defensa-reinos:id', DefensasReinoController.deleteDefensaReino)


//Diplomacias. 
app.get('/diplomacias', DiplomaciasController.getDiplomacias)
app.get('/diplomacias/:id', DiplomaciasController.getDiplomaciaById)
app.post('/diplomacias', DiplomaciasController.createDiplomacia)
app.put('/diplomacias:id', DiplomaciasController.updateDiplomacia)
app.delete('/diplomacias:id', DiplomaciasController.deleteDiplomacia)


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