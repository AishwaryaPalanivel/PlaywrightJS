let s1="listen"
let s2="silent"
let text1=s1.split('').sort().join('')
let text2=s2.split('').sort().join('')
if (text1===text2) {
    console.log("Given string is a anagram:"+s1+","+s2+"=>True")
    
}else{
    console.log("Given string is not anagram"+s1+","+s2+"=>False")
}
