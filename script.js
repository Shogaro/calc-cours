function HandleSymbol(symbol) {
    switch (symbol) {
        case 'C':
            buffer = '0';
            runningTotal = 0;
            break;
        case '+':
        case '-':
        case '÷':
        case '×':
            HandleMath(symbol);
            break;
        case '=':
            if (previousOperator === null) {
                return
            }
            flushOperation(parseInt(buffer));
            previousOperator = null;
            buffer = runningTotal;
            runningTotal = 0;
            break;
        case '%':
            buffer = (parseFloat(buffer) / 100).toString();
            break;
        case '+/-':
            if (parseInt(buffer) >= 0) {
                buffer = (-parseInt(buffer)).toString();
            } else {
                buffer = (-parseInt(buffer)).toString();
            }
            break;
        case ',':
            if (!buffer.includes('.')) {
                buffer += '.';
            }
    }
}

function HandleNumber(numberString) {
    if (buffer === "0") {
        buffer = numberString;
    } else {
        buffer += numberString;
    }
}

function Init() {
    document.querySelector('.calc-button').addEventListener('click', function (event) {
        ButtonClick(event.target.innerText);
    })
}

Init();