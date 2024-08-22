// obejct constructor--> singleton object
// const tinderUser = new Object()


// object literal
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


// nested object
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "aditya",
            lastname: "gupta"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

// merging objects into a single object
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

// good practice
const obj3 = {...obj1, ...obj2}

// console.log(obj3);


// array of obejcts
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);


console.log(Object.keys(tinderUser)); // returns an array of all keys 
console.log(Object.values(tinderUser)); // returns an array of all values 
console.log(Object.entries(tinderUser)); // return an array of key value pair as subarray

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));



// destructuring objects
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]