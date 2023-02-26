export function isPalindromo(text: string): boolean {
    const cleanedText = text.toLowerCase().replace(/[^a-z0-9]+/g, '');
    console.log(cleanedText)  
    // Compare the cleaned text to its reverse
    // const textSplit = cleanedText.split('');
    // const textreverse = textSplit.reverse();
    // const textResults = textreverse.join('');
    // return cleanedText === textResults;
    for (let i = 0; i < cleanedText.length / 2; i++) {
        // console.log(cleanedText[i])
        // console.log(cleanedText[cleanedText.length - 1 - i])
        if (cleanedText[i] !== cleanedText[cleanedText.length - 1 - i]) {
            
          return false;
        }
      }
    
      return true;
  }
  
  // Test the isPalindrome function with some examples
  //console.log(isPalindromo('ANA LAVvqA LANA')); // true