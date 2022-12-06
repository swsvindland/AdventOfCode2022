import { readFile } from "fs";

readFile("./src/day4input.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const pairs = [];
  data.split("\n").forEach((value) => {
    const split = value.split(",");
    if (split !== undefined) {
      pairs.push(split);
    }
  });

  const getAllIdsInRange = (str: string) => {
    if (str?.includes("-")) {
      const range = str.split("-");
      const start = parseInt(range[0]);
      const end = parseInt(range[1]);
      const ids = [];
      for (let i = start; i <= end; i++) {
        ids.push(i);
      }
      return ids;
    }
  };

  const checkIfListContainsList = (list: number[], subList: number[]) => {
    // return subList?.every(value => list?.includes(value));
    return subList?.some((value) => list?.includes(value));
  };

  let sum = 0;
  pairs.forEach((pair) => {
    const ids1 = getAllIdsInRange(pair[0]);
    const ids2 = getAllIdsInRange(pair[1]);

    if (checkIfListContainsList(ids1, ids2)) {
      sum++;
    } else if (checkIfListContainsList(ids2, ids1)) {
      sum++;
    }
  });

  console.log(sum);
});
