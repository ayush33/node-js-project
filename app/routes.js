const fs = require('fs')
const path = require('path')

module.exports = function(app){
    const routesFile = fs.readFileSync(path.join(__dirname, 'routes'))

}