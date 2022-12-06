import { readFile } from "fs";

readFile("./src/day6input.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const dataStream = [];
  data.split("").forEach((value) => {
    dataStream.push(value);
  });

  const checkIfAllDifferent = (array: string[]) => {
    const unique = Array.from(new Set(array));
    return unique.length === array.length;
  };

  // Part 1
  let foundStartOfPacked = false;
  dataStream.forEach((value, index) => {
    if (
      !foundStartOfPacked &&
      checkIfAllDifferent(dataStream.slice(index, index + 4))
    ) {
      console.log(index + 4, dataStream.slice(index, index + 4));
      foundStartOfPacked = true;
    }
  });

  // Part 2
  let foundStartOfMessage = false;
  dataStream.forEach((value, index) => {
    if (
      !foundStartOfMessage &&
      checkIfAllDifferent(dataStream.slice(index, index + 14))
    ) {
      console.log(index + 14, dataStream.slice(index, index + 14));
      foundStartOfMessage = true;
    }
  });
});
