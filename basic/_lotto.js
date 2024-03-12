//중복방지....
// 1~45  숫자 나열 후에 랜덤하게 뽑기
// 1~45  섞어넣고 앞에서 6장 뽑기

const nums = [];
let i;
for (i = 0; i < 45; i = i + 1) {
  //console.log(i);
  nums[i] = i + 1;
}
// console.log(nums[Math.floor(Math.random() * 45)]);
// console.log(nums[Math.floor(Math.random() * 45)]);
// console.log(nums[Math.floor(Math.random() * 45)]);
// console.log(nums[Math.floor(Math.random() * 45)]);
// console.log(nums[Math.floor(Math.random() * 45)]);
// console.log(nums[Math.floor(Math.random() * 45)]);

const animals = ["tiger", "cat", "lion", "bear"];
const selected = ["tiger"];
console.log(animals.splice(0, 1)[0]);

// console.log(animals.shift()); //앞에서 뽑기 배열에 영향을 미친다.
// console.log(animals);
// console.log(animals.pop());
// console.log(animals);
//animals.push("dog");
//animals.unshift("frog");
// console.log(animals.splice(1, 2));
// console.log(animals);
for (let j = 0; j < 6; j++) {
  console.log(nums.splice(Math.floor(Math.random() * nums.length), 1).pop());
}
// console.log(nums.splice(Math.floor(Math.random() * 44), 1));
// console.log(nums.splice(Math.floor(Math.random() * 43), 1));
// console.log(nums.splice(Math.floor(Math.random() * 42), 1));
// console.log(nums.splice(Math.floor(Math.random() * 41), 1));
// console.log(nums.splice(Math.floor(Math.random() * 40), 1));
console.log(nums);
