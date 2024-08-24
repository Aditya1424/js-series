/* IIFE(Immediately invoked functional expression) is a function that is called 
as soon as it is defined and does not pollute the global namespace.

It is used to encapsulate a block of code and makes it private and self-contained.

Advantages of using IIFE:
1. Private variables: IIFE helps to create a private scope, so variables created within the function cannot be accessed outside of it.
*/


/*In a traditional function, if you create a variable within the function, 
it is accessible in the global object. If you define a variable in an IIFE, 
it is accessible only directly within the function
*/

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')