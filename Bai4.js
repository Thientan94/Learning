function equation2(a,b,c){

    const x = 0;
    
    if(b == 0){
        x = Math.sqrt(-c / a);
    }
    
    const delta = b*b - 4 * a * c;
    
    if( delta == 0 ){

        x = -b / ( 2 * a );

        console.log("Phuong trinh co nghiem kep: x =", x);

    }

    if( delta < 0 ){
        console.log("Phuong trinh vo nghiem");
    }

    let x1 = 0 ;
    let x2 = 0;

    if( delta > 0 ){

        x1 = ( -b + Math.sqrt( delta ) ) / ( 2 * a);
        x2 = ( -b - Math.sqrt( delta ) ) / ( 2 * a);

        console.log("Phuong trinh co 2 nghiem rieng biet: x1 = ", x1, "x2 = ", x2 );
    }

    return x, x1 ,x2;
}

const result = equation2(1,9,2);

console.log(result);