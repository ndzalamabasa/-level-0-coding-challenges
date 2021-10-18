function checkEvenOrOdd(number) {
  if (number % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
}

for (let index = 0; index <= 10; index++) {
  checkEvenOrOdd(index);
}
