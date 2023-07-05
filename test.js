// console.log("Hello");
var variable = document.getElementsByClassName("result");
var array = document.getElementsByClassName("num");

var operand1 = "";
var operand2 = null;
var operator = null;

for(let i = 0 ; i<array.length ; i++){
    array[i].addEventListener("click" , function(){
        variable[0].innerHTML += array[i].innerHTML;
    });
};

var clear = document.getElementById("btn-clear");
clear.addEventListener("click" , function(){
    let ans = "";
    operand1 = "";
    operand2 = "";
    variable[0].innerHTML = ans;
});

var sum = document.getElementById("btn-sum");
sum.addEventListener("click" , function(){
    operand1 = parseFloat(variable[0].textContent);
    variable[0].innerHTML = "";
    if(operand1 != ""){
        operator = '+';
    }
});

var multiply = document.getElementById("btn-multiply");
multiply.addEventListener("click" , function(){
    operand1 = parseFloat(variable[0].textContent);
    variable[0].innerHTML = "";
    if(operand1 != ""){
        operator = '*';
    }
});

var equals = document.getElementById("btn-equals");
equals.addEventListener("click" , function(){
    operand2 = parseFloat(variable[0].textContent);
    
    if(operator == '/' && operand2 == '0'){
        variable[0].innerHTML = "ERROR";
    }
    else{
        let ans = eval(operand1 + operator + operand2);
        variable[0].innerHTML = ans;    
    }
});  

var divide = document.getElementById("btn-divide");
divide.addEventListener("click" , function(){
    operand1 = parseFloat(variable[0].textContent);
    variable[0].innerHTML = "";
    if(operand1 != ""){
        operator = '/';
    }
});

var substract = document.getElementById("btn-substract");
substract.addEventListener("click" , function(){
    operand1 = parseFloat(variable[0].textContent);
    variable[0].innerHTML = "";
    if(operand1 != ""){
        operator = '-';
    }
});
  

var signChange = document.getElementById("btn-signChange");
signChange.addEventListener("click" , function(){
    var ans = variable[0].innerHTML;
    ans = "-" + ans;
    variable[0].innerHTML = ans;
});

var decimal = document.getElementById("btn-decimal");
decimal.addEventListener("click" , function(){
    variable[0].innerHTML += '.';
});

var percentage = document.getElementById("btn-percentage");
percentage.addEventListener("click" , function(){
    operand1 = parseFloat(variable[0].textContent);
    variable[0].innerHTML = "";
    if(operand1 != ""){
        operator = '%';
    }
});











