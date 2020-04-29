//created two objects 
const obj1 = {
     name: 'javascript',
     n: 'js'
}
const obj2 = {
    name: 'javascript',
    n: 'js'
}

// const obj2 = Object.assign({}.obj1)

//created a function to check the object type
function isObject(obj) {
    if(typeof obj === "object" && obj != null) {
        return true;
    } else {
        return false;
    }
}

//created a function with two parameters for checking the values
function deepEqual(val1, val2) {
    if(val1 == val2) {
        return true;
    } else {
        return false;
    }
}

//different conditions to check deepEqual function 
console.log(deepEqual(obj1, obj2))
console.log(deepEqual(1, 2))
console.log(deepEqual(1,"1"))