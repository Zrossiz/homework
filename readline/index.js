import { createInterface } from "readline";

const readline = createInterface({
  input: process.stdin,
  output: process.stdout,
});

let rundomNumber = Math.round(Math.random() * 100);

const game = () => {
  readline.question("Загадано число в диапазоне 0 до 100", (userNumber) => {
    userNumber = Number(userNumber);

    if (userNumber === rundomNumber) {
      console.log(`Отгадали число ${rundomNumber}`);
      readline.close();
    } else if (userNumber > rundomNumber) {
      console.log("Больше");
      game();
    } else if (userNumber < rundomNumber) {
      console.log(`Меньше!`);
      game();
    }
  });
};

game();
