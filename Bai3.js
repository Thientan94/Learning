// 1.3: Cho 1 mảng các số nguyên không trùng lặp 
// - In ra các số chia hết cho 7 hoặc có chứa 7 trong nó

const arr = [17, 12, 15, 37, 21, 63, 191, 777 , 77];

function filter7() {

    const result = [];

    for ( const number of arr ) {

        if( number % 7 == 0 || number % 10 == 7){
            result.push( number );
        }

    }

    return result;
}

console.log(filter7());