const SendOtp = require('sendotp');
const sendOtp = new SendOtp('204144AqvEk9h1c5aae5f90');

sendOtp.send("919700799223", "APNAKISAAN", function (error, data, response) {
  console.log(data);

});

  sendOtp.verify("919700799223", "4080", function (error, data, response) {
    console.log(data); // data object with keys 'message' and 'type'
    if(data.type == 'success') console.log('OTP verified successfully')
    if(data.type == 'error') console.log('OTP verification failed')
  });
