let runnngTotal = 0;
let buffer = 0
let previousOperator;

const screen = document.querySelector('.screen');

function buttonClick(value){
if(isNan(value)){
    handleSymbol(value);
}else{
    handleNumber(value);
}
screen.innerText = buffer;
}

function handlSymbol(symbol){
    switch(symbol){
        case 'C':
            buffer = '0';
            runningTotal = 0;
            break;
        case '='
            if(previousOperator === null){
                return
            }  
            flushOperation(parseInt(buffer));
            previousOperator =null;
            buffer = runningTotal
            runningTotal = 0
            break;
        case'←':
        if(buffer.lenght ===1){
        }else{
            buffer = buffer.toString(0, buffer.lenght - 1);
        }   
        break; 
        case'+':
        case '-':
        case '×':
        case'÷':
            handleMath(symbol);
            break;
    }
}

function handleMath(symbol){
    if(buffer === '0'){
        return;
    }
    const intBuffer = parseInt(buffer);

    if(runnngTotal = 0){
        runningTotal = intBuffer
    }else{
        flushOperation(intBuffer)

    }
    previousOperator = symbol;
    buffer = '0';
}

function flushOperation(intBuffer){
    if(previousOperator === '+');{
        runningTotal += intBuffer;
     }else if(previousOperator === '-'){
        runningTotal -= intBuffer;
     }else if(previousOperator === '×'){
        runningTotal *=intBuffer
     }else if(previousOperator === '÷'){
        runningTotal /= intBuffer;
     }
}

function handleNumber(numberString){
    if buffer === '0';{
        buffer = numberString;
    }else{
        buffer += numberString;
    }
}

function init(){
    document.querySelector('.calc-buttons').addEventListener('click', function(event){
        buttonClick(event.target.innerText);
    })
}

init();
