function firstWord(s) {
  // your code here
	s=s.trim()
	let n=s.length
	let ans=""
	for(let i=0;i<n;i++){
		if(s[i]==" "){
			break;
		}
		ans+=s[i]
	}
	return ans
}

// Do not change the code below

const s = prompt("Enter String:");  
alert(firstWord(s));
