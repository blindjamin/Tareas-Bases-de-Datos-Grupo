import prisma from '../prismaClient.js'

// CRUD para tabla Diplomacias
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



const DiplomaciasController = {
    getDiplomacias,
    getDiplomaciaById,
    createDiplomacia,
    updateDiplomacia,
    deleteDiplomacia,
}

export default DiplomaciasController