	// 1.4: Giải phương trình bậc 2

function equation2(a,b,c){

    let x = 0;
    let x1 = 0 ;

    if( isNaN( a ) || isNaN( b ) || isNaN( c ) ){
        throw new Error(" Nunber cannot be NaN");
    }else{

        if( a == 0 ){
            x = -c/b;
            console.log( "Nghiem cua phuong trinh :", x );
        }else

        if( b == 0 ){
            x = Math.sqrt(-c / a);
        }

        else{

            const delta = b*b - 4 * a * c;

            if( delta == 0 ){

                x = -b / ( 2 * a );

                console.log( " Phuong trinh co nghiem kep: x = x1 = ", x );

            }else 

            if( delta < 0 ){
                console.log( " Phuong trinh vo nghiem " );
            }

            else{

                x = ( -b + Math.sqrt( delta ) ) / ( 2 * a);
                x1 = ( -b - Math.sqrt( delta ) ) / ( 2 * a);

                console.log( " Phuong trinh co 2 nghiem rieng biet : x = ", x, "x1 = " );
            }

        }
        return x,x1;
    }
}

const result = equation2(1,2,1);

console.log(result);