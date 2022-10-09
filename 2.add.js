// 삼항연산자는 연속으로 쓸 수 없다 .연속으로 쓰려면 그 안에서 조건을 지정해 주어야 한다.
// 90 < angle < 180 이런거 없다. 기억해.

//짝수의합.. damn!

console.log(
  new Array(10)
    .fill(1)
    .map((el, idx) => el * idx + 1)
    .filter((el) => el % 2 === 0)
    .reduce((acc, cur) => acc + cur)
);

// 개수 찾기

// const array = [1, 2, 3, 4, 5, 1];
// const n = 1;

// const solution = (array, n) => {
//   const number = 0;
//   array.forEach((el) => {
//     if (el === n) {
//       number++;
//     }
//   });

//   return number;
// };
// solution(array, n);

//각도기 왜안되지?
// const solutions = (angle) => {
//     let answer;
//     angle < 90 && answer = 1;
//     angle === 90 && answer = 2;
//     angle > 90 && answer = 3;
//     angle === 180 && answer = 4;
//     return answer;
// }

// 아래꺼는 왜안되지???

const solution3 = (angle) => {
  let answer = 0;
  if (angle < 90) {
    answer = 1;
  } else if (angle == 90) {
    answer = 2;
  } else if (90 < angle && angle < 180) {
    answer = 3;
  } else {
    answer = 4;
  }

  return answer;
};

console.log(solution3(181));
