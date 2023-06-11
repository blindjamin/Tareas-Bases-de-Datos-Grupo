import prisma from '../prismaClient.js'

const getCantidadHabitantes = async (req, res) => {
    const { id_reino } = req.params;

    try {
        const count = await prisma.personaje_habita_reino.count({
        where: {
            id_reino: parseInt(id_reino),
        },
        });

        res.json({ cantidadHabitantes: count });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Ha ocurrido un error al obtener la cantidad de habitantes.' });
    }
};

const CantidadHabitantesController = {
    getCantidadHabitantes
}
export default CantidadHabitantesController