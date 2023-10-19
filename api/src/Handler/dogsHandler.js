const { getDogs, getDogByName, createNewDog, getDogByID } = require("../Controller/dogsController");

const getDogsHandler = async (req, res)=>{
    const { name } = req.query;
try {
    const results = name? await getDogByName(name) : await getDogs();
    res.status(200).json(results);
        
} catch (error) {
    res.status(400).json({error:error.message})        
}
};

const getDogByIdHandler = async (req, res) =>{
    const {idRaza} = req.params;
    try {
    const dogById = await getDogByID (idRaza);
    res.status(200).json(dogById);
} catch (error) {
    res.status(400).json({error: error.message});
}
};

const createNewDogHandler = async (req, res)=>{
    try {
    const {image, name, weight_min, weight_max, height_min, height_max, life_span_min, life_span_max, temperament} = req.body;
    if (!image || !name || !weight_min || !weight_max || !height_min || !height_max || !life_span_min || !life_span_max) {
    res.status(200).json('No se recibieron todos los campos esperados');
} else {
    const createDog = await createNewDog (image, name, weight_min, weight_max, height_min, height_max, life_span_min, life_span_max, temperament);
    res.status(200).json(createDog);
} 
} catch (error) {
    res.status(400).json({ error: error.message });
}
};


module.exports = {
    getDogByIdHandler,
    getDogsHandler,
    createNewDogHandler
}