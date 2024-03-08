//task 5.1
let string = prompt("Enter a string to be encrypted:");

//task 5.2
function encryptCaesar(input, shift) {
  let encryptedString = "";


  //task 5.3
  for (let i = 0; i < input.length; i++) {
    let char = input[i];

    if (char.match(/[a-z]/i)) {

      let code = input.charCodeAt(i);

      if (code >= 65 && code <= 90) {
        char = String.fromCharCode(((code - 65 + shift) % 26) + 65);
      }
      else if (code >= 97 && code <= 122) {
        char = String.fromCharCode(((code - 97 + shift) % 26) + 97);
      }
    }

    encryptedString += char;
  }

  return encryptedString;
}


//task 5.4
function decryptCaesar(input, shift) {
  return encryptCaesar(input, 26 - shift);
}

//task 5.5
const shiftAmount = 3;

let encryptedResult = encryptCaesar(inputString, shiftAmount);
console.log("Encrypted Result:", encryptedResult);

let decryptedResult = decryptCaesar(encryptedResult, shiftAmount);
console.log("Decrypted Result:", decryptedResult);