// Modules loading
const events = require('events');
const http = require('http');

// Error handling
const errorHandler = new events.EventEmitter();
errorHandler.on('error', (error) => {
  console.log(`--- Error: ${error.message}`);
});

// Server setup
const server = http.createServer((req, res) => {
  res.writeHead(200, {"Content-Type": "text/plain"});

  let operationResult = inputToAction(req.url);
  res.write(`Result: ${JSON.stringify(operationResult.result)}`);

  res.end();
});

server.listen(8080);


// Handling function
function inputToAction(url) {
  if(url === null || url === undefined) {
    errorHandler.emit('error', new Error(`wrong request => ${url}`));
    return resultToOutput(`Wrong request => ${url}`);
  }

  // Process input parameters
  let parameters = url.trim().split(/(\d+)/);
  parameters.shift();
  parameters.pop();

  if(parameters.length != 3)
  {
    errorHandler.emit('error', new Error(`wrong request parameter count => ${url}`));
    return resultToOutput(`Wrong request parameter count => ${url}`);
  }

  // Select right operation
  let userOperation = null;
  Object.keys(Operation).forEach(operation => {
    let operationClass = Operation.nameToOperation(operation);

    if(operationClass.isOfOperation(parameters[1]))
      userOperation = operationClass;
  });

  // Check whether the operation was set
  if(userOperation === null)
  {
    errorHandler.emit('error', new Error(`wrong request operation => ${parameters[1]}`));
    return resultToOutput(`Wrong request operation => ${parameters[1]}`);
  }

  // Check input parameters
  let number1, number2;
  try {
    number1 = parseFloat(parameters[0]);
    number2 = parseFloat(parameters[2]);
  }
  catch {
    errorHandler.emit('error', new Error(`wrong parameters format, should be numbers => (${parameters[0]}, ${parameters[2]})`));
    return resultToOutput(`Wrong parameters format, should be numbers => (${parameters[0]}, ${parameters[2]})`);
  }
  if(!userOperation.areParametersValid(number1, number2))
  {
    errorHandler.emit('error', new Error(`wrong request parameters => (${parameters[0]}, ${parameters[2]})`));
    return resultToOutput(`Wrong request parameters => (${parameters[0]}, ${parameters[2]})`);
  }

  // Perform operation
  return userOperation.performAction(number1, number2);
}

function resultToOutput(result) {
  return { result: result };
}

// Functionalities
class Operation
{
  static Subtract = new Operation("-", (a, b) => { return resultToOutput(a - b); }, null);
  static Multiply = new Operation("*", (a, b) => { return resultToOutput(a * b); }, null);
  static Divide = new Operation("/", (a, b) => { return resultToOutput(a / b); }, (a, b) => { return (b != 0); });
  static Add = new Operation("+", (a, b) => { return resultToOutput(a + b); }, null);

  constructor(operator, actionToDo, parametersValid) {
    this.parametersValid = (parametersValid != null)? parametersValid : (a, b) => { return true; };
    this.actionToDo = actionToDo;
    this.operator = operator;
  }

  static nameToOperation(name)
  {
    if(name == 'Subtract')
      return this.Subtract;
    if(name == 'Multiply')
      return this.Multiply;
    if(name == 'Divide')
      return this.Divide;
    if(name == 'Add')
      return this.Add;
    return null;
  }

  performAction(a, b) {
    return this.actionToDo(a, b);
  }

  isOfOperation(operator) {
    return (this.operator === operator);
  }

  areParametersValid(a, b) {
    return this.parametersValid(a, b);
  }
}
