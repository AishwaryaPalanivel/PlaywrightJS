// Input string
let input = "Aishwarya";

// ----------------------------
// Reverse the string
// ----------------------------

// 1. Convert string into characters
let chars = input.split("");

// 2. Loop in reverse direction
let reversedString = "";

for (let i = chars.length - 1; i >= 0; i--) {
    reversedString += chars[i];   // 3. Concatenate characters
}

// 4. Print the reversed string
console.log("Reversed String:", reversedString);

// ----------------------------
// Check Palindrome
// ----------------------------

if (input === reversedString) {
    console.log("Palindrome: true");
} else {
    console.log("Palindrome: false");
}
