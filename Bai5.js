const arr = [ 110, 22, 32, 515, 1, 421, 41467, 1315 ];

//Tim so nho nhat 
function arrayMin(arr) {
    let i = arr.length;//7

    let min = Infinity;
    while (i--) {
      if (arr[i] < min) {
        min = arr[i];
      }
    }

    return min;
  }

console.log(arrayMin(arr))


//Tim so lon nhat
function arrayMax(arr){

    let i = arr.length;

    let max = 0;

    while( i-- ){

        if( arr[i] > max ){

            max = arr[i];

        }
    }

    return max;
}

console.log(arrayMax(arr));

// sap xep giam dan
arr.sort(( a, b ) => { return b - a; });
console.log(arr)

//In ra cac so lon hon 500

function checkBigger500(number){
    return number > 500;
}


console.log(arr.filter(checkBigger500));