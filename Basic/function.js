// function declaration..
// function getMessage(){
//     console.log('Hello World!');
// }

// function expression
// let run = function(){
//     console.log('run');
// };
// run();

// argument keyword...
// function sum(){
//     let total =0;
//     for(let value of arguments){
//         total += value;
//     }
//     return total;
// }
// console.log(sum(1,2,3,4,5));

// Rest parameter..
// function sumAll(discount,...args){
//     let total  = args.reduce((a,b)=>a+b);
//     return total *=(1-discount);
// }
// console.log(sumAll(0.1,100,399,299));
// getters and setter.......
// const person = {
//     firstname :'Amitav',
//     lastname : 'Choubey',
//     get fullName (){
//         return `${this.firstname} ${this.lastname};`
//     },
//     set fullName(value){
//         const name = value.split(' ');
//         this.firstname = name[0];
//         this.lastname = name[1];
//     }
// }
// person.fullName = 'Amit Kumar';
// console.log(person);
// // var declaration variable is used every where inside scope of scope
// {
//     var x =1;
//     let y =2;
// }
// let y =2;
// console.log(`x= ${x}, y= ${y}`);
// let variable is access only inside an scope .

// This is referce type and this denoted to current object.

// const video = {
//     title : 'Happy',
//     tag : ['a','b','c'],
//     showTag(){
//         const self = this
//         this.tag.forEach((tag)=>{
//             console.log(this.title,tag);
//         });
//     }
// };
// video.showTag();
// function playVideo(){
//     console.log(this);
// }
// playVideo.call({name:'Amitav'});
// playVideo.apply({name:'Amit'});
// Excercise.. 
// #1 . sum of numbers
// function sum(...args){
   
//     if(args.length ===1 && Array.isArray(args)){
//         args = args[0];
//     }
//     return args.reduce((a,b)=> a+b);
// }

// console.log(sum(1,2,3,4,5));

// #2. 
// const circle ={
//     radius : 2,
//     get area() {
//         return Math.PI *this.radius * this.radius;
//     },
//     set setRedius(value){
//         this.radius = value;
//     }
// }
// circle.setRedius=3;
// console.log(circle);
try{

    const countOccourance = countOccourances(null, 1)
    console.log(countOccourance);
}catch(e){
    console.log(e.message);
}
function countOccourances(arr, key) {
    if(!Array.isArray(arr)){
        throw new Error('illegalArgumentException1');
    }
    return arr.reduce((count,currentValue) => {
        return count += (currentValue === key) ? 1 :0
    });

} 
