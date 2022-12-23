import { readFileSync } from "fs";

export const sample = `
1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`;

const input = readFileSync(`${__dirname}/input.txt`, "utf-8");

export function part1(input: string): number {
  return Math.max(
    ...input
      .split("\n\n") //split per elf
      .map((lines) => lines.split("\n").map(Number)) // split per provision
      .map((calories) => calories.reduce((acc, current) => acc + current, 0)) // total calories per elf
  );
}

export function part2(input: string): number {
  return input
    .split("\n\n") //split per elf
    .map((lines) => lines.split("\n").map(Number)) // split per provision
    .map((calories) => calories.reduce((acc, current) => acc + current, 0)) // total calories per elf
    .sort((a, b) => a - b) // sort numerically
    .slice(-3) // take last 3 elves
    .reduce((acc, current) => acc + current, 0); // add total calories for top 3 elves
}

console.log(`Part 1 answer is: ${part1(input)}`);
console.log(`Part 2 answer is: ${part2(input)}`);
