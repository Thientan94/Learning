	// 1.4: Giải phương trình bậc 2

// Calculate equation1

const equation1 = ( b, c ) => x = ( - c / b ) ;
const deltaequal0 = ( a, b ) => x = (-b / 2 * a) ;
//Calculate delta

//Delta = 0
// Delta > 0

//Calculate Equation2
function Equation2( a, b, c ){
    let x, x1 = 0;
    if( typeof( a ) !== "number" || isNaN( a ) || typeof( b ) !== "number" || isNaN( b ) ||  typeof( c ) !== "number" || isNaN( c )){
        throw new Error(" a, b, c must be Number");
    }
    
    if( a == 0 ) {
        console.log("Nghiem cua pt la: x =");
        return equation1( b, c );
    }

    const delta = b * b - 4 * a * c;
    
    if( delta == 0 ) {
        console.log("Phuong trinh co nghiem kep: x=x1= ");
        return deltaequal0( a, b );
    }
    if( delta < 0 ) {
        console.log( " Phuong trinh vo nghiem ");
        return;
    }

    x = ( -b + Math.sqrt( delta) )/ ( 2 * a ) ;
    x1 = ( -b - Math.sqrt( delta ) ) / ( 2 * a );
    console.log("Phuong trinh co 2 nghiem la: x=", x, "x1 =", x1);
    return x, x1;

}

const result = Equation2( 1, 2, 1 );

console.log(result);