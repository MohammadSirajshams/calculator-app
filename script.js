function allClear() {
    var input = document.getElementById("input");
    input.value ="";
}
function getValue(num){
    var input=document.getElementById("input");
    input.value+=num;
}
function remove(){
    var input=document.getElementById("input");
    input.value=input.value.slice(0, -1);
}
function result(){
    var input=document.getElementById("input");
    input.value=eval(input.value);
}