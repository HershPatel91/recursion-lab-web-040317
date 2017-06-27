// Code your solution here!

function printString(myString) {
  console.log(myString[0]);
 
  if (myString.length > 1) {
    let mySubString = myString.substring(1, myString.length);
    printString(mySubString);
  } else {
    return true;
  }
}

function reverseString(myString) {
	if (myString.length > 1) {
		return reverseString(myString.substring(1)) + myString[0]
	}
	else {
		return myString
	}
}

function isPalindrome(s){
	if (s.length === 1) {
		return true
	} else if (s[s.length-1] === s[0]) {
		return isPalindrome(s.substring(1,s.length-1)) 
	} else {
		return false
	}
}

function addUpTo(a, i){
	return i ? addUpTo(a, i-1) + a[i] : a[i]
}

function maxOf(a){
	if (a.length > 1){
		if(a[0] < a[a.length-1]){
			a.shift()
			return maxOf(a)
		} else {
			a.pop()
			return maxOf(a)
		}
	} else {
		return a[0]
	}
}

function includesNumber(a, n){
	if(a.length > 0) {
		if (a[0] === n){
			return true
		} else {
			a.shift()
			return includesNumber(a, n)
		}
	} else {
		return false
	}
}
