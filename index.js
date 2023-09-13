import http from "http";
import { createInterface } from "readline";

const readline = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const start = () => {
  readline.question("Введите нужный город(En) ", (userAnswer) => {
    const url = `http://api.weatherstack.com/forecast?access_key=${process.env.TOKEN}&query=${userAnswer}`;
    http.get(url, (res) => {
      res.setEncoding("utf8");
      let rowData = "";
      res.on("data", (chunk) => (rowData += chunk));
      res.on("end", () => {
        let parseData = JSON.parse(rowData);
        console.log(parseData);
      });
    });
    readline.close();
  });
};

start();
