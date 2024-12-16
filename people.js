const createName = require('./names');
const createHobbies = require('./hobbies');

function createPerson(){
    
    const getfullName = createName('Mario', 'Rossi');
    
    const getHobbies = createHobbies('Football', 'Reading', 'WarHammer');

    return {
        name: getfullName,
        hobbies: getHobbies.hobbies
    };

};


console.log(createPerson());

