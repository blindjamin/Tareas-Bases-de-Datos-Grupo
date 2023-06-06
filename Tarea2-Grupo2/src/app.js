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

//Rutas para consultas.
//Personajes
app.get('/personajes', PersonajesController.getPersonajes)
app.get('/personajes/:id', PersonajesController.getPersonajeById)
app.post('/personajes', PersonajesController.createPersonaje)
app.put('/personajes/:id', PersonajesController.updatePersonaje)
app.delete('/personajes/:id', PersonajesController.deletePersonaje)

//Trabajos
app.get('/trabajos', TrabajosController.getTrabajos)
app.get('/trabajos/:id', TrabajosController.getTrabajosById)
app.post('/trabajos', TrabajosController.createTrabajo)
app.put('/trabajos/:id', TrabajosController.updateTrabajo)
app.delete('/trabajos/:id', TrabajosController.deleteTrabajo)

//Persona_Tiene_Trabajo
app.get('/personaje-tiene-trabajo', PersonajeTieneTrabajoController.getPersonaTieneTrabajo)
app.get('/personaje-tiene-trabajo/:id_trabajo/:id_personaje', PersonajeTieneTrabajoController.getPersonaTieneTrabajoById)
app.post('/personaje-tiene-trabajo', PersonajeTieneTrabajoController.createPersonaTieneTrabajo)
app.put('/personaje-tiene-trabajo/:id_trabajo/:id_personaje', PersonajeTieneTrabajoController.updatePersonaTieneTrabajo)
app.delete('/personaje-tiene-trabajo/:id_trabajo/:id_personaje', PersonajeTieneTrabajoController.deletePersonaTieneTrabajo)

//Karts
app.get('/karts', KartsController.getKarts)
app.get('/karts/:id', KartsController.getKartById)
app.post('/karts', KartsController.createKart)
app.put('/karts/:id', KartsController.updateKart)
app.delete('/karts/:id', KartsController.deleteKart)

//Personaje_Habita_Reino
app.get('/personaje-habita-reino', PersonajeHabitaReinoController.getPersonajesHabitanReino)
app.get('/personaje-habita-reino/:id_personaje/:id_reino', PersonajeHabitaReinoController.getPersonajeHabitaReinoById)
app.post('/personaje-habita-reino', PersonajeHabitaReinoController.createPersonajeHabitaReino)
app.put('/personaje-habita-reino/:id_personaje/:id_reino', PersonajeHabitaReinoController.updatePersonajeHabitaReino)
app.delete('/personaje-habita-reino/:id_personaje/:id_reino', PersonajeHabitaReinoController.deletePersonajeHabitaReino)


//Reinos.
app.get('/reinos', ReinosController.getReinos)
app.get('/reinos/:id', ReinosController.getReinoById)
app.post('/reinos', ReinosController.createReino)
app.put('/reinos/:id', ReinosController.updateReino)
app.delete('/reinos/:id', ReinosController.deleteReino)

//Defensas. 
app.get('/defensas', DefensasController.getDefensas)
app.get('/defensas/:id', DefensasController.getDefensaById)
app.post('/defensas', DefensasController.createDefensa)
app.put('/defensas/:id', DefensasController.updateDefensa)
app.delete('/defensas/:id', DefensasController.deleteDefensa)


//Defensas_Reinos. 
app.get('/defensa-reinos', DefensasReinoController.getDefensasReinos)
app.get('/defensa-reinos/:id_defensas/:id_reinos', DefensasReinoController.getDefensaReinoById)
app.post('/defensa-reinos', DefensasReinoController.createDefensaReino)
app.put('/defensa-reinos/:id_defensas/:id_reinos', DefensasReinoController.updateDefensaReino)
app.delete('/defensa-reinos/:id_defensas/:id_reinos', DefensasReinoController.deleteDefensaReino)


//Diplomacias. 
app.get('/diplomacias', DiplomaciasController.getDiplomacias)
app.get('/diplomacias/:id_reino_1/:id_reino_2', DiplomaciasController.getDiplomaciaById)
app.post('/diplomacias', DiplomaciasController.createDiplomacia)
app.put('/diplomacias/:id_reino_1/:id_reino_2', DiplomaciasController.updateDiplomacia)
app.delete('/diplomacias/:id_reino_1/:id_reino_2', DiplomaciasController.deleteDiplomacia)


//==========================================================//
app.get('/', (req, res) => {
    res.json({ message: 'Hello World!!' });
})
//==========================================================//


// 404 not found route
app.use((_, res) => {
    res.status(404).json({ message: '¡Lo lamentamos!, no encontramos esta ruta, puede que no exista o haya sido eliminada. :c' });
})


//Init server
app.listen(ENV.API_PORT, () => {
    console.log(`Server running on port ${ENV.API_PORT}`);
})
