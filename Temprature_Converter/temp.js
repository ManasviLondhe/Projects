
function converter() {

    let input1 = parseFloat(document.getElementById('convert-from').value);

    let output = document.getElementById('convert-to');

    let result;

    let unit1 = document.getElementById('select-from').value;
    let unit2 = document.getElementById('select-to').value;

    // C to all
    if (unit1 === 'celcius') {
        if (unit2 === 'fahrenheit') {
            result = (input1 * (9 / 5) + 32);
            output.value = result;
        }
        else if (unit2 === 'kelvin') {
            result = input1 + 273.15;
            output.value = result;
            
        }
        else {
            output.value = input1;
            
        }
    }

    // F to all
    if (unit1 === 'fahrenheit') {
        if (unit2 === 'celcius') {
            result = (input1 - 32) * (5 / 9);
            output.value = result;
            
        }
        else if (unit2 === 'kelvin') {
            result = (input1 - 32) * (5 / 9) + 273.15;
            output.value = result;
            
        }
        else {
            output.value = input1;
            
        }
        
    }

    // K to all
    if (unit1 === 'kelvin') {
        if (unit2 === 'celcius') {
            result = input1 - 273.15;
            output.value = result;
            
        }
        else if (unit2 === 'fahrenheit') {
            result = (input1 - 273.15) * (9/5) + 32
            output.value = result;
            
        }
        else {
            output.value = input1;
            
        }
        
    }

}


function showResult() {


    let screenVal = document.querySelector('.screen-result');

    let fromVal = document.getElementById('convert-from').value ;
    let toVal = document.getElementById('convert-to').value;
    
    let u1 = document.getElementById('select-from').value;
    let u2 = document.getElementById('select-to').value;
    
    if (fromVal === '') {
        alert('Please enter a value to convert.')
    }
    else {
        screenVal.innerText = `${fromVal} ${u1} = ${toVal} ${u2}`;
    }

}

function reset() {
    
    document.getElementById('convert-to').value = ``;
    document.getElementById('convert-from').value = ``;

    document.querySelector('.screen-result').innerText = ``;

}
