//1 no practise problem
// function namta(number){
//     for(var i=1; i<10; i++){
//         var result = number * i;
//         console.log(result);
//     }
// }

// namta(13);

//2 uppercase / lowercase to lowercase

// function toLowerCase(input){
//     var changeCase = input.toLowerCase();
//     console.log(changeCase);
// }

// toLowerCase('Hello I am Anwar Jahid');

// const pizza = {

//     toppings: ['cheese', 'sauce', 'pepperoni'],
   
//     crust: 'deep dish',
   
//     serves: 2
   
//    }

//    console.log(pizza.toppings[2]);

//4 fin the largest name in array 
var friends = ["karimmmmmm", "abdulllllllkkkll", "sadsd", "heroAlom"];
var maxName = friends[0].length;
var bigNameFriend = [0];


for(var i=0; i<friends.length; i++){
    var friend = friends[i].length;
    if(friend>= maxName){
        bigNameFriend = friends[i];       
    }
    
}
console.log(bigNameFriend);