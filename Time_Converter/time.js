
function converter() {

    let input1 = parseFloat(document.getElementById('convert-from').value);
    let output = document.getElementById('convert-to');

    let result;

    let unit1 = document.getElementById('select-from').value;
    let unit2 = document.getElementById('select-to').value;

    // ms to all
    if (unit1 === 'Millisecond') {
        if (unit2 === 'Second') {
            result = input1 / 1000;
            output.value = result;
        }
        else if (unit2 === 'Minute') {
            result = input1 / (1000 * 60);
            output.value = result;            
        }
        else if (unit2 === 'Hour') {
            result = input1 / (1000 * 60 * 60);
            output.value = result;
        }
        else if (unit2 === 'Day') {
            result = input1 / (1000 * 60 * 60 * 24);
            output.value = result;            
        }
        else if (unit2 === 'Week') {
            result = input1 / (1000 * 60 * 60 * 24 * 7);
            output.value = result;                  
        }
        else if (unit2 === 'Month') {
            result = input1 / (1000 * 60 * 60 * 24 * 30.44);
            output.value = result;             
        }
        else if (unit2 === 'Year') {
            result = input1 / (1000 * 60 * 60 * 24 * 365.25);
            output.value = result;            
        }
        else {
            output.value = input1;
            
        }
    }



    // s to all
    if (unit1 === 'Second') {
        if (unit2 === 'Millisecond') {
            result = input1 * 1000;
            output.value = result;             
        }
        else if (unit2 === 'Minute') {
            result = input1 / 60;
            output.value = result;               
        }
        else if (unit2 === 'Hour') {
            result = input1 / 3600;
            output.value = result;               
        }
        else if (unit2 === 'Day') {
            result = input1 / 86400;
            output.value = result;             
        }
        else if (unit2 === 'Week') {
            result = input1 / 604800;
            output.value = result;             
        }
        else if (unit2 === 'Month') {
            result = input1 / 2629440;
            output.value = result;            
        }
        else if (unit2 === 'Year') {
            result = input1 / 31557600;
            output.value = result;            
        }
        else {
            output.value = input1;
            
        }
    }

    // min to all
    if (unit1 === 'Minute') {
        if (unit2 === 'Millisecond') {
            result = input1 * 60 * 1000;
            output.value = result;             
        }
        else if (unit2 === 'Second') {
            result = input1 * 60 ;
            output.value = result;              
        }
        else if (unit2 === 'Hour') {
            result = input1 / 60 ;
            output.value = result;              
        }
        else if (unit2 === 'Day') {
            result = input1 / 1440 ;
            output.value = result;             
        }
        else if (unit2 === 'Week') {
            result = input1 / 10080 ;
            output.value = result;             
        }
        else if (unit2 === 'Month') {
            result = input1 / 43920 ;
            output.value = result;             
        }
        else if (unit2 === 'Year') {
            result = input1 / 525960 ;
            output.value = result;             
        }
        else {
            output.value = input1;
            
        }
    }

    // h to all
    if (unit1 === 'Hour') {
        if (unit2 === 'Millisecond') {
            result = input1 * 60 * 60 * 1000 ;
            output.value = result;            
        }
        else if (unit2 === 'Second') {
            result = input1 * 3600 ;
            output.value = result;
            
        }
        else if (unit2 === 'Minute') {
            result = input1 * 60 ;
            output.value = result;
            
        }
        else if (unit2 === 'Day') {
            result = input1 / 24 ;
            output.value = result;
            
        }
        else if (unit2 === 'Week') {
            result = input1 / 168 ;
            output.value = result;
            
        }
        else if (unit2 === 'Month') {
            result = input1 / 730.08 ;
            output.value = result;
            
        }
        else if (unit2 === 'Year') {
            result = input1 / 8766 ;
            output.value = result;
            
        }
        else {
            output.value = input1;
            
        }
    }

    // d to all
    if (unit1 === 'Day') {
        if (unit2 === 'Millisecond') {
            result = input1 * 86400000 ;
            output.value = result;
            
        }
        else if (unit2 === 'Second') {
            result = input1 * 86400 ;
            output.value = result;
            
        }
        else if (unit2 === 'Minute') {
            result = input1 * 1440 ;
            output.value = result;
            
        }
        else if (unit2 === 'Hour') {
            result = input1 * 24 ;
            output.value = result;
            
        }
        else if (unit2 === 'Week') {
            result = input1 / 7;
            output.value = result;
            
        }
        else if (unit2 === 'Month') {
            result = input1 / 30.44;
            output.value = result;
            
        }
        else if (unit2 === 'Year') {
            result = input1 / 365.25 ;
            output.value = result;            
        }
        else {
            output.value = input1;
            
        }
    }

    // wk to all
    if (unit1 === 'Week') {
        if (unit2 === 'Millisecond') {
            result = input1 * 604800000 ;
            output.value = result;  
            
        }
        else if (unit2 === 'Second') {
            result = input1 * 604800 ;
            output.value = result;  
            
        }
        else if (unit2 === 'Minute') {
            result = input1 * 10080;
            output.value = result;  
            
        }
        else if (unit2 === 'Hour') {
            result = input1 * 168 ;
            output.value = result;  
            
        }
        else if (unit2 === 'Day') {
            result = input1 * 7 ;
            output.value = result;  
            
        }
        else if (unit2 === 'Month') {
            result = input1 / 4.348 ;
            output.value = result;  
            
        }
        else if (unit2 === 'Year') {
            result = input1 / 52.18 ;
            output.value = result;  
            
        }
        else {
            output.value = input1;
            
        }
    }

    // mo to all
    if (unit1 === 'Month') {
        if (unit2 === 'Millisecond') {
            result = input1 * 2628288000;
            output.value = result;            
        }
        else if (unit2 === 'Second') {
            result = input1 * 2628288;
            output.value = result;             
        }
        else if (unit2 === 'Minute') {
            result = input1 * 43804.8;
            output.value = result;                  
        }
        else if (unit2 === 'Hour') {
            result = input1 * 730.08;
            output.value = result;             
        }
        else if (unit2 === 'Day') {
            result = input1 * 30.44;
            output.value = result;             
        }
        else if (unit2 === 'Week') {
            result = input1 * 4.348;
            output.value = result;             
        }
        else if (unit2 === 'Year') {
            result = input1 / 12;
            output.value = result;             
        }
        else {
            output.value = input1;
            
        }
    }

    // yr to all
    if (unit1 === 'Year') {
        if (unit2 === 'Millisecond') {
            result = input1 * 31557600000 ;
            output.value = result; 
            
        }
        else if (unit2 === 'Second') {
            result = input1 * 31557600 ;
            output.value = result; 
            
        }
        else if (unit2 === 'Minute') {
            result = input1 * 525960;
            output.value = result;             
        }
        else if (unit2 === 'Hour') {
            result = input1 * 8766 ;
            output.value = result;             
        }
        else if (unit2 === 'Day') {
            result = input1 * 365.25;
            output.value = result;             
        }
        else if (unit2 === 'Week') {
            result = input1 * 52.18;
            output.value = result;             
        }
        else if (unit2 === 'Month') {
            result = input1 * 12;
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