// object : store group related variables into a single unit

const person = {
  name: ['Bob', 'Smith'],
  age: 32,
  gender: 'male',
  interests: ['music', 'skiing'],
  bio: function () {
    alert(this.name[0] + ' ' + this.name[1] + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
  },
  greeting: function () {
    alert('Hi! I\'m ' + this.name[0] + '.');
  }
};
// delete person.interests;
// add a property
person.sex = 'male';

console.log(person);

const circle = {
  radius: 1,
  draw() {
    console.log('draw');
  }
};
for (let key in circle) {
  console.log(key, circle[key]);
}
for (let key of Object.keys(circle)) {
  console.log(key);
}
for (let key of Object.entries(circle)) {
  console.log(key);
}

// cloning an Object
// const another = {}
// for(let key in circle){
//   another[key] = circle[key];
// }
// const another = Object.assign({
//   color:'yellow'
// },circle)
const another = { ...circle };
console.log(another);

// primitive...
const str = 'Hello';
console.log(typeof (str));
console.log(str.length);
const str1 = new String('hello World');
console.log(typeof (str1));
console.log(str1.length);
console.log(str == str1);
const name = 'Amitav';
const message = ` This is my
  first message ${name} `;
console.log(message);

//Date Object...........
const now = new Date();
const date = Date(2021, 9, 24, 11, 9);

/// Excercise...
const address = {
  street: 'Mahinagar',
  City: 'Malda',
  Zipcode: '733124',
};
function showAddress(address) {
  for (let key in address) {
    console.log(key, address[key]);
  }
}
showAddress(address);

// factory function
function createAddress(street,city,zipcode){
  return {street,city,zipcode};
}
let adds = createAddress('a','b','v');
console.log(adds);

//  constructor function
function CreateAddress(street,city,zipcode){
  this.street= street;
  this.City = city;
  this.zipcode = zipcode;
}
let adds1 = new CreateAddress('ab','bc','sd');
let adds2 = new CreateAddress('ab','bc','sd');
// console.log(adds1);
function areEqual(adds1,adds2){
  let flag = true;
  for(let key in adds1){
    if(adds1[key]===adds2[key]){
      flag = true;
    }else{
      return false;
    }
  }
  return flag;
}
console.log(areEqual(adds1,adds2));
function areSame(adds1,adds2){
  return adds1 ===adds2
}
console.log(areSame(adds1,adds2));

// Object litaral 
// const post = {
//   title:'a',
//   body :'b',
//   author:'xxx',
//   views : 1200,
//   comments :[
//     {author:'aaa',body:'avda'},
//   ],
//   isAlive:[true,false]
// };

function Post (title,body,author){
  this.title =title;
  this.body = body;
  this.author = author;
  this.view = 0;
  this.comments = [];
  this.isAlive = false;

}
let post = new Post('a','b','xxx');
console.log(post);

let priceRange =[
  {}
]