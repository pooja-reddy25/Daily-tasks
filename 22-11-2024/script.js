// Fibonacci Series
function fibonacci(n){
    let sequence = [];
    if(n<=0) return sequence;
    let a=0;b=1;
    while(a<=n){
        sequence.push(a);
        let next=a+b;
        a=b;
        b=next;
    }
    return sequence;
}
console.log(fibonacci(10));