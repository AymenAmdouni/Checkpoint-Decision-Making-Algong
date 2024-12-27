// // leap year checker ES5

// function isLeapYear(year) {
//   if((year % 4 ===0 && year %100 !== 1) ||(year %400 === 0)){
//       return true;
//   } else {
//     return false;
//   }
//   }

//   console.log(isLeapYear(2023));

// // leap year checker ES6

//  const leapYear = year =>(year % 4 ===0 && year % 100 !== 1)||(year%400 ===0)?
//   true : false;

//   console.log(leapYear(1996));

//ticket Pricing ES5

// function ticketPricing( age){
// if (age>0 && age <= 12){
//     console.log("ticket = 10$");
// } else if (age >= 13 && age<=17){
//     console.log("ticket = 15$");
// }else if ( age >= 18 && age<=100){
//     console.log("ticket = 20$");
// }else {
//     console.log("Invalid age");
// }

// }

// ticketPricing(25);

// const ticketPricing = age =>{
//     (age >=0 && age <=12)? console.log("ticket = 10$") :
//     (age >=12 && age<=17 )? console.log("ticket = 15$") :
//     (age >=18 && age<=100 )? console.log("ticket = 20$") :
//     console.log("Invalid age");
// }

// ticketPricing(10);

// // Rainwear Advice ES5 if-else

// function rainwearAdvice(temperature) {
//     if (temperature >= 0 && temperature <= 5) {
//         console.log("Wear your hat and umbrella");
//     } else if (temperature > 5 && temperature <= 10) {
//         console.log("Wear your jacket and umbrella");
//     } else if (temperature > 10 && temperature <= 15) {
//         console.log("Wear your coat and umbrella");
//     } else if (temperature > 15 && temperature <= 20) {
//         console.log("Wear your full jacket");
//     } else if (temperature > 20 && temperature <= 30) {
//         console.log("Wear your sweater");
//     } else if (temperature > 30 && temperature <= 50) {
//         console.log("Wear a shirt");
//     } else {
//         console.log("Stay home and enjoy the weather");
//     }
// }

// rainwearAdvice(12);

// // Rainwear Advice ES5 switch

// function rainwearAdvice(temperature) {
//   switch (temperature) {
//     case temperature >= 0 && temperature <= 5:
//       console.log("Wear your hat and umbrella");
//       break;
//     case temperature > 5 && temperature <= 10:
//       console.log("Wear your jacket and umbrella");
//       break;
//     case temperature > 10 && temperature <= 15:
//       console.log("Wear your coat and umbrella");
//       break;
//     case temperature > 15 && temperature <= 20:
//       console.log("Wear your full jacket");
//       break;
//     case temperature > 20 && temperature <= 30:
//       console.log("wear your sweater");
//       break;
//     case temperature > 30 && temperature <= 50:
//       console.log("wear a shirt");
//       break;
//     default:
//       console.log("Stay home and enjoy the weather");
//   }
// }

// rainwearAdvice(22);

// //Rainwear Advice ES6

// const rainwearAdvice = temperature =>{
//   (temperature >= 0 && temperature <= 5)
//     ? console.log("Wear your hat and umbrella"):
//     ( temperature > 5 && temperature <= 10)
//     ? console.log("Wear your jacket and umbrella"):
//     (temperature > 10 && temperature <= 15)
//     ? console.log("Wear your coat and umbrella"):
//     (temperature > 15 && temperature <= 20)
//     ? console.log("Wear your full jacket"):
//     (temperature > 20 && temperature <=30)
//     ? console.log("wear your sweater"):
//     (temperature > 30 && temperature <=50)
//     ? console.log("wear a shirt"):
//     console.log("Stay home and enjoy the weather");

// }

// rainwearAdvice(32);

// let palindrome = (str , acc) =>{
//     if (acc ==0 && str.trim().lenght==0){
//         return false;
//     }
//     str =str.trim();
//     let strLenght = str.length
//     if(str[0] !==str[strLenght-1])
//         return false;
//     else if (strLenght ==0 || str.length ==1)
//         return true;
//     else
//         return palindrome(str.slice(1,-1), acc-1);
// }
// console.log(palindrome("radar"));
// console.log(palindrome("aymen"));

// function fibonacciMemo(n, memo = {}) {
//   if (n in memo) return memo[n]; // Retourne la valeur si elle est déjà calculée
//   if (n === 0) return 0;
//   if (n === 1) return 1;
//   // Stocke le résultat dans memo avant de le retourner
//   memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
//   return memo[n];
// }

// console.log(fibonacciMemo(6));
