function doCalc(){
    const operator = prompt('Enter operator');
    const number1 = parseFloat(prompt('Enter your first number'));
    const number2 = parseFloat(prompt('Enter your second  number'));
    let result; 
     if (operator == '+'){
       result = number1 + number2
     } else if (operator == '-'){
       result = number1 - number2
     } else if (operator == '*'){
       result = number1 * number2
     } else {
       result = number1 / number2
     }
    return "the result is " + result
  }
  doCalc()