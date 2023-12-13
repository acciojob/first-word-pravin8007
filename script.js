function firstWord(s) {
  // your code here
	const trimmedString = s.trim();
    const firstSpaceIndex = trimmedString.indexOf(' ');

    if (firstSpaceIndex === -1) {
        return trimmedString;
    } else {
        return trimmedString.slice(0, firstSpaceIndex);
    }
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
