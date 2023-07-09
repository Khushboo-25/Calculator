let result=document.getElementById('result')

let flag =1;
function display(val){
    if(flag==0)
    {
        result.value='';
        
        // result.value="";
    }
    result.value+=val;
    flag=1;

}
function solve() {

    let x = result.value

    let y = eval(x);
    
    flag=0;
    result.value = y

}


function clearinp(){

    result.value = ''

}
function deleteLast(){

    result.value=result.value.slice(0,-1)
    
}
