import prisma from '../prismaClient.js'

//CRUD para tabla personaje_tiene_trabajo

// Obtener todos los registros de tabla persona_tiene_trabajo.
const getPersonaTieneTrabajo = async (req, res) => {
  try {
    const persona_tiene_trabajo = await prisma.personaje_tiene_trabajo.findMany();
    res.json(persona_tiene_trabajo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener las relaciones personaje-trabajo' });
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
    // Verificar si el personaje existe
    const personajeExistente = await prisma.Personajes.findUnique({
      where: { id: id_personaje },
    });

    if (!personajeExistente) {
      return res.status(404).json({ error: 'El personaje no existe' });
    }

    // Verificar si el trabajo existe
    const trabajoExistente = await prisma.Trabajos.findUnique({
      where: { id: id_trabajo },
    });

    if (!trabajoExistente) {
      return res.status(404).json({ error: 'El trabajo no existe' });
    }

    const nuevoPersonajeTieneTrabajo = await prisma.personaje_tiene_trabajo.create({
      data: {
        fecha_inicio,
        fecha_termino,
        idtrabajos: { connect: { id: id_trabajo } },
        idpersonajes: { connect: { id: id_personaje } },
      },
    });

    res.json(nuevoPersonajeTieneTrabajo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear la relación Personaje-Trabajo' });
  }
};


// Editar registro  
const updatePersonaTieneTrabajo = async (req, res) => {
  try {
    const { id_trabajo, id_personaje } = req.params;
    const { fecha_inicio, fecha_termino } = req.body;

    const updatedPersonaTieneTrabajo = await prisma.personaje_tiene_trabajo.update({
      where: {
        id_trabajo_id_personaje: { id_trabajo: Number(id_trabajo), id_personaje: Number(id_personaje) },
      },
      data: {
        fecha_inicio: new Date(fecha_inicio),
        fecha_termino: new Date(fecha_termino),
      },
    });

    res.json(updatedPersonaTieneTrabajo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ocurrió un error al actualizar la relación Personaje-Trabajo.' });
  }
};

// Borrar registro
const deletePersonaTieneTrabajo = async (req, res) => {
  const { id_trabajo, id_personaje } = req.params;
  try {
    // Eliminar la relación persona_tiene_trabajo
    await prisma.personaje_tiene_trabajo.delete({
      where: {
        id_trabajo_id_personaje: {
          id_trabajo: parseInt(id_trabajo),
          id_personaje: parseInt(id_personaje),
        },
      },
    });

    res.status(200).json({ message: 'Relacion Persona-Trabajo eliminada exitosamente' });
} catch (error) {
  res.status(500).json({ error: 'Error al eliminar la relacion Persona-Trabajo' });
}
};




const PersonajeTieneTrabajoController = {
    getPersonaTieneTrabajo,
    getPersonaTieneTrabajoById,
    createPersonaTieneTrabajo,
    updatePersonaTieneTrabajo,
    deletePersonaTieneTrabajo,
}

export default PersonajeTieneTrabajoController