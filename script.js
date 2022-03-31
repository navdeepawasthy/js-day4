//  what is an array
// using array literals
let arr =[1,2,3,"anr"]; // empty array
 console.log("arr",arr);
 console.log(arr[3]);
// using constructor function
  let a= new Array();
  console.log("arr",a)

  // push,pop,shift,unshift
  let value=["a","E","g",45];
  console.log(value.length);
  console.log(value[3]);
  console.log(value);
  value[10]=20;
  console.log(value[6]); // it is not an error but  this is on the [10]index
  console.log(value[10]); // here we are at index[10] and there is some value assigned to index[10]=20
  value.push(1); // addition in the last
  console.log(value);
  value.pop(1) // remove  from the end of array
  console.log(value);
  value.shift(); // it remove  from first eleemnt
  console.log(value);
  value.unshift("a");
  console.log(value); // adding on starting

  function countString (arr){
    let count = 0;
    let tempArr = [];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (typeof(element)==="string") count++;
        // if (typeof(element)==="string") tempArr.push(element)
    }
    return count;
}

const result = countString(["a", "b", "c", 1, 3, 5]);
console.log(result);

// some and every (these always return boolean value  (true:false))
let ex=[14,2,3,5,45]
const val1=ex.some(element => element>2);
const val2=ex.every(element => element>2);
console.log(val1,val2);