// //1.2: Nhập vào số nguyên dương n
// – Tính tổng s(n) = 1 + 2 + 3 + 4 + … + n Không dùng For

function Sum( n ){

    if (n < 0) {
        throw new Error("n Not a Interger");
    }

    if ( isNaN ( n ) ) {
        throw new Error("n is NaN");
    }

    let sum = 0;
    let i = 0;

    do {
        sum += i;
        i++;
    } while ( i <= n );

    return sum;
}

const result = Sum ( -5 );

console.log ( result );
