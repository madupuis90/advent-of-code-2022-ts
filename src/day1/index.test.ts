import { part1, part2, sample } from "./index";

describe("Day 1", () => {
  test("Part 1: Return the total calories carried by the elf carrying the most calories", () => {
    expect(part1(sample)).toBe(24000);
  });

  test("Part 2: Return the total calories carried by the top 3 elves carrying the most calories", () => {
    expect(part2(sample)).toBe(45000);
  });
});
