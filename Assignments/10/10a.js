const postUrlDistance = "http://localhost:8080/jsonDistance";
const postUrlTemp = "http://localhost:8080/jsonTemp";


function sendDistance() {
    // Output parameter
    const resultText = document.getElementById("dResult");
    // Input parameters
    const distValue = document.getElementById("dValue");
    const distUnit = document.getElementById("dUnit");

    var xhr = new XMLHttpRequest();

    xhr.open("POST", postUrlDistance, true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = () => {
        var stateDone = 4, statusOk = 200;
        if(xhr.readyState == stateDone && xhr.status == statusOk)
        {
            console.log(xhr.response);
            resultText.innerHTML = `Result: ${xhr.response}`;
        }
    };
    let resultJson = JSON.stringify({ "dValue": distValue.value, "dUnit": distUnit.value });

    console.log(resultJson);
    xhr.send(resultJson);
}

function sendTemperature() {
    // Output parameter
    const resultText = document.getElementById("tResult");
    // Input parameters
    const tempValue = document.getElementById("tValue");
    const tempUnit = document.getElementById("tUnit");

    var xhr = new XMLHttpRequest();

    xhr.open("POST", postUrlTemp, true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = () => {
        var stateDone = 4, statusOk = 200;
        if(xhr.readyState == stateDone && xhr.status == statusOk)
        {
            console.log(xhr.response);
            resultText.innerHTML = `Result: ${xhr.response}`;
        }
    };
    let resultJson = JSON.stringify({ "tValue": tempValue.value, "tUnit": tempUnit.value });

    console.log(resultJson);
    xhr.send(resultJson);
}