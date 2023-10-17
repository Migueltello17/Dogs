const { getTemperaments } = require('../Controller/temperamentsController');

const getTemperamentsHandler = async (req, res) => {
    try {
        const temperaments = await getTemperaments();
        return res.status(200).json(temperaments); // "Se ha creado la BD de Temperaments exitosamente"
    } catch (error) {
        return res.status(400).json({error:error.message});
    }
}

module.exports = getTemperamentsHandler;