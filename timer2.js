const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function() {
  // your code here
  const digits = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ];

  process.stdin.once("data", (key) => {
    if (key === "\u0003") {
      process.exit();
    }
    if (key === "b") {
      process.stdout.write("\x07");
    }
    if (digits.includes(key)) {
      console.log(`setting timer for ${key} seconds...`);
      setTimeout(() => {
        process.stdout.write("\x07");
      }, Number(key) * 1000);
    }
  });
};

setupInput();
