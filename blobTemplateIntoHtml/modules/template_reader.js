const fs = require("fs");
const path = require('path'); 
getTemplate = (templateName) => {
    // __dirname means relative to script. Use "./data.txt" if you want it relative to execution path.
    return new Promise((resolve, reject) => {
      const templatePath = path.join(`${__dirname}../../../templates` ,`/${templateName}.html`);
        fs.readFile(templatePath, 'utf8', function (error, data) {
          if (error) return reject(error);
    
          console.log(data)
    
          return resolve(data);
        })
      });
}

module.exports = {getTemplate};
