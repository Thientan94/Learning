	//1.4: Giải phương trình bậc 2


function Equation2( a, b, c ){

    let x, x1 = 0;

    if( typeof( a ) !== "number" ||
    typeof( b ) !== "number" ||
    typeof( c ) !== "number" ||
    isNaN( a ) ||
    isNaN( b ) ||
    isNaN( c )){
        throw new Error(" a, b, c must be Number");
    }

    if( a == 0 ) {
        x = ( - c / b ) ;
        return x;
    }

    const delta = b * b - 4 * a * c;

    if( delta == 0 ) {
        x = (-b / (2 * a));
        return x;
    }

    if( delta < 0 ) {
        console.log( " Phuong trinh vo nghiem ");
        return;
    }

    x = ( - b + Math.sqrt( delta) )/ ( 2 * a ) ;
    x1 = ( - b - Math.sqrt( delta ) ) / ( 2 * a );

    console.log( x, x1 );

    return x, x1;
}

const result = Equation2( 1, 6, 1 );

console.log(result);


