export function getMaxNumber(numbers: number[]): number {
    let maxNumber = numbers[0]; 
  

    for (let i = 1; i < numbers.length; i++) {
    //console.log(numbers[i])
    //console.log(maxNumber)  
      if (numbers[i] > maxNumber) {        
        maxNumber = numbers[i]; 
      }
    }
  
    return maxNumber; 
  }
  
  //console.log(getMaxNumber([2, 88, 65, 17, 95, 39])); // 95