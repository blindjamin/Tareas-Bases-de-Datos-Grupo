import prisma from '../prismaClient.js'



const getTop5personajesConMasFuerza = async (req, res) => {
    try {
      const result = await prisma.personajes.findMany({
        orderBy: {
          fuerza: 'desc'
        },
        take: 5
      });
      res.json(result);
    } catch (error) {
      console.error('Error al obtener los personajes', error);
      res.status(500).json({ error: 'Error al obtener los personajes' });
    }
  };



const Top5personajesConMasFuerzaController = {
    getTop5personajesConMasFuerza
}

export default Top5personajesConMasFuerzaController