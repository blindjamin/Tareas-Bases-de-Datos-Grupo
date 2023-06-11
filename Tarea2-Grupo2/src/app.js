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
import Top5personajesConMasFuerzaController from './controllers/Top5personajesConMasFuerzaController.js';
import CantidadHabitantesController from './controllers/CantidadHabitantesController.js';
import PersonajeConMasKartsController from './controllers/PersonajeConMasKartsController.js'
import GobernantesController from './controllers/GobertantePorReinoController.js';
import morgan from 'morgan';

const ENV = process.env;
const app = express();

//middleware
app.use(express.json());
app.use(morgan('dev'));

// ENDPOINTS REQUERIDOS

// Top 5 personajes con más fuerza.
app.get('/api/top5personajesConMasFuerza',Top5personajesConMasFuerzaController.getTop5personajesConMasFuerza)

// Cantidad de habitantes por reino.
app.get('/api/cantidadHabitantes/:id_reino',CantidadHabitantesController.getCantidadHabitantes) 

// Personaje con más karts.
app.get('/api/personajeConMasKarts',PersonajeConMasKartsController.getPersonajeConMasKarts)

//Gobernante por reino.
app.get('/api/gobernante/:id_reino',GobernantesController.getGobernantes)


//Rutas para consultas.
//Personajes
app.get('/api/personajes', PersonajesController.getPersonajes)
app.get('/api/personajes/:id', PersonajesController.getPersonajeById)
app.post('/api/personajes', PersonajesController.createPersonaje)
app.put('/api/personajes/:id', PersonajesController.updatePersonaje)
app.delete('/api/personajes/:id', PersonajesController.deletePersonaje)

//Trabajos
app.get('/api/trabajos', TrabajosController.getTrabajos)
app.get('/api/trabajos/:id', TrabajosController.getTrabajosById)
app.post('/api/trabajos', TrabajosController.createTrabajo)
app.put('/api/trabajos/:id', TrabajosController.updateTrabajo)
app.delete('/api/trabajos/:id', TrabajosController.deleteTrabajo)

//Persona_Tiene_Trabajo
app.get('/api/personaje-tiene-trabajo', PersonajeTieneTrabajoController.getPersonaTieneTrabajo)
app.get('/api/personaje-tiene-trabajo/:id_trabajo/:id_personaje', PersonajeTieneTrabajoController.getPersonaTieneTrabajoById)
app.post('/api/personaje-tiene-trabajo', PersonajeTieneTrabajoController.createPersonaTieneTrabajo)
app.put('/api/personaje-tiene-trabajo/:id_trabajo/:id_personaje', PersonajeTieneTrabajoController.updatePersonaTieneTrabajo)
app.delete('/api/personaje-tiene-trabajo/:id_trabajo/:id_personaje', PersonajeTieneTrabajoController.deletePersonaTieneTrabajo)

//Karts
app.get('/api/karts', KartsController.getKarts)
app.get('/api/karts/:id', KartsController.getKartById)
app.post('/api/karts', KartsController.createKart)
app.put('/api/karts/:id', KartsController.updateKart)
app.delete('/api/karts/:id', KartsController.deleteKart)

//Personaje_Habita_Reino
app.get('/api/personaje-habita-reino', PersonajeHabitaReinoController.getPersonajesHabitanReino)
app.get('/api/personaje-habita-reino/:id_personaje/:id_reino', PersonajeHabitaReinoController.getPersonajeHabitaReinoById)
app.post('/api/personaje-habita-reino', PersonajeHabitaReinoController.createPersonajeHabitaReino)
app.put('/api/personaje-habita-reino/:id_personaje/:id_reino', PersonajeHabitaReinoController.updatePersonajeHabitaReino)
app.delete('/api/personaje-habita-reino/:id_personaje/:id_reino', PersonajeHabitaReinoController.deletePersonajeHabitaReino)


//Reinos.
app.get('/api/reinos', ReinosController.getReinos)
app.get('/api/reinos/:id', ReinosController.getReinoById)
app.post('/api/reinos', ReinosController.createReino)
app.put('/api/reinos/:id', ReinosController.updateReino)
app.delete('/api/reinos/:id', ReinosController.deleteReino)

//Defensas. 
app.get('/api/defensas', DefensasController.getDefensas)
app.get('/api/defensas/:id', DefensasController.getDefensaById)
app.post('/api/defensas', DefensasController.createDefensa)
app.put('/api/defensas/:id', DefensasController.updateDefensa)
app.delete('/api/defensas/:id', DefensasController.deleteDefensa)


//Defensas_Reinos. 
app.get('/api/defensa-reinos', DefensasReinoController.getDefensasReinos)
app.get('/api/defensa-reinos/:id_defensas/:id_reinos', DefensasReinoController.getDefensaReinoById)
app.post('/api/defensa-reinos', DefensasReinoController.createDefensaReino)
app.put('/api/defensa-reinos/:id_defensas/:id_reinos', DefensasReinoController.updateDefensaReino)
app.delete('/api/defensa-reinos/:id_defensas/:id_reinos', DefensasReinoController.deleteDefensaReino)


//Diplomacias. 
app.get('/api/diplomacias', DiplomaciasController.getDiplomacias)
app.get('/api/diplomacias/:id_reino_1/:id_reino_2', DiplomaciasController.getDiplomaciaById)
app.post('/api/diplomacias', DiplomaciasController.createDiplomacia)
app.put('/api/diplomacias/:id_reino_1/:id_reino_2', DiplomaciasController.updateDiplomacia)
app.delete('/api/diplomacias/:id_reino_1/:id_reino_2', DiplomaciasController.deleteDiplomacia)


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
