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
    } else if (isObject(val1) && isObject(val2)) {
        if(Object.keys(val1).length != Object.keys(val2).length) return false;
        for(let i in obj1) {
            if(!deepEqual(val1[i], val2[i])) {
                return false;
            }
        }
        return true;
    } else {
        return false;
    }
}

//different conditions to check deepEqual function 
console.log(deepEqual(obj1, obj2))
console.log(deepEqual(1, 2))
console.log(deepEqual(1,"1"))