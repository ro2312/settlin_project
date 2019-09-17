// // // function myfunction() {
// // //     document.(demo).innerHTML = (paragraph)
// // // }

// // // // //let value = document.getElementById('chairs').textContent;

// // // // //let a = 30;
// // // // //console.log(a);

// // // // // const name = "Roshni";
// // // // // const age = 25
// // // // // const hello = `my name is ${name} and I am ${age}`+ ''
// // // // // console.log(hello);
// // // // // //console.log(hello.substr(0, 10));

// // // // // const A = [3, 5, 6, 8, 9]                                                  
// // // // // A[3] = "7"
// // // // // A.push("3");
// // // // // A.shift("8");
// // // // // A.unshift("3");
// // // // // A.pop();

// // // // // console.log(A);


// // // // const data = [{
// // // //             id: 1,
// // // //             text: `data 1`,
// // // //             iscompleted: true                                                                                          
// // // //         },
// // // //         SVGFEDistantLightElement

// // // //         id: 1,
// // // //         text: `data 3`,
// // // //         iscompleted: false
// // // //     },
// // // // ];

// // // // console.log(data);


// // // // const todoJSON = JSON.stringify(data);
// // // // console.log(todoJSON);

// // // // //for

// // // // for (let i = 0; i < 10; i++) {
// // // //     console.log(`for loop number: ${i}`);

// // // // }

// // // // //while

// // // // let i = 0;
// // // // while (i < 10) {
// // // //     console.log(`while loop number: ${i}`);
// // // //     i++;
// // // // }

// // // // for (let i = 0; i < data.length; i++) {

// // // //     console.log(data[i].text);

// // // // }

// // // // //foreach,map,filter

// // // // data.forEach(function(todo) {
// // // //     console.log(todo.text)

// // // // });

// // // // const todotext = data.map(function(todo) {
// // // //     return todo.text;
// // // // })
// // // // console.log(todotext);





// // // // var myvariable;
// // // // myvariable = 'hello';
// // // // alert(myvariable);

// // // // myvariable = 65645;
// // // // alert(myvariable);


// // // // var string1 = 'goodbye';
// // // // var string2 = "welcome";
// // // // string1 = string2
// // // // alert(string1, string2);


// // // // mynumber = 1;
// // // // myvar = (mynumber + 10 * 5 / 10 - 1);
// // // // alert(myvar);

// // // // let enterstring = 'hello';
// // // // let myname = prompt("Enter your name", " ");
// // // // console.log(myname);
// // // // var concatstring;

// // // // document.write(enterstring + " " + myname + "<br>");
// // // // concatstring = enterstring + " " + myname;
// // // // document.write(concatstring);

// // // let name = "Roshni";
// // // let age = 25
// // // let hello = `my name is ${name} and I am ${age}` + '';
// // // console.log(hello);
// // // console.log(hello.substr(0, 10));


// // // let x = { name: "rrrr", age: 25 }
// // // ""

// // // var x = "this is a rrrr"
// // // x.indexof


// // let x = 2;
// // let y = 3;
// // let b = 6;

// // function sumOfThreeValue(x, y, b) {
// //     let c = x - y + b;
// //     return c;
// //     console.log(c, 'sum of three numbers');
// // }
// // sumOfThreeValue(x, y, b)

// // function sumOfTwoValue(x, y, ) {
// //     let a = x + y;
// //     console.log(a, 'sum of two numbers');
// // }

// // // console.log(a);
// // sumOfTwoValue(x, y)

// // x = 10;
// // y = 13;
// // z = 15;
// // console.log(x, y, z);

// // function operationOfValues(x, y, z) {
// //     let d = x + y - z * (z * y) / x;
// //     console.log(d, 'value')
// // }
// // operationOfValues(x, y, z);

// // let celcius = 100;

// // function toCelcius(celcius) {
// //     let feranhite = (celcius * 9 / 5) + 32;
// //     console.log(feranhite)

// // }
// // toCelcius(celcius);

// // let age = 25;

// // function calculateAge(age) {
// //     let text = 'text';
// //     if (age < 18) {
// //         text = "Sorry you are not eligible for vote";
// //         alert(age + text);
// //     } else {
// //         text = "you are eligible";
// //         alert(age + text);
// //     }
// // }
// // calculateAge(age);

// // //
// // let form = document.getElementById("Registration Form").innerHTML;

// // function ageCal() {
// //     let a = document.getElementById("date").value;
// //     let b = new date(a);
// //     let c = new date()
// //     console.log(ageCal);
// // }


// let x = [1, 2, 3, 4, 5, 6]

// function isLessthan3(x, y, z) {
//     let y;
//     let returnValue = false;
//     if (x < 3) {
//        return returnValue = true;
//     }

//     if (x.some(isLessthan3)) {
//         y = x.filter(isLessthan3);
//     }
//     console.log(y)
// }
// console.log("number is less than 3:" + y);
// // console.log(x.every(isLessthan3));
// //console.log(x.some(isLessthan3));

// //for getting the values but not stored

// let z = [1, 2, 3, 4, 5, 6];

// function multiple(a, b, c) {
//     let d = a * 3;
//     console.log(d);
// }
// z.forEach(multiple);

// //for storing the same values map function will used.and its not alter the original value.

// let t = [1, 2, 3, 4, 5, 6];

// function multiple(a, b, c) {
//     let d = a * 3;
//     return (d);
// }
// let e = x.map(multiple);
// console.log("the numbers are:" + e);
// function aValue(a) {
//     console.log("Thanks for visiting" + a);

// }

// function anotherValue(a) {
//     console.log('WELCOME TO THIS PAGE' + a);
//     aValue(a);
// }
// let x = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function eachValue(a, b, c) {
//     console.log("the current value is:" + a);

//     anotherValue(a);
// }
// x.forEach(eachValue);


// let x = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let h = ['AA', 'BB', 'CC', 'DD', 'EE', 'FF', 'GG', 'HH', 'II'];


// function sToa(curr, i, arr) {
//     return h[i] + arr[i];
// }
// let newArray = x.map(sToa);
// console.log(newArray);

let x = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let y = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function addTo(cur, i, arr) {
    return y[i] + arr[++i];

}
let newArray = x.map(addTo);
console.log(newArray);