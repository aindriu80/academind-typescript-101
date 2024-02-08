import "reflect-metadata";
import { plainToClass } from "class-transformer";

import { ProjectInput } from "./components/project-input";
import { ProjectList } from "./components/project-list";
import { Product } from "./product.module";

new ProjectInput();
new ProjectList("active");
new ProjectList("finished");

const products = [
  { title: "A Carpet", price: 39.99 },
  { title: "Another book", price: 23.33 },
];

const pl = new Product("A Book", 12.89);

const loadedProducts = products.map((prod) => {
  return new Product(prod.title, prod.price);
});

const plainLoadedProducts = plainToClass(Product, products);

for (const prod of loadedProducts) {
  console.log("normal JavaScript ", prod.title, prod.price);
}

console.log("normal JavaScript ", pl.getInformation());

for (const prod of plainLoadedProducts) {
  console.log("placeToClass ", prod.getInformation());
}
console.log("plainToClass ", plainLoadedProducts);
