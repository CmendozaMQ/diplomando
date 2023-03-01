export function stringToArray(input: string): string[] {
  const result = [];

  for (let i = 0; i < input.length; i++) {
    //console.log(input.charAt(i));
    result.push(input.charAt(i));
  }

  return result;
}

// Test the stringToArray function with the example input
//console.log(stringToArray('hello')); // ["H", "e", "l", "l", "o"]