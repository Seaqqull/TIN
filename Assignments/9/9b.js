const postUrl = "http://localhost:8080/jsonOperation";

function sendRequest() {
    // Output parameter
    const resultText = document.getElementById("result");
    // Input parameters
    const secondNumber = document.getElementById("sNumber");
    const firstNumber = document.getElementById("fNumber");
    const operation = document.getElementById("operation");

    var xhr = new XMLHttpRequest();

    xhr.open("POST", postUrl, true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = () => {
        var stateDone = 4, statusOk = 200;
        if(xhr.readyState == stateDone && xhr.status == statusOk)
        {
            console.log(xhr.response);
            resultText.innerHTML = `Result: ${JSON.parse(xhr.response).result}`;
        }
    };
    let resultJson = JSON.stringify({ "fNumber": firstNumber.value, "sNumber": secondNumber.value, "operation": operation.value});

    console.log(resultJson);
    xhr.send(resultJson);
}
