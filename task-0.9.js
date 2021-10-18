function searchVowels(string) {
  string = string.toLowerCase();
  let vowelsArray = [];

  let vowels = ['a', 'e', 'i', 'o', 'u'];

  for (let i = 0; i < string.length; i++) {
    if (vowels.includes(string[i])) {
      if (!(vowelsArray.indexOf(string[i]) !== -1)) {
        vowelsArray.push(string[i]);
      }
    }
  }

  vowelsString = vowelsArray.toString();
  console.log(`Vowels: ${vowelsString}`);
}

searchVowels('Mheho Bravery');
