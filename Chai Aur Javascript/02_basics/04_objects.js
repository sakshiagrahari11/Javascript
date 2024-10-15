// const tinderUser = new Object()
const InstaUser = {}

console.log(InstaUser);

InstaUser.id = "2109"
InstaUser.name = "Prish"
InstaUser.isLoggedIn = false

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "sakshi",
            lastname: "agrahari",
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);
console.log(regularUser.fullname.userfullname);
console.log(regularUser.fullname);
console.log(regularUser);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj5 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
const obj3 = Object.assign(obj1, obj2)
const obj4 = Object.assign({}, obj1, obj2, obj5)
const obj6 = {...obj1, ...obj2}

console.log(obj3);
console.log(obj4);
console.log(obj6);

const users = [
    {
        id: 1,
        email: "abc@123"
    },
    {
        id: 1,
        email: "abc@123"
    },
    {
        id: 1,
        email: "abc@123"
    },
    {
        id: 1,
        email: "abc@123"
    },
]

users[3].email

console.log(InstaUser);

console.log(Object.keys(InstaUser));   //[ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(InstaUser));  //[ '2109', 'Prish', false ]
console.log(Object.entries(InstaUser));   //[ [ 'id', '2109' ], [ 'name', 'Prish' ], [ 'isLoggedIn', false ] ]

console.log(InstaUser.hasOwnProperty('id'));  //true

console.log(InstaUser.hasOwnProperty('id1'));  //false

// SUMMARRY :

// 1. To extract value from object => const {keyname} = object name;
// 2. To rename keyname for using more times => const {keyname: new name } = object name;
// 3. JSON is a collection of key-value pairs just like object and a JSON array is an ordered list of value.
                        
const course = {
    courseName : "JS in Hindi",
    prize : 999,
    courseInstructor : "Hitesh Sir"
}

console.log(course.courseInstructor);  //{
//     courseName: 'JS in Hindi',
//     prize: 999,
//     courseInstructor: 'Hitesh Sir'
//   }
console.log(course);     // Hitesh Sir

const { courseInstructor } = course  // destructuring
console.log(courseInstructor);  // Hitesh Sir

const { courseInstructor : instructor } = course
console.log(instructor);  // Hitesh Sir


const array = [20, 30, 40]
const [a, b, c] = array
console.log(a);

// const navbar = ({company}) => {

// }

// navbar(company = "Sakshi" )


// JSON Format JAVA SCRIPT OBJECT NOTATION

// {
//     "courseName" : "JS in Hindi",
//     "prize" : 999,
//     "courseInstructor" : "Hitesh Sir"
// }

// [
//     {},
//     {},
//     {}
// ]