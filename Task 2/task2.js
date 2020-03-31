const object = [
  { Principal: 2500, time: 1.8 },
  { Principal: 1000, time: 5 },
  { Principal: 3000, time: 1 },
  { Principal: 2000, time: 3 }
];

function interestCalculator(array) {
  let rate = 0;
  const interestData = [];
  for (let i of array) {
    if (i.Principal >= 2500 && i.time > 1 && i.time <= 3) {
      rate = 3;
    } else if (i.Principal >= 2500 && i.time >= 3) {
      rate = 4;
    } else if (i.Principal < 2500 || i.time <= 1) {
      rate = 2;
    } else {
      rate = 1;
    }
    let interest = (i.Principal * rate * i.time) / 100;
    interestData.push({
      principal: i.Principal,
      rate: rate,
      time: i.time,
      interest: interest
    });
  }
  console.log(interestData);
  return interestData;
}
interestCalculator(object);
