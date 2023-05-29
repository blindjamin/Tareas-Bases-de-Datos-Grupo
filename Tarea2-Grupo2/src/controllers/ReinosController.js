import prisma from '../prismaClient.js'

//CRUD para Tabla Reinos.
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



const ReinosController = {
    getReinos,
    getReinoById,
    createReino,
    updateReino,
    deleteReino,

}

export default ReinosController