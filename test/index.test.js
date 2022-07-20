import { isHappyNumber, isLuckyNumber } from "../src/index.js";

describe("Test cases", () => {
  it("Number 7", () => {
    const number = 7;
    expect(isHappyNumber(number)).toBe(true);
    expect(isLuckyNumber(number)).toBe(true);
  });
  it("Number 21", () => {
    const number = 21;
    expect(isHappyNumber(number)).toBe(false);
    expect(isLuckyNumber(number)).toBe(true);
  });
  it("Number 28", () => {
    const number = 28;
    expect(isHappyNumber(number)).toBe(true);
    expect(isLuckyNumber(number)).toBe(false);
  });
  it("Number 142", () => {
    const number = 142;
    expect(isHappyNumber(number)).toBe(false);
    expect(isLuckyNumber(number)).toBe(false);
  });
  it("Number 37", () => {
    const number = 37;
    expect(isHappyNumber(number)).toBe(false);
    expect(isLuckyNumber(number)).toBe(true);
  });
  it("Number 100", () => {
    const number = 100;
    expect(isHappyNumber(number)).toBe(true);
    expect(isLuckyNumber(number)).toBe(false);
  });
  it("Number 1", () => {
    const number = 1;
    expect(isHappyNumber(number)).toBe(true);
    expect(isLuckyNumber(number)).toBe(true);
  });
});
