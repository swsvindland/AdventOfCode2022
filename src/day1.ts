import { readFile } from "fs";

const snacksPerElf: number[][] = [];

readFile("./src/day1input.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  let elf = [];
  data.split("\n").forEach((value) => {
    if (value === "") {
      snacksPerElf.push(elf);
      elf = [];
    } else {
      elf.push(parseInt(value));
    }
  });

  const caloriesPerElf = [];
  snacksPerElf.forEach((elf) => {
    let calories = 0;
    elf.forEach((snack) => {
      calories += snack;
    });
    caloriesPerElf.push(calories);
    calories = 0;
  });

  let max = [caloriesPerElf[0], caloriesPerElf[1], caloriesPerElf[2]].sort();
  caloriesPerElf.forEach((calories, i) => {
    if (calories > max[0]) {
      max.shift();
      max.push(calories);
      max.sort();
    }
  });

  let sum = 0;
  max.forEach((n) => (sum += n));

  console.log(max);
  console.log(sum);
});
