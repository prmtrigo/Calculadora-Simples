//inserting a number
function insert(num){
    var number = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML = number + num;
}

//cleaning
function clean(){
    document.getElementById('display').innerHTML = "";
}

//erase an element
function back(){
    let result = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML = result.substring(0, result.length -1);
}

//calculate
function calculate(){
    let result = document.getElementById('display').innerHTML;
    if(result){
        document.getElementById('display').innerHTML = eval(result);
    }
    else{
        document.getElementById('display').innerHTML = "ERROR" 
    }
}