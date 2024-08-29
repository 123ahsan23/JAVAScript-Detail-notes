//javascript is a sigle threading , it can do one task at a time
//Synchronous vs Asynchronous 

//Synchronous
//Like we have to do some task and like have three task, when first task complete then we start the second task
//and when second task complete then we start the third task ,jab tak aik task complte na ho, doosra shru ni hoga 
// so this is called synchronous 

//eg. task a - 5sec
//task b - 2sec
//task c - 15sec
//task d - 1sec

//Asynchronous - sare kaam aik sath shru kr do jiska answer pehle aajae uska jawab dedena 
//like we have to some task like three tasks, we can start doing all the task at the same time, we do 
//all task at the same time and is se koi farq ni parta ke pehle konsa task complete ho, bs jonsa task 
//complete hoga us ka output hamen dikh jayega 


//How do we know that we write sync code or async code? 

// setTimeout
// setInterval
// promises
//async and await
// axios
// fetch
// XMLHttpRequest

//when we use all of the above then the code we are writting is asynchronous javascript, otherwise it is 
//synchronous javascript

// eg. console.log("Hello") it is synchronous code


//two usage of async code 
//1- when we have some tasks and we want that all task start at the same time and after some time, the task that completed
//first show the output
//2- when we don't know how much time something takes to complete some specific task and when we wantb that 
//some taks should be completed before further process  then we use asynchronous javascript.

//eg. facebook e photo le kr aao or jab le aao to show kr dena 

//eg.Call back hameha async code me answer aane par chalta he 
// setTimeout(callback,timeinms)

// console.log("Hello");
// setTimeout(function(){},2000);
// console.log("hii");

// console.log("Hello");
// setTimeout(function(){
//     console.log("hii");
// },5000)

//so async is a code that runs after sometimes and because of this after sometime we run the function



//Important concept 
//there are two stack 
//1- Main Stack 
//2- Side stack
//Main stack men synchronous code execute hota he and side stack men asynchronous code hota he joke 
//complete hone ke baad main stack men move kr jata he or ye tab hi hota he jab main stack khali ho, 
//jab main stack khali hoto side stack se async code jab complete ho to main stack men aa kar execute hota he 
//or ye sab processing means main stack and side stack ke beech men bat cheet ke kiya complete hva kiya nahi 
//sab ko Evet loop manage krta he 

//Main Stack -execution
//Main stack men syc code aata he joke execute hota he , jabke side stack men async code aata he joke behind the scene 
//processing krta he or jab main stack khali hojata he tab side stack men check kiya jaata he ke asyn code ka answer 
//aagaya he ke ni agar anaswer aagaya he to side stack se code main stack men aa jata he or ye sara kaam event loop krta he 


//eg. 
// console.log("hey1");
// console.log("hey2");
// setTimeout(function(){console.log("hey3")},0)
// console.log("hey4")




//callback
//callback aik functio hota he joke tab chalta he jab async code ka comletion hota he 
//The below used for sending request to external browser and below keywords used for writing async code 
// promises
// fetch
// axios  // is a package that use for api calls from like facebook or others means for api calls
// settimeout
// setInterval
// XMLHttpRequest



//The below used for answer means get response from that servers 
// async await
// then catch 
// callbacks 


//promises 
//we write some code then there are two possibilities 
//1- the code runs - Resolve
//2-code not runs - Reject

//the answer is saved in variable in peding state 
//so if the code runs then The variable becomes then
//if the code not runs in the future then the variable becomes catch

//eg.
// var ans = new Promise((res,rej) => {
//     if(true){
//         return res();
//     }
//     else{
//         return rej();
//     }
// } )

// ans
// .then(function(){
//     console.log("resolve chal gaya ")
// })
// .catch(function(){
//     console.log("reject hogaya ")
// })


//question: User will ask for  a number between 0 se 9 and if the number is below 5 resolve if not reject 
// var ans = new Promise((res, rej) => {

//     var n = Math.floor(Math.random() * 10);
//     if (n < 5) {
//         return res();
//     }
//     else {
//         return rej();
//     }

// })

// ans
//     .then(function () {
//         console.log("Answer 5 se chota he ")
//     })
//     .catch(function () {
//         console.log("Answer 5 se bara he ")
//     })


//when one promise complete in "then" after that in then a new promise is created 

//eg.
// var ans = new Promise(function(res,rej){ //we can write this also

// })

//Question: 
// sabse pehle ghar par aao
// gate kholo or gate lagao 
// khana pakao or khana khao 
// incognito mode chalao 
// sojao kiyunki tum thak gaye ho 
//Do this using promise


//The above is also correct
// var ans = new Promise((res,rej) => {
//     return res("sabse pehle ghar par aao ");
// })

// ans.then(function(data){
//     console.log(data);
//     var ans = new Promise((res,rej) => {
//         return res("gate kholo or gate lagao ");
//     })
//     ans.then(function(data){
//         console.log(data);
//         var ans = new Promise((res,rej) => {
//             return res("khana pakao or khana khao  ");
//         })
//         ans.then(function(data){
//             console.log(data);
//             var ans = new Promise((res,rej) => {
//                 return res("incognito mode chalao ");
//             })
//             ans.then(function(data){
//                 console.log(data);
//                 var ans = new Promise((res,rej) => {
//                     return res("sojao kiyunki tum thak gaye ho  ");
//                 })
//                 ans.then(function(data){
//                     console.log(data);
                    
//                 })
                
//             })
//         })
//     })
// })


//The methods sheriyans do
// sabse pehle ghar par aao
// gate kholo or gate lagao 
// khana pakao or khana khao 
// incognito mode chalao 
// sojao kiyunki tum thak gaye ho 
//Do this using promise

//promise chaining

// var ans = new Promise((res,rej) => {
//     return res("sabse pehle ghar par aao");
// })

// var p2 = ans.then(function(data){
//     console.log(data);
//     return new Promise((res,rej) => {
//         return res("gate kholo or gate lagao ");
//     })
// })

// var p3 = p2.then(function(data){
//     console.log(data);  
//     return new Promise((res,rej) => {
//         return res(" khana pakao or khana khao  ");
//     })
// })

// var p4 = p3.then(function(data){
//     console.log(data);  
//     return new Promise((res,rej) => {
//         return res("  incognito mode chalao   ");
//     })
// })

// var p5 = p4.then(function(data){
//     console.log(data);  
//     return new Promise((res,rej) => {
//         return res("sojao kiyunki tum thak gaye ho  ");
//     })
// })



//async await

//when we use async code inside a fuction like fetch then for fetch we have to use .then for responding 
//from that server so to save from then we use async await

// function abcd(){
//     fetch('http://randomuser.me/api/')
//     .then(function(raw){
//         return raw.json();
//     })
//     .then(function(data){
//         console.log(data);
//     })
// }
// abcd();

//jab koi bhi code async ho to hamen us ke liye wait krna parta he kiyunke hamen ni pata ke 
//uska answer kab aayega 

//when we use .then then we can remove this by using async await, so the above code becomes after using async await

async function abcd(){
    let raw = await fetch('http://randomuser.me/api/');
    let ans = await raw.json();
    console.log(ans);
}

abcd()