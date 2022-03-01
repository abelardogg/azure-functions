const doT = require('dot');
const templates =  require('./modules/template_reader.js');

module.exports = async function(context) {

    const fileInBlob = context.bindings.inputBlob;
    const data = JSON.parse(fileInBlob);

    context.log('Node.js Blob trigger function processed', data);

    // const HTMLtemplate = await templates.getTemplate('user-card');
    const HTMLtemplate = await templates.getHttpTemplate('template');

    let doTTemplate = doT.template(HTMLtemplate);
    const result = doTTemplate(data);


    context.bindings.outputBlob = result;
};


