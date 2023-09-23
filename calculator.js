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
// function solve(x)
// {

// }
function calculate(s) {
    let ans = 0;
    let sn = 1;
    let n = s.length;
    let st = [];

    for (let i = 0; i < n; i++) {
        if (s[i] >= '0' && s[i] <= '9') {
            let num = 0;
            while (i < n && s[i] >= '0' && s[i] <= '9') {
                num = num * 10 + parseInt(s[i]);
                i++;
            }
            i--;
            ans += num * sn;
            sn = 1;
        } else if (s[i] === '(') {
            st.push(ans);
            st.push(sn);
            ans = 0;
            sn = 1;
        } else if (s[i] === ')') {
            ans *= st.pop();
            ans += st.pop();
        } else if (s[i] === '-') {
            sn *= -1;
        }
    }
    return ans;
}


function solve() {

    let x = result.value

    let y = eval(x);
    // let y=calculate(x);
    flag=0;
    result.value = y

}


function clearinp(){

    result.value = ''
    


}
function deleteLast(){

    result.value=result.value.slice(0,-1)
    
}
