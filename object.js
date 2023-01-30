var myLaptop = {
    brand:'Dell',
    price:75000,
    color: 'silver',
    ram: '8gb'
}
myLaptop.ram ='12gb';
var priceLaptop = myLaptop.price;
var priceLaptop2 = myLaptop['price'];
var laptopPrice = 'price';
var laptopPrice3 = myLaptop[laptopPrice];

//set price or value
myLaptop.price = 90000;
myLaptop['price'] = 1000000;
myLaptop[laptopPrice] = 5000000;





console.log(myLaptop);