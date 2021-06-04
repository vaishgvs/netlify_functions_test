/*exports.handler = (event, context, callback) => {
  callback(null, {
    statusCode: 200,
    body: "Hello World!"
  })
}*/

/*
exports.handler = async (event, context) => {
  const name = event.queryStringParameters.name || "World";

  return {
    statusCode: 200,
    body: `Hello, ${name}`,
  };
};
// in the above function when I go to ...netlify.app/.netlify/functions/test?name=abc, it displays Hello, abc
// else if I just go to ...netlify.app/.netlify/functions/test it displays Hello, World
// so here name is the request parameter of the GET request
*/

//sum function 

exports.handler = async (event, context) => {
  const num1 = event.queryStringParameters.num1;
  const num2 = event.queryStringParameters.num2;
  
  const sum = parseInt(num1) + parseInt(num2);
  
  return {
    statusCode: 200,
    body: 'Sum is: ${toString(sum)}',
  };
};
