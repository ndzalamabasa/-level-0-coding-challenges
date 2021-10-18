function getMaximunNumber(number1, number2, number3) {
  let maximumNumber = 0;

  if (number1 >= number2 && number1 >= number3) {
    maximumNumber = number1;
  } else if (number2 >= number1 && number2 >= number3) {
    maximumNumber = number2;
  } else {
    maximumNumber = number3;
  }

  return maximumNumber;
}

// Function test call
console.log(getMaximunNumber(-172, 99, -78));
