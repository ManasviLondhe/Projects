
function converter() {

    
    let input1 = parseFloat(document.getElementById('convert-from').value);

    let output = document.getElementById('convert-to');

    let result;

    let unit1 = document.getElementById('select-from').value;
    let unit2 = document.getElementById('select-to').value;

    if (unit1 === 'mm-per-sec') {
        
        if (unit2 === 'cm-per-sec') {
            result = input1 / 10;
            output.value = result;
        }
        else if (unit2 === 'meter-per-sec') {
            result = input1 / 1000;
            output.value = result;
            
        }
        else if (unit2 === 'km-per-sec') {
            result = input1 / 1000000;
            output.value = result;
            
        }
        else if (unit2 === 'km-per-hour') {
            result = input1 * 0.0036;
            output.value = result;
            
        }
        else if (unit2 === 'mile-per-hour') {
            result = input1 * 0.00223694;
            output.value = result;
        }
        else if (unit2 === 'knot') {
            result = input1 * 0.00194384;
            output.value = result;
        }
        else {
            output.value = input1;
        }
    }

    if (unit1 === 'cm-per-sec') {
        
        if (unit2 === 'mm-per-sec') {
            result = input1 * 10;
            output.value = result;
            
        }
        else if (unit2 === 'meter-per-sec') {
            result = input1 / 100;
            output.value = result;
            
        }
        else if (unit2 === 'km-per-sec') {
            result = input1 / 100000;
            output.value = result;
        }
        else if (unit2 === 'km-per-hour') {
            result = input1 * 0.036;
            output.value = result;
            
        }
        else if (unit2 === 'mile-per-hour') {
            result = input1 * 0.0223694;
            output.value = result;
            
        }
        else if (unit2 === 'knot') {
            result = input1 * 0.0194384;
            output.value = result;
            
        }
        else {
            output.value = input1;
            
        }
        
    }

    if (unit1 === 'meter-per-sec') {
        
        if (unit2 === 'mm-per-sec') {
            result = input1 * 1000;
            output.value = result;
            
        }
        else if (unit2 === 'cm-per-sec') {
            result = input1 * 100;
            output.value = result;
            
        }
        else if (unit2 === 'km-per-sec') {
            result = input1 / 1000;
            output.value = result;
            
        }
        else if (unit2 === 'km-per-hour') {
            result = input1 * 3.6;
            output.value = result;
            
        }
        else if (unit2 === 'mile-per-hour') {
            result = input1 * 2.23694;
            output.value = result;
            
        }
        else if (unit2 === 'knot') {
            result = input1 * 1.94384;
            output.value = result;
            
        }
        else {
            output.value = input1;
        }
        
    }
    
    if (unit1 === 'km-per-sec') {
        
        if (unit2 === 'mm-per-sec') {
            result = input1 * 1000000;
            output.value = result;
            
        }
        else if (unit2 === 'cm-per-sec') {
            result = input1 * 100000;
            output.value = result;
            
        }
        else if (unit2 === 'meter-per-sec') {
            result = input1 * 1000;
            output.value = result;
            
        }
        else if (unit2 === 'km-per-hour') {
            result = input1 * 3600;
            output.value = result;
            
        }
        else if (unit2 === 'mile-per-hour') {
            result = input1 * 2236.94;
            output.value = result;
            
        }

        else {
            output.value = input1;
            
        }
    }  

    
    if (unit1 === 'km-per-hour') {
                
        if (unit2 === 'mm-per-sec') {
            result = input1 * 277.778;
            output.value = result;
            
        }
        else if (unit2 === 'cm-per-sec') {
            result = input1 * 27.7778;
            output.value = result;
            
        }
        else if (unit2 === 'meter-per-sec') {
            result = input1 * (5 / 18);
            output.value = result;
            
        }
        else if (unit2 === 'km-per-sec') {
            result = input1 / 3600;
            output.value = result;
            
        }
        else if (unit2 === 'mile-per-hour') {
            result = input1 * 0.621371;
            output.value = result;
            
        }
        else if (unit2 === 'knot') {
            result = input1 * 0.539957;
            output.value = result;
            
        }
        else {
            output.value = input1;
            
        }
        
    }
    
    if (unit1 === 'mile-per-hour') {
        
                
        if (unit2 === 'mm-per-sec') {
            result = input1 * 447.04;
            output.value = result;
            
        }
        else if (unit2 === 'cm-per-sec') {
            result = input1 * 44.704;
            output.value = result;
            
        }
        else if (unit2 === 'meter-per-sec') {
            result = input1 * 0.44704;
            output.value = result;
            
        }
        else if (unit2 === 'km-per-sec') {
            result = (input1 * 1.60934) / 3600;
            output.value = result;
            
        }
        else if (unit2 === 'km-per-hour') {
            result = input1 * 1.60934;
            output.value = result;
            
        }
        else if (unit2 === 'knot') {
            result = input1 * 0.868976;
            output.value = result;
            
        }
        else {
            output.value = input1;
            
        }
        
    }
    
    if (unit1 === 'knot') {
                
        if (unit2 === 'mm-per-sec') {
            result = input1 * 514.444;
            output.value = result;
            
        }
        else if (unit2 === 'cm-per-sec') {
            result = input1 * 51.4444;
            output.value = result;
            
        }
        else if (unit2 === 'meter-per-sec') {
            result = input1 * 0.514444;
            output.value = result;
            
        }
        else if (unit2 === 'km-per-sec') {
            result = (input1 * 1.852) / 3600;
            output.value = result;
            
        }
        else if (unit2 === 'km-per-hour') {
            result = input1 * 1.852;
            output.value = result;
            
        }
        else if (unit2 === 'mile-per-hour') {
            result = input1 * 1.15078;
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