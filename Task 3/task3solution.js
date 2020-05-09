function yuGiOhReplacer(num) {
  let yuGiOh = [];
  for (let i = 1; i <= num; i++) {
    let temp = '';
    if (i % 2 === 0) {
      temp += 'yu';
    }
    if (i % 3 === 0) {
      temp += temp !== '' ? '-gi' : 'gi';
    }
    if (i % 5 === 0) {
      temp += temp !== '' ? '-oh' : 'oh';
    }
    if (temp === '') {
      temp = i;
    }
    yuGiOh.push(temp);
  }
  console.log(yuGiOh);
  return yuGiOh;
}
yuGiOhReplacer(100);
yuGiOhReplacer(45);
