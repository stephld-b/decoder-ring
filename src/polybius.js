// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // your solution code here
    const inputWithoutSpaces = input.split(" ").join("");
    const getLength = inputWithoutSpaces.length;
    if(!encode && (getLength % 2) != 0) return false;
    const encodedMessage2 = [];

    if(encode){
      const alphabet =['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
      const polybiusSquare = ['11', '21', '31', '41', '51', '21', '22', '32', '42', '42', '52', '13', '23', '33', '43', '53', '14', '24', '34', '44', '54', '15', '25', '35', '45', '55'];
      
      
      input = input.toLowerCase();
      for(let i=0; i<input.length; i++){
        const letter = input.charAt(i);
        if(letter === " ") encodedMessage2.push(letter);
        else {
          const number = alphabet.indexOf(letter);
          const newNumber = polybiusSquare[number];
          encodedMessage2.push(newNumber);
        }
      }
      return encodedMessage2.join('');
    }

    if(!encode){
      const alphabet =['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', '(i/j)', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
      const polybiusSquare = ['11', '21', '31', '41', '51', '12', '22', '32', '42', '52', '13', '23', '33', '43', '53', '14', '24', '34', '44', '54', '15', '25', '35', '45', '55'];
    
      for(let i=0; i<input.length; i+=2){
        if(input.charAt(i) === " ") {
          encodedMessage2.push(input.charAt(i));
          
          const number = input.charAt(i+1) + input.charAt(i+2);
          const letter = polybiusSquare.indexOf(number);
          encodedMessage2.push(alphabet[letter]);
          i++;
          }
        
        else {
         const number = input.charAt(i) + input.charAt(i+1);
         const letter = polybiusSquare.indexOf(number);
         encodedMessage2.push(alphabet[letter]);
          }
      }
      return encodedMessage2.join('');
    }

  }
 
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
