module.exports = async function(context) {
    context.log('Node.js Blob trigger function processed', context.bindings.myInputBlob);
    context.bindings.myOutputBlob = context.bindings.myInputBlob;
};