const axios = require('axios');
const { Temperaments } = require('../db');
const { API_KEY} = process.env;

const getTemperaments = async () => {
  const response = await axios.get(`https://api.thedogapi.com/v1/breeds?${API_KEY}`);
    const breeds = response.data;
    
    const temperamentsRaw = [];

    for (const breed of Object.values(breeds)) {
      if (breed.temperament) {
        const temperamentList = breed.temperament.split(',').map((temperament) => temperament.trim());
        temperamentsRaw.push(...temperamentList);
      }
    }
    const temperaments =[ ...new Set(temperamentsRaw)];
    fillTempDb(temperaments);
    return temperaments;
};

const fillTempDb = async (temperaments) =>{
  const tempDb = temperaments.map(temperament =>({
    name: temperament,
  }));
  const tempCount = await Temperaments.count();
  if(!tempCount){
      await Temperaments.bulkCreate(tempDb);
  }
}

module.exports = {
  getTemperaments,
  fillTempDb
};

