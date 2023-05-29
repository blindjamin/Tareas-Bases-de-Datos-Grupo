import prisma from '../prismaClient.js'


// CRUD para tabla Karts

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


const KartsController = {
    getKarts,
    getKartById,
    createKart,
    updateKart,
    deleteKart,
}

export default KartsController