//task 4.1
let password = prompt("Enter your password:");

//task 4.2
const minLength = 5;
const maxLength = 30;
const minUppercase = 2;
const minLowercase = 2;
const minNumbers = 1;
const minSpecialChars = 2;

let lengthFeedback = "";
if (password.length < minLength) {
  lengthFeedback = "Password is short.";
} else if (password.length > maxLength) {
  lengthFeedback = "Password is long.";
} else {
  lengthFeedback = "Password length is good.";
}

//task 4.3
let uppercaseChars = /[A-Z]/g;
let lowercaseChars = /[a-z]/g;
let numberChars = /[0-9]/g;
let specialChars = /[^A-Za-z0-9]/g;

let hasUppercase = password.match(uppercaseChars);
let hasLowercase = password.match(lowercaseChars);
let hasNumbers = password.match(numberChars);
let hasSpecialChars = password.match(specialChars);

let strengthRating = 0;
if (password.length >= minLength && password.length <= maxLength) {
  strengthRating++;
}
if (hasUppercase) {
  strengthRating++;
}
if (hasLowercase) {
  strengthRating++;
}
if (hasNumbers) {
  strengthRating++;
}
if (hasSpecialChars) {
  strengthRating++;
}

//task 4.4
let feedbackMessage = "";
switch (strengthRating) {
  case 1:
    feedbackMessage = "Weak password.";
    break;
  case 2:
    feedbackMessage = "Moderate password.";
    break;
  case 3:
    feedbackMessage = "Good password.";
    break;
  case 4:
    feedbackMessage = "Strong password.";
    break;
  case 5:
    feedbackMessage = "Very strong password.";
    break;
  default:
    feedbackMessage = "Invalid password.";
}

//task 4.5
console.log("Password:", password);
console.log("Length Feedback:", lengthFeedback);
console.log("Has Uppercase Letters:", hasUppercase ? "Yes" : "No");
console.log("Has Lowercase Letters:", hasLowercase ? "Yes" : "No");
console.log("Has Numbers:", hasNumbers ? "Yes" : "No");
console.log("Has Special Characters:", hasSpecialChars ? "Yes" : "No");
console.log("Strength Rating:", strengthRating);
console.log("Feedback:", feedbackMessage);