//var let and const
// 1) differencebetween var let and const

//1st Difference
// var old js men tha 
// let and const new js men he 



//2nd Difference
//var is function scoped => var apne parent function men kahin bhi use hosakta he 
// function abcd(){
//     for(var i=1; i<12;i++){
//         console.log(i);
//     }
//     console.log(i);
// }

// abcd();


//let and const are braces scoped =>let apne parent function men kahin or use nahin hosakta 

// function second(){
//     for(let i=1; i<12;i++){
//         console.log(i);
//     }
//     console.log(i);
// }

// second();


//3rd Difference 
//Js men kai sare features hen but kuch feature jo hum use krte hen wo javascript men ni hote lekin phir bhi 
//hum use kr sakte hen kiyunke js wo feature window se le kr use krti he, and window hamare pas aik box of features he 
//to use wit java script

//var adds itself to the window object
var a = 12;


//let doesn't add
// let b = 13;



//heap and stack
//stack men hum value sko jese add krte hen wese hi bahir nikalte hen

//heap memory
//Jab bhi hum koi calculation karte hen to beech ka intermediate data heap men store hota he, wo final answer ni hota 
//lekin heap men store hota he next value ke sath calculate hone ke liye and final answer hamen print hoke dikhta he 

//Jitne bhi variables ya data hum banate hen unhen kahin to store krna parta he uske liye hota he heap memory

//eg. 
// 3 //answer of first 2 values 1+2 will store in heap and after that add with second value 3+3 = 6 also store in heap memory 
// 1+2+3+4+5





//excecution context - excecution context is a container where function code is executed and when a function is 
//called and execution context created when a function is called , it contains three thing 
// 1) variables 
// 2) function inside the parent function
// 3) lexical environment


// eg.
// function abcd (){
//     var a = 12;
//     function def(){
//         var b = 12;
//     }
// }

// function abcd() {
//     var a = 12;
//     function def() {
//         var b = 12;
//         console.log(a); // This will work, as `a` is in the outer scope
//     }
//     def();
//     console.log(b); // This will throw an error, as `b` is not in the outer scope
// }

// abcd();


//abcd();
// in the above example when we call that function then an imaginary execution context container is created 
// and the variable, function inside the parent function and lexical environment is created in the container
// --lexical environment - tells which  thing the parent function have acces and which thing the parent function dont have 
// access. Like parent function don't have acces to the var b 


//lexical environment aik chart hota he jismen likha hota he ke aapka particular function kis cheez ko access kar skta he 
//and kin cheezon ko access nhi kr skta , Means it holds Scope and Scope Chain


//Types in JavaScript 
//Primitive vs Reference 
// var a = [1,2,3]
// var b  = a

// b.pop()

//Now how to copy reference value 
// var a = [1,2,3,4,5,6]
// var b = [...a]
// b.pop();

//To copy reference value we use spread operator which allow to copy value of above variable array and 
//this also can apply to objects 

// var obj = {name: "Ahsan",
//             age: 12
// }

// var copyobj = {...obj};




//truthy vs falsy 
//Js men kcuh bhi likho wo 2 trah ki hoti he truthy ya falsy 
//falsy hota he = 0 , false , undefined , null , Not a Number (NaN) , document.all
//otherwise we have truthy
//eg. 

// if("Ahsan"){ //with zero it gives us false and print else and with name like "Ahsan" it gives us "Hello"
//     console.log("Hello")
// }
// else{
//     console.log("Hoo")
// }

 

//Switch case

// switch(1){
//     case 1: 
//         break;
//     case 2:
//         break;
//     default:
        
// }


//foreach forin forof do-while
// function abcd(){
// for(var i =0;i<11; i++){
//     console.log(i);
// }
// console.log(i); //it prints 11 because var is function scoped 
// }
// abcd();


//forEach ham hamesha tab use kren ge jab hamare pas array aayega, jab bhi hamare pas array aaye or usko use krna ho 
//ya kuch calculation krna ho tab for each loop use hota he means with arrays

//eg.
// var a  = [1,2,3,4,5,6,7,8,9];
// a.forEach(function(val){
//     console.log(val+1);

// })

//for each original array men changes ni krta balke, wo apko chnages krke deta he array ki temporary 
//copy men jiski wja se array hamesha same rehta he 



//forIn loop ham tab use krte hen jab hamen objects men loop chalana ho
//eg.

// var a = {
//     name: "Ahsan",
//     age: 22,
//     city: "lahore"
// };

// for (var key in a) {
//     console.log(key, a[key]);
// }





//do-while : when we have to run something one time atleast then we use do while loop 
// var a = 10;

// do{
// console.log(a);
// a++;
// }
// while(a<15){

// }




//callback function 
//aesa code jo baad men chalta he osse hum aik function dedete hen ke jab bhi code complete hojaye to 
//function ko chala dena, aur wo function aik simple function ki trah hi hota he lekin usse kehte hen
//callback function

// setTimeout(function(){
//     console.log("Tasveer agai he ")
// }, 5000);




//First class functions - use functions as values and variables
//We can treat functions as values and variables also, this is called first class function
//we can use function as a value 

// function abcd(a){

//     a();
// }
// abcd(function(){
//     console.log("Hello my name is Syed Ahsan Ali kazmi")
// })



// --how arrays are made behind the scenes
// --why we can make negative indexes arrays in js

//arays are objects if we write typeOf [] in console it gives us object 
//so javascriot convert the array into objects 

//eg.
// var arr = [1,2,3,4,5]

// //JavaScript convert this into 
// var arr = {
//     0: 1,
//     1: 2,
//     2: 3,
//     3: 4,
//     4: 5
// }


//For negative indexes we have 

// arr[-1] = 2;


// --how to delete object prop
//eg.
// var a = {
//     name: "Ahsan",
//     age: 12
// }

// delete a.age;
// delete a.name