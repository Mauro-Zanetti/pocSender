const cds = require('@sap/cds')

module.exports = cds.service.impl(async function() {

    const messaging = await cds.connect.to('messaging');
    const topic = 'demo/auxiliary';
    
    this.on('SendMessage', async (req) => { 
        console.log("SendMessage");
        console.log("message", req.data.id);
        
        messaging.emit(topic, req.data.id);
        return "Sent messeage"
    });
});


// /sender/SendMessage(id='1710')
// const message = { 'myProp': 'Sending message. Current Time: ' + new Date().toLocaleString() }