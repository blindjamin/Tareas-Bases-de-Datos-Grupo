import prisma from '../prismaClient.js'


const getPersonajeConMasKarts = async (req, res) => {
  try {
    const personajeConMasKarts = await prisma.personajes.findFirst({
      orderBy: {
        idpersonajes2: {
          _count: 'desc'
        }
      },
      include: {
        idpersonajes2: true
      }
    });

    res.json(personajeConMasKarts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ocurrió un error al obtener el personaje con más karts.' });
  }
};

const PersonajeConMasKartsController = {
    getPersonajeConMasKarts
}

export default PersonajeConMasKartsController