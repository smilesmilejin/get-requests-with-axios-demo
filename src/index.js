const axios = require('axios'); // import axios library

axios
  .get('https://dog.ceo/api/breeds/list/all')
  .then((response) => {
    // code taht executes with a successfull response goes here
    console.log('success!');
    // console.log(response); // response object
    //   {
    // status: 200,
    // statusText: 'OK',
    // headers: Object [AxiosHeaders] {
    //   date: 'Tue, 27 May 2025 19:45:12 GMT',
    //   'content-type': 'application/json',
    console.log(response.data);
  })
  .catch((error) => {
    // code that executes with an unsuccessfull response goes here
    console.log('error!');
    console.log(error);
    // AxiosError: Request failed with status code 404
    // at settle (/Users/xinshuangjin/Downloads/get-requests-with-axios-demo/node_modules/axios/dist/node/axios.cjs:2031:12)
    // at BrotliDecompress.handleStreamEnd (/Users/xinshuangjin/Downloads/get-requests-with-axios-demo/node_modules/axios/dist/node/axios.cjs:3148:11)
    console.log(error.data);
  });

console.log('This should go LAST'); // This will print first instead of last
// because it is runs asynchronously

//   "Successful" Response Vs. "Unsuccessful"
// axios defines "success" as any response with a 2XX status code. Therefore, responses with a 2XX status code will go into then, 
// and all responses outside a 2XX status code will go into catch.


//////////////////////////////////////////
// Examining response and error objects //
//////////////////////////////////////////

axios
  .get('https://dog.ceo/api/breeds/list/all')
  .then((response) => {
    console.log('The value of response is:', response);

    console.log('The value of status inside of response is:', response.status);

    console.log(
      'The date inside header inside response is:',
      response.headers.date
    );

    console.log('The data given back by the API response is:', response.data);
  })
  .catch((error) => {
    console.log('The value of error is:', error);

    console.log(
      'The value of status inside of response is:',
      error.response.status
    );

    console.log(
      'The data given back by the API response is:',
      error.response.data
    );
  });


//////////////////////////////////
// Verifying the Error Handling //
//////////////////////////////////

axios.get('https://dog.ceo/api/breeds/notarealendpoint/')
  .then((response) => {
    console.log('success!');
  })
  .catch((error) => {
    console.log('error!', error);
  });


////////////////////////
// Using Query Params //
////////////////////////

const dotEnv = require('dotenv');

dotEnv.config(); // Load variables from .env
const apiKey = process.env.API_KEY; // Access the API_KEY variable

axios
  .get('https://us1.locationiq.com/v1/search.php', {
    params: {
      key: apiKey,
      q: 'Seattle, Washington, USA',
      format: 'json',
    },
  })
  .then((response) => {
    console.log('success!', response.data);
  })
  .catch((error) => {
    console.log('error!', error.response.data);
  });


//////////////////////////////
// Observing Asynchronosity //
//////////////////////////////

axios.get('https://dog.ceo/api/breeds/list/all')
  .then(() => {
    console.log('success!');
  })
  .catch(() => {
    console.log('error!');
  });

console.log('I broke free on a Saturday morning');
console.log('I put the pedal to the floor');
console.log('Headed north on Mills Avenue');
console.log('And listened to the engine roar');

// I broke free on a Saturday morning
// I put the pedal to the floor
// Headed north on Mills Avenue
// And listened to the engine roar
// success!
