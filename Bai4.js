function equation2(a,b,c){

    const x = 0;
    
    if(b == 0){
        x = Math.sqrt(-c / a);
    }
    
    const delta = b*b - 4 * a * c;
    
    if( delta == 0 ){
        //     document.write("Phuong trinh co nghiem kep:",x);

        x = -b / ( 2 * a );

    }

    if( delta < 0 ){
        // document.write("Phuong trinh vo nghiem");
    }

    let x1 = 0 ;
    let x2 = 0;

    if( delta > 0 ){
        // document.write("Phuong trinh co 2 nghiem rieng biet");

        x1 = ( -b + Math.sqrt( delta ) ) / ( 2 * a);
        x2 = ( -b - Math.sqrt( delta ) ) / ( 2 * a);

    }

    return x, x1 ,x2;
}

const result = equation2(1,9,2);

console.log(result);