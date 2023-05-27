import prisma from '../prismaClient.js'


//Rutas para cada Tabla.
// Tabla Personajes.

// Obtener todos los registros de personajes.
const getPersonajes = async (req, res) => {
  try {
    const personajes = await prisma.personajes.findMany();
    res.json(personajes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener los personajes' });
  }
};

// Obtener todos los registros por id.
const getPersonajeById = async (req, res) => {
  const { id } = req.params;
  try {
    const personaje = await prisma.personajes.findUnique({ where: { id: parseInt(id) } });
    if (personaje) {
      res.json(personaje);
    } else {
      res.status(404).json({ error: 'Personaje no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener el personaje' });
  }
};

// Crear registro
const createPersonaje = async (req, res) => {
  const { nombre, fuerza, fecha_nacimiento, objeto } = req.body;
  try {
    const nuevoPersonaje = await prisma.personajes.create({
      data: {
        nombre,
        fuerza,
        fecha_nacimiento: new Date(fecha_nacimiento),
        objeto,
      },
    });
    res.json(nuevoPersonaje);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear el personaje' });
  }
};

// Editar registro  
const updatePersonaje = async (req, res) => {
  const { id } = req.params;
  const { nombre, fuerza, fecha_nacimiento, objeto } = req.body;
  try {
    const personajeActualizado = await prisma.personajes.update({
      where: { id: parseInt(id) },
      data: {
        nombre,
        fuerza,
        fecha_nacimiento: new Date(fecha_nacimiento),
        objeto,
      },
    });
    res.json(personajeActualizado);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar el personaje' });
  }
};


// Borrar registro
const deletePersonaje = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.personajes.delete({ where: { id: parseInt(id) } });
    res.json({ message: 'Personaje eliminado correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar el personaje' });
  }
};



// Rutas para tabla trabajos.
// Obtener todos los registros de tabla trabajos.
const getTrabajos = async (req, res) => {
  try {
    const trabajos = await prisma.trabajos.findMany();
    res.json(trabajos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener los personajes' });
  }
};

// Obtener todos los registros por id.
const getTrabajosById = async (req, res) => {
  const { id } = req.params;
  try {
    const trabajosById = await prisma.trabajos.findUnique({ where: { id: parseInt(id) } });
    if (trabajosById) {
      res.json(trabajosById);
    } else {
      res.status(404).json({ error: 'Trabajo no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener el trabajo' });
  }
};

// Crear registro
const createTrabajo = async (req, res) => {
  const { descripcion, sueldo } = req.body;
  try {
    const nuevoTrabajo = await prisma.trabajos.create({
      data: {
        descripcion,
        sueldo,
      },
    });
    res.json(nuevoTrabajo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear el trabajo' });
  }
};

// Editar registro  
const updateTrabajo = async (req, res) => {
  const { id } = req.params;
  const { descripcion, sueldo } = req.body;
  try {
    const trabajoActualizado = await prisma.trabajos.update({
      where: { id: parseInt(id) },
      data: {
        descripcion,
        sueldo,
      },
    });
    res.json(trabajoActualizado);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar el trabajo' });
  }
};


// Borrar registro
const deleteTrabajo = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.trabajos.delete({ where: { id: parseInt(id) } });
    res.json({ message: 'Trabajo eliminado correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar el trabajo' });
  }
};
  



//Rutas para tabla personaje_tiene_trabajo

// Obtener todos los registros de tabla persona_tiene_trabajo.
const getPersonaTieneTrabajo = async (req, res) => {
  try {
    const persona_tiene_trabajo = await prisma.personaje_tiene_trabajo.findMany();
    res.json(persona_tiene_trabajo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener la relacion personaje-trabajo' });
  }
};

// Obtener todos los registros por id.
const getPersonaTieneTrabajoById = async (req, res) => {
  const { id } = req.params;
  try {
    const persona_tiene_trabajoById = await prisma.personaje_tiene_trabajo.findUnique({ where: { id: parseInt(id) } });
    if (persona_tiene_trabajoById) {
      res.json(persona_tiene_trabajoById);
    } else {
      res.status(404).json({ error: 'Relacion personaje-trabajo no encontrada.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener la relacion personaje-trabajo.' });
  }
};

// Crear registro
const createPersonaTieneTrabajo = async (req, res) => {
  const { id_trabajo, id_personaje, fecha_inicio, fecha_termino } = req.body;
  try {
    const nuevoPersonajeTieneTrabajo = await prisma.personaje_tiene_trabajo.create({
      data: {
        id_trabajo,
        id_personaje,
        fecha_inicio,
        fecha_termino,
      },
    });
    res.json(nuevoPersonajeTieneTrabajo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear la relación personaje-trabajo' });
  }
};


// Editar registro  
const updatePersonaTieneTrabajo = async (req, res) => {
  const { id } = req.params;
  const { id_trabajo,id_personaje,fecha_inicio,fecha_termino } = req.body;
  try {
    const persona_tiene_trabajoActualizado = await prisma.personaje_tiene_trabajo.update({
      where: { id: parseInt(id) },
      data: {
        id_trabajo,
        id_personaje,
        fecha_inicio,
        fecha_termino,
      },
    });
    res.json(persona_tiene_trabajoActualizado);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar la relacion persona-trabajo' });
  }
};


// Borrar registro
const deletePersonaTieneTrabajo = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.persona_tiene_trabajo.delete({ where: { id: parseInt(id) } });
    res.json({ message: 'Relacion persona-trabajo eliminada correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar la relacion persona-trabajo' });
  }
};



// Rutas para tabla Karts

// Obtener todos los registros de tabla Karts.
const getKarts = async (req, res) => {
  try {
    const karts = await prisma.karts.findMany();
    res.json(karts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener el Kart' });
  }
};

// Obtener todos los registros por id.
const getKartById = async (req, res) => {
  const { id } = req.params;
  try {
    const KartById = await prisma.karts.findUnique({ where: { id: parseInt(id) } });
    if (KartById) {
      res.json(KartById);
    } else {
      res.status(404).json({ error: 'Kart no encontrado.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener Kart.' });
  }
};

// Crear registro
const createKart = async (req, res) => {
  const { modelo, color, velocidad_maxima, id_personaje } = req.body;
  try {
    const nuevoKart = await prisma.karts.create({
      data: {
        modelo,
        color,
        velocidad_maxima,
        id_personaje,
      },
    });
    res.json(nuevoKart);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear Kart' });
  }
};


// Editar registro  
const updateKart = async (req, res) => {
  const { id } = req.params;
  const { modelo,color,velocidad_maxima,id_personaje } = req.body;
  try {
    const KartActualizado = await prisma.karts.update({
      where: { id: parseInt(id) },
      data: {
        modelo,
        color,
        velocidad_maxima,
        id_personaje,
      },
    });
    res.json(KartActualizado);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar el Kart' });
  }
};


// Borrar registro
const deleteKart = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.karts.delete({ where: { id: parseInt(id) } });
    res.json({ message: 'Kart eliminado correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar Kart' });
  }
};




// Rutas para tabla Personaje_Habita_Reino.
// Obtener todos los registros de la tabla personaje_habita_reino.
const getPersonajesHabitanReino = async (req, res) => {
  try {
    const personajesHabitanReino = await prisma.personaje_habita_reino.findMany();
    res.json(personajesHabitanReino);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener los personajes que habitan el reino' });
  }
};

// Obtener un registro por su id.
const getPersonajeHabitaReinoById = async (req, res) => {
  const { id_personaje, id_reino } = req.params;
  try {
    const personajeHabitaReino = await prisma.personaje_habita_reino.findUnique({
      where: { id_personaje_id_reino: { id_personaje: parseInt(id_personaje), id_reino: parseInt(id_reino) } },
    });
    if (personajeHabitaReino) {
      res.json(personajeHabitaReino);
    } else {
      res.status(404).json({ error: 'Personaje que habita el reino no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener el personaje que habita el reino' });
  }
};

// Crear un nuevo registro.
const createPersonajeHabitaReino = async (req, res) => {
  const { id_personaje, id_reino, fecha_registro, es_gobernante } = req.body;
  try {
    const nuevoPersonajeHabitaReino = await prisma.personaje_habita_reino.create({
      data: {
        id_personaje,
        id_reino,
        fecha_registro,
        es_gobernante,
      },
    });
    res.json(nuevoPersonajeHabitaReino);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear el personaje que habita el reino' });
  }
};

// Actualizar un registro existente.
const updatePersonajeHabitaReino = async (req, res) => {
  const { id_personaje, id_reino } = req.params;
  const { fecha_registro, es_gobernante } = req.body;
  try {
    const personajeHabitaReinoActualizado = await prisma.personaje_habita_reino.update({
      where: { id_personaje_id_reino: { id_personaje: parseInt(id_personaje), id_reino: parseInt(id_reino) } },
      data: {
        fecha_registro,
        es_gobernante,
      },
    });
    res.json(personajeHabitaReinoActualizado);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar el personaje que habita el reino' });
  }
};

// Eliminar un registro.
const deletePersonajeHabitaReino = async (req, res) => {
  const { id_personaje, id_reino } = req.params;
  try {
    await prisma.personaje_habita_reino.delete({
      where: { id_personaje_id_reino: { id_personaje: parseInt(id_personaje), id_reino: parseInt(id_reino) } },
    });
    res.json({ message: 'Personaje que habita el reino eliminado correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar el personaje que habita el reino' });
  }
};




//Rutas para Tabla Reinos.
// Obtener todos los registros de la tabla Reinos.
const getReinos = async (req, res) => {
  try {
    const reinos = await prisma.reinos.findMany();
    res.json(reinos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener los Reinos' });
  }
};

// Obtener un registro por su id.
const getReinoById = async (req, res) => {
  const { id } = req.params;
  try {
    const reino = await prisma.reinos.findUnique({ where: { id: parseInt(id) } });
    if (reino) {
      res.json(reino);
    } else {
      res.status(404).json({ error: 'Reino no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener el Reino' });
  }
};

// Crear un nuevo registro.
const createReino = async (req, res) => {
  const { nombre, ubicacion, superficie } = req.body;
  try {
    const nuevoReino = await prisma.reinos.create({
      data: {
        nombre,
        ubicacion,
        superficie,
      },
    });
    res.json(nuevoReino);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear el Reino' });
  }
};

// Actualizar un registro existente.
const updateReino = async (req, res) => {
  const { id } = req.params;
  const { nombre, ubicacion, superficie } = req.body;
  try {
    const reinoActualizado = await prisma.reinos.update({
      where: { id: parseInt(id) },
      data: {
        nombre,
        ubicacion,
        superficie,
      },
    });
    res.json(reinoActualizado);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar el Reino' });
  }
};

// Eliminar un registro.
const deleteReino = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.reinos.delete({ where: { id: parseInt(id) } });
    res.json({ message: 'Reino eliminado correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar el Reino' });
  }
};





// Rutas para tabla Defensas.
// Obtener todos los registros de la tabla Defensas.
const getDefensas = async (req, res) => {
  try {
    const defensas = await prisma.defensas.findMany();
    res.json(defensas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener las Defensas' });
  }
};

// Obtener un registro por su id.
const getDefensaById = async (req, res) => {
  const { id } = req.params;
  try {
    const defensa = await prisma.defensas.findUnique({ where: { id: parseInt(id) } });
    if (defensa) {
      res.json(defensa);
    } else {
      res.status(404).json({ error: 'Defensa no encontrada' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener la Defensa' });
  }
};

// Crear un nuevo registro.
const createDefensa = async (req, res) => {
  const { defensa } = req.body;
  try {
    const nuevaDefensa = await prisma.defensas.create({
      data: {
        defensa,
      },
    });
    res.json(nuevaDefensa);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear la Defensa' });
  }
};

// Actualizar un registro existente.
const updateDefensa = async (req, res) => {
  const { id } = req.params;
  const { defensa } = req.body;
  try {
    const defensaActualizada = await prisma.defensas.update({
      where: { id: parseInt(id) },
      data: {
        defensa,
      },
    });
    res.json(defensaActualizada);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar la Defensa' });
  }
};

// Eliminar un registro.
const deleteDefensa = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.defensas.delete({ where: { id: parseInt(id) } });
    res.json({ message: 'Defensa eliminada correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar la Defensa' });
  }
};




// Rutas para tabla Defensas_Reinos
// Obtener todos los registros de la tabla Defensas_Reinos.
const getDefensasReinos = async (req, res) => {
  try {
    const defensasReinos = await prisma.defensas_Reinos.findMany();
    res.json(defensasReinos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener las Defensas_Reinos' });
  }
};

// Obtener un registro por su id.
const getDefensaReinoById = async (req, res) => {
  const { id_defensas, id_reinos } = req.params;
  try {
    const defensaReino = await prisma.defensas_Reinos.findUnique({
      where: { id_defensas_id_reinos: { id_defensas: parseInt(id_defensas), id_reinos: parseInt(id_reinos) } },
    });
    if (defensaReino) {
      res.json(defensaReino);
    } else {
      res.status(404).json({ error: 'Defensa_Reino no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener la Defensa_Reino' });
  }
};

// Crear un nuevo registro.
const createDefensaReino = async (req, res) => {
  const { id_defensas, id_reinos } = req.body;
  try {
    const nuevaDefensaReino = await prisma.defensas_Reinos.create({
      data: {
        id_defensas,
        id_reinos,
      },
    });
    res.json(nuevaDefensaReino);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear la Defensa_Reino' });
  }
};

// Actualizar un registro existente.
const updateDefensaReino = async (req, res) => {
  const { id_defensas, id_reinos } = req.params;
  const { id_defensas: newIdDefensas, id_reinos: newIdReinos } = req.body;
  try {
    const defensaReinoActualizada = await prisma.defensas_Reinos.update({
      where: { id_defensas_id_reinos: { id_defensas: parseInt(id_defensas), id_reinos: parseInt(id_reinos) } },
      data: {
        id_defensas: newIdDefensas,
        id_reinos: newIdReinos,
      },
    });
    res.json(defensaReinoActualizada);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar la Defensa_Reino' });
  }
};

// Eliminar un registro.
const deleteDefensaReino = async (req, res) => {
  const { id_defensas, id_reinos } = req.params;
  try {
    await prisma.defensas_Reinos.delete({
      where: { id_defensas_id_reinos: { id_defensas: parseInt(id_defensas), id_reinos: parseInt(id_reinos) } },
    });
    res.json({ message: 'Defensa_Reino eliminado correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar la Defensa_Reino' });
  }
};




// Rutas para tabla Diplomacias
// Obtener todos los registros de la tabla Diplomacias.
const getDiplomacias = async (req, res) => {
  try {
    const diplomacias = await prisma.diplomacias.findMany();
    res.json(diplomacias);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener las Diplomacias' });
  }
};

// Obtener un registro por su id.
const getDiplomaciaById = async (req, res) => {
  const { id_reino_1, id_reino_2 } = req.params;
  try {
    const diplomacia = await prisma.diplomacias.findUnique({
      where: { id_reino_1_id_reino_2: { id_reino_1: parseInt(id_reino_1), id_reino_2: parseInt(id_reino_2) } },
    });
    if (diplomacia) {
      res.json(diplomacia);
    } else {
      res.status(404).json({ error: 'Diplomacia no encontrada' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener la Diplomacia' });
  }
};

// Crear un nuevo registro.
const createDiplomacia = async (req, res) => {
  const { id_reino_1, id_reino_2, es_aliado } = req.body;
  try {
    const nuevaDiplomacia = await prisma.diplomacias.create({
      data: {
        id_reino_1,
        id_reino_2,
        es_aliado,
      },
    });
    res.json(nuevaDiplomacia);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear la Diplomacia' });
  }
};

// Actualizar un registro existente.
const updateDiplomacia = async (req, res) => {
  const { id_reino_1, id_reino_2 } = req.params;
  const { id_reino_1: newIdReino1, id_reino_2: newIdReino2, es_aliado } = req.body;
  try {
    const diplomaciaActualizada = await prisma.diplomacias.update({
      where: { id_reino_1_id_reino_2: { id_reino_1: parseInt(id_reino_1), id_reino_2: parseInt(id_reino_2) } },
      data: {
        id_reino_1: newIdReino1,
        id_reino_2: newIdReino2,
        es_aliado,
      },
    });
    res.json(diplomaciaActualizada);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar la Diplomacia' });
  }
};

// Eliminar un registro.
const deleteDiplomacia = async (req, res) => {
  const { id_reino_1, id_reino_2 } = req.params;
  try {
    await prisma.diplomacias.delete({
      where: { id_reino_1_id_reino_2: { id_reino_1: parseInt(id_reino_1), id_reino_2: parseInt(id_reino_2) } },
    });
    res.json({ message: 'Diplomacia eliminada correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar la Diplomacia' });
  }
};



const UsersController = {
    getPersonajes,
    getPersonajeById,
    createPersonaje,
    updatePersonaje,
    deletePersonaje,
    getTrabajos,
    getTrabajosById,
    createTrabajo,
    updateTrabajo,
    deleteTrabajo,
    getPersonajeById,
    getPersonaTieneTrabajo,
    getPersonaTieneTrabajoById,
    createPersonaTieneTrabajo,
    updatePersonaTieneTrabajo,
    deletePersonaTieneTrabajo,
    getKarts,
    getKartById, 
    createKart,
    deleteKart,
    updateKart,
    getPersonajesHabitanReino,
    getPersonajeHabitaReinoById,
    createPersonajeHabitaReino,
    updatePersonajeHabitaReino,
    deletePersonajeHabitaReino,
    getReinos,
    getReinoById,
    createReino,
    updateReino,
    deleteReino,
    getDefensas,
    getDefensaById,
    createDefensa,
    updateDefensa,
    deleteDefensa,
    getDefensasReinos,
    getDefensaReinoById,
    createDefensaReino,
    updateDefensaReino,
    deleteDefensaReino,
    getDiplomacias,
    getDiplomaciaById,
    createDiplomacia,
    updateDiplomacia,
    deleteDiplomacia,

}

export default UsersController


