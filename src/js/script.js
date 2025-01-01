let display = document.getElementById("display");


function appendValues(value){
    if (display.value == 0){
        display.value = value;
    } else{
        display.value+=value;
    }
}

function clearAll(){
    display.value = 0;
}


function calculation(){
    let expression = display.value; 

       
        const numbers = expression.split(/[\+\-\*\/]/).map(Number);
        const operators = expression.split(/[\d\.]+/).filter(op => op);

       
        for (let i = 0; i < operators.length; i++) {
            if (operators[i] === "*" || operators[i] === "/") {
                const result =
                    operators[i] === "*"
                        ? numbers[i] * numbers[i + 1]
                        : numbers[i] / numbers[i + 1];

               
                numbers.splice(i, 2, result);
               
                operators.splice(i, 1);
               
                i--;
            }
        }

        
        let result = numbers[0]; 
        for (let i = 0; i < operators.length; i++) {
            if (operators[i] === "+") {
                result += numbers[i + 1];
            } else if (operators[i] === "-") {
                result -= numbers[i + 1];
            }
        }

       
        display.value = result;
    }

    
