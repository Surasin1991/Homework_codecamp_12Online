let acc = "";
for (let i = 0; i < 4; i++) {
  for (let j = 0; j <= i; j++) {
    acc += "* ";
  }
  acc += "\n";
}
console.log(acc);
