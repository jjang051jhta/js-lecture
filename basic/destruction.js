const nums = [1, 2, 3, 4, 5];
const newNums = [...nums];
let [...ccc] = nums;
nums.push(6);
console.log(newNums);
console.log(nums);

let [a, b, ...rest] = nums;
console.log(rest);
let aa = 10;
let bb = 20;
[bb, aa] = [aa, bb];
console.log(aa, bb);

// let [, , c, , e] = nums;
// console.log(c, e);
// let [a, b, c, d, e] = nums;
// let oldA = nums[0];
// let oldB = nums[1];
// console.log(a, b, c);
