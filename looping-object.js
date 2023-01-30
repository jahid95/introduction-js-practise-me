var myLaptop = {
    brand:'Dell',
    price:75000,
    color: 'silver',
    ram: '8gb'
}
var keys = Object.keys(myLaptop);
// console.log(keys);

for(var i=0; i<keys.length; i++){
    var propName = keys[i];
    var propValue = myLaptop[propName];
    // console.log(propName, propValue);
}

//for in loop at object

for(const prop in myLaptop){
    console.log(prop,myLaptop[prop]);
}