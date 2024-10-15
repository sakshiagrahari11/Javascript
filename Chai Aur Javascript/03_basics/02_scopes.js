// {} scope

// let a = 10
// const b = 20
// var c = 30

if (true) {
    let a = 10
    const b = 20
    var c = 30

    console.log("Inner :", a);
console.log("Inner :", b);
console.log("Inner :", c);
}

// console.log(a);
// console.log(b);
// console.log(c);

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];    
// }

function one(){
    const username = "Sakshi"

    function two(){
        const website = "youtube"
        console.log(username);        
    }
    // console.log(website);    
    console.log(username);   
    two()
}
one()

if (true) {
    const username = "sakshi"
    if (username === "sakshi") {
        const website = " youtube"
        console.log(username + website);        
    }
    // console.log(website);    
}
// console.log(username);

