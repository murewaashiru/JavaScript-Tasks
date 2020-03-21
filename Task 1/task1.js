var name = "Omomurewa George-Ashiru";
var courses = ["JavaScript", "Node.js"];

console.log(name);

for (let i = 0; i < courses.length; i++) {
  console.log(courses[i]);
}

var modulus = courses.length % 2; //To determine if the number is wholely divisible by 2 (even) or not (odd)
for (let i = 1; i <= 200; i++) {
  if (modulus == i % 2) {
    console.log(i);
  }
}
