// const numbers = [4,3];
// // numbers = [12,2,3]; not allowed 

// numbers.push(5,6);
// // insert value at the bigining of an array
// numbers.unshift(1,2);
// numbers.splice(2,0,'a','b');
// console.log(numbers);

// // finding elements(primitive)
// console.log(numbers.indexOf('a'));
// console.log(numbers.lastIndexOf('b'))
// console.log(numbers.indexOf(1)!=-1)
// console.log(numbers.includes(1))

// // finding elements(object)

// const number =[
//     {id:1,name:'a'},
//     {id:2,name:'b'}
// ];
// console.log(number.findIndex(function(item){
//  return item.name === 'a';
// }));

// // Arrow function..(ES6)
// console.log(number.
//     find(item => item.name === 'b'));
// Delete element
// from end
// const last = numbers.pop();
// console.log(last);
// // begining
// const first = numbers.shift();
// console.log(first);
// console.log(numbers);
// // middle
// const middle = numbers.splice(2,1);
// console.log(middle);
// console.log(numbers);

//Empty an array
// numbers.length =0;
// combinig two array
// const first =[1,2,3];
// const two =[4,5,6];
// const combine = first.concat(two);
// const slice = combine.slice(2,4);
// console.log(combine);
// console.log(slice);
// spread method
// const combine = [...first,...two];
// console.log(combine);

// iterating array

// for(let num of numbers){
//     console.log(num)
// }
// numbers.forEach(num =>console.log(num));
//  join array
// const joined = numbers.join();//return a string
// console.log(joined);
// const message = 'This is a message'
// const parts = message.split(' ');
// console.log(parts);
// const combine = parts.join('_');
// console.log(combine);
// console.log(numbers.sort().reverse());
// filtering array
// const filtered = numbers.filter(value => value >= 0);
// console.log(filtered);
// const resturents = [
//     { id:123,status:'open'},
//     { id:124,status:'close'},
//     { id:121,status:'open'},
//     { id:125,status:'close'},
//     { id:122,status:'open'},
//     { id:134,status:'open'}
// ];
// const openRestrurent = resturents.filter
// (resturent => resturent.status==='open' );
// console.log(openRestrurent);

// mapping array
// filtered,Map(n =>'')
// reducing in array
// const sum = numbers.reduce((eccumulator,currentValue)=>
//  eccumulator + currentValue);
// console.log(sum);
// push into array
// const nums = arrayFromRange(-10,-4);
// console.log(nums);
// function arrayFromRange(min,max){
//     let array =[];
//     for(let i=min;i<=max;i++){
//         array.push(i);
//     }
//     return array;
// }
// Searching element without using include method


// function includes(array,key){
//     for(let i of array){
//         if(key === i){
//             return true;
//         }
//     }
//     return false;
// }
// console.log(exclude(numbers,[1,2,3]))
// function exclude(array,except){
//     const output =[]
//     for(let element of array){
//         if(!except.includes(element)){
//             output.push(element);
//         }
//     }
//     return output;
// }
// console.log(includes(numbers.sort, 6))

//  move value from one position to another .
// const output = move(numbers, 0, -1);
// function move(array, index, offset) {
//     let output = [...array];
//     if (offset > array.length - 1 || offset < 0) {
//         console.error("Invalid offset");
//         output = [];
//     } else {
//         let temp = array[index];
//         let j = 1;
//         for (let i = index; i < array.length; i++) {
//             if (i === offset) {
//                 output[i] = temp;
//                 j = 0;
//             } else {
//                 output[i] = array[i + j];
//             }
//         }

//     }
//     return output;

// }
const numbers = [1, 2, 3, 4,1,11,3,24,12];
// const countOccourance = countOccourances(numbers, 1)
// function countOccourances(arr, key) {
//     const output =[...arr];
//     // let count = 0;
//     // for (let element of arr) {
//     //     if (element === key) {
//     //         count++;
//     //     }
//     // }
//     return output.reduce((count,currentValue) => {
//         return count += (currentValue === key) ? 1 :0
//     });

// }
const max = getMax(numbers);
function getMax(arr){
    const output = [...arr];
    return output.reduce((max,currentValue) => max < currentValue ? currentValue : max );
}
console.log(max);

const movie =[
    {title:'a',year:2018,rating:4.5},
    {title:'b',year:2018,rating:4.7},
    {title:'c',year:2017,rating:4.5},
    {title:'d',year:2019,rating:4.9}
];
// All the movie in 2018 with rating >4
// sort them by their rating
// Descending order
// pick their title
// output :b,a

function sortMovies(movie){
    const output = [...movie]
    return output.filter(value => value.year ===2018 && value.rating >= 4)
    .sort((a,b)=>a.rating - b.rating)
    .reverse()
    .map(m =>m.title)

} 
console.log(sortMovies(movie));

