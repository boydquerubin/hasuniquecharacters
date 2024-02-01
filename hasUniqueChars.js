// Write your code below
function hasUniqueChars(word) {
    const uniqueChars = new Set();
  
    for (let i = 0; i < word.length; i++) {
      const char = word.charAt(i);
      if (uniqueChars.has(char)) {
        return false; // Found a duplicate character
      }
      uniqueChars.add(char);
    }
  
    return true; // No duplicate characters found
  }

  console.log(hasUniqueChars("Monday"));
  console.log(hasUniqueChars("Moonday"));