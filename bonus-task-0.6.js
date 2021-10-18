function getMaximumNumber() {
  let maximumNumber = 0;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > maximumNumber) {
      maximumNumber = arguments[i];
    }
  }
  return maximumNumber;
}

// Function test call
console.log(getMaximumNumber(34, 76, 97, 2, 25, 65));
