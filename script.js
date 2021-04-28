function clr(){
    document.getElementById("disp").value="";
}
function add(val){
    var x = document.getElementById("disp").value;
    document.getElementById("disp").value=x+val;
}
function rslt()
{
    var x= document.getElementById("disp").value;
    try{
        document.getElementById("disp").value=eval(x);
    }
    catch(err){
        document.getElementById("disp").value="Invalid Syntax";
    }
}