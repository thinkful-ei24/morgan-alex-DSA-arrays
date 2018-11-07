// 'Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'
// filter aeiou
// 'Bttl f th Vwls: Hw vs. Grzny'
const removeCharacters = (input, filter) => {
  function generateFilterLookup(filter) {
    const set = new Set();
    for (const letter of filter) {
      set.add(letter);
    }
    return set;
  }
  // create some way to look up if a character is in our filter
  const filterLookup = generateFilterLookup(filter); // Expect filter to be a Set with has() lookup function
  // Build a string with all characters from our input that are not in the filter
  let result = "";
  for (const letter of input) {
    if (!filterLookup.has(letter)) result += letter;
  }
  // return filtered string
  return result;
};

console.log(
  removeCharacters("Battle of the Vowels: Hawaii vs. Grozny", "aeiou")
);
