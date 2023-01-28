var items = ['cup', 'laptop', 'flux', 'glass', 'pen'];
/* for(var i=0; i<items.length; i++){
    var item = items[i];
    if(item == 'glass'){
        continue;
    }
    console.log(item);
} */

var i=0;
while(i<items.length){
    var item = items[i];
    i++;
    if(item == 'glass'){
        continue;
    }
    console.log(item);
}