/**
 * urlify
 * @param {string} url
 * @return {string}
 */
const urlify = url => {
  let buffer = "";
  for (const letter of url) {
    if (letter === " ") buffer += "%20";
    else buffer += letter;
  }
  return buffer;
};

console.log(urlify("www.thinkful.com /tauh ida parv een"));
// expected output: www.thinkful.com%20/tauh%20ida%20parv%20een
