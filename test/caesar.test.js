// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar() tests", () => {
    it("should return fale if shift is greater than 25", () => {
      const message = "thinkful";
      const actual = caesar(message, 50, true);
      expect(actual).be.false;
    });
  
    it("should maintain spaces throughout", () => {
      const message = "This is a secret message!";
      const actual = caesar(message, 8);
      const expected = 'bpqa qa i amkzmb umaaiom!';
      expect(actual).to.eql(expected);
    });

    it("should be lower case", () => {
        const message = "This is a SECRET message!";
        const actual = caesar(message, 8);
        const expected = 'bpqa qa i amkzmb umaaiom!';
        expect(actual).to.eql(expected);
      });

    it("should properly be shifted and decoded", () => {
        const message = 'bpqa qa i amkzmb umaaiom!';
        const actual = caesar(message, 8, false);
        const expected = "this is a secret message!";
        expect(actual).to.eql(expected);
      });
  });