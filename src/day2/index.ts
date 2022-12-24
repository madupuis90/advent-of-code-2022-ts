import { readFileSync } from "fs";

export const sample = `A Y
B X
C Z`;

const input = readFileSync(`${__dirname}/input.txt`, "utf-8");

export function part1(input: string): number {
  return input
    .split("\n")
    .map((line) =>
      line.split(" ").map((character: string) => {
        switch (character) {
          case "A":
          case "X":
            return 1;
          case "B":
          case "Y":
            return 2;
          case "C":
          case "Z":
            return 3;
        }
        throw "invalid character";
      })
    )
    .map((moves) => moves[1] + ((((moves[1] - moves[0] + 3) % 3) * 3 + 3) % 9)) // 0: draw, 1: win, 2: lose
    .reduce((acc, current) => acc + current, 0);
}

export function part2(input: string): number {
  return input
    .split("\n")
    .map((line) =>
      line.split(" ").map((character: string) => {
        switch (character) {
          case "A":
          case "Y":
            return 0; // draw
          case "B":
          case "Z":
            return 1; // win
          case "C":
          case "X":
            return 2; // lose
        }
        throw "invalid character";
      })
    )
    .map(
      // since we map to 0,1,2 instead of 1,2,3 we need to do +1 on the score
      (moves) => ((moves[0] + moves[1] + 3) % 3) + 1 + ((moves[1] * 3 + 3) % 9)
    )
    .reduce((acc, current) => acc + current, 0);
}

console.log(`Part 1 answer is: ${part1(input)}`);
console.log(`Part 2 answer is: ${part2(input)}`);
