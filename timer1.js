const args = process.argv.slice(2);

for (const t of args) {
  const time = Number(t);
  if (!isNaN(time) && time > 0) {
    setTimeout(() => {
      process.stdout.write("\x07");
    }, Number(time) * 1000);
  }
}
