// For loop Practice

// for(var i = 0; i <= 10; i++){
//     console.log(i)
// }

// for(var i = 0; i <= 10; i++){
//     console.log(i*2)
// }

// for(var i = 0; i <= 10; i++){
//     if(i%2 == 0){
//         console.log(i)
//     }
// }

// for(var i = 0; i <= 10; i++){
//     if(i%3 == 0){
//         console.log(i)
//     }
// }

// for(var i = 0; i <= 10; i+=1){
//     if(i%3 == 0){
//         console.log(i)
//     }
// }

// for(var i = 0; i <= 10; i*=1){ // i = i * 1
//     if(i%3 == 0){
//         console.log(i)
//     }
// }

// for(var i = 1; i <= 10; i*=1){ // i = i * 1
//     if(i%3 == 0){
//         console.log(i)
//     }
// }

// for(var i = 1; i <= 10; i+=2){ // i = i + 2
//     if(i%3 == 0){
//         console.log(i)
//     }
// }

// for(var i = 0; i <= 10; i+=2){
//     if(i%3 == 0){
//         console.log(i)
//     }
// }

// for(var i = 1; i <= 10; i*=2){
//     if(i%3 == 0){
//         console.log(i)
//     }
// }

// for(var i = 1; i <= 10; i*=3){
//     console.log(i)
//     if(i%3 == 0){
//         console.log(i)
//     }
// }

// for(var i = 1; i <= 10; i++){
//     console.log(i)
//     if(i%2 == 0){
//         console.log(i ,"inside if")
//         i=i*2
//     }
// }


// Ternary operators

var name = "Akmal"

// if(name === "Akmal"){
//     console.log("Welcome")
// }
// else{
//     console.log("Unauthorized user")
// }


// name === "Akmal" && true ?
//     console.log("Welcome")
//     :
//     console.log("Unauthorized user")


// name === "Akmal" && true ?
//     console.log("Welcome")
//     :
//     console.log("Unauthorized user")



// array map, filter, reduce , find


var users = ["Ali", "Bilal", "Danish", "Ali"]

// var prices = [23, 34, 50]

// for(var i =0 ; i<users.length; i++ ){
//     console.log(users[i])
// }


// users.map(function(data){
//     console.log(data)
// })

// var filteredUsers = users.filter(function(data){
//         if(data === "Danish"){
//             return data
//         }
//     })
// console.log(filteredUsers[0])

// var total = prices.reduce(function(a, data){
//    return a = a + data
// }, 0)
// console.log(total)


var user = users.find(function (data) {
    if (data === "Ali") {
        return data
    }
})

console.log(user)


var myData = [{
    name:"a",
    quatity:3,
    price:50
},
{
    name:"b",
    quatity:4,
    price:20
},
{
    name:"c",
    quatity:4,
    price:30
}]

// Class Task

// 1. Print All this data in table using map method

// 2. Print only items which quantity is 4 using filter

// 3. Print total price of items using reduce 

// 4. Get name input from user and print items based on user search



// Object methods

// var item = {
//     name:"a",
//     price:50
// } 

// var userItem ={
//    name: item.name,
//    price: item.price,
//    quantity:1 
// }

// var userItem = Object.assign({},item, {quatity:1})



// console.log(userItem)


// Spread operator

// var userItem = {...item, quantity:1 }

// console.log(item)

// console.log(userItem)

