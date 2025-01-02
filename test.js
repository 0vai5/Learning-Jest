const checkPalindrome = require("./index.js");

describe("Check Palindromic Strings", () => {
  test("Checks if String is a Palindrome", () => {
    expect(checkPalindrome("mam")).toBeTruthy();
  });

  test("Checks if String is a Palindrome", () => {
    expect(checkPalindrome("car")).toBeFalsy();
  });

  test("Checks if String is a Palindrome", () => {
    expect(checkPalindrome("a")).toBeTruthy();
  });

  test("Checks if String is a Palindrome", () => {
    expect(checkPalindrome("")).toBeFalsy();
  });
});
