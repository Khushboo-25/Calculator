let result=document.getElementById('result')

function display(val){

    result.value+=val

}


function solve() {

    let x = result.value

    let y = eval(x);

    result.value = y

}


function clearinp(){

    result.value = ''

}
function deleteLast(){

    result.value=result.value.slice(0,-1)
    
}