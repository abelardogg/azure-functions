module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    //context.bindings.outputBlob = context.bindings.req;
    //This is the content of the blob file
    context.bindings.outputBlob = "Hello world";
}