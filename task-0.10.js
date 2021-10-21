function getCommonLetters(firstString, secondString) {
  firstString = firstString.toLowerCase();
  secondString = secondString.toLowerCase();

  let commonLettersArray = [];

  for (let i = 0; i < firstString.length; i++) {
    for (let j = 0; j < secondString.length; j++) {
      if (firstString[i] === secondString[j]) {
        if (commonLettersArray.indexOf(secondString[j]) === -1) {
          commonLettersArray.push(secondString[j]);
        }
      }
    }
  }

  let commonLettersString = commonLettersArray.toString();
  console.log(`Common letters: ${commonLettersString}`);
}

getCommonLetters('Mheho Bravery', 'Amukelani');
