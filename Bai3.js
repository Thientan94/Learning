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