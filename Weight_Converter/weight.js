
function converter() {

    let input1 =  parseFloat(document.getElementById("convert-from").value);
    let output = document.getElementById("convert-to");

    let result;

    let unit1 = document.getElementById('select-from').value;
    let unit2 = document.getElementById('select-to').value;

    if (unit1 === 'milligram')
    {
        if (unit2 === 'gram') {
            result = input1 / 1000;
            output.value = result;
        }
        else if (unit2 === 'kilogram') {
            result = input1 / 1000000;
            output.value = result;
        }
        else if (unit2 === 'quintals') {
            result = input1/100000000;            
            output.value = result;
            
        } else if (unit2 === 'tonne') {
            result = input1/1000000000;            
            output.value = result;
            
        } else {
            output.value = input1;
        }
    }

    if (unit1 === 'gram')
    {
        if (unit2 === 'milligram') {
            result = input1 * 1000;
            output.value = result;
        }
        else if (unit2 === 'kilogram') {
            result = input1 / 1000;
            output.value = result;
            
        }
        else if (unit2 === 'quintals') {
            result = input1 / 100000;
            output.value = result;
            
        } else if (unit2 === 'tonne') {
            result = input1 / 1000000;
            output.value = result;
            
        } else {
            output.value = input1;
        }
    }

    if (unit1 === 'kilogram')
    {
        if (unit2 === 'milligram') {
            result = input1 * 1000000;
            output.value = result;
        }
        else if (unit2 === 'gram') {
            result = input1 * 1000;
            output.value = result;
        }
        else if (unit2 === 'quintals') {
            result = input1 / 100;
            output.value = result; 
        }
        else if (unit2 === 'tonne') {
            result = input1 / 1000;
            output.value = result;  
        }
        else {
            output.value = input1;
        }
    }

    if (unit1 === 'quintals')
    {
        if (unit2 === 'milligram') {
            result = input1 * 100000000;         
            output.value = result;  
        }
        else if (unit2 === 'gram') {
            result = input1 * 100000;            
            output.value = result;  
            
        }
        else if (unit2 === 'kilogram') {
            result = input1 * 100;            
            output.value = result;  
            
        }
        else if (unit2 === 'tonne') {
            result = input1 / 10;            
            output.value = result;  
            
        }
        else {
            output.value = input1;              
        }
    }

    if (unit1 === 'tonne') {
        if (unit2 === 'milligram') {
            result = input1 * 1000000000;          
            output.value = result;  
            
        }
        else if (unit2 === 'gram') {
            result = input1 * 1000000;          
            output.value = result;  
            
        }
        else if (unit2 === 'kilogram') {
            result = input1 * 1000;          
            output.value = result;  
            
        }
        else if (unit2 === 'quintals') {
            result = input1 * 10;          
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