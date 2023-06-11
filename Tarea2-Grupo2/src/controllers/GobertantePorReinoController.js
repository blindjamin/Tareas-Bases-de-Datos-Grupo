import prisma from '../prismaClient.js';

const getGobernantes = async (req, res) => {
  const { id_reino } = req.params;

  try {
    if (id_reino) {
      const gobernante = await prisma.personaje_habita_reino.findFirst({
        where: {
          id_reino: parseInt(id_reino),
          es_gobernante: true,
        },
        select: {
          id_personaje: true,
        },
      });

      if (!gobernante) {
        return res.status(404).json({ error: 'No se encontró ningún gobernante para el reino especificado.' });
      }

      const personaje = await prisma.personajes.findUnique({
        where: {
          id: gobernante.id_personaje,
        },
      });

      res.json({ gobernante: personaje });
    } else {
      const gobernantes = await prisma.personaje_habita_reino.findMany({
        where: {
          es_gobernante: true,
        },
        select: {
          id_personaje: true,
        },
      });

      if (gobernantes.length === 0) {
        return res.status(404).json({ error: 'No se encontraron gobernantes en ningún reino.' });
      }

      const gobernantesIds = gobernantes.map((gobernante) => gobernante.id_personaje);

      const personajes = await prisma.personajes.findMany({
        where: {
          id: {
            in: gobernantesIds,
          },
        },
      });

      res.json({ gobernantes: personajes });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ha ocurrido un error al obtener los gobernantes.' });
  }
};

const GobernantesController = {
  getGobernantes,
};

export default GobernantesController;
