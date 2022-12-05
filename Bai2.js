// 1.1:Tính tổng nguyên: S = 1 + 1/2 + 1/3 + 1/4 +… 1/n 

function Sum( n ){

    if( n == 0 ){
        throw new Error(" Don't take the value of 0 ");
    }

    if(isNaN( n )){
        throw new Error(" n is NaN ");
    }

    if( n < 0){
        throw new Error("N not Interger")
    }

        let sum = 0;

    for(let i =1; i <= n; i++ ){
        sum += 1/i;
    }

    return sum;
}

const result = Sum ( 10 );

console.log(result);