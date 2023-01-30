var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 8, 9, 10];
var unique = [];
var double =[];

for(var i=0; i<numbers.length; i++){
    var number = numbers[i];
    if(unique.indexOf(number) == -1){
        unique.push(number);
    }
    else{
        double.push(number);
    }
}

console.log(unique, double);

