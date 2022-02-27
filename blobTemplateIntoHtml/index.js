const doT = require('dot')

module.exports = async function(context) {
    const fileInBlob = context.bindings.inputBlob;
    const data = JSON.parse(fileInBlob);

    context.log('Node.js Blob trigger function processed', data);

    let template = doT.template(presentationCardTemplate());
    const result = template(data);


    context.bindings.outputBlob = result;
};


function presentationCardTemplate(){
    return `
        <h1>Name: {{=it.name}}</h1>
        <h3>Age: {{=it.age}}</h3>
        <h3>Role: {{=it.role}}</h3>
        <h3>Location: {{=it.location}}</h3>
    `;
}