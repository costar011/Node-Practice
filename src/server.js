import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";

const PORT = 3001;
const app = express();

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extends: true }));

/**
 *
 * makeText라는 이름의 함수를 생성한다.
 * 해당 함수는 파라미터를 2개 받아오도록한다.
 * 첫 번째 파라미터가 "안녕" 이고, 두번 쨰 파라미터가 "하세요" 라면
 * "안녕하세요" 가 콘솔에 나오도록한다.
 *
 * [테스트코드]
 * makeText("안녕", "하세요")
 *
 *
 */

const makeText = (param1, param2) => {
  const result = param1 + param2;
  console.log(param1, param2);
};

/**
 *
 * sum이라는 이름의 함수를 생성한다.
 * 해당함수는 파라미터를 2개 받도록 해야한다.
 * 받은 파라미터를 더하여 더한 값을 변수 result에 담고 콘솔에 출력한다.
 * - 출력형태 -
 * 두 데이터 값은 ??? 입니다.
 *
 * [테스트코드]
 * sum(44, 21);
 * sum(12, 45);
 */

const sum = (param1, param2) => {
  console.log(param1, param2);
  const result = param1 + param2;
  console.log(`두 데이터값은 ${result}입니다.`);
};

/**
 *
 * sendLetter 라는 함수를 생성한다.
 * 파라미터는 1개만 받아오도록 설정한다. ( 파라미터 이름 : name )
 *
 *  - 출력형태 -
 * 안녕하세요 name 님
 * name 님을 위한 정보제공입니다.
 * name님은 앞으로 ... ...가 가능합니다.
 *
 * [테스트코드]
 * sendLetter("김경민");
 * sendLetter("라이언")
 *
 */

const sendLetter = (param1) => {
  console.log(param1);
  const name = param1;
  console.log(`안녕하세요 ${name}님`);
  console.log(`${name}님을 위한 정보제공 입니다.`);
  console.log(`${name}님은 앞으로 ... ...가 가능합니다.`);
};

app.listen(PORT, () => {
  console.log(`Server Start ${PORT}`);

  makeText("안녕", "하세요");

  sum(44, 21);
  sum(12, 45);

  sendLetter("정예림");
  sendLetter("라이언");
});
