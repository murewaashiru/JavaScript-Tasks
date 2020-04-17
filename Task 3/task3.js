function Checker(number) {
  const sentence = [];
  for (let i = 1; i <= number; i++) {
    if (i % 2 == 0) {
      sentence[i - 1] = 'yu';
      //If divisible by 2 & 3
      if (i % 3 == 0) {
        sentence[i - 1] = 'yu-gi';
      }
      //If divisible by 2 & 5
      if (i % 5 == 0) {
        sentence[i - 1] = 'yu-oh';
      }
      //If divisible by 2 & 3 & 5
      if (i % 3 == 0 && i % 5 == 0) {
        sentence[i - 1] = 'yu-gi-oh';
      }
    } else if (i % 3 == 0) {
      sentence[i - 1] = 'gi';
      //If divisible by 3 & 5
      if (i % 5 == 0) {
        sentence[i - 1] = 'gi-oh';
      }
    } else if (i % 5 == 0) {
      sentence[i - 1] = 'oh';
    } else {
      sentence[i - 1] = i;
    }
  }
  console.log(sentence);
  return sentence;
}

const checkmate = 30;
Checker(checkmate);
