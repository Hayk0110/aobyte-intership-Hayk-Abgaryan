import CustomPromise from "./promise.js";
import CustomPromise2 from "./promise2.js";
import ajax from "./ajax.js";

const url = "https://api.thecatapi.com/v1/categories";

const p1 = ajax(url,{});

const p2 =  ajax("https://jsonplaceholder.typicode.com/userss",{})


const p3 = ajax("https://jsonplaceholder.typicode.com/users",{});



console.log(p1,p2,p3)
const all = CustomPromise2.all([p1,p2,p3]);

all.then(res=> console.log(res)).catch(err=>console.log(err))


// const p1 = new CustomPromise2((resolve,reject)=>{
//     resolve("hello1")
// })
// const p2 = new CustomPromise2((resolve,reject)=>{
//     reject("hello2")
// })
// const p3 = new CustomPromise2((resolve,reject)=>{
//     resolve("hello3")
// })

// console.log(p1,p2,p3)

// const all = CustomPromise2.all([p1,p2,p3]);

// all.then(res=> console.log(res)).catch(err=>console.log(err))