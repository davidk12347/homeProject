"use strict";
// type TProduct = {
//   title: string;
//   category: string;
//   price: number;
// };
Object.defineProperty(exports, "__esModule", { value: true });
let products = [
    { category: "ноутбуки", price: 300000, count: 5 },
    { category: "смартфоны", price: 150000, count: 10 },
    { category: "ноутбуки", price: 200000, count: 3 },
    { category: "смартфоны", price: 120000, count: 7 },
    { category: "ноутбуки", price: 25000, count: 2 }
];
let laptops = products.filter(product => product.category === "ноутбуки");
let smartphones = products.filter(product => product.category === "смартфоны");
console.log("Решение первой задачи");
console.log(laptops);
console.log(smartphones);
laptops.sort((a, b) => b.price - a.price);
smartphones.sort((a, b) => b.price - a.price);
console.log("Решение второй задачи");
console.log(laptops);
console.log(smartphones);
function addLaptop(product) {
    laptops.push(product);
}
function addSmartphone(product) {
    smartphones.push(product);
}
addLaptop({ category: "ноутбуки", price: 400000, count: 3 });
addLaptop({ category: "ноутбуки", price: 500000, count: 2 });
addSmartphone({ category: "смфартфоны", price: 180000, count: 5 });
addSmartphone({ category: "смфартфоны", price: 220000, count: 4 });
console.log("Решение четвертой задачи");
console.log(laptops);
console.log(smartphones);
laptops.forEach(product => {
    product.price = Math.round(product.price * 1.1);
});
console.log("Решение пятой задачи");
console.log(laptops);
smartphones.forEach(product => {
    product.price = product.price * 0.8;
});
console.log("Решение шестой задачи");
console.log(smartphones);
laptops.sort((a, b) => a.price - b.price);
console.log("Решение седьмой задачи");
console.log(laptops);
smartphones.sort((a, b) => b.price - a.price);
console.log("Решение восьмой задачи");
console.log(smartphones);
let allProducts = laptops.concat(smartphones);
console.log("Решение девятой задачи");
console.log(allProducts);
allProducts.sort((a, b) => b.price - a.price);
console.log("Решение десятой задачи");
console.log(allProducts);
//# sourceMappingURL=test.js.map