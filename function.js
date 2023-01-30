function bringSingara(money){
    console.log('singara niye aii !!!');
    console.log(money);
}

bringSingara(100);

bringSingara(200+100);

function bringSingara(money){
    var singraPrice = 10;
    var quantity = money / singraPrice;
    return quantity;
}

var myTaka = 4020;
var singaras =bringSingara(myTaka);
console.log('singaras:', singaras);