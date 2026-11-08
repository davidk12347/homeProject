// type TProduct = {
//   title: string;
//   category: string;
//   price: number;
// };

// const products: TProduct[] = [
//     {
//         title: "BOSH-30",
//         category: "Холодильник",
//         price: 150000,
//     },
//     {
//         title: "LG-20",
//         category: "Телевизор",
//         price: 120000,
//     },
//     { 
//         title: "Samsung-10", 
//         category: "Стиральная машина",
//         price: 90000 
//     },
// ];
// let max = products[0];

// for (let i = 0; i < products.length; i++) {
//         if (products[i].price > max.price) {
//             max = products[i];
//         }
// }
// console.log("Самый дорогой товар: " max.category + " " + max.title + " его цена: " + max.price);
// let min = products[0];
// for (let i = 1; i < products.length; i++) {
//   if (products[i].price < min.price) {
//     min = products[i];
//   }
// }
// console.log("Самый дешевый товар: " min.category + " " + min.title +" его цена: " + min.price);

// for (let i = 0; i < products.length; i++) {
//   if (products[i].price > 140000) {
//     products[i].price = (products[i]!.price-10000);
//   }
// }
// console.log("Товары после изменения цен:", products);
// const categories: string[] = products.map((product) => product.category);
// console.log("Категории товаров:", categories);


type TProduct ={
  category: string,
  price: number,
  count:number
}
let products: TProduct[] = [
  { category:"ноутбуки", price: 300000, count:5},
  { category:"смартфоны", price: 150000, count:10},
  { category:"ноутбуки", price: 200000, count:3},
  { category:"смартфоны", price: 120000, count:7},
  { category:"ноутбуки", price: 25000, count:2}
]
let laptops = products.filter(product => product.category === "ноутбуки")
let smartphones = products.filter(product => product.category === "смартфоны")
console.log("Решение первой задачи")
console.log(laptops)
console.log(smartphones)

laptops.sort((a,b)  => b.price- a.price)
smartphones.sort((a,b)  => b.price- a.price)
console.log("Решение второй задачи")
console.log(laptops)
console.log(smartphones)

function addLaptop(product: TProduct){
  laptops.push(product)
}
function addSmartphone(product: TProduct){
  smartphones.push(product)
}

addLaptop({category: "ноутбуки", price: 400000, count: 3})
addLaptop({category: "ноутбуки", price: 500000, count: 2})
addSmartphone({category: "смфартфоны", price: 180000, count: 5})
addSmartphone({category: "смфартфоны", price: 220000, count: 4})
console.log("Решение четвертой задачи")
console.log(laptops)
console.log(smartphones)

laptops.forEach(product=>{
  product.price = Math.round(product.price *1.1)
})
console.log("Решение пятой задачи")
console.log(laptops)

smartphones.forEach(product=>{
  product.price =product.price *0.8
})
console.log("Решение шестой задачи")
console.log(smartphones)

laptops.sort((a,b)  => a.price- b.price)
console.log("Решение седьмой задачи")
console.log(laptops)


smartphones.sort((a,b)  => b.price- a.price)
console.log("Решение восьмой задачи")
console.log(smartphones)


let allProducts = laptops.concat(smartphones)
console.log("Решение девятой задачи")
console.log(allProducts)

allProducts.sort((a,b)  => b.price- a.price)
console.log("Решение десятой задачи")
console.log(allProducts)

