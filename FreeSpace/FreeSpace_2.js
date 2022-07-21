const a = function () {
  return (b = "C");
};

const d = function () {
  a();
  if (b === "C") {
    alert("Good job!");
  }
};
