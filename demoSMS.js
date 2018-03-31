var accountSid = 'AC15398a63683f7d52927e5d9c323f901c'; // Your Account SID from www.twilio.com/console
var authToken = '5a69703bea1e2609fe83fd47c1238679';   // Your Auth Token from www.twilio.com/console

var twilio = require('twilio');
var client = new twilio(accountSid, authToken);
//var date = new Date();
const moment = require('moment');
var time = moment().hours()+"."+moment().minutes()
console.log(time);

  client.messages.create({
      body: 'Hello from habeeb at '+time,
      to: '+919700799223',  // Text this number
      from: '+19492983673' // From a valid Twilio number
  })
  .then((message) => {

    console.log('message sent');
    console.log(message.sid)
  });
