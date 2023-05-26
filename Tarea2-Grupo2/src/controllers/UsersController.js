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

// 
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




            
const UsersController = {
    getPersonajes,
    getPersonajeById,
    createPersonaje,
    updatePersonaje,
    deletePersonaje

}

export default UsersController


