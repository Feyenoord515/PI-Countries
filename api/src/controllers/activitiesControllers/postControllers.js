const { Activity, Country } = require('../../db.js')

const postActivity = async (name, difficulty, duration, seasson, countries) => {
    try {
        let newActivity = await Activity.create({
            name,
            difficulty,
            duration,
            seasson
        });

        let selectCountries = await Country.findAll({
            where: {
                name: countries
            }
        });

        return newActivity.addCountry(selectCountries)
    } catch (error) {
        console.log('Error postActivity en controller ' + error)
    }
};

module.exports = {
    postActivity
};