function multiplyBy(factor) {
    return function(number) {
        console.log("--->>>> number ",number);
        
      return number * factor;
    };
  }
  
const double = multiplyBy(2);
console.log(double(5)); // 10

const triple = multiplyBy(3);
console.log(triple(5)); // 15
