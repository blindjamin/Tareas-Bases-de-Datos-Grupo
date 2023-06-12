import prisma from '../prismaClient.js'

// CRUD para tabla trabajos.

// Obtener todos los registros de tabla trabajos.
const getTrabajos = async (req, res) => {
  try {
    const trabajos = await prisma.trabajos.findMany();
    res.json(trabajos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener los trabajos' });
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



const TrabajosController = {
    getTrabajos,
    getTrabajosById,
    createTrabajo,
    updateTrabajo,
    deleteTrabajo,
}

export default TrabajosController