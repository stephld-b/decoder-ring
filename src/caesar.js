// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
    
  function caesar(input, shift, encode = true) {
    // your solution code here
    if(shift < -25 || shift > 25 || shift === 0) return false;
    if(!encode) shift *= -1;
    const alphabet =['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let newAlphabet = [];
    let j = 0;
    let x = alphabet.length;
    for(let i=0; i<alphabet.length; i++){
      if((i + shift) < 0) {
       newAlphabet[i] = alphabet[x + shift];
        x++;
     }else if((i + shift) > 25){
       newAlphabet[i] = alphabet[j];
        j++;
     }else{ newAlphabet[i] = alphabet[i + shift];
     }
   }
   
   const encodedMessage = [];
   for(let i=0; i<input.length; i++){
    input =  input.toLowerCase();
    const letter = input.charAt(i);
    const number = alphabet.indexOf(letter);
    if(letter === " " || letter === "." || letter === "!") encodedMessage.push(letter);
    else encodedMessage.push(newAlphabet[number]);
   }
return encodedMessage.join('');
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
