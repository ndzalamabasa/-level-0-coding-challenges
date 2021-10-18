function convertNumberToTime(number) {
  let hours = Math.floor(number / 60);
  let minutes = number % 60;

  if (hours >= 0 && hours < 2) {
    if (minutes >= 0 && minutes < 2) {
      return `${hours} hour, ${minutes} minute`;
    } else {
      return `${hours} hour, ${minutes} minutes`;
    }
  } else if (hours >= 1) {
    if (minutes >= 0 && minutes < 2) {
      return `${hours} hours, ${minutes} minute`;
    } else {
      return `${hours} hours, ${minutes} minutes`;
    }
  } else {
    return `The number must be valid and positive`;
  }
}

// Function test call
console.log(convertNumberToTime(133));
