// https://school.programmers.co.kr/learn/courses/30/lessons/138477

honored = honored.filter((ele) => ele !== Math.min(...honored));

// 최소값 하나만 제거하면 되는데, 이렇게 할 경우에 최소값이 여러개일 경우 다 없어져 버린다.

function solution(k, score) {
  let answer = [];
  let honored = [];
  for (let i = 0; i < score.length; i++) {
    if (honored.length < k) {
      honored = [...honored, score[i]];
      answer.push(Math.min(...honored));
    } else {
      if (Math.min(...honored) >= score[i]) {
        answer.push(Math.min(...honored));
      } else {
        honored.splice(honored.indexOf(Math.min(...honored)), 1);
        honored.push(score[i]);
        answer.push(Math.min(...honored));
      }
    }
  }
  return answer;
}
