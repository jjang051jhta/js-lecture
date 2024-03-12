// let aa = 10;
// let bb = aa;
// aa = 100;
// console.log(bb);
// const person = {
//   name: "Lee",
//   age: 20,
//   gender: "male",
// };
// const copyPerson = person;
// copyPerson.name = "Kim";
// console.log(person);
// const nums = []; //object
// const numsCopy = nums; // shallow copy  deep copy
// nums[0] = 1;
// nums[1] = 2;
// nums[2] = 3;
// nums[3] = 4;
// nums[4] = 5;
// nums[5] = 6;
// numsCopy[5] = 100;

// console.log(nums);
// console.log(numsCopy);

const nums = [];
for (let i = 0; i < 45; i++) {
  //nums[i] = i + 1;
  nums.push(i + 1);
}
const selectedNums = [];
for (let i = 0; i < 6; i++) {
  // prettier-ignore
  selectedNums.push(
    nums
    .splice(Math.floor(Math.random() * nums.length), 1)
    .pop()
  );
}
console.log(selectedNums);
