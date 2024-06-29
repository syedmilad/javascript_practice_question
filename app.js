// async function fetchData(){
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//         if(response.status === 200){
//             const data = await response.json();
//            const someElement = data.filter((item)=> item.id < 10)

//            console.log(someElement)

//         }
//     } catch (error) {
//         console.error(error)
//     }
// }
// fetchData()

// Print the last item in array - JS Arrays

// function toGetRandomArray() {
//   const getRandomGenera = Math.floor(Math.random() * 100);
//   let authArray = [];
//   for (let i = 0; i < getRandomGenera; i++)
//     authArray.push(Math.floor(Math.random() * 100));
//   return authArray;
// }

// const rArray = toGetRandomArray();
// function toLastOne(array){
//     return array[array.length -1 ]
// }
// console.log(toLastOne(rArray))

// fixed amount of looping
// const arary = [1,2,3,4,5,6,7,7,8,90]
// for (let index = 0; index < arary.length; index++) {
//     console.log("array of element",arary[index])
// }

// for (let index = 0; index < 10; index++) {
// console.log(index)
// }

// let element = []
// for (let index = 0; index < 10; index++) {
//   element.push(Math.floor(Math.random() * 10))
// }
// console.log(element)

// Loop and array in reverse (from the last item to the first one) - JS Arrays

// const array = [1,2,3,4,6,7,8];
// const lastElement = array.length - 1;
// const oneElement = 0;
// for (let index = lastElement; index >= oneElement; index--) {
//   console.log(array[index])
// } 

// const strings = "Milad";

// function reverse(string){
//   let reverse = []
//   const splitStr = string.split("");
//   for (let index = splitStr.length - 1; index >= 0 ; index--) {
//     const element = splitStr[index];
//     reverse.push(element)
//   }
//   return reverse
// }

// const reverseFunc = reverse('miladf')
// console.log(reverseFunc)

// Loop Loop array from the middle to the end - JS Arrays

// function toGetRandomArray() {
//   const getRandomGenera = Math.floor(Math.random() * 40);
//   let authArray = [];
//   for (let i = 0; i < getRandomGenera; i++)
//     authArray.push(Math.floor(Math.random() * 40));
//   return authArray;
// }

// const randomNumber = toGetRandomArray();

// const initialValue = randomNumber.length / 2;
// const stopValue = randomNumber.length;

// for (let index = initialValue; index < stopValue; index++) {
//   const element = randomNumber[index];
//   console.log(element)
// }

// console.log(randomNumber)

// function reverseMyOwnFunction(params) {
//   const array = ['milad','faiz','mhamil','mubarram'];
// const lastArrayElement = array.length - 1;
// const startingValue = 0;


// let reverse = []
// for (let index = lastArrayElement; index >= 0; index--) {
//   reverse.push(array[index])
// }
// console.log(reverse);
// }

// reverseMyOwnFunction()

// const waldoGamePeople = [
//   "Waldo",
//   "Wenda",
//   "Wizard Whitebeard",
//   "Odlaw",
//   "Woof",
//   "Wilma",
//   "The Wally Watchers",
//   "The Waldo Watchers",
//   "The Gobbling Gluttons",
//   "The Battling Monks",
//   "The Deep-Sea Divers",
//   "The Fantastic Flowerpot Men"
// ];

// for (let index = 0; index < waldoGamePeople.length; index++) {
//   const element = waldoGamePeople[index];
//   if(element.includes("Waldo")){
//     console.log("Yes! There is Waldon person.")
//     break;
//   }
//     else console.log("Not Found!")
// }

// Count letter repetitions/occurrences in string in javascript JS Arrays


// const paraWithoutSpace = para.replace(/\s/g, '');
// const letterOfPara = paraWithoutSpace.split("")

// const obj = {};

// for (let index = 0; index < letterOfPara.length; index++) {
//   const element = letterOfPara[index];
  
//   if(obj[element] === undefined) obj[element] = 1
//   else obj[element] = obj[element] + 1
// }

// console.log(obj)

// const para = "ipsum dolor sit amet consectetur, adipisicing elit. Dolor necessitatibus vero soluta illum aspernatur a, minima id magni molestias vitae sint, cumque modi quae aperiam assumenda suscipit, consequatur rerum exercitationem harum nostrum ducimus voluptatem corrupti repellat. Ipsa eaque neque quam harum odit molestiae culpa adipisci maiores, consectetur, similique provident ex. Voluptas asperiores nisi id praesentium eligendi, obcaecati beatae quae culpa distinctio molestiae nam quo? At eveniet incidunt minus iure? Quae sequi repellendus adipisci ipsa deleniti ex aliquid minima, quod aperiam distinctio illo obcaecati non, aspernatur id soluta tenetur quaerat iste dignissimos asperiores molestias rerum accusamus magnam neque consequuntur. Deserunt obcaecati illo assumenda! Neque aperiam quibusdam saepe facere odit consequuntur nemo expedita sit iusto eum repellendus unde, quas et provident. Similique illum voluptate dolorum quasi aliquam, nemo, neque nam id quidem praesentium magni nobis pariatur perspiciatis totam voluptates sequi harum qui sint sit, magnam possimus adipisci quisquam! Impedit, magni. Minima, eos."

// const count = {};

// for (const p in para) {
//   const letter = para[p]
//  if(para[p] === " "){
//   continue
//  }
//  else if(count[letter] === undefined) count[letter] = 1
//  else count[letter] = count[letter]  + 1
// }

// let item = []
// for (const [key,val] of Object.entries(count)) {
//   if(Number.isFinite(val)){
//     item.push(val)
//   }
// }
// console.log("item",item)

// fliping an array

// const string_array = ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape", "honeydew"];

// const lastElementOfArray = string_array.length - 1;
// let new_strings_array = []
// for (let index = lastElementOfArray; index >= 0; index--) {
//   const element = string_array[index];
//   new_strings_array.push(element)
// }
// console.log(new_strings_array)

// let mixed_array = ["apple", 42, true, "banana", 3.14, false, "cherry", 100, true];
// let newMixedArrayWithType = []

// for (let index = 0; index < mixed_array.length; index++) {
//   const element = mixed_array[index];
//   newMixedArrayWithType.push(typeof element)
// }

// console.log(newMixedArrayWithType);

// Write a function that takes an array as argument. It should return true if all elements in the array are equal. It should return false otherwise.

// const array = [true, true, true, true];

// const result = array.every((item) => {
//    return  item === true;
// });

// console.log(result); // Output: true