function filterCharacter(phrase) {
  const chars = phrase.split("");
  const result = chars.filter((char) => !["a", "i", "e"].includes(char)).join("");
  console.log(result);
}

filterCharacter("a Lazy fox is jumping on the river");
