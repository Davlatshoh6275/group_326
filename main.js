// // number methods
// // let a = "15"
// // console.log(
// //     typeof(a)
// // );
// // // --a
// // a++
// // console.log(a);
// // console.log(
// //     typeof(a)
// // );

// // parsInt()
// // parsFloat()

// // let a = "15.554588949"
// // console.log(a);
// // let b = parseInt(a) // nuqtadan keyingi sonini numberga utkazmaydi (15.5 === 15)
// // let y = parseFloat(a) // to'liq stringni numberga utkazadi (15.5 === 15.5)
// // console.log(b);
// // console.log(y);

// // Math methods

// // let a = 15.5;
// // console.log(a, " default");

// // let b = Math.floor(a); // numberni pastga butun qiladi (15.9 === 15)
// // let d = Math.ceil(a); // numberni tepaga butun qiladi (15.1 === 16)
// // let r = Math.round(a) // numberni logichni butun qiladi (15.9 === 16 // 15.4 === 15)

// // console.log(b);
// // console.log(d);
// // console.log(r);

// // let rnd = Math.random() // randomni raqamlar qaytaradi (0.18916484649)

// // let rnd = Math.round(Math.random() * 999)/

// // let max = Math.max(8, 84, 6, 28, 32, 28, 5, 29);
// // let min = Math.min(8, 84, 6, 28, 32, -28, 5, 29, 0);

// // console.log(max);
// // console.log(min);

// // let f = Math.pow(5, 5);

// // console.log(f);

// // ogohlantiruvchilar // alert() / confirm() / prompt()

// // alert('salom')

// // let a = confirm("yoshing 18 dami ?")

// // let a =  prompt('write your name below')
// // let age = +prompt('how old are you ?')
// // alert('natija')
// // // let b = parseInt(age)
// // console.log(a);
// // console.log(age);

// // let a = 15
// // let b = 25

// // console.log(
// //     a / b
// // );

// // types of variables  number / string / boolean / object / undefined / null
// // NaN = not a number / undefined

// // let a = 20
// // let b = "salom"

// // let c = 20;

// // let g = null ;

// // // boolean = true / false

// // console.log(
// //     c == a
// // );

// // let a = alert("salom");
// // let b = confirm("darsimiz bohlandimi?");
// // let c = prompt("what is your name ?");

// // console.log(c);

// // console.log(a);
// // console.log(b);

// // let namsdase = +prompt("what is your name");

// // let varianOne = parseInt(name)
// // let varianTwo = parseFloat(name)

// // console.log(name);

// // if else //

// // if(shart) {
// //     // true
// // } else {
// //     // false
// // }

// // let number = +prompt();

// // if (number > 50) {
// //   console.log("katta");
// // } else {
// //   console.log("kichik");
// // }

// // if (a == 10) {
// //   console.log("10");
// // } else if (a == 9) {
// //   console.log("9");
// // } else if (a == 100) {
// //   console.log("5");
// // } else {
// //   console.log("xato");
// // }

// // if (a == 10) {
// //     console.log("a to'g'ri");
// //     if(b == 15) {
// //         console.log("to'g'ri");
// //     } else {
// //         console.log("b xato");
// //     }
// // } else {
// //     console.log('a da xato');
// // }

// // alert("to'g'ri")

// // if (name == "Sarvar") {
// //   console.log("Welcome");
// // } else if (name == "Davlat") {
// //   console.log("Welcome");
// // } else {
// //   console.log("Good bye");
// // }

// // if (age > 18) {
// //   console.log("welcome ", name);
// // } else {
// //   console.log("good bye ", name);
// // }

// // let balance = 10000

// // let name = +prompt("chqa giram");

// // console.log(
// //     balance - name
// // );

// // console.log(name);

// // if (name == "Sarvar") {
// //   let age = +prompt("how old are you ?");

// //   if (age > 18) {
// //     console.log("welcome ", name);
// //   } else {
// //     console.log("good bye ", name);
// //   }
// // } else {
// //   console.log("Good bye");
// // }

// // let name = "Alex";
// // let money = 10000;
// // let account = 7777;

// // let a = prompt("what is your name ?");

// // if (a == name) {
// //   let b = +prompt("write number of the cart ?");

// //   if (b == account) {
// //     let c = +prompt("how much money withdraw ?");

// //     if (c <= money) {
// //       alert(`Yechib olindi: ${c} $
// // Qoldi: ${money - c} $`);
// //     } else {
// //       alert("hisobingda yetarlicha mablag' mavjud emas ! ");
// //     }
// //   } else {
// //     alert("user is not defined !!!");
// //   }
// // } else {
// //   alert("user is not defined !!!");
// // }

// // let a = "salom";
// // let c = "ismim";

// // console.log(a + " " + "mening" + " " + c + " " + "Davlatshoh");
// // console.log(`${a} mening ${c} Davlatshoh`);

// // if (&& , ||)

// // let a = 80;
// // let b = "salom";

// // // if (a <= 15 && b == "salom") {
// // //   console.log("good");
// // // } else {
// // //   console.log("bad");
// // // }

// // if (a <= 15 || b == "salom") {
// //   console.log("good");
// // } else {
// //   console.log("bad");
// // }

// // let a = "salom"
// // // a.toLowerCase

// // let name = prompt("what is your name ?");
// // let age = +prompt("how old are you ?");
// // let money = +prompt("how much money do you have ?");

// // if (name.toLowerCase().charAt(0) == "a" && age > 20 && age < 40 && money >= 100 ) {
// //     console.log("good");
// // } else {
// //     alert("go home ")
// // }

// // object // array

// // let / var / const = key

// // key name = {
// //     key: value
// // }

// // let smartphone = {
// //   name: "Redmi note 13 ",
// //   kamera: "200 mp",
// //   memory: "128 gb",
// //   ram: "8gb + 8gb",
// //   color: "black",
// //   model: "Redmi",
// //   price: "300 $",
// //   year: 2024,
// //   batery: "6000 mAh",
// // };

// // let name = "redmi"
// // let kamera = "200mp"
// // let battery = 5000

// // smartphone.year = 2025
// // smartphone.color = "purpule"

// // smartphone.ekran = "90 ghg"
// // console.log(smartphone);

// // console.log(
// //     smartphone.model,
// //     smartphone.batery
// // );

// // let user = {
// //   name: "Ahmed",
// //   age: 18,
// //   gender: "male",
// //   email: "ahmed@gmail.com",
// //   password: "8888",
// //   adress: {
// //     country: "Uzbekistan",
// //     city: "Samarkand",
// //     street: "Yoshlar markazi",
// //     house: "50 uy",
// //   },
// //   work: {
// //     company: "Wepro",
// //     lavozim: "teacher"
// //   },
// //   isMarried: false
// // };

// // console.log(user.work.lavozim);

// // array

// // key name = [any]

// // let arr = [
// //   "Davlatshoh",
// //   24,
// //   "Miranshoh",
// //   "Sarvar",
// //   true,
// //   false,
// //   undefined,
// //   null,
// //   15,
// //   15,
// //   84,
// //   816,
// //   186,
// //   18,
// //   [
// //     [
// //       [
// //         {},
// //         {},
// //         {
// //           name: [],
// //         },
// //       ],
// //     ],
// //   ],
// // ];

// // let a = [
// //   [],
// //   [],
// //   [
// //     {
// //       name: "Davlatshoh",
// //     },
// //   ],
// // ];

// // console.log(a[2][0].name);

// // let t = [
// //   [
// //     [],
// //     [],
// //     [
// //       [
// //         {
// //           a: [
// //             {
// //               name: "Davlatshoh",
// //             },
// //           ],
// //         },
// //       ],
// //     ],
// //     [
// //       [
// //         {
// //           say: "salom",
// //         },
// //       ],
// //     ],
// //     [],
// //     [
// //       {
// //         f: "mening ismim",
// //       },
// //     ],
// //   ],
// // ];

// // console.log(t);

// // let arr = [
// //   [{ a: { price: 20 } }],
// //   [{ a: { price: 35 } }],
// //   [{ a: { price: 44 } }],
// // ];

// // let a = arr[0][0].a.price;
// // let b = arr[1][0].a.price;
// // let c = arr[2][0].a.price;

// // let total = a + b + c;

// // console.log(total);

// // array methods

// // let obj = {
// //   name: "Davlatshoh",
// // };

// // obj.sername = "Pardaqulov"

// // console.log(obj);

// // arr[2] = 1999

// // qushish

// // arr.push("Davlatshoh", 1999, 78984, true);
// // arr.unshift("Sarvar", "Islom");

// // ayrish

// // arr.shift()
// // arr.shift()
// // arr.pop()
// // arr.pop()

// // let a = arr.splice(3, 1)
// // arr.splice(0, 1, "salom")

// // search
// // let arr = [15, 15, 1581, 1818, 48, 4684, 8186, 1];
// // let arrTwo = [
// //   "salom",
// //   "Davlatshoh",
// //   "Sarvar",
// //   "salom",
// //   "Islom",
// //   "salom",
// //   "hello",
// //   "salom",
// // ];

// // // let a =  arr.indexOf(1581)
// // // let b = arr.length
// // // let h = arr.concat('Hello', arrTwo)

// // // let filtered = arr.filter((item) => {
// // //   if (item > 100) {
// // //     return item;
// // //   }
// // // });

// // // let filter = arr.filter((item) => item > 100);
// // // let t = arrTwo.filter((item) => item == "salom");

// // // console.log(arr);
// // // console.log(filtered);
// // // console.log(filter);
// // // console.log(t);

// // // console.log(arrTwo);
// // // // console.log(a);
// // // console.log(b);

// // // console.log(h);

// // let numbers = [1000, 40, 75, 80, 9, 3, 1, 0, 4];

// // // let s = numbers.sort();

// // // let u = numbers.sort((a, b) => {
// // //   return a - b;
// // // });

// // // console.log(numbers);
// // // console.log(s);
// // // console.log(u);

// // let total = numbers.reduce((item, prev) => {
// //     return item += prev
// // }, 0)

// // console.log(total);

// // let arrCars = [
// //   {
// //     name: "BMW",
// //     price: "135 000 $",
// //     color: "black",
// //     year: 2023,
// //   },
// //   {
// //     name: "BMW",
// //     price: "135 000 $",
// //     color: "black",
// //     year: 2023,
// //   },
// //   {
// //     name: "BMW",
// //     price: "135 000 $",
// //     color: "black",
// //     year: 2023,
// //   },
// //   {
// //     name: "BMW",
// //     price: "135 000 $",
// //     color: "black",
// //     year: 2023,
// //   },
// //   {
// //     name: "BMW",
// //     price: "135 000 $",
// //     color: "black",
// //     year: 2023,
// //   },
// //   {
// //     name: "BMW",
// //     price: "135 000 $",
// //     color: "black",
// //     year: 2023,
// //   },
// //   {
// //     name: "BMW",
// //     price: "135 000 $",
// //     color: "black",
// //     year: 2023,
// //   },
// //   {
// //     name: "BMW",
// //     price: "135 000 $",
// //     color: "black",
// //     year: 2023,
// //   },
// //   {
// //     name: "BMW",
// //     price: "135 000 $",
// //     color: "black",
// //     year: 2023,
// //   },
// // ]

// // let numbers = [5, 15, 51, 84, 84];
// // let a = "Davlatshoh"

// // numbers.unshift(15,18,81, "salom", "hello", a)

// // console.log(
// //   numbers
// // );

// // let juft = [];
// // let salom = [];
// // let toq = [];
// // for (let i = 0; i < arr.length; i++) {
// //   console.log(i);
// //   console.log(arr[i]);

// //   if (arr[i] % 2 === 0) {
// //     juft.push(arr[i]);
// //   } else {
// //     toq.push(arr[i]);
// //   }
// // }

// // for (let item of arr) {
// //   console.log(item);

// //   if (item == "salom") {
// //     salom.push(item);
// //   }
// // }

// // for(let index in arr) {
// //   console.log(index);
// // }

// // console.log(juft);
// // console.log(toq);
// // console.log(salom);

// // let a = [];
// // let b = [];

// // for (let i = 0; i < 10; i++) {
// //   console.log("birinchi loop" + " " + i);

// //   for (let k = 0; k < 5; k++) {
// //     console.log("ikkinchi loop" + " " + k);
// //   }
// // }

// // let cars = [
// //   {
// //     id: Math.random(),
// //     name: "Damas",
// //     company: "Chevrolet",
// //   },
// //   {
// //     id: Math.random(),
// //     name: "Nexia 3",
// //     company: "Ravon",
// //   },
// //   {
// //     id: Math.random(),
// //     name: "Spark",
// //     company: "Ravon",
// //   },
// //   {
// //     id: Math.random(),
// //     name: "Lacetti",
// //     company: "Chevrolet",
// //   },
// //   {
// //     id: Math.random(),
// //     name: "BMW x6",
// //     company: "BMW",
// //   },
// //   {
// //     id: Math.random(),
// //     name: "BMW m5",
// //     company: "BMW",
// //   },
// // ];

// // let companyes = [
// //   {
// //     company: "BMW",
// //     count: 0,
// //   },
// //   {
// //     company: "Chevrolet",
// //     count: 0,
// //   },
// //   {
// //     company: "Ravon",
// //     count: 0,
// //   },
// // ];

// // for (let item of cars) {
// //   // console.log(item);

// //   for (let com of companyes) {
// //     console.log(com);

// //     if (item.company === com.company) {
// //       com.count++;
// //     }
// //   }
// // }

// // console.log(companyes);

// // let arr = [4, 16, 19, "salom", 22, 11, "salom", 144, 967, "salom", 19124];

// // let index = +prompt("any number");

// // arr.splice(index, 1)

// // console.log(index);
// // console.log(arr);

// // let arr = [
// //   {
// //     id: Math.random(),
// //     name: "Timur",
// //     info: {
// //       school: "235",
// //       faculity: "SMM",
// //     },
// //   },
// //   {
// //     id: Math.random(),
// //     name: "Imran",
// //     info: {
// //       school: "ne izvestno",
// //       faculity: "programming",
// //     },
// //   },
// //   {
// //     id: Math.random(),
// //     name: "Aminjon",
// //     info: {
// //       school: "444",
// //       faculity: "Dizayn",
// //     },
// //   },
// //   {
// //     id: Math.random(),
// //     name: "Maxmud",
// //     info: {
// //       school: "777",
// //       faculity: "3dsmax",
// //     },
// //   },
// //   {
// //     id: Math.random(),
// //     name: "Muxammad",
// //     info: {
// //       school: "5555",
// //       faculity: "Backend",
// //     },
// //   },
// //   {
// //     id: Math.random(),
// //     name: "Timur",
// //     info: {
// //       school: "235",
// //       faculity: "SMM",
// //     },
// //   },
// //   {
// //     id: Math.random(),
// //     name: "Imran",
// //     info: {
// //       school: "ne izvestno",
// //       faculity: "programming",
// //     },
// //   },
// //   {
// //     id: Math.random(),
// //     name: "Aminjon",
// //     info: {
// //       school: "444",
// //       faculity: "Dizayn",
// //     },
// //   },
// //   {
// //     id: Math.random(),
// //     name: "Maxmud",
// //     info: {
// //       school: "777",
// //       faculity: "3dsmax",
// //     },
// //   },
// //   {
// //     id: Math.random(),
// //     name: "Maxmud",
// //     info: {
// //       school: "777",
// //       faculity: "3dsmax",
// //     },
// //   },
// //   {
// //     id: Math.random(),
// //     name: "Muxammad",
// //     info: {
// //       school: "5555",
// //       faculity: "Backend",
// //     },
// //   },
// // ];

// // let categories = [
// //   {
// //     course: " SMM",
// //     count: 0,
// //   },
// //   {
// //     course: "PROGRAMMING",
// //     count: 0,
// //   },
// //   {
// //     course: "     3DSMAX",
// //     count: 0,
// //   },
// //   {
// //     course: " DIZAYN",
// //     count: 0,
// //   },
// //   {
// //     course: "   BACKEND",
// //     count: 0,
// //   },
// // ];

// // console.log(categories);

// // let obj = {
// //   a: 1,
// //   b: 2
// // }

// // let names = ["Alex", "Alisa", "John", "Johnson", "George"];
// // let obj = [];

// // for (let item of names) {
// //   let a = {};

// //   a.name = item;

// //   obj.push(a);
// // }

// // console.log(obj);

// // let b = ["a", "b", "c", "d", "e", "f", "j", "h", "r"];
// // let c = [];

// // for (let i = 0; i < a.length; i++) {
// //   for (let k = 0; k < b.length; k++) {
// //     let obj = {};
// //     let h = b[k]

// //     obj[h] = a[i];
// //     console.log(obj);

// //     break

// //   }

// // }

// // let a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// // let numbers = [];

// // for (let i = 0; i < a.length; i++) {
// //   console.log(a[i]);
// //   if (a[i] < 5) {
// //     // break;
// //     // numbers.push(a[i])
// //     // continue
// //     // console.log(a);
// //     // return console.log("salom");
// //   }
// //   // continue
// // }

// // console.log(numbers);
// // let y = "salom";

// // function sayHi(a, b, ...arg) {
// //   console.log(a.lenght);
// //   // if() {

// //   // } else if() {

// //   // } else {

// //   // }
// // }

// // y = "Hello";

// // sayHi(
// //   "Davlatshoh",
// //   1,
// //   255,
// //   54,
// //   848,
// //   84,
// //   8,
// //   484,
// //   84,
// //   8,
// //   48,
// //   48,
// //   78,
// //   748,
// //   8,
// //   47,
// //   48
// // );

// // console.log(y);
// // sayHi()

// // let b = 10;

// // function sayHi() {
// //   // let a = prompt("what is your name ?");
// //   let c = 15;
// //   b = 15;

// //   // console.log("hello", a);
// // }

// // // console.log(a);

// // sayHi();

// // function param(a, b, ...c) {
// //   console.log(a, b, c);
// // }

// // param(a, 25, 84, 84, 48, 487, 484, 9, 9, 48, 4, 9, 49, 4, true, false, undefined, null, "salom");

// // let a = +prompt("wdokdifoejr[ifm[ efj osajfp aseoipa jfp ojpesjm")
// // console.log("salom");

// // let numOne = +prompt("number 1");
// // let numTwo = +prompt("number 2");

// // function algo(a, b) {
// //   console.log(a + b, "+");
// // }

// // algo(numOne, numTwo);

// // if () {

// // } else if() {

// // } else {

// // }

// // Отфильтровать задачи в переменные а и b
// // Сохранить количество в ключе count
// // Сохранить сами задачи в массиве-ключе arr

// // let arr = [
// //   {
// //     userId: 1,
// //     id: 1,
// //     title: "delectus aut au`tem",
// //     completed: false,
// //   },
// //   {
// //     userId: 1,
// //     id: 2,
// //     title: "quis ut nam facilis et officia qui",
// //     completed: false,
// //   },
// //   {
// //     userId: 1,
// //     id: 3,
// //     title: "fugiat veniam minus",
// //     completed: false,
// //   },
// //   {
// //     userId: 1,
// //     id: 4,
// //     title: "et porro tempora",
// //     completed: true,
// //   },
// //   {
// //     userId: 1,
// //     id: 5,
// //     title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
// //     completed: false,
// //   },
// //   {
// //     userId: 1,
// //     id: 6,
// //     title: "qui ullam ratione quibusdam voluptatem quia omnis",
// //     completed: false,
// //   },
// //   {
// //     userId: 1,
// //     id: 7,
// //     title: "illo expedita consequatur quia in",
// //     completed: false,
// //   },
// //   {
// //     userId: 1,
// //     id: 8,
// //     title: "quo adipisci enim quam ut ab",
// //     completed: true,
// //   },
// //   {
// //     userId: 1,
// //     id: 9,
// //     title: "molestiae perspiciatis ipsa",
// //     completed: false,
// //   },
// //   {
// //     userId: 1,
// //     id: 10,
// //     title: "illo est ratione doloremque quia maiores aut",
// //     completed: true,
// //   },
// // ];
// // let a = {
// //   count: 0,
// //   arr: [],
// // };

// // let b = {
// //   count: 0,
// //   arr: [],
// // };

// // // console.log(a, b);

// // let products = [
// //   {
// //     id: 1,
// //     name: "apple",
// //     price: 5000,
// //     skitka: 5,
// //   },
// //   {
// //     id: 2,
// //     name: "orange",
// //     price: 4500,
// //     skitka: 15,
// //   },
// //   {
// //     id: 3,
// //     name: "srowbery",
// //     price: 8000,
// //     skitka: 50,
// //   },
// //   {
// //     id: 4,
// //     name: "cherry",
// //     price: 9500,
// //     skitka: 23,
// //   },
// //   {
// //     id: 5,
// //     name: "banan",
// //     price: 8560,
// //     skitka: 16,
// //   },
// //   {
// //     id: 6,
// //     name: "limon",
// //     price: 5000,
// //     skitka: 18,
// //   },
// // ];

// // let total = 0;

// // for (let item of products) {
// //   //   total = total + item.price;
// //   total += item.price;
// // }

// // console.log(total);

// // let numbers = [684, 8489, 4, 894, 8, 4, 944, 4849, 4, 84, 9, 8, 4, 98, 4, 0];

// // let sum = numbers.reduce((item, prev) => {
// //   return (item += prev);
// // }, 0);

// // // console.log(sum);

// // let max = Math.max(...numbers);
// // let min = Math.min(...numbers);

// // // console.log(max);
// // // console.log(min);

// // function maxName(...a) {
// //   let maxN = [];

// //   for (let item of a) {
// //     maxN.push(item.length);
// //   }

// //   console.log(maxN);

// //   console.log(a);
// // }

// // maxName("Davlatshoh", "Sarvar", "Alex");

// // let h = [
// //   {
// //     name: "iPhone",
// //     price: 1250,
// //     skitka: 13,
// //   },
// // ];

// // let skidka = h[0].price / 100 * h[0].skitka
// // h[0].sumSkidka = h[0].price - skidka

// // console.log(skidka);
// // console.log(h);

// // 1000;

// // 15;

// // (1000 / 100) * 15;

// // 1000 - 15;

// // let discount = +prompt("Какая скидка?");

// // let totalSale = Number;

// // let total = Number;

// // let max = Object;

// // let min = Object;

// // let average = Number;

// // let arr = [
// //   {
// //     name: "Milk",
// //     price: 3.25,
// //   },

// //   {
// //     name: "Coffee",
// //     price: 1.5,
// //   },

// //   {
// //     name: "Ice Cream",
// //     price: 7.85,
// //   },

// //   {
// //     name: "Tomatos",
// //     price: 4.14,
// //   },

// //   {
// //     name: "Onion",
// //     price: 2.25,
// //   },
// // ];

// // let arr_sale = [];

// // 1. Сохранить самый дорогой товар в переменную`max`*

// // 2. Сохранить самый дешевый товар в переменную`min`*

// // 3. Сохранить общую цену без скидок в переменную`total`*

// // 4. Сохранить общую цену со скидкой в переменную`totalSale`*

// // 5. Сохранить элементы из массива arr с обновленной ценой (цена со скидкой) в переменную `arr_sale`*

// // 6. Сохранить в переменной `average` среднюю цену всех продуктов без скидок*

// // * Писать весь код в функции `setup()`*

// // ТРИ ОЦЕНКИ. ЧИСТОТА КОДА, ЛОГИКА РАБОТЫ, УНИКАЛЬНОСТЬ КОДА*

// // const setup = () => {
// //   let prices = [];
// //   let skidka = [];

// //   for (let i = 0; i < arr.length; i++) {
// //     prices.push(arr[i].price);
// //     let maxPrice = Math.max(...prices);
// //     let minPrice = Math.min(...prices);

// //     skidka.push((arr[i].price / 100) * discount);

// //     if (arr[i].price == maxPrice) {
// //       max = arr[i];
// //     }

// //     if (arr[i].price == minPrice) {
// //       min = arr[i];
// //     }

// //     for (let item of skidka) {
// //       arr[i].skidka = item;
// //     }
// //   }

// //   total = prices.reduce((item, prev) => {
// //     return (item += prev);
// //   }, 0);

// //   let totalSkidka = skidka.reduce((item, prev) => {
// //     return (item += prev);
// //   }, 0);

// //   totalSale = total - totalSkidka;
// //   average = total / arr.length;

// //   console.log(min);
// //   console.log(max);
// //   console.log(total);
// //   console.log(totalSale);
// //   console.log(average);
// //   console.log(arr);
// // };

// // setup();

// // lesson DOM

// // let doc = document
// // let first = document.firstChild
// // let last = document.lastChild
// // let children = document.children
// // let childNode = document.childNodes
// // document.body
// // document.head

// // document.write('salom dunyo')

// // console.log(
// //   childNode
// // );

// // let txtClass = document.getElementsByClassName("text");
// // let txtId = document.getElementById("text");
// // let txtTagname = document.getElementsByTagName("h1");

// // console.log(txtClass);
// // console.log(txtTagname);
// // console.log(txtId);

// // txtId.innerText = "salom <span>hi</span> "
// // txtId.innerHTML = "salom <span>hi</span> ";

// // console.log(txtId.innerText, txtId.innerHTML);

// // console.log(btnChange);

// // let btnChange = document.getElementById("btnChange");
// // btnChange.onclick = () => {
// //   if (txtId.innerText === "salom") {
// //     txtId.innerText = "hello";
// //     txtId.style.color = "red"
// //     txtId.style.fontSize = "30px"
// //   } else {
// //     txtId.innerText = "salom";
// //     txtId.style.color = "green"
// //     txtId.style.fontSize = "50px"
// //   }
// // };

// // let classT = document.querySelector(".text")
// // let idT = document.querySelector("#text")
// // let tag = document.querySelector("h1")

// // let allItems = document.querySelectorAll('.text')

// // console.log(
// //   classT,
// //   idT,
// //   tag
// // );

// // let btn = document.querySelector(".btn");
// // let btnTwo = document.querySelector(".btnTwo");
// // let content = document.querySelector(".content");
// // let txt = document.querySelector(".txt");

// // let active = false;

// // btn.onclick = () => {
// //   txt.innerHTML = "salom"
// // if (active == true) {
// //   // content.style.backgroundColor = "red"
// //   content.classList.add("colorOne");
// //   content.classList.remove("colorTwo");
// //   active = false;
// // } else {
// //   content.classList.add("colorTwo");
// //   content.classList.remove("colorOne");

// //   // content.style.backgroundColor = "green"
// //   active = true;
// // }

// // content.classList.toggle('colorOne')

// // console.log(
// //   content.classList.contains("salom")
// // );
// // };

// // let img = document.querySelector('img')
// // let imgLink = "https://lookw.net/24/2497/1639414399-1001-www.lookw.net.jpg"
// // let imgLinkTwo = "https://thumbs.dreamstime.com/b/polar-bear-wallpaper-hd-wallpapers-ai-polar-bear-wallpaper-hd-wallpapers-297800380.jpg"

// // btnTwo.onclick = () => {
// //   // txt.innerHTML = "Hello"
// //   // let atr =  img.getAttribute('id')
// //   // img.setAttribute("alt", "salom")
// //   // console.log(atr);

// //   if (active) {
// //     active = false
// //     img.setAttribute("src", imgLink)
// //   } else {
// //     active = true
// //     img.setAttribute("src", imgLinkTwo)

// //   }

// //   console.log(
// //     img.hasAttribute('name')
// //   );

// // btn.onclick = () => {
// //   document.body.style.backgroundColor = "red"
// // }

// // btn.addEventListener('click', () => {
// //   document.body.style.backgroundColor = "red"
// // })

// // function click() {
// //   console.log("Salom");
// //   document.body.style.backgroundColor = "red";
// // }

// // box.onmouseenter = () => {
// //   box.style.backgroundColor = "red";
// //   console.log("salom");
// // }

// // box.addEventListener("mouseenter", () => {
// //   box.style.backgroundColor = "red";
// //   console.log("salom");
// // });

// // // box.onmouseleave = () => {
// // //   console.log("hello");
// // //   box.style.backgroundColor = "green";
// // // }

// // box.addEventListener("mouseleave", () => {
// //   console.log("hello");
// // });

// // box.ondblclick = () => {
// //   box.style.backgroundColor = "green";
// // };

// // box.addEventListener("dblclick", () => {
// //   box.style.backgroundColor = "green";
// // })

// // let inp = document.querySelector("input");
// // let select = document.querySelector("select");

// // inp.onkeyup = (event) => {
// //   console.log(event.target.value);
// // };

// // inp.addEventListener('keyup', (event) => {
// //   console.log(event.target.value);
// // })

// // inp.onchange = (e) => {
// //   console.log(
// //     e.target.value
// //   );
// // }

// // select.addEventListener("change", (e) => {
// //   console.log(
// //     e.target.value
// //   );
// // })

// // let btnWhite = document.querySelector(".btnWhite");
// // let btnGrey = document.querySelector("#seri");
// // let txt = document.querySelector(".txt");
// // let img = document.querySelector(".img");

// // btnWhite.onclick = () => {
// //   txt.innerHTML = "white";
// //   img.setAttribute(
// //     "src",
// //     "https://s3-alpha-sig.figma.com/img/9581/edda/696f087203dbc41896f9d180cf9d0435?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DN96JelZhkmQC88oYNi-miXdUGTI7RBth2wK4CcEutDwBbu1LpyiGH~j3qRbNIGLZeGnskKpGzEIZJqllTJv~Sh7cBuRteeqyyIjQlJP-eZHXM4-jMeodwC7Ky6yYmpd7Kg83~eJrNjT4ElB5uF6uTviVaGcNc9DUnO1M~9InUZ-ewiyeC9d0GDUuVM5r02RVTp8PRmaCAyDRv4OFl-uort0Rd9weEaaJr-1FJqDLbqtKn5kCbRhLdPwBwalMC8Ws0-FUS9I~SNCVc-267cPG5biLjpsTCvSOgqT7GwTwdz6WRq~YjO-KJRF08dwb~zKYl7QjzU8GkR5A18rznmamg__"
// //   );
// // };

// // btnGrey.onclick = () => {
// //   txt.innerHTML = "Space Gray";
// //   img.setAttribute(
// //     "src",
// //     "https://s3-alpha-sig.figma.com/img/9f71/2fbe/77eca8b2420bb1d5e95728168d6e6c92?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BPayE5K68Zj8w7E7xwsEwuEp19jFjhCCTdketSGq-Tz~7tGwmKSJ9qVv7f2uJbE-Fpe~JCvy9KoOU~kDFm8X1H6xRCHQsvOAlyGqurmsFfTwOQmNnOJGerrdXqu7OSvo2owKPo-0hC9DEVqEfgS99JIpoQ-kgPIw0Kelq1qBGAKTNrQU567FnRPZei0IlhBVjjELtwFZaef5D9MgSaIFuOyGQbA1wq~rQvM-g8NqXwlITKDw5H3nU84eAV4kDcdSEAiA8Q57ZZtwWYyQ5ueAs0iEYs4zJhAP31mzyp6cv~8DOV1-cOZMLeJpKN6GWE6Ea9EBdcl63KBZ4F53g4zx2w__"
// //   );
// // };

// // let btns = document.querySelectorAll(".h2");
// // let priceTxt = document.querySelector(".number");

// // let price = "1.999";

// // let big = "1.200";
// // let medium = 600;
// // let small = 200;

// // for (let item of btns) {
// //   item.onclick = () => {
// //     if (item.classList.contains("none")) {
// //       priceTxt.innerHTML = `$${price}`;
// //     }
// //     if (item.classList.contains("small")) {
// //       priceTxt.innerHTML = `$${price + small}`;
// //     }
// //     if (item.classList.contains("medium")) {
// //       priceTxt.innerHTML = `$${price + medium}`;
// //     }
// //     if (item.classList.contains("big")) {
// //       priceTxt.innerHTML = `$${price + big}`;
// //     }
// //   };
// // }

// // console.log(price + small);

// // let hour = document.querySelector(".hour");
// // let minut = document.querySelector(".minut");
// // let second = document.querySelector(".second");
// // let start = document.querySelector(".start");
// // let stopBtn = document.querySelector(".stop");
// // let reset = document.querySelector(".reset");

// // let h = 0;
// // let m = 0;
// // let s = 0;
// // let interval;

// // function zero(n) {
// //   if (n < 10) {
// //     return (n = `0${n}`);
// //   } else {
// //     return n;
// //   }
// // }
// // start.addEventListener("click", () => {
// //   start.disabled = true

// //   interval = setInterval(() => {
// // if (s < 10) {
// // } else {
// //   second.innerHTML = s;
// // }

// // if (m < 10) {
// //   minut.innerHTML = `0${m}`;
// // } else {
// //   minut.innerHTML = m;
// // }
// //     s++;
// //     second.innerHTML = zero(s);
// //     if (s > 59) {
// //       m++;
// //       minut.innerHTML = zero(m);
// //       s = 0;
// //     } else if (m > 59) {
// //       h++;
// //       hour.innerHTML = zero(h);
// //       m = 0;
// //       s = 0;
// //     }
// //   }, 1000);
// // });

// // stopBtn.addEventListener("click", () => {
// //   start.disabled = false
// //   clearInterval(interval);
// // });

// // reset.addEventListener("click", () => {
// //   clearInterval(interval);
// //   m = 0;
// //   h = 0;
// //   s = 0;
// //   minut.innerHTML = "00";
// //   second.innerHTML = "00";
// //   hour.innerHTML = "00";
// // });

// // let hour = document.querySelector(".hour");
// // let minut = document.querySelector(".minut");
// // let second = document.querySelector(".second");

// // let start = document.querySelector(".start");
// // let stopBtn = document.querySelector(".stop");
// // let reset = document.querySelector(".reset");

// // let btnPlusH = document.querySelector(".btnPlusH");
// // let btnPlusM = document.querySelector(".btnPlusM");
// // let btnPlusS = document.querySelector(".btnPlusS");

// // let btnMinusM = document.querySelector(".btnMinusM");
// // let btnMinusH = document.querySelector(".btnMinusH");
// // let btnMinusS = document.querySelector(".btnMinusS");

// // let h = 0;
// // let m = 0;
// // let s = 0;
// // let interval;

// // function zero(n) {
// //   if (n < 10) {
// //     return (n = `0${n}`);
// //   } else {
// //     return n;
// //   }
// // }

// // btnPlusH.addEventListener("click", () => {
// //   h++;
// //   hour.innerHTML = zero(h);
// // });

// // btnPlusM.addEventListener("click", () => {
// //   m++;
// //   minut.innerHTML = zero(m);
// // });

// // btnPlusS.addEventListener("click", () => {
// //   s++;
// //   second.innerHTML = zero(s);
// // });

// // btnMinusM.addEventListener("click", () => {
// //   m--;

// //   if (m < 0) {
// //     m = 0;
// //     minut.innerHTML = "00";
// //   } else {
// //     minut.innerHTML = zero(m);
// //   }
// // });

// // btnMinusH.addEventListener("click", () => {
// //   h--;

// //   if (h < 0) {
// //     h = 0;
// //     hour.innerHTML = "00";
// //   } else {
// //     hour.innerHTML = zero(h);
// //   }
// // });
// // btnMinusS.addEventListener("click", () => {
// //   s--;

// //   if (s < 0) {
// //     s = 0;
// //     second.innerHTML = "00";
// //   } else {
// //     second.innerHTML = zero(s);
// //   }
// // });

// // start.addEventListener("click", () => {
// //   interval = setInterval(() => {
// //     s--;
// //     second.innerHTML = zero(s);

// //     if (s < 0) {
// //       m--;
// //       minut.innerHTML = zero(m);
// //       s = 59;
// //       second.innerHTML = zero(s);
// //     } else if (m < 0) {
// //       h--;
// //       hour.innerHTML = zero(h);
// //       m = 59;
// //       minut.innerHTML = zero(m);
// //       s = 59;
// //       second.innerHTML = zero(s);
// //     } else if (m == 0 && h == 0 && s == 0) {
// //       clearInterval(interval);
// //     }
// //   }, 1000);
// // });

// // let plusA = document.querySelector(".plusA");
// // let minusA = document.querySelector(".minusA");
// // let plusB = document.querySelector(".plusB");
// // let minusB = document.querySelector(".minusB");
// // let plusD = document.querySelector(".plusD");
// // let minusD = document.querySelector(".minusD");
// // let plusC = document.querySelector(".plusC");
// // let minusC = document.querySelector(".minusC");

// // let plus = document.querySelector(".plus");
// // let minus = document.querySelector(".minus");

// // let count1 = document.querySelector("#count1");
// // let count2 = document.querySelector("#count2");
// // let count3 = document.querySelector("#count3");
// // let count4 = document.querySelector("#count4");

// // plus.addEventListener("click", () => {
// //   count1.innerHTML++;
// //   count2.innerHTML++;
// //   count3.innerHTML++;
// //   count4.innerHTML++;
// // });

// // minus.addEventListener("click", () => {
// //   count1.innerHTML--;
// //   count2.innerHTML--;
// //   count3.innerHTML--;
// //   count4.innerHTML--;
// // });

// // plusA.addEventListener("click", () => {
// //   count1.innerHTML++;
// // });
// // minusA.addEventListener("click", () => {
// //   if (count1.innerHTML == 0) {
// //     count1.innerHTML = 0;
// //   } else {
// //     count1.innerHTML--;
// //   }
// // });

// // plusB.addEventListener("click", () => {
// //   count2.innerHTML++;
// // });
// // minusB.addEventListener("click", () => {
// //   if (count2.innerHTML <= 0) {
// //     count2.innerHTML = 0;
// //   } else {
// //     count2.innerHTML--;
// //   }
// // });

// // plusD.addEventListener("click", () => {
// //   count3.innerHTML++;
// // });
// // minusD.addEventListener("click", () => {
// //   if (count3.innerHTML <= 0) {
// //     count3.innerHTML = 0;
// //   } else {
// //     count3.innerHTML--;
// //   }
// // });
// // plusC.addEventListener("click", () => {
// //   count4.innerHTML++;
// // });
// // minusC.addEventListener("click", () => {
// //   if (count4.innerHTML <= 0) {
// //     count4.innerHTML = 0;
// //   } else {
// //     count4.innerHTML--;
// //   }
// // });

// // let openM = document.querySelector(".openM");
// // let modal = document.querySelector(".modal");

// // openM.addEventListener("click", () => {
// //   modal.style.display = "flex";
// // });

// // window.addEventListener("click", (e) => {
// //   if (e.target.classList.contains("modal")) {
// //     modal.style.display = "none";
// //   }
// // });

// // const plus = document.querySelector(".plus");
// // const count = document.querySelector(".count");
// // const minus = document.querySelector(".minus");

// // function getItem() {
// //   count.innerHTML = JSON.parse(localStorage.getItem("count") || "0")
// // }

// // getItem()

// // plus.addEventListener("click", () => {
// //   count.innerHTML = ++count.innerHTML;
// //   localStorage.setItem("count", JSON.stringify(count.innerHTML));

// //   location.pathname = "/main.html"
// // });

// // minus.addEventListener("click", () => {
// //   count.innerHTML = --count.innerHTML;
// //   localStorage.setItem("count", JSON.stringify(count.innerHTML));
// // });

// // console.log({
// //   name: "Davlatshoh",
// //   age: 25,
// // });

// // console.log(
// //   JSON.stringify({
// //     name: "Davlatshoh",
// //     age: 25,
// //   })
// // );

// // const conteiner = document.querySelector(".conteiner");
// // // let h1 = document.createElement("h1");

// // // h1.innerHTML = "salom";

// // // // h1.style.color = "red"
// // // // h1.style.fontSize = "100px"
// // // h1.classList.add("create");

// // // // conteiner.appendChild(h1);
// // // conteiner.prepend(h1);

// // // console.log(h1);

// // // const content = document.querySelector(".content");
// // // const btn = document.querySelector(".add");
// // // let count = 0;
// // // let images = [
// // //   "https://c4.wallpaperflare.com/wallpaper/688/947/718/nature-full-hd-image-1920x1080-wallpaper-preview.jpg",
// // //   "https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg",
// // //   "https://img.freepik.com/free-photo/fresh-yellow-daisy-single-flower-close-up-beauty-generated-by-ai_188544-15543.jpg",
// // //   "https://www.imageshine.in/uploads/sub_category/free-hd-desktop-wallpapers-1920x1080.jpg",
// // //   "https://wallpapers.com/images/hd/hd-sunset-at-beach-w5ped7x6g3uo2o76.jpg",
// // // ];

// // // btn.addEventListener("click", () => {
// // //   // console.log("click");
// // //   // count++;

// // //   // console.log(count);

// // //   // let div = document.createElement("div");
// // //   // let h1 = document.createElement("h1");

// // //   // div.style.width = "200px";
// // //   // div.style.height = "200px";
// // //   // div.style.backgroundColor = "red";

// // //   // h1.innerHTML = count;

// // //   // div.appendChild(h1);
// // //   // content.appendChild(div);
// // //   // console.log(div);

// // //   let rnd = Math.floor(Math.random() * 4)

// // //   let img = document.createElement("img");

// // //   img.setAttribute("src", images[rnd]);

// // //   img.style.width = "200px";
// // //   img.style.height = "200px";
// // //   content.appendChild(img);
// // // });

// // const btns = document.querySelectorAll(".btn");
// // const right = document.querySelector(".right");

// // btns.forEach((btn) => {
// //   btn.addEventListener("click", (e) => {
// //     // console.log(e.target);
// //     let item = e.target;
// //     let count = item.querySelector("span").innerHTML;

// //     // creting elem

// //     let newBtn = document.createElement("button");
// //     let newSpan = document.createElement("span");
// //     newSpan.innerHTML = count;
// //     newBtn.innerHTML = "cloning element ";
// //     newBtn.appendChild(newSpan);
// //     // newBtn.innerHTML = `cloning element ${count}`
// //     right.appendChild(newBtn);
// //   });
// // });

// // Покажите товары по следующему массиву
// let arr = [
//   {
//     id: 1,
//     title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//     price: 109.95,
//     description:
//       "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//     category: "men's clothing",
//     image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//     rating: {
//       rate: 3.9,
//       count: 120,
//     },
//   },
//   {
//     id: 2,
//     title: "Mens Casual Premium Slim Fit T-Shirts ",
//     price: 22.3,
//     description:
//       "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
//     category: "men's clothing",
//     image:
//       "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
//     rating: {
//       rate: 4.1,
//       count: 259,
//     },
//   },
//   {
//     id: 3,
//     title: "Mens Cotton Jacket",
//     price: 55.99,
//     description:
//       "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
//     category: "men's clothing",
//     image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
//     rating: {
//       rate: 4.7,
//       count: 500,
//     },
//   },
//   {
//     id: 4,
//     title: "Mens Casual Slim Fit",
//     price: 15.99,
//     description:
//       "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
//     category: "men's clothing",
//     image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
//     rating: {
//       rate: 2.1,
//       count: 430,
//     },
//   },
//   {
//     id: 5,
//     title:
//       "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
//     price: 695,
//     description:
//       "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
//     category: "jewelery",
//     image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
//     rating: {
//       rate: 4.6,
//       count: 400,
//     },
//   },
//   {
//     id: 6,
//     title: "Solid Gold Petite Micropave ",
//     price: 168,
//     description:
//       "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
//     category: "jewelery",
//     image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
//     rating: {
//       rate: 3.9,
//       count: 70,
//     },
//   },
//   {
//     id: 7,
//     title: "White Gold Plated Princess",
//     price: 9.99,
//     description:
//       "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
//     category: "jewelery",
//     image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
//     rating: {
//       rate: 3,
//       count: 400,
//     },
//   },
//   {
//     id: 8,
//     title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
//     price: 10.99,
//     description:
//       "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
//     category: "jewelery",
//     image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
//     rating: {
//       rate: 1.9,
//       count: 100,
//     },
//   },
//   {
//     id: 9,
//     title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
//     price: 64,
//     description:
//       "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
//     category: "electronics",
//     image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
//     rating: {
//       rate: 3.3,
//       count: 203,
//     },
//   },
//   {
//     id: 10,
//     title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
//     price: 109,
//     description:
//       "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
//     category: "electronics",
//     image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
//     rating: {
//       rate: 2.9,
//       count: 470,
//     },
//   },
//   {
//     id: 11,
//     title:
//       "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
//     price: 109,
//     description:
//       "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
//     category: "electronics",
//     image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
//     rating: {
//       rate: 4.8,
//       count: 319,
//     },
//   },
//   {
//     id: 12,
//     title:
//       "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
//     price: 114,
//     description:
//       "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
//     category: "electronics",
//     image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
//     rating: {
//       rate: 4.8,
//       count: 400,
//     },
//   },
//   {
//     id: 13,
//     title: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
//     price: 599,
//     description:
//       "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
//     category: "electronics",
//     image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
//     rating: {
//       rate: 2.9,
//       count: 250,
//     },
//   },
//   {
//     id: 14,
//     title:
//       "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
//     price: 999.99,
//     description:
//       "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
//     category: "electronics",
//     image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
//     rating: {
//       rate: 2.2,
//       count: 140,
//     },
//   },
//   {
//     id: 15,
//     title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
//     price: 56.99,
//     description:
//       "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
//     category: "women's clothing",
//     image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
//     rating: {
//       rate: 2.6,
//       count: 235,
//     },
//   },
//   {
//     id: 16,
//     title:
//       "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
//     price: 29.95,
//     description:
//       "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
//     category: "women's clothing",
//     image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
//     rating: {
//       rate: 2.9,
//       count: 340,
//     },
//   },
//   {
//     id: 17,
//     title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
//     price: 39.99,
//     description:
//       "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
//     category: "women's clothing",
//     image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
//     rating: {
//       rate: 3.8,
//       count: 679,
//     },
//   },
//   {
//     id: 18,
//     title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
//     price: 9.85,
//     description:
//       "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
//     category: "women's clothing",
//     image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
//     rating: {
//       rate: 4.7,
//       count: 130,
//     },
//   },
//   {
//     id: 19,
//     title: "Opna Women's Short Sleeve Moisture",
//     price: 7.95,
//     description:
//       "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
//     category: "women's clothing",
//     image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
//     rating: {
//       rate: 4.5,
//       count: 146,
//     },
//   },
//   {
//     id: 20,
//     title: "DANVOUY Womens T Shirt Casual Cotton Short",
//     price: 12.99,
//     description:
//       "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
//     category: "women's clothing",
//     image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
//     rating: {
//       rate: 3.6,
//       count: 145,
//     },
//   },
// ];

// // console.log(arr[8]);

// // for (let i = 0; i < arr.length; i++) {
// //   const element = arr[i];
// //   console.log(element);
// // }

// const conteiner = document.querySelector(".conteiner")
// const allCount = document.querySelector(".all")

// allCount.innerHTML = arr.length

// for (let item of arr) {
//   // console.log(item);

//   let html = `
//     <h1>${item.price}</h1>

//   `;

//   // conteiner.insertAdjacentHTML("beforeend", html)

// }

// fetch GET method

// let data;

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json())
//   .then((post) => {
//     data = post;
//     getData(data);
//   });

// function getData(data) {
//   console.log(data);

//   for (let item of data) {
//     let h1 = document.createElement("h1");
//     h1.innerHTML = item.title;

//     document.body.appendChild(h1);
//   }
// }

// // /fetch POST method

// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     userId: 1,
//     title: "Davlatshoh",
//     body: "lorem ipsum",
//   }),
// })
//   .then((response) => console.log(response.json()))
//   .catch((error) => {
//     console.log(error);
//   });

// // method DELETE

// let elemId = 1;

// fetch(`https://jsonplaceholder.typicode.com/posts/${elemId}`, {
//   method: "DELETE",
// })
//   .then((response) => console.log(response.json()))
//   .catch((err) => console.log(err));

// // method PATCH

// let patchElemID = 1;

// fetch(`https://jsonplaceholder.typicode.com/posts/${patchElemID}`, {
//   method: "PATCH",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     body: "Davlatshoh",
//   }),
// })
//   .then((response) => console.log(response.json()))
//   .catch((err) => console.log(err));

// // method PUT

// let putElemID = 1;

// fetch(`https://jsonplaceholder.typicode.com/posts/${putElemID}`, {
//   method: "PUT",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     userId: 1,
//     id: putElemID,
//     title: "Davlatshoh",
//     body: "Pardaqulov",
//   }),
// })
//   .then((response) => console.log(response.json()))
//   .catch((err) => console.log(err));

//

let data;

fetch("http://localhost:5050/users")
  .then((response) => response.json())
  .then((post) => {
    data = post;
    getData(data);
  });

function getData(data) {
  console.log(data);
  for (let item of data) {
    let h1 = document.createElement("h1");
    let btn = document.createElement("button");
    let box = document.createElement("div");

    btn.innerHTML = "dalete";
    h1.innerHTML = item.name;
    btn.id = item.id;

    btn.onclick = (e) => {
      deleteItem(e.target.id);
    };

    box.appendChild(h1);
    box.appendChild(btn);
    document.body.appendChild(box);
  }
}
function deleteItem(elemId) {
  fetch(`http://localhost:5050/users/${elemId}`, {
    method: "DELETE",
  })
    .then((response) => console.log(response.json()))
    .catch((err) => console.log(err));
  // getData();
}

let elemId = 1;

fetch(`http://localhost:5050/users/${elemId}`, {
  method: "PATCH",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "Davlatshoh",
  }),
})
  .then((response) => console.log(response.json()))
  .catch((err) => console.log(err));

fetch("http://localhost:5050/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    id: "2",
    name: "Sarvar",
    age: 16,
  }),
})
  .then((response) => console.log(response.json()))
  .catch((error) => {
    console.log(error);
  });
