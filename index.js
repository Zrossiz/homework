const { createInterface } = require("readline");
const path = require("path");
const fs = require("fs");

const readline = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const file = path.resolve(__dirname, "history.json");

const game = () => {
  const variants = ["Орел", "Решка"];
  const rundomNumber = Math.round(Math.random());

  readline.question(
    'Игра в "Орел или решка началась, попробуйте угадать"',
    (userAnswer) => {
      const StringUserAnswer = String(userAnswer);
      const resultOfGame = {
        "Правильный ответ": variants[rundomNumber],
        "Ваш ответ": StringUserAnswer,
      };
      if (StringUserAnswer == variants[rundomNumber]) {
        console.log("Поздравляем, вы отгадали");
        console.log("Историю своих игр можете посмотреть в файлу history.txt");
        fs.appendFile(file, JSON.stringify(resultOfGame), (err) => {
          readline.close();
        });
        readline.close();
      } else {
        console.log("К сожалению вы проиграли");
        console.log("Историю своих игр можете посмотреть в файлу history.txt");
        fs.appendFile(file, JSON.stringify(resultOfGame), (err) => {
          readline.close();
        });
        readline.close();
      }
    }
  );
};

game();
