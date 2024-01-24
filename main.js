// number methods
// let a = "15"
// console.log(
//     typeof(a)
// );
// // --a
// a++
// console.log(a);
// console.log(
//     typeof(a)
// );

// parsInt()
// parsFloat()

// let a = "15.554588949"
// console.log(a);
// let b = parseInt(a) // nuqtadan keyingi sonini numberga utkazmaydi (15.5 === 15)
// let y = parseFloat(a) // to'liq stringni numberga utkazadi (15.5 === 15.5)
// console.log(b);
// console.log(y);

// Math methods

// let a = 15.5;
// console.log(a, " default");

// let b = Math.floor(a); // numberni pastga butun qiladi (15.9 === 15)
// let d = Math.ceil(a); // numberni tepaga butun qiladi (15.1 === 16)
// let r = Math.round(a) // numberni logichni butun qiladi (15.9 === 16 // 15.4 === 15)

// console.log(b);
// console.log(d);
// console.log(r);

// let rnd = Math.random() // randomni raqamlar qaytaradi (0.18916484649)

// let rnd = Math.round(Math.random() * 999)/

// let max = Math.max(8, 84, 6, 28, 32, 28, 5, 29);
// let min = Math.min(8, 84, 6, 28, 32, -28, 5, 29, 0);

// console.log(max);
// console.log(min);

// let f = Math.pow(5, 5);

// console.log(f);

// ogohlantiruvchilar // alert() / confirm() / prompt()

// alert('salom')

// let a = confirm("yoshing 18 dami ?")

// let a =  prompt('write your name below')
// let age = +prompt('how old are you ?')
// alert('natija')
// // let b = parseInt(age)
// console.log(a);
// console.log(age);

// let a = 15
// let b = 25

// console.log(
//     a / b
// );

// types of variables  number / string / boolean / object / undefined / null
// NaN = not a number / undefined

// let a = 20
// let b = "salom"

// let c = 20;

// let g = null ;

// // boolean = true / false

// console.log(
//     c == a
// );

// let a = alert("salom");
// let b = confirm("darsimiz bohlandimi?");
// let c = prompt("what is your name ?");

// console.log(c);

// console.log(a);
// console.log(b);

// let namsdase = +prompt("what is your name");

// let varianOne = parseInt(name)
// let varianTwo = parseFloat(name)

// console.log(name);

// if else //

// if(shart) {
//     // true
// } else {
//     // false
// }

// let number = +prompt();

// if (number > 50) {
//   console.log("katta");
// } else {
//   console.log("kichik");
// }

// if (a == 10) {
//   console.log("10");
// } else if (a == 9) {
//   console.log("9");
// } else if (a == 100) {
//   console.log("5");
// } else {
//   console.log("xato");
// }

// if (a == 10) {
//     console.log("a to'g'ri");
//     if(b == 15) {
//         console.log("to'g'ri");
//     } else {
//         console.log("b xato");
//     }
// } else {
//     console.log('a da xato');
// }

// alert("to'g'ri")

// if (name == "Sarvar") {
//   console.log("Welcome");
// } else if (name == "Davlat") {
//   console.log("Welcome");
// } else {
//   console.log("Good bye");
// }

// if (age > 18) {
//   console.log("welcome ", name);
// } else {
//   console.log("good bye ", name);
// }

// let balance = 10000

// let name = +prompt("chqa giram");

// console.log(
//     balance - name
// );

// console.log(name);

// if (name == "Sarvar") {
//   let age = +prompt("how old are you ?");

//   if (age > 18) {
//     console.log("welcome ", name);
//   } else {
//     console.log("good bye ", name);
//   }
// } else {
//   console.log("Good bye");
// }

// let name = "Alex";
// let money = 10000;
// let account = 7777;

// let a = prompt("what is your name ?");

// if (a == name) {
//   let b = +prompt("write number of the cart ?");

//   if (b == account) {
//     let c = +prompt("how much money withdraw ?");

//     if (c <= money) {
//       alert(`Yechib olindi: ${c} $
// Qoldi: ${money - c} $`);
//     } else {
//       alert("hisobingda yetarlicha mablag' mavjud emas ! ");
//     }
//   } else {
//     alert("user is not defined !!!");
//   }
// } else {
//   alert("user is not defined !!!");
// }

// let a = "salom";
// let c = "ismim";

// console.log(a + " " + "mening" + " " + c + " " + "Davlatshoh");
// console.log(`${a} mening ${c} Davlatshoh`);

// if (&& , ||)

// let a = 80;
// let b = "salom";

// // if (a <= 15 && b == "salom") {
// //   console.log("good");
// // } else {
// //   console.log("bad");
// // }

// if (a <= 15 || b == "salom") {
//   console.log("good");
// } else {
//   console.log("bad");
// }

// let a = "salom"
// // a.toLowerCase

// let name = prompt("what is your name ?");
// let age = +prompt("how old are you ?");
// let money = +prompt("how much money do you have ?");

// if (name.toLowerCase().charAt(0) == "a" && age > 20 && age < 40 && money >= 100 ) {
//     console.log("good");
// } else {
//     alert("go home ")
// }

// object // array

// let / var / const = key

// key name = {
//     key: value
// }

// let smartphone = {
//   name: "Redmi note 13 ",
//   kamera: "200 mp",
//   memory: "128 gb",
//   ram: "8gb + 8gb",
//   color: "black",
//   model: "Redmi",
//   price: "300 $",
//   year: 2024,
//   batery: "6000 mAh",
// };

// let name = "redmi"
// let kamera = "200mp"
// let battery = 5000

// smartphone.year = 2025
// smartphone.color = "purpule"

// smartphone.ekran = "90 ghg"
// console.log(smartphone);

// console.log(
//     smartphone.model,
//     smartphone.batery
// );

// let user = {
//   name: "Ahmed",
//   age: 18,
//   gender: "male",
//   email: "ahmed@gmail.com",
//   password: "8888",
//   adress: {
//     country: "Uzbekistan",
//     city: "Samarkand",
//     street: "Yoshlar markazi",
//     house: "50 uy",
//   },
//   work: {
//     company: "Wepro",
//     lavozim: "teacher"
//   },
//   isMarried: false
// };

// console.log(user.work.lavozim);

// array

// key name = [any]

// let arr = [
//   "Davlatshoh",
//   24,
//   "Miranshoh",
//   "Sarvar",
//   true,
//   false,
//   undefined,
//   null,
//   15,
//   15,
//   84,
//   816,
//   186,
//   18,
//   [
//     [
//       [
//         {},
//         {},
//         {
//           name: [],
//         },
//       ],
//     ],
//   ],
// ];

// let a = [
//   [],
//   [],
//   [
//     {
//       name: "Davlatshoh",
//     },
//   ],
// ];

// console.log(a[2][0].name);

// let t = [
//   [
//     [],
//     [],
//     [
//       [
//         {
//           a: [
//             {
//               name: "Davlatshoh",
//             },
//           ],
//         },
//       ],
//     ],
//     [
//       [
//         {
//           say: "salom",
//         },
//       ],
//     ],
//     [],
//     [
//       {
//         f: "mening ismim",
//       },
//     ],
//   ],
// ];

// console.log(t);

// let arr = [
//   [{ a: { price: 20 } }],
//   [{ a: { price: 35 } }],
//   [{ a: { price: 44 } }],
// ];

// let a = arr[0][0].a.price;
// let b = arr[1][0].a.price;
// let c = arr[2][0].a.price;

// let total = a + b + c;

// console.log(total);

// array methods

// let obj = {
//   name: "Davlatshoh",
// };

// obj.sername = "Pardaqulov"

// console.log(obj);

// arr[2] = 1999

// qushish

// arr.push("Davlatshoh", 1999, 78984, true);
// arr.unshift("Sarvar", "Islom");

// ayrish

// arr.shift()
// arr.shift()
// arr.pop()
// arr.pop()

// let a = arr.splice(3, 1)
// arr.splice(0, 1, "salom")

// search
// let arr = [15, 15, 1581, 1818, 48, 4684, 8186, 1];
// let arrTwo = [
//   "salom",
//   "Davlatshoh",
//   "Sarvar",
//   "salom",
//   "Islom",
//   "salom",
//   "hello",
//   "salom",
// ];

// // let a =  arr.indexOf(1581)
// // let b = arr.length
// // let h = arr.concat('Hello', arrTwo)

// // let filtered = arr.filter((item) => {
// //   if (item > 100) {
// //     return item;
// //   }
// // });

// // let filter = arr.filter((item) => item > 100);
// // let t = arrTwo.filter((item) => item == "salom");

// // console.log(arr);
// // console.log(filtered);
// // console.log(filter);
// // console.log(t);

// // console.log(arrTwo);
// // // console.log(a);
// // console.log(b);

// // console.log(h);

// let numbers = [1000, 40, 75, 80, 9, 3, 1, 0, 4];

// // let s = numbers.sort();

// // let u = numbers.sort((a, b) => {
// //   return a - b;
// // });

// // console.log(numbers);
// // console.log(s);
// // console.log(u);

// let total = numbers.reduce((item, prev) => {
//     return item += prev
// }, 0)

// console.log(total);

// let arrCars = [
//   {
//     name: "BMW",
//     price: "135 000 $",
//     color: "black",
//     year: 2023,
//   },
//   {
//     name: "BMW",
//     price: "135 000 $",
//     color: "black",
//     year: 2023,
//   },
//   {
//     name: "BMW",
//     price: "135 000 $",
//     color: "black",
//     year: 2023,
//   },
//   {
//     name: "BMW",
//     price: "135 000 $",
//     color: "black",
//     year: 2023,
//   },
//   {
//     name: "BMW",
//     price: "135 000 $",
//     color: "black",
//     year: 2023,
//   },
//   {
//     name: "BMW",
//     price: "135 000 $",
//     color: "black",
//     year: 2023,
//   },
//   {
//     name: "BMW",
//     price: "135 000 $",
//     color: "black",
//     year: 2023,
//   },
//   {
//     name: "BMW",
//     price: "135 000 $",
//     color: "black",
//     year: 2023,
//   },
//   {
//     name: "BMW",
//     price: "135 000 $",
//     color: "black",
//     year: 2023,
//   },
// ]

// let numbers = [5, 15, 51, 84, 84];
// let a = "Davlatshoh"

// numbers.unshift(15,18,81, "salom", "hello", a)

// console.log(
//   numbers
// );

// let juft = [];
// let salom = [];
// let toq = [];
// for (let i = 0; i < arr.length; i++) {
//   console.log(i);
//   console.log(arr[i]);

//   if (arr[i] % 2 === 0) {
//     juft.push(arr[i]);
//   } else {
//     toq.push(arr[i]);
//   }
// }

// for (let item of arr) {
//   console.log(item);

//   if (item == "salom") {
//     salom.push(item);
//   }
// }

// for(let index in arr) {
//   console.log(index);
// }

// console.log(juft);
// console.log(toq);
// console.log(salom);

// let a = [];
// let b = [];

// for (let i = 0; i < 10; i++) {
//   console.log("birinchi loop" + " " + i);

//   for (let k = 0; k < 5; k++) {
//     console.log("ikkinchi loop" + " " + k);
//   }
// }

// let cars = [
//   {
//     id: Math.random(),
//     name: "Damas",
//     company: "Chevrolet",
//   },
//   {
//     id: Math.random(),
//     name: "Nexia 3",
//     company: "Ravon",
//   },
//   {
//     id: Math.random(),
//     name: "Spark",
//     company: "Ravon",
//   },
//   {
//     id: Math.random(),
//     name: "Lacetti",
//     company: "Chevrolet",
//   },
//   {
//     id: Math.random(),
//     name: "BMW x6",
//     company: "BMW",
//   },
//   {
//     id: Math.random(),
//     name: "BMW m5",
//     company: "BMW",
//   },
// ];

// let companyes = [
//   {
//     company: "BMW",
//     count: 0,
//   },
//   {
//     company: "Chevrolet",
//     count: 0,
//   },
//   {
//     company: "Ravon",
//     count: 0,
//   },
// ];

// for (let item of cars) {
//   // console.log(item);

//   for (let com of companyes) {
//     console.log(com);

//     if (item.company === com.company) {
//       com.count++;
//     }
//   }
// }

// console.log(companyes);

// let arr = [4, 16, 19, "salom", 22, 11, "salom", 144, 967, "salom", 19124];

// let index = +prompt("any number");

// arr.splice(index, 1)

// console.log(index);
// console.log(arr);

// let arr = [
//   {
//     id: Math.random(),
//     name: "Timur",
//     info: {
//       school: "235",
//       faculity: "SMM",
//     },
//   },
//   {
//     id: Math.random(),
//     name: "Imran",
//     info: {
//       school: "ne izvestno",
//       faculity: "programming",
//     },
//   },
//   {
//     id: Math.random(),
//     name: "Aminjon",
//     info: {
//       school: "444",
//       faculity: "Dizayn",
//     },
//   },
//   {
//     id: Math.random(),
//     name: "Maxmud",
//     info: {
//       school: "777",
//       faculity: "3dsmax",
//     },
//   },
//   {
//     id: Math.random(),
//     name: "Muxammad",
//     info: {
//       school: "5555",
//       faculity: "Backend",
//     },
//   },
//   {
//     id: Math.random(),
//     name: "Timur",
//     info: {
//       school: "235",
//       faculity: "SMM",
//     },
//   },
//   {
//     id: Math.random(),
//     name: "Imran",
//     info: {
//       school: "ne izvestno",
//       faculity: "programming",
//     },
//   },
//   {
//     id: Math.random(),
//     name: "Aminjon",
//     info: {
//       school: "444",
//       faculity: "Dizayn",
//     },
//   },
//   {
//     id: Math.random(),
//     name: "Maxmud",
//     info: {
//       school: "777",
//       faculity: "3dsmax",
//     },
//   },
//   {
//     id: Math.random(),
//     name: "Maxmud",
//     info: {
//       school: "777",
//       faculity: "3dsmax",
//     },
//   },
//   {
//     id: Math.random(),
//     name: "Muxammad",
//     info: {
//       school: "5555",
//       faculity: "Backend",
//     },
//   },
// ];

// let categories = [
//   {
//     course: " SMM",
//     count: 0,
//   },
//   {
//     course: "PROGRAMMING",
//     count: 0,
//   },
//   {
//     course: "     3DSMAX",
//     count: 0,
//   },
//   {
//     course: " DIZAYN",
//     count: 0,
//   },
//   {
//     course: "   BACKEND",
//     count: 0,
//   },
// ];

// console.log(categories);

// let obj = {
//   a: 1,
//   b: 2
// }

// let names = ["Alex", "Alisa", "John", "Johnson", "George"];
// let obj = [];

// for (let item of names) {
//   let a = {};

//   a.name = item;

//   obj.push(a);
// }

// console.log(obj);

// let b = ["a", "b", "c", "d", "e", "f", "j", "h", "r"];
// let c = [];

// for (let i = 0; i < a.length; i++) {
//   for (let k = 0; k < b.length; k++) {
//     let obj = {};
//     let h = b[k]

//     obj[h] = a[i];
//     console.log(obj);

//     break

//   }

// }

// let a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let numbers = [];

// for (let i = 0; i < a.length; i++) {
//   console.log(a[i]);
//   if (a[i] < 5) {
//     // break;
//     // numbers.push(a[i])
//     // continue
//     // console.log(a);
//     // return console.log("salom");
//   }
//   // continue
// }

// console.log(numbers);
// let y = "salom";

// function sayHi(a, b, ...arg) {
//   console.log(a.lenght);
//   // if() {

//   // } else if() {

//   // } else {

//   // }
// }

// y = "Hello";

// sayHi(
//   "Davlatshoh",
//   1,
//   255,
//   54,
//   848,
//   84,
//   8,
//   484,
//   84,
//   8,
//   48,
//   48,
//   78,
//   748,
//   8,
//   47,
//   48
// );

// console.log(y);
// sayHi()

// let b = 10;

// function sayHi() {
//   // let a = prompt("what is your name ?");
//   let c = 15;
//   b = 15;

//   // console.log("hello", a);
// }

// // console.log(a);

// sayHi();

// function param(a, b, ...c) {
//   console.log(a, b, c);
// }

// param(a, 25, 84, 84, 48, 487, 484, 9, 9, 48, 4, 9, 49, 4, true, false, undefined, null, "salom");

// let a = +prompt("wdokdifoejr[ifm[ efj osajfp aseoipa jfp ojpesjm")
// console.log("salom");

// let numOne = +prompt("number 1");
// let numTwo = +prompt("number 2");

// function algo(a, b) {
//   console.log(a + b, "+");
// }

// algo(numOne, numTwo);

// if () {

// } else if() {

// } else {

// }

// Отфильтровать задачи в переменные а и b
// Сохранить количество в ключе count
// Сохранить сами задачи в массиве-ключе arr

let arr = [
  {
    userId: 1,
    id: 1,
    title: "delectus aut au`tem",
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false,
  },
  {
    userId: 1,
    id: 3,
    title: "fugiat veniam minus",
    completed: false,
  },
  {
    userId: 1,
    id: 4,
    title: "et porro tempora",
    completed: true,
  },
  {
    userId: 1,
    id: 5,
    title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
    completed: false,
  },
  {
    userId: 1,
    id: 6,
    title: "qui ullam ratione quibusdam voluptatem quia omnis",
    completed: false,
  },
  {
    userId: 1,
    id: 7,
    title: "illo expedita consequatur quia in",
    completed: false,
  },
  {
    userId: 1,
    id: 8,
    title: "quo adipisci enim quam ut ab",
    completed: true,
  },
  {
    userId: 1,
    id: 9,
    title: "molestiae perspiciatis ipsa",
    completed: false,
  },
  {
    userId: 1,
    id: 10,
    title: "illo est ratione doloremque quia maiores aut",
    completed: true,
  },
];
let a = {
  count: 0,
  arr: [],
};

let b = {
  count: 0,
  arr: [],
};

// console.log(a, b);

let products = [
  {
    id: 1,
    name: "apple",
    price: 5000,
    skitka: 5,
  },
  {
    id: 2,
    name: "orange",
    price: 4500,
    skitka: 15,
  },
  {
    id: 3,
    name: "srowbery",
    price: 8000,
    skitka: 50,
  },
  {
    id: 4,
    name: "cherry",
    price: 9500,
    skitka: 23,
  },
  {
    id: 5,
    name: "banan",
    price: 8560,
    skitka: 16,
  },
  {
    id: 6,
    name: "limon",
    price: 5000,
    skitka: 18,
  },
];

let total = 0;

for (let item of products) {
  //   total = total + item.price;
  total += item.price;
}

// console.log(total);

let numbers = [684, 8489, 4, 894, 8, 4, 944, 4849, 4, 84, 9, 8, 4, 98, 4, 0];

let sum = numbers.reduce((item, prev) => {
  return (item += prev);
}, 0);

// console.log(sum);

let max = Math.max(...numbers);
let min = Math.min(...numbers);

// console.log(max);
// console.log(min);

function maxName(...a) {
  let maxN = [];

  for (let item of a) {
    maxN.push(item.length);
  }

  console.log(maxN);

  console.log(a);
}

maxName("Davlatshoh", "Sarvar", "Alex");

let h = [
  {
    name: "iPhone",
    price: 1250,
    skitka: 13,
  },
];


let skidka = h[0].price / 100 * h[0].skitka
h[0].sumSkidka = h[0].price - skidka

console.log(skidka);
console.log(h);