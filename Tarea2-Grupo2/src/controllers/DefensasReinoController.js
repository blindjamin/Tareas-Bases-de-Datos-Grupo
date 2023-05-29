import prisma from '../prismaClient.js'


// CRUD para tabla Defensas_Reinos
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




const DefensasReinoController = {
    getDefensasReinos,
    getDefensaReinoById,
    createDefensaReino,
    updateDefensaReino,
    deleteDefensaReino,
}

export default DefensasReinoController