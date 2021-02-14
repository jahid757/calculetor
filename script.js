const calculator = document.getElementById('calculator');
calculator.addEventListener('click', function (event) {
    const calcClick = event.target.innerText;
    

    if (calcClick == 'AC') {
        const output = document.getElementById('output');
        output.value = ''
    }
    else if(calcClick == '='){
        // console.log("object");
    }
    else {
        const output = document.getElementById('output');
        output.value = output.value + calcClick
    }

})

const equal = document.getElementById('result');
equal.addEventListener('click', function () {
    const output = document.getElementById('output');
    const result = eval(output.value);
    document.getElementById('output').value = result;
})