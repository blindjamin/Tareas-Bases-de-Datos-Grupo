import prisma from '../prismaClient.js'

//CRUD para tabla personaje_tiene_trabajo

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



const PersonajeTieneTrabajoController = {
    getPersonaTieneTrabajo,
    getPersonaTieneTrabajoById,
    createPersonaTieneTrabajo,
    updatePersonaTieneTrabajo,
    deletePersonaTieneTrabajo,
}

export default PersonajeTieneTrabajoController