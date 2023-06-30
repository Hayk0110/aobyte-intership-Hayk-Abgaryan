// import and export working only with live server 
import ajax from "./ajax.js"

const p1 = ajax("https://jsonplaceholder.typicode.com/posts").then(res => (JSON.parse(res))).then(data => console.log(data));

const p2 = ajax("https://jsonplaceholder.typicode.com/posts",{
    type: "POST",
    headers: {
        "Content-Type": "application/json; charset=utf-8"
    },
    // JSON.stringify done here because maybe there would be a case that we are sending the data in other form
    data: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
    })
}).then(res => res).then(res => console.log(res)).catch(err => err);


const p3 = ajax("https://jsonplaceholder.typicode.com/postss").then(res => res).catch()

Promise.all([p1,p2,p3])
    .then(res => console.log("All promises ended successfully",res))
    .catch(err => console.log("There is promise with reject", err));