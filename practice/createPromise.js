// const makeMePizza = function () {
//     return new Promise(function (resolve, reject) {
//         if ("everythingWorks") {
//             resolve("Here is your pizza!"); // then() will be called
//         } else {
//             reject("Sorry no more cheese!"); // catch() will be called
//         }
//     })
// }
// makeMePizza()
//     .then(data => console.log(data))
//     .catch(err => console.error(err))
//     console.log('Finish my homework');

// let myPromise = new Promise(function(resolve,reject){
//     console.log("A");
//     resolve( { name:"assad"})
//     console.log("B");
// })
// myPromise
// .then(function(message){
//     console.log(message); 
//     return "i am first return from .then"
// })
// .then(function(message){
//     console.log(message)
// });

// let timer = setInterval(()=>console.log("HI"),1000)
// setTimeout(()=> clearInterval(timer), 10000);

// let myPromise = function(name,age){
//     return  new Promise(function(resolve,reject){
//         if(name=="assad"&&age ==40){
//             resolve({status : "It is assad"})
//         }else{
//             reject({status:'It is not assad'})
//         }
// })
// }
// // we can use console log if  we don't return from .then else use function(){console.log}
// myPromise('assad',40)
// .then(console.log)
// .catch(console.log);

// console.log(1);
// const a = setTimeout(function(){ console.log(2); }, 1000); 
// const b = setTimeout(function(){ console.log(3); }, 0);
//  console.log(4);

// function isEven(x){
//     return new Promise((resolve,reject)=>{
//         if(x%2===0){
//             resolve(true)
//         }else{
//             reject(false)
//         }
//     });
// }
// isEven(5)
// .then(message=>console.log(message))
// .catch(message=>console.log(message))

// function isPrime(x) {
//     return new Promise((resolve, reject) => {
//         let isprime = true;
//         for (let i = 2; i < x; i++) {
//             if (x % i === 0) {
//                 isprime = false;
//                 break;
//             }
//         }
//         if (isprime) {
//             resolve("true")
//         } else {

//             resolve("false")
//         }
//     });
// }
// isPrime(8)
// .then(message => (console.log(message)))


// `Write a method filterWords() on the String object. It accepts an array of strings 
// that specifies a list of banned words. The function returns the string after replacing 
// all the banned words with three stars.`
// String.prototype.filterWords = function (array) {
//     let arr1 = this.split(" ");
//      arr1.forEach((item,index,arr) => {
//         if(array.includes(item)){
//             arr[index] = "***"
//         }
//     });

//     return arr1.join(" ");
// }

// console.log("This course is awesome !".filterWords(['course','awesome']));

// //"This *** is ***!"

// console.log('start');
// async function foo(){
//     function abel(){ console.log('Here')};
//     // let gefgef = ;
//     await abel();
//     console.log('abelooo')
//     return 'done!';
    
// }
// async function bar(){
//     console.log('insidebar-start');
//     let result = await foo();
//     console.log(result);//"done!"
//     console.log('insidebar-end');
// }
// bar();
// console.log('end');


// String.prototype.filterWords = function (array){
//     let result = this.split(' ');
//     new Promise(function (resolve) {
//         result.forEach((item, index, arr) => {
//             if (array.includes(item)){
//                 result[index] = "***"
//             }
//         });
//         resolve (result.join(" "));
//     })
//     .then (console.log);
    
// }
// "This course is awesome !".filterWords(['course','awesome']);
//"This *** is ***!"; 

// String.prototype.filterWords = async function (array){
//     let result = this.split(" ");
//     result.forEach((item, index, arr) => {
//         if (array.includes(item)){
//             result[index] = "***";
//         }
//     });
//     await console.log(result.join(" "));
// }

// "This course is awesome !".filterWords(['course','awesome']);
// //"This *** is ***!";

// String.prototype.reverse = function(){
//     return new Promise((resolve) => {
//         let result = this.split('');
//         let newArray= [];
//         for(let i= result.length-1; i>= 0; i--){
//             newArray.push(result[i]);
//         }
//         resolve(newArray.join(''))
//     }).then(console.log);
// }

// String.prototype.reverse = async function(){
//     let result = this.split('');
//     let newArray= [];
//     for(let i= result.length-1; i>= 0; i--){
//         newArray.push(result[i]);
//     }
//     console.log(await newArray.join(''));
// }

// console.log('start');
// "hello".reverse();
// console.log('end');

// console.log( "Start" );
// async function myFunction(){
//     console.log( "A" )
//     const result = await myPromise();
//     console.log(result)
//     setTimeout (() => console.log("B"), 0)
//     console.log( "C")
// }
// myFunction()
// console.log("End");
// function myPromise(){
//     return function (){
//     new Promise(resolve => {
//     console.log("D")
//     setTimeout(() => resolve("E"), 0)
//     console.log("F")
//     })
// }
// }

// Array.prototype.findFirstNASync = function(n){

//     let res = this;
//     let newArr = [];
//     new Promise (function (resolve, reject) {
//       if(n < res.length){
//         for(let i = 0 ; i <= n; i++){
//             newArr.push(res[i])
//         }
//         resolve (consnewArr);
//       }else 
//         reject("Error: Insufficient items")
//     })
// }
    
//      function run(n) {
//         console.log("Start");
//         const numbers = [1, 3, 6, 2];
//     try{
//         numbers.findFirstNASync(n);
//         console.log("Finding first ${n}. Please wait...");
//         then(result => console.log(result))}
//     catch(error) => {console.log(error.message)}
//     finally {console.log("Finish");}
// }
//      run(3);