// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution() tests", () => {
    it("should be able to include special characters", () => {
      const message = "message";
      const expected = "y&ii$r&";
      const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
      const actual = substitution(message, alphabet);
      expect(actual).to.equal(expected);
    });
  
    it("should return false if alphabet is not exactly 26 characters", () => {
      const message = "message";
      const alphabet = "message";
      const actual = substitution(message, alphabet);
      expect(actual).be.false;
    });

    it("should return (i/j) as the same character", () => {
        const message = "message";
        const alphabet = "abcabcabcabcabcabcabcabcab";
        const actual = substitution(message, alphabet);
        expect(actual).be.false;
      });

    it("should leave spaces maintained throughout the message", () => {
        const message = "you are an excellent spy";
        const alphabet = "xoyqmcgrukswaflnthdjpzibev";
        const actual = substitution(message, alphabet);
        const expected = 'elp xhm xf mbymwwmfj dne';
        expect(actual).to.equal(expected);
      });
  });