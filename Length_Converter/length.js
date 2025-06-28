
function converter() {

    let input1 = parseFloat(document.getElementById('convert-from').value);
    let output = document.getElementById('convert-to');

    let result;

    let unit1 = document.getElementById('select-from').value;
    let unit2 = document.getElementById('select-to').value;

    // mm to other
    if (unit1 === 'mm') {

        if (unit2 === 'cm') {
            result = input1 / 10;
            output.value = result;
            
        }
        else if (unit2 === 'm') {
            result = input1 / 1000;
            output.value = result;
            
            
        }
        else if (unit2 === 'km') {
            result = input1 / 1000000;
            output.value = result;
            
        }
        else if (unit2 === 'in') {
            result = input1 / 25.4;
            output.value = result;
            
        }    
        else if (unit2 === 'ft') {
            result = input1 / 304.8;
            output.value = result;
            
        }
        else if (unit2 === 'yd') {
            result = input1 / 914.4;
            output.value = result;
            
        }
        else if (unit2 === 'mi') {
            result = input1 / 1609344;
            output.value = result;
            
        }
        else {
            output.value = input1;
            
        }
    }
    
    // cm to other
    if (unit1 === 'cm') {

        if (unit2 === 'mm') {
            result = input1 * 10;
            output.value = result;
            
        }
        else if (unit2 === 'm') {
            result = input1 / 100;
            output.value = result;
            
        }
        else if (unit2 === 'km') {
            result = input1 / 100000;
            output.value = result;
            
        }
        else if (unit2 === 'in') {
            result = input1 / 2.54;
            output.value = result;
            
        }    
        else if (unit2 === 'ft') {
            result = input1 / 30.48;
            output.value = result;
            
        }
        else if (unit2 === 'yd') {
            result = input1 / 91.44;
            output.value = result;
            
        }
        else if (unit2 === 'mi') {
            result = input1 / 160934.4;
            output.value = result            
        }
        else {
            output.value = input1;
            
        }
        
    }

    // m to other
    if (unit1 === 'm') {

        if (unit2 === 'mm') {
            result = input1 * 1000;
            output.value = result;
            
        }
        else if (unit2 === 'cm') {
            result = input1 * 100;
            output.value = result;
            
        }
        else if (unit2 === 'km') {
            result = input1 / 1000;
            output.value = result;
            
        }
        else if (unit2 === 'in') {
            result = input1 * 39.3701;
            output.value = result;
            
        }    
        else if (unit2 === 'ft') {
            result = input1 * 3.28084;
            output.value = result;
            
        }
        else if (unit2 === 'yd') {
            result = input1 * 1.09361;
            output.value = result;
            
        }
        else if (unit2 === 'mi') {
            result = input1 / 1609.344;
            output.value = result;
            
        }
        else {
            output.value = input1;
            
        }
        
    }

    // km to other
    if (unit1 === 'km') {
        if (unit2 === 'mm') {
            result = input1 * 1000000;
            output.value = result;
            
        }
        else if (unit2 === 'cm') {
            result = input1 * 100000;
            output.value = result;
            
        }
        else if (unit2 === 'm') {
            result = input1 * 1000;
            output.value = result;
            
        }
        else if (unit2 === 'in') {
            result = input1 * 39370.1
            output.value = result;
            
        }    
        else if (unit2 === 'ft') {
            result = input1 * 3280.84;
            output.value = result;
            
        }
        else if (unit2 === 'yd') {
            result = input1 * 1093.61;
            output.value = result;
            
        }
        else if (unit2 === 'mi') {
            result = input1 * 0.621371;
            output.value = result;
            
        }
        else {
            output.value = input1;
            
        }
        
    }

    // in to other
    if (unit1 === 'in') {

        if (unit2 === 'mm') {
            result = input1 * 25.4;
            output.value = result;
        }
        else if (unit2 === 'cm') {
            result = input1 * 2.54;
            output.value = result;
            
        }
        else if (unit2 === 'm') {
            result = input1 / 39.3701;
            output.value = result;
            
        }
        else if (unit2 === 'km') {
            result = input1 / 39370.1;
            output.value = result;
            
        }    
        else if (unit2 === 'ft') {
            result = input1 / 12 ;
            output.value = result;
            
        }
        else if (unit2 === 'yd') {
            result = input1 / 36 ;
            output.value = result;
            
        }
        else if (unit2 === 'mi') {
            result = input1 / 63360 ;
            output.value = result;
            
        }
        else {
            output.value = input1;
            
        }
        
    }

    // ft to other
    if (unit1 === 'ft') {
        if (unit2 === 'mm') {
            result = input1 * 304.8  ;
            output.value = result;
            
        }
        else if (unit2 === 'cm') {
            result = input1 * 30.48;
            output.value = result;
            
        }
        else if (unit2 === 'm') {
            result = input1 * 0.3048;
            output.value = result;
            
        }
        else if (unit2 === 'km') {
            result = input1 * 0.0003048;
            output.value = result;
            
        }    
        else if (unit2 === 'in') {
            result = input1 * 12;
            output.value = result;
            
        }
        else if (unit2 === 'yd') {
            result = input1 / 3;
            output.value = result;
            
        }
        else if (unit2 === 'mi') {
            result = input1 / 5280;
            output.value = result;
            
        }
        else {
            output.value = input1;
            
        }
        
    }

    // yd to other
    if (unit1 === 'yd') {
        
        if (unit2 === 'mm') {
            result = input1 * 914.4;
            output.value = result;
            
        }
        else if (unit2 === 'cm') {
            result = input1 * 91.44;
            output.value = result;
            
        }
        else if (unit2 === 'm') {
            result = input1 * 0.9144;
            output.value = result;
            
        }
        else if (unit2 === 'km') {
            result = input1 * 0.0009144;
            output.value = result;
            
        }
        else if (unit2 === 'in') {
            result = input1 * 36;
            output.value = result;
            
        }    
        else if (unit2 === 'ft') {
            result = input1 * 3;
            output.value = result;
            
        }
        else if (unit2 === 'mi') {
            result = input1 / 1760;
            output.value = result;
            
        }
        else {
            output.value = input1;
            
        }
        
    }

    // mi to other
    if (unit1 === 'mi') {
        
        if (unit2 === 'mm') {
            result = input1 * 1609344;
            output.value = result;
            
        }
        else if (unit2 === 'cm') {
            result = input1 * 160934;
            output.value = result;
            
        }
        else if (unit2 === 'm') {
            result = input1 * 1609.34;
            output.value = result;
            
        }
        else if (unit2 === 'km') {
            result = input1 * 1.60934;
            output.value = result;
            
        }
        else if (unit2 === 'in') {
            result = input1 * 63360;
            output.value = result;
            
        }    
        else if (unit2 === 'ft') {
            result = input1 * 5280;
            output.value = result;
            
        }
        else if (unit2 === 'yd') {
            result = input1 * 1760;
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