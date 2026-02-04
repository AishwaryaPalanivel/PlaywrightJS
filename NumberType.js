function checkNumberType(num){
if (num>0) {
    console.log("Given is a positive number="+num)
} else if(num<0) {
    console.log("Given is a Negative number="+num)
}else
{
    console.log("Given is a Neutral number="+num)
}
}
let number = -1000
let result = checkNumberType(number)
console.log(result)