let input ="Hello World" 
let trimmed=input.trim()// Remove extra spaces
let words=trimmed.split(" ")// Split into words
let lastword=words[words.length-1]// Get last word
console.log(lastword.length)

let s = "   fly me   to   the moon  " 
let consolidate=s.trim()
let singlewordsplit=consolidate.split(" ")
let lastwords=singlewordsplit[singlewordsplit.length-1]
console.log(lastwords)
console.log(lastwords.length)