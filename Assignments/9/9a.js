// Modules loading
const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');

// Variable initialization
const app = express();
const port = 8080;

// Parametrize server
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('./Assignments/9'));
app.use(bodyParser.json());


app.get('/', (req,res) => {
    res.sendFile(path.resolve('./Assignments/9/9b.html'));
});

app.post('/jsonOperation', (req,res)=>{
    console.log(`-- New JSON data: ${JSON.stringify(req.body)}`);

    res.setHeader('Content-Type', 'application/text');
    res.send(inputToAction(req.body));
});

// Start server
app.listen(port, () => {
    console.log(`--- Server started: port=${port}`)
});


// Process function
function inputToAction(data) {
    let requestedOperation = data.operation;
    let number1 = parseFloat(data.fNumber);
    let number2 = parseFloat(data.sNumber);

    // Select right operation
    let userOperation = null;
    Object.keys(Operation).forEach(operation => {
        let operationClass = Operation.nameToOperation(operation);

        if(operationClass.isOfOperation(requestedOperation))
            userOperation = operationClass;
    });

    // Check whether the operation was set
    if(userOperation === null)
    {
        errorHandler.emit('error', new Error(`wrong request operation => ${parameters[1]}`));
        return resultToOutput(`Wrong request operation => ${parameters[1]}`);
    }

    // Check input parameters
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