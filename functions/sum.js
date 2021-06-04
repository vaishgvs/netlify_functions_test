//sum function 

exports.handler = async (event, context) => {
  const num1 = event.queryStringParameters.num1;
  const num2 = event.queryStringParameters.num2;
  
  const sum = parseInt(num1) + parseInt(num2);
  const sum2 = toString(sum);
  return {
    statusCode: 200,
    body: `Sum is: $(sum2)`,
  };
};
