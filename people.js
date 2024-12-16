const createName = require('./names');
const createHobbies = require('./hobbies');

function createPerson(){
    
    const getfullName = createName('Mario', 'Rossi');

    const getHobbies = createHobbies('Football', 'Reading', 'WarHammer');

    return {
        getfullName: createName,
        gethobbies: createHobbies.hobbies
    };

};


console.log(createPerson())

