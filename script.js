function firstWord(s) {
  // your code here
	 if (!s || s.indexOf(' ') === -1) {
        return s;
    } else {
        // Extract the first word by finding the index of the first space
        const firstSpaceIndex = s.indexOf(' ');
        return s.slice(0, firstSpaceIndex);
    }
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
