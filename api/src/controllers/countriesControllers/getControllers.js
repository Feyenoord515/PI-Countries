const axios = require('axios');
const { Op } = require('sequelize');
const { Country, Activity } = require('../../db.js')


// const getCountries = async  () => {
//   const url = `https://restcountries.com/v3.1/all`
//   const countries = await axios.get(url)
//   const array = countries.data.map( (c) => {
//        const data = {
//         id: c.cca3,
//         name: c.name.common,
//         flags: c.flag[0],
//         continent: c.continents[0],
//         capital: c.capital ? c.capital[0] : 'Undefined capital city',
//         subregion: c.subregion ? c.subregion : 'Undefinded Subregion',
//         area: c.area,
//         population: c.population
//        };
//        return data;   
//       }
//       );
//   console.log(array)
//   array.forEach(async (c) => await Country.create(c));
// };

const getCountries = async (query) => {
  try {
    const response = await axios.get("https://restcountries.com/v3.1/all");
    const { data } = response;
    
    const countriesToCreate = data.map((c) => ({
      id: c.cca3,
      name: c.name.official,
      flags: c.flags.png,
      continent: c.continents && c.continents.length > 0 ? c.continents : ["none"],
      capital: c.capital && c.capital.length > 0 ? c.capital : ["none"],
      subregion: c.subregion || "none",
      area: c.area,
      population: c.population,
    }));
    await Country.bulkCreate(countriesToCreate, {
      updateOnDuplicate: ["name"], // Opcionalmente, actualiza si el nombre ya existe
    });
    
   
    console.log("Countries loaded in DB succesfully");

    if (query) {
      const response = await Country.findAll({
        where: { name: { [Op.iLike]: `%${query}%` } },
        // include: {
        //   model: Activity,
        //   attributes: ["name", "difficulty", "duration", "season"],
        //   through: { attributes: [] },
        // },
      });
      return response && response;
    }

    const countriesDB = await Country.findAll({
      include: {
        model: Activity,
        attributes: ["name", "difficulty", "duration", "seasson"],
        through: { attributes: [] },
      },
    });

    return countriesDB && countriesDB;
  } catch (error) {
    console.log(error);
  }
};


const getCountriesByName = async (name) => {
    try {
        const byNameCountries = await Country.findAll({
            where: {
                name: {
                    [Op.iLike] : `%${name}%`
                }
            },
            include: [Activity]
        })
        return byNameCountries
    } catch (error) {
        console.log('error getCountriesByName en controller ' + error)
    }
}

module.exports = {
   getCountries,
    getCountriesByName
}