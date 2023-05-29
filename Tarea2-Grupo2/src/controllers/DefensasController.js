import prisma from '../prismaClient.js'


// CRUD para tabla Defensas.
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



const DefensasController = {
    getDefensas,
    getDefensaById,
    createDefensa,
    updateDefensa,
    deleteDefensa,
}

export default DefensasController