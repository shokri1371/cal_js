var number1;
var number2;
var his_index = 1;
var his_row_indx = 0;
var history4 =[];
var historresult=[];
var hiss=[];
var mem_index = 0;
var Cash = document.getElementById("cash");
var Cash2 = document.getElementById("cash2");


function btnNumber(num){
    var input_var=document.getElementById('input');
    switch(num){
        case 1: input_var.value +='1'; break;
        case 2: input_var.value +='2'; break;        
        case 3: input_var.value +='3'; break;        
        case 4: input_var.value +='4'; break;        
        case 5: input_var.value +='5'; break;        
        case 6: input_var.value +='6'; break;     
        case 7: input_var.value +='7'; break;     
        case 8: input_var.value +='8'; break;
        case 9: input_var.value +='9'; break; 
        case 0: input_var.value +='0';break; 
    }
    number = input_var.value
}

function operation(operand){
    var input_var=document.getElementById('input');

switch(operand){
case '+': input_var.value +='+'; break;
case '-': input_var.value +='-'; break;
case '÷': input_var.value +='/'; break;
case '×': input_var.value +='*'; break;
case '±': input_var.value += '-' + input_var.value; break;
}
document.getElementById('input_show').innerHTML = input_var.value;
}

function calc(){
    var input_vaar=document.getElementById('input');
ans = Math.floor(+eval(input_vaar.value));
his1=input_vaar.value;
document.getElementById('input').value = ans;
document.getElementById('input_show').innerHTML ='';
document.getElementById('input_show').style.color="gray";
history4 += his1 + '=' + ans + "<br>";
document.getElementById('his-message').innerHTML= history4+ "<br>";
input_vaar.value=ans;
anss = ans;
his_row_indx = 1;
}


function clearScreen(){
    document.getElementById('input').value="";
    document.getElementById('input_show').value="";
}
function xone(){
    var txt=document.getElementById('input');
    number1=parseInt(txt.value);
	txt.value = 1 / number1;		
}
function precent(){
    var txt=document.getElementById('input');
    number1=parseInt(txt.value);
    txt.value = number1 / 100;	
}
function xthree() {
    var input_value = document.getElementById('input').value;
    var x_power_three = Math.pow(input_value, 3);
    document.getElementById('input').value = x_power_three;
}
function xtwo() {
    var input_value = document.getElementById('input').value;
    var x_power_two = Math.pow(input_value, 2);
    document.getElementById('input').value = x_power_two;
}
function sqrtt() {
    var input_value = document.getElementById('input').value;
    var sqr = Math.sqrt(input_value);
    document.getElementById('input').value = sqr;
}
function backspace(){
    var input_value = document.getElementById('input').value;
    document.getElementById('input').value = input_value.substring(0, input_value.length - 1);
}

function c(){
    document.getElementById('input').value = '';
    document.getElementById('input_show').innerHTML= '';
    document.getElementById('his-message').innerHTML = '';

}

var inner_message;
function memory() {
    var memIcon = document.getElementById("memory-icon");
    var hisIcon = document.getElementById("history");
    memIcon.style.borderBottom = "3px solid blue";
    hisIcon.style.borderBottom = "none";
    if(document.getElementById('memicon-clear').style.color != 'black'){
     document.getElementById('his-message').innerHTML="There's nothing saved in memory";}
     if(document.getElementById('memicon-clear').style.color == 'black'){
    document.getElementById('his-message').innerHTML = inner_message;
     }
    his_index = 0;
    mem_index = 1;
    if(his_row_indx == 0){
        document.getElementById('his-message').innerHTML="There's nothing saved in memory";
    }
    return his_index,mem_index;
}
var H1 = document.getElementsByClassName("history1");

function His() {
    var memIcon = document.getElementById("memory-icon");
    var hisIcon = document.getElementById("history");
    hisIcon.style.borderBottom = "3px solid blue";
    memIcon.style.borderBottom = "none";    
    his_index = 1;
    mem_index = 0;
    if(his_row_indx == 1){
        document.getElementById('his-message').innerHTML= history4 + "<br>" + "<br>";
    }if(his_row_indx == 11){
        document.getElementById('his-message').innerHTML="There's no history yet";
     }
    return his_index,mem_index;
}

function mems() {
    var input_var = document.getElementById('input').value;
    var mem_text = document.getElementById('his-message');
    var old_saved = inner_message;
    var Cash = document.getElementById("cash");

    if (document.getElementById('memicon-clear').style.color != 'black') {
        inner_message = input_var;
    }else if(document.getElementById('memicon-clear').style.color == 'black') {
         
        var old_value = old_saved;
        var new_value = input_var + ',' + '<br>' + old_value;
        inner_message = new_value;
        inn=inner_message;
    }
    var memc_color = document.getElementById('memicon-clear');
    memc_color.style.color = 'black';
    var memr_color = document.getElementById('memicon-replace');
    memr_color.style.color = 'black';
    if(mem_index == 1){
        mem_text.innerHTML = inner_message; 
    }

    return inner_message;
}

function memp() {
    var input_var = document.getElementById('input').value;
    var mem_text = document.getElementById('his-message');
    if (document.getElementById('memicon-clear').style.color != 'black') {
        inner_message = input_var;
    }
    else if (document.getElementById('memicon-clear').style.color == 'black') {
        var old_value = mem_text.innerHTML;
        var first_number = old_value.split(",");
        var new_value = [];
        new_value = first_number;
        new_value[0] = Number(first_number[0]) + Number(input_var);
        inner_message = new_value;
    }

    var memc_color = document.getElementById('memicon-clear');
    memc_color.style.color = 'black';
    var memr_color = document.getElementById('memicon-replace');
    memr_color.style.color = 'black';
    if(mem_index == 1){
        mem_text.innerHTML = inner_message; 
    }
    return inner_message;

}
function memn() {
    var input_value = document.getElementById('input').value;
    var mem_text = document.getElementById('his-message');
    if (document.getElementById('memicon-clear').style.color !=  'black') {
        var new_negative_value = -1 * Number(input_value);
        inner_message = new_negative_value;
    }
    else if (document.getElementById('memicon-clear').style.color == 'black') {
        var old_value = mem_text.innerHTML;
        var first_number = old_value.split(",");
        var new_value = [];
        new_value = first_number;
        new_value[0] = Number(first_number[0]) - Number(input_value);

        inner_message = new_value;
    }
    var memc_color = document.getElementById('memicon-clear');
memc_color.style.color = 'black';
var memr_color = document.getElementById('memicon-replace');
memr_color.style.color = 'black';
if(mem_index == 1){
    mem_text.innerHTML = inner_message;


}
return inner_message;
}

function memc() {
    if (document.getElementById('memicon-clear').style.color == 'black') {
    if(mem_index == 1){
        document.getElementById('his-message').innerHTML = "There's nothing saved in memory";

}

else if(his_index == 1){
    document.getElementById('his-message').innerHTML = "There's no history yet";
}
var memc_color = document.getElementById('memicon-clear');
memc_color.style.color = 'darkgrey';
var memr_color = document.getElementById('memicon-replace');
memr_color.style.color = 'darkgrey';
}
}
function memr() {
    
    if (document.getElementById('memicon-replace').style.color == 'black') {
        if(document.getElementById('his-message').innerHTML == inner_message){
        var first_number = document.getElementById('his-message').innerHTML.split(",");
        var new_value = first_number[0];
        document.getElementById('input').value = new_value;}
        else if(document.getElementById('his-message').innerHTML != inner_message){
            document.getElementById('his-message').innerHTML = inner_message;
            var first_number = document.getElementById('his-message').innerHTML.split(",");
        var new_value = first_number[0];
        document.getElementById('input').value = new_value;
        document.getElementById('his-message').innerHTML = "There's no history yet";
        }
    }
}

function dotNumber(e){
    var txt=document.getElementById('input');
    txt.value +=e.innerHTML;
}


 function mc1(){
    inn='';
    //document.getElementById('his-message').innerHTML = "There's nothing saved in memory";
    his_row_indx = 0;
}

function Hc1(){
    document.getElementById('his-message').innerHTML='';
    document.getElementById('his-message').value='';
    document.getElementById('his-message').innerHTML = "There's no history yet";
    his_row_indx = 0;
}
