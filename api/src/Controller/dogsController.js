const axios = require('axios');
const {Dogs, Temperaments, dogsTemperaments} = require('../db');
const { API_KEY } = process.env;
const { Op } = require('sequelize');

const getDogs = async () => {
  const {data} = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);
  const allDogsApi = data.map((dog) => ({ // Buena práctica: Esta función de limpiar info se puede guardar en carpeta utils dentro de src para usarla en los controllers
      id: dog.id,
      image: dog.image.url,
      name: dog.name,
      height: dog.height.metric,
      weight: dog.weight.metric,
      life_span: dog.life_span,
      Temperaments: dog.temperament?.split(', ').map((temp) => ({
          "name": temp
      })),
      created: false, //sirve para diferenciar si vino de la API o si fue creado desde la BD. También se podría con isNan id (?)
  }))

  const allDogsDb = await Dogs.findAll({
      include: {
          model: Temperaments,
          attributes: ["name"],
          through: {
              attributes: []
          },
      },
  });

  return [...allDogsDb,...allDogsApi];
};

const getDogByName = async (name)=>{
  const dogsApi = (await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)).data;
    const dogApi = dogsApi.filter((dog) => dog.name.toLowerCase().includes(name.toLowerCase())).map((dog) => ({
        id: dog.id,
        image: dog.image.url,
        name: dog.name,
        height: dog.height.metric,
        weight: dog.weight.metric,
        life_span: dog.life_span,
        Temperaments: dog.temperament?.split(', ').map((temp) => ({
            "name": temp
        })),
        created: false,
    }))
    const dogDb = await Dogs.findAll({where: {name: {
        [Op.iLike]: `%${name}%`
    }
},
        include: {
            model: Temperaments,
            attributes: ["name"],
            through: {
                attributes: []
            },
        },
    });
    if (dogApi.length === 0 && dogDb.length === 0) {
        throw new Error(`La raza ${name} no existe en la base de datos`)
    } else {
        return [...dogDb,...dogApi];
    }
};

const createNewDog = async (image, name, weight_min, weight_max, height_min, height_max, life_span_min, life_span_max, temperament) => {
  const height = `${height_min} - ${height_max}`;
  const weight = `${weight_min} - ${weight_max}`;
  const life_span = `${life_span_min} - ${life_span_max} years`;
  const newDog = await Dogs.create({
    image: image? image:'https://i.pinimg.com/originals/4c/fd/ae/4cfdae9b1148b654e689f73b4f414aa3.jpg',
    name: name,
    weight: weight,
    height: height,
    life_span: life_span,
  })
  //asocio los temperamentos
  const temp = await Temperaments.findAll({where:{name: temperament}});
  await newDog.addTemperament(temp);
  return newDog;

}

const getDogByID = async (idRaza) => {
  console.log(idRaza)
  if (Number.isNaN(Number(idRaza))) {
  const dog = await Dogs.findByPk(idRaza, {
      include: {
        model: Temperaments,
        attributes: ["name"],
        through: {
            attributes: []
        },
    },
  });
  return dog;
  } else {
  const {data} = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);
  const dog = data.filter((dog) => dog.id === Number(idRaza)); // No me trae imagen cuando uso el ID en el endpoint, por lo cual hago esto como 2da opción
  const dogByIdApi = dog.map((dog) => ({
      id: dog.id,
      image: dog.image.url,
      name: dog.name,
      height: dog.height.metric,
      weight: dog.weight.metric,
      life_span: dog.life_span,
      Temperaments: dog.temperament?.split(', ').map((temp) => ({
          "name": temp
      })),
      created: false,
  }))
  return dogByIdApi.pop();
  }
};

module.exports = {
    getDogs,
    getDogByName,
    getDogByID,
    createNewDog
} 