var array = [3000 , 6, 2, 56, 3200, 5, 89, 321];
var largest= array[0];
console.log(largest);

for (i=0; i<=largest;i++){
    var number = array[i];
    if (largest<number) {
        var largest=array[i];
    }
}

console.log(largest);