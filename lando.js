//``

 //3
//const employees = { 
 //Artur: 9,
 //Sasha: 5,
 //Dima: 2


//}

//const findBestEmployee = (arrayObject) => {

  //  let count = 0;
  //  let name = "";

   // for(const key in arrayObject){
   //    if(arrayObject [key] > count){
    //    name = key;
    //    count = arrayObject[key]
    //   }
 //   }
  //  return name;
//}

//console.log(findBestEmployee(employees))


//6


// const produkt = [
//    {name: "bread", price: 25 , quantity: 2},
//    {name: "bread", price: 35 , quantity: 5},
//    {name: "butter", price: 55 , quantity: 1},
// ];

// const calculateTotalPrice = (allProdcuts, productName) => {
//   const totalPrice = 0

//     for(const bread  of produkt){
//         if(produkt.price == bread ){
//             totalPrice +=  produkt.price * produkt.quantity
//         }
//     }

//     return totalPrice;
// }

// console.log(calculateTotalPrice(produkt))



//1

//const user = {
  //  name: "Artur",
  //  age: 13,
 //   hobby: "cubes",
 //   premium: true
//}


//user.mood = "happy";

//user.hobby = "Skydiving"

//user.premium = false


//for(const key of Object.keys(user)){
  //  console.log(`${key} ${user[key]}`);
//}


//2


//const user = {
 //   name: "Artur",
  //  age: 13,
 //   hobby: "cubes",
  //  city: "Regensburg"

//}

//const countProps = (obj) => {
 //  return Object.keys(obj).length
//}

//const prorperty = countProps(user)
//console.log("количество значений:" + prorperty)


//4

// const salamary = {
//  Artur : 3000,
//  Dima : 2000,
//  Sasha : 1000
// }


// const countTotalSalary = (employees) => {
//   let paycheck = 0

//     for(let employee in employees){
//         paycheck += employees[employee]
//     }

//     return paycheck;
// }

// const salamarys = countTotalSalary(salamary)
// console.log("зарплата в долларах:" + salamarys)




//5

// const names = [
//   {name: "bread", price: 25 },
//   {name: "milk", price: 35 },
//   {name: "butter", price: 55 },
// ];

// let prop = "name";

// const getAllPropValues = (arr, prop) => {
//   let values = [];
//   for (const item of arr) {
//     values.push(item[prop]);
//   }
//   return values;
// }

// console.log(getAllPropValues(names, prop));


