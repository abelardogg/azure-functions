const fs = require("fs");
const path = require('path'); 
const axios = require('axios');


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

getHttpTemplate = (templateName) => {
  const url = process.env[templateName];
  if(!url) return null;
  
  return new Promise((resolve, reject) => {
    axios.get(url)
      .then(function (response) {
        // handle success
        console.log(response.data);
        resolve(response.data)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
    });
  });

}

module.exports = {
  getTemplate,
  getHttpTemplate
};
