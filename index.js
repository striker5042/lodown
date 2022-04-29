'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;



/**
 * identity: to take in a value and return that value unchanged
 * 
 * @param {any value} : any value 
 * @return {any value}  : returns any value unchanged 
 */
 function identity(value){
    return value;
}
module.exports.identity = identity;

/**
 * typeof:
 * 
 * @param {any value} collection: any value 
 * @return {string} : the type of value as a string
 */
function typeOf(value) {
    if (value === null){
        return 'null';
    } else if(Array.isArray(value)){
        return 'array';
    } else {
        return typeof value;
    }
}
module.exports.typeOf = typeOf;

/**
 * first:
 * 
 * @param {any value} collection: array
 * @param {any number} collection: 
 * @return {any value} action:
 */
function first(array, value) {
    var result = [];
    if (Array.isArray(array) === false || value < 0){
        return [];
    } else if (typeof value !==  'number'){
        return array[0];
    }else if (value > array.length){
        return array;
    } else {
        for (let i = 0; i < value; i++){
            result.push(array[i]);
        }   
    }
    return result;
}
module.exports.first = first;

/**
 * last:
 * 
 * @param {array} collection: array or number
 * @param {value}
 * @return {any value} action: 
 */
function last(arr, val){
    var result = [];
    if (Array.isArray(arr) === false || val < 0){
        return [];
    } else if (typeof val !==  'number'){
        return arr[arr.length - 1];
    }else if (val > arr.length){
        return arr;
    } else {
        for (let i = arr.length -1; i > 0; i--){
            result.push(arr[i]);
        }  
    }
    return result.reverse();
};
module.exports.last = last;

/**
 * indexof:
 * 
 * @param {array} collection: a
 * @param {value}
 * @return {any value} action: 
 */
function indexof(array, value){
    for(let i = 0; i < array.length; i++){
        if(value === array[i]){
            return i;
        }
    }
return -1;
}
module.exports.indexof = indexof;

/**
 * contains:
 * 
 * @param {Array} collection:
 * @param {Value}  
 * @return {any value} action:  
 */
function contains(array, value){
    for(let i = 0; i < array.length; i++){
        if(array[i]=== value){
            return true;
        }
    }
    return false;
}
module.exports.contains = contains;

/**
 * each: 
 *
 *Designed to loop over a collection, Array or Object, and applies the 
 *action Function to each value in the collection.
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
 * unique:
 * 
 * @param {Array} collection:  
 * @return {any value} action: 
 */
function unique(array){
    var result = [];
    for(let i = 0; i < array.length; i++){
        if (_.indexOf(array, array[i]) === i) {
            result.push(array[i]);
        }
    }
    return result;
}
module.exports.unique = unique;

/**
 * filter:
 * 
 * @param {any value} collection:
 * @param {Function}  
 * @return {any value} action: 
 */
function filter(array, func){
    var output = [];
    for(let i = 0; i < array.length; i++){
        if (func(array[i], i, array) === true){
            output.push(array[i]);
        }
    } 
    return output;
}
module.exports.filter = filter;

/**
 * reject:
 * 
 * @param {Array} collection:
 * @param {Funciton}  
 * @return {any value} action: 
 */
function reject(array, func){
    var output = [];
    for(let i = 0; i < array.length; i++){
        if (func(array[i], i, array) === false){
            output.push(array[i]);
        }
    } 
    return output;
}
module.exports.reject = reject;

/**
 * partition:
 * 
 * @param {any value} collection:
 * @param {Function}
 * @return {any value} action: 
 */
function partition(array, func){
    let output = [];
    var truthy = [];
    var falsy = [];
    for(let i = 0; i < array.length; i++){
        if(func(array[i], i, array)){
           truthy.push(array[i]);
        } else if(!func(array[i], i, array)){
            falsy.push(array[i]);
        }
    }
    output.push(truthy);
    output.push(falsy);
    return output;
}
module.exports.partition = partition;

/**
 * map:
 * 
 * @param {any value} collection: 
 * @param {Function} 
 * @return {any value} action: 
 */
function map(collect, func){
    var output = [];
    if(Array.isArray(collect)){
        for(let i = 0; i < collect.length; i++){
            output.push(func(collect[i], i, collect))
        }
    } else {
        for(let key in collect){
            output.push(func(collect[key],key, collect));
        }
    }
    return output;
}
module.exports.map = map;

/**
 * pluck:
 * 
 * @param {any value} collection: 
 * @param {prop} 
 * @return {any value} action: 
 */
function pluck(array, prop){
    return _.map(array, function(element){
        return element[prop];
    });
}
module.exports.pluck = pluck;

/**
 * every:
 * 
 * @param {any value} collection:
 * @param {Function}  
 * @return {any value} action: 
 */
function every(collect, func){
    if(typeof func !== 'function'){
        for(let i = 0; i < collect.length; i++) {
            if(collect[i] === false){ 
                return false 
            } 
        }
        return true;
    } else if (Array.isArray(collect)){
        for(let i = 0; i < collect.length; i++) {
            if(func(collect[i], i, collect) !== true){
                return false
            }
        }
        return true;
    }else{
        for(let key in collect){
            if(func(collect[key], key, collect) === false){
                return false;
            }
        }
        return true;
    }
}
 module.exports.every = every;

/**
 * some:
 * 
 * @param {any value} collection:  
 * @param {Function}
 * @return {any value} action: 
 */
 function some(collect, func){
    if(typeof func !== 'function'){
        for(let i = 0; i < collect.length; i++) {
            if(collect[i] === true){ 
                return true 
            } 
        }
        return false;
    } else if (Array.isArray(collect)){
        for(let i = 0; i < collect.length; i++) {
            if(func(collect[i], i, collect) === true){
                return true;
            }
        }
        return false;
    }else{
        for(let key in collect){
            if(func(collect[key], key, collect) === true){
                return true;
            }
        }
        return false;
    }  
};
 module.exports.some = some;

/**
 * reduce:
 * 
 * @param {any value} collection: 
 * @param {Function}
 * @param {} 
 * @return {any value} action: 
 */
function reduce(array, func, seed){
    _.each(array, function(val, i, collect){
       if (seed === undefined || seed === null){
           seed = val;
       }else {
           seed = func(seed, val, i, collect);
       }
   });
   return seed;
};
 module.exports.reduce = reduce;

/**
 * extend:
 * 
 * @param {any value} collection:  
 * @return {any value} action: 
 */
function extend(){
    for(let i = 1; i < arguments.length; i++){
        Object.assign(arguments[0], arguments[i]);
    }
    return arguments[0];
}
 module.exports.extend = extend;




 /**
 
  */