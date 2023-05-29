import prisma from '../prismaClient.js'

// CRUD para tabla Personaje_Habita_Reino.
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





const PersonajeHabitaReinoController = {
    getPersonajesHabitanReino,
    getPersonajeHabitaReinoById,
    createPersonajeHabitaReino,
    updatePersonajeHabitaReino,
    deletePersonajeHabitaReino,
}

export default PersonajeHabitaReinoController