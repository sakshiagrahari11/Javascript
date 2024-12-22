/**
 * What is async ?
 * What is await ?
 * How async await works behind the scenes ?
 * Examples of using async/await
 * Error Handling
 * Interviews
 * Async await vs. Promise.then/.catch
 */

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolve value")
    }, 40000)
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolve value")
    }, 30000)
});

// const p = new Promise((resolve, reject) => {
//         resolve("Promise resolve value")
// });

// async function getData()
// {
//     return p;
// }
 
// const data = getData()
// console.log(data);

// data.then((res) => console.log(res));

async function handlePromise() {
    console.log("Hello World!!");

    const val1 = await p1;
    console.log("Namaste Javascript 1");
    console.log(val1);  
    
    const val2 = await p2;
    console.log("Namaste Javascript 2");
    console.log(val2);  
}
//handlePromise();

const API_URL = "https://api.openweathermap.org/data/2.5/weather?q=indore&units=metric&appid=f3eee6f2ac5bed7f8ac868aab900f225"

async function handleAPI(){
    try
    {
        const data = await fetch(API_URL);
        const jsonValue = await data.json();
        console.log(jsonValue);        
    }
    catch(err){
        console.log(err);        
    }
}
handleAPI();

handleAPI().catch((err) => console.log(err));


