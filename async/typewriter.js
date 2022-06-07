let charDelay = 0;
const sentence = "hello there from lighthouse labs\n";
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, charDelay);
  charDelay += 50;

};