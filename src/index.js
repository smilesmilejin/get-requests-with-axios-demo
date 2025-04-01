const axios = require('axios');

axios
  .get('https://dog.ceo/api/breeds/list/all')
  .then(() => {
    console.log('success!');
  })
  .catch(() => {
    console.log('error!');
  });


//////////////////////////////////////////
// Examining response and error objects //
//////////////////////////////////////////

// axios
//   .get('https://dog.ceo/api/breeds/list/all')
//   .then((response) => {
//     console.log('The value of response is:', response);

//     console.log('The value of status inside of response is:', response.status);

//     console.log(
//       'The date inside header inside response is:',
//       response.headers.date
//     );

//     console.log('The data given back by the API response is:', response.data);
//   })
//   .catch((error) => {
//     console.log('The value of error is:', error);

//     console.log(
//       'The value of status inside of response is:',
//       error.response.status
//     );

//     console.log(
//       'The data given back by the API response is:',
//       error.response.data
//     );
//   });


//////////////////////////////////
// Verifying the Error Handling //
//////////////////////////////////

// axios.get('https://dog.ceo/api/breeds/notarealendpoint/')
//   .then((response) => {
//     console.log('success!');
//   })
//   .catch((error) => {
//     console.log('error!', error);
//   });


////////////////////////
// Using Query Params //
////////////////////////
// require('dotenv').config();
// const { env } = require('node:process');
// const apiKey = env.API_KEY;

// axios
//   .get('https://us1.locationiq.com/v1/search.php', {
//     params: {
//       key: apiKey,
//       q: 'Seattle, Washington, USA',
//       format: 'json',
//     },
//   })
//   .then((response) => {
//     console.log('success!', response.data);
//   })
//   .catch((error) => {
//     console.log('error!', error.response.data);
//   });


//////////////////////////////
// Observing Asynchronosity //
//////////////////////////////

// axios.get('https://dog.ceo/api/breeds/list/all')
//   .then(() => {
//     console.log('success!');
//   })
//   .catch(() => {
//     console.log('error!');
//   });

// console.log('I broke free on a Saturday morning');
// console.log('I put the pedal to the floor');
// console.log('Headed north on Mills Avenue');
// console.log('And listened to the engine roar');
