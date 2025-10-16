function flushOperation(intBuffer) {
    if (previousOperator === '+') {
        runningTotal += intBuffer;
    }
    else if (previousOperator === '-') {
        runningTotal -= intBuffer;
    }
    else if (previousOperator === '×') {
        runningTotal *= intBuffer;
    }
    else if (previousOperator === '÷') {
        runningTotal /= intBuffer;
    }
}