function combine(n1: string | number, n2: string | number) {
  let result;
  if (typeof n1 === "number" && typeof n2 === "number") {
    result = n1 + n2;
  } else {
    result = n1.toString() + n2.toString();
  }

  return result;
}
const combinedAges = combine(30, 26);
console.log(combinedAges);
const combinedNames = combine("sojeong", "park");
console.log(combinedNames);
