const personen = require('./personen.json')

const list = personen.filter(function(specific){
    return specific.alter > 30
})

console.log(list)


