// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    if(alphabet == undefined) return false;
    if(alphabet.length < 26) return false;
    
    for(let i=0; i<alphabet.length; i++){
      if(alphabet.indexOf(alphabet[i]) !== alphabet.lastIndexOf(alphabet[i])){
        return false;
      }
  
    alphabet.toLowerCase();
    input.toLowerCase();
    }
    if(!!encode){    
      const regularAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
      const codeWord = [];
      for(let i=0; i< input.length; i++){
       const letter = input.charAt(i);
       if(letter === " ") codeWord.push(letter);
       else {
         const number = regularAlphabet.indexOf(letter);
         const newLetter = alphabet.charAt(number);
         codeWord.push(newLetter);
        }
      }
      return codeWord.join('');
    }

    if(!encode){
      const regularAlphabet = "abcdefghijklmnopqrstuvwxyz";
      const codeWord = [];
      for(let i=0; i< input.length; i++){
        const letter = input.charAt(i);
        if(letter === " ") codeWord.push(letter);
        else{
          const number = alphabet.indexOf(letter);
          const newLetter = regularAlphabet.charAt(number);
          codeWord.push(newLetter);
        }
      }
      return codeWord.join('');
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
