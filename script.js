function showCalculation() {
    var select = document.querySelector(".dropdown select");
    var calculationDivs = document.querySelectorAll(".calculation");

    calculationDivs.forEach(function (div) {
        div.style.display = "none";
    });

    var selectedOption = select.options[select.selectedIndex].value;
    var selectedDiv = document.getElementById(selectedOption);
    selectedDiv.style.display = "block";
}

function calculateFibonacci() {
    var inputNumber = parseInt(document.getElementById("fibonacci-input").value);
    var resultElement = document.getElementById("fibonacci-result");

    var fibonacci = calculateFibonacciSeries(inputNumber);

    // Define colors based on Fibonacci values
    var color = getFibonacciColor(fibonacci);

    resultElement.innerHTML = `<span style="color: ${color}">${fibonacci}</span>`;
}

function calculateFibonacciSeries(n) {
    if (n <= 0) return 0;
    if (n === 1) return 1;

    var a = 0;
    var b = 1;
    var result = 0;

    for (var i = 2; i <= n; i++) {
        result = a + b;
        a = b;
        b = result;
    }

    return result;
}

function getFibonacciColor(fibonacci) {
    if (fibonacci < 0) {
        return "red";
    } else if (fibonacci > 0) {
        return "green";
    } else {
        return "black";
    }
}

function calculateVolume() {
    var length = parseFloat(document.querySelector('input[name="num1"]').value);
    var width = parseFloat(document.querySelector('input[name="num2"]').value);
    var height = parseFloat(document.querySelector('input[name="num3"]').value);
    var resultElement = document.getElementById("volume-result");

    var volume = length * width * height;

    resultElement.innerHTML = `Volume: ${volume}`;
}
