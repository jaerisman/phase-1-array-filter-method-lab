const drivers = [
    {
        firstName: 'Maisie',
        homeTown: 'Highlands Ranch'
    },
    {
        firstName: 'Jacob',
        homeTown: 'Denver'
    },
    {
        firstName: 'Sarah',
        homeTown: 'Aiken'
    }, 
    {
        firstName: 'Oliver',
        homeTown: 'Aiken'
    },
]

function findMatching(collection, name){
    return collection.filter(function(driver) {
     return driver.toLowerCase() === name.toLowerCase();
    });
 };

function fuzzyMatch(collection, query){
    return collection.filter(function(driver) {
        return driver.startsWith(query);
    });
 }

 function matchName(collection, name){
    return collection.filter(function(driver) {
        return driver.name === name;
    });
 }