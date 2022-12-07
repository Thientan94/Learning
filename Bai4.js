	// 1.4: Giải phương trình bậc 2

function equation2( a,b,c ){

    let x, x1 = 0;

    if( typeof( a ) === "number" && typeof( b ) === "number" && typeof( c ) === "number" && !isNaN( a ) && !isNaN( b ) && !isNaN( c )){

        if( a == 0 ){

            x = - c / b ;
            console.log( " Nghiem cua phuong trinh :",x );

        }
        else{

            const delta = b * b - 4 * a * c;

            if( delta == 0 ){

                x = - b / ( 2 * a );
                console.log( " Phuong trinh co nghiem kep: x = x1 = ", x );

            }else if( delta < 0 ){

                console.log( " Phuong trinh vo nghiem " );

            }

            else{

                x = ( -b + Math.sqrt( delta ) ) / ( 2 * a);
                x1 = ( -b - Math.sqrt( delta ) ) / ( 2 * a);

                console.log( " Phuong trinh co 2 nghiem rieng biet : x = " , x, "x1 = ", x1 );

            }

        }

    }else{
        console.log(" a, b ,c must be number");
    }
    return x, x1;
}

const result = equation2(-1,0,4);

console.log(result);