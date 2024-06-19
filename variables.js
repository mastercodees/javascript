// console.log(person.address.city);

//  console.log(Object.keys(person));
//  console.log(Object.values(person));
//  console.log(JSON.stringify(person));

//  var isAdult = false;

//  if(!isAdult){

//     console.log("you are a child");
//  }
//  else{
//     console.log("is adult: welcome");
//  }
// function addNumber(a , b){
//     var addition = a + b;
//     return addition;
// }

// console.log(addNumber(70,10))
// console.log(addNumber(71,10))

//  var names = ["vladmir","Preston","Lewis","Kevin","Khameri"];

//  for(const name of names){
//     console.log(name)
//  }

//  names.forEach(function(name){
//     console.log(name)})
// var index =  0;
// while(index<names.length){
//     console.log(names[index]);
//     index++;
// }
// var number1 = 0;
// var number2 = ++number1;
// console.log(number2)

// var number = 6;

// var result = number % 2 == 0 ? 'Even' : 'Odd';

// console.log(result);
// console.log("0" * 1);

// const add = (a,b) => a+b;
// console.log(add(10,12));
// const greetUser = (userName,callback) =>{
//     console.log(callback(userName));
// }
// greetUser("james", (userName)=>{
//     return `hello ${userName}`
// });

// address={
//     city: "London",
//     postCode:"SW9"
// };

// const person = {
//     ...jamila,
//     ...address
// };

// console.log(person)
//  const calculator = (brand,price) => ({
//     brand,
//     price
//  })

//  const casio = calculator("casio",100);
//  console.log(casio);
// const brandProp = "BRAND"
// const calculator = (brand,price) => ({
//     [brandProp.toLocaleLowerCase()]:brand,
//     price,
//     getDiscount(){
//         return this.price - (this.price * .30)
//     }
// });

// const casio = calculator("casio",100);

// console.log(casio)
// console.log(casio.getDiscount())

// const person = {
//     firstName: "Jamila",
//     cars: ["Tesla","Ferrari"],

//     toString: function(){
//         console.log(`Name: ${this.firstName}`)
//         // const that = this;
//         this.cars.forEach (car => {
//             console.log(`Name: ${this.firstName} Drives ${car}`)
//         })
//     }

// };

// person.toString();

// const numberMultipliedByTwo = numbers.map(number => number*2);
// console.log(numberMultipliedByTwo);
// const numbers = [1,2,3,4,5];

// const result = numbers.reduce((accumulator,current) =>{
//      return  accumulator - current
// })

// console.log(result);

// const names = [
//     "james",
//     "Mariam",
//     "Jamal",
//     "Aisha",
//     "Juma"
// ];

// [james,mariam,jamal,...rest] = names;

// console.log(james);
// console.log(mariam);
// console.log(jamal);
// console.log(rest);

// const person = {
//    firstName: "James",
//    age:2
// };

// console.log(person)

// const person2 = new Map();
// person2.set('firstName',"James")
// person2.set({age: 'foo'},2)

//  console.log(person2)
let javascriptIsFun = true;
console.log(typeof javascriptIsFun);
