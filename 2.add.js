// 삼항연산자는 연속으로 쓸 수 없다. 연속으로 쓰려면 그 안에서 타고 타고 조건을 지정해 주어야 한다.
// 90 < angle < 180 이런거 없다.

//짝수의합.. damn!

//접근법
console.log(
  new Array(10)
    .fill(1)
    .map((el, idx) => el * idx + 1)
    .filter((el) => el % 2 === 0)
    .reduce((acc, cur) => acc + cur)
);

// const solution3 = (angle) => {
//   let answer = 0;
//   if (angle < 90) {
//     answer = 1;
//   } else if (angle == 90) {
//     answer = 2;
//   } else if (90 < angle && angle < 180) {
//     answer = 3;
//   } else {
//     answer = 4;
//   }

//   return answer;
// };

// console.log(solution3(181));

const id_pw = { id: "kangchul", pw: 123 };
const db = [
  { id: "jungmin", pw: 321 },
  { id: "kangchul", pw: 123 },
  { id: "aaww", pw: 1122 },
];

function solution(id_pw, db) {
  let answer = "";
  db.map((v) => {
    if (v[0] === id_pw[0]) {
      if (v[1] === id_pw[1]) {
        answer = "login";
      } else {
        answer = "wrong pw";
      }
    }
  });
  return answer === "" ? "fail" : answer;
}

console.log(solution(id_pw, db));

console.log(id_pw[0]);

//Array.prototype.indexOf() - JavaScript - MDN Web Docs - Mozilla

// var array = [
// 	{name:"홍길동", age:"20"},
// 	{name:"희동이", age:"25"},
// 	{name:"희동이", age:"30"}
// ];

// var index1 = array.findIndex(obj => obj.name == "희동이"); //하나의 경우
// var index2 = array.findIndex(obj => obj.name == "희동이" && obj.age == "30"); //여러개의 경우도 가능
