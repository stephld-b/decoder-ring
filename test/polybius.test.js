// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius() tests", () => {
    it("should return a string", () => {
      const message = "thinkful";
      //> "4432423352125413"
      const actual = polybius(message, true);
      expect(actual).to.be.a('string');
    });
  
    it("should return false if the string has an odd number of numbers", () => {
      const message = "44324233521254134";
      const actual = polybius(message, false);
      expect(actual).be.false;
    });

    it("should return (i/j) as the same character", () => {
        const message = "4432423352125413";
        const actual = polybius(message, false);
        const expected = "th(i/j)nkful";
        expect(actual).to.eql(expected);
      });

    it("should leave spaces maintained throughout the message", () => {
        const message = "Hello world";
        const actual = polybius(message);
        const expected = '3251131343 2543241341';
        expect(actual).to.eql(expected);
      });
  });