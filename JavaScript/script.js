//The value of variable can be changed in console in browser
//   var a = "Ahsan";
//   var b  = "Ali";

//The value of constant cannot be changed in the console of the browser
//   const c = "Abdullah";
//   const d = "Gamer";


//Hoisting
//undefined (which have existence but we don't know the value) and not-defined(which not have existence in the world)
//   console.log(e); // if this only line runs it gives not-defined error

// var e;
// //now it gives undefined
// console.log(e);
// e = 12;



//Reference
// var a = 12; // Primitive
// var b = [12,13,14];
// var c = b;

// c.pop();



// for(start;end;change){

// }
// // print between 0 to 10
// for(var i=0; i < 11 ; i++){
//     console.log(i);
// }  

// // print between 25 -50
// for(var i = 25; i<51; i++){
//     console.log(i);
// }


// //while loop
// var a=12;
// while(a<20){
// a++;
// }


// //function
// function abcd(){
//     //function state
//     console.log("hello");
// }

// abcd();


// function kahanStyle(){
// console.log("Khana khareedo");
// console.log("Pateela chadao gas pr ");
// console.log("eat");
// }

// kahanStyle();


// //params and arguments
// function abcd(a,b,c){ //parameters - variables jismne value store hoti he  arguments wali
//     console.log(a,b,c);
// }
// abcd(12,13,14); //Arguments - real value jo hum dete hen function chalate hve 



// arrays - group of values
// var arr = [1,2,3,4,5,6,7 ];

// arr[1];

// var arr = [1,2,3,4,5,6,7];

// arr.push(8);
// arr.pop();
// arr.unshift(0); 
// arr.shift();
// arr.splice(2,2);


//object hai ek bande ki details ko hold krna (characteristics) , in a key value pair
//1) blank object

// var a = {}

//2) filled objects
// var a = {
//     age:24,
//     name: "Ahsna",
//     email: "ahsankazmi20022@gmail.com",
//     linkedIn: "Ahsan"
// }

// var ghadi = {
//     brand: "Clock",
//     price: "16k",
//     color: "Silver",
//     type: "automatic",
//     digital: false
// }

// //Now how to access a value from the object
// ghadi.type //Write on console



//props
//brand , price , color, type, digital are properties of ghadi 

//Method
//a property which have value equal to function is called method 

var ghadi = {
    brand: "Clock",
    price: "16k",
    color: "Silver",
    type: "automatic",
    digital: false,
    Hii: function(){} // This is a method 
}

//updating object props
ghadi.brand = "Titan"