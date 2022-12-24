import { part1, part2, sample } from "./index";

describe("Day 2", () => {
  test("Part 1: Return the total score of rock/paper/scissor following normal strategy", () => {
    expect(part1(sample)).toBe(15);
  });

  test("Part 2: Return the total score of rock/paper/scissor following super secret strategy", () => {
    expect(part2(sample)).toBe(12);
  });
});
