//https://school.programmers.co.kr/learn/courses/30/lessons/140108

function solution(str) {
  const count = [1, 0];
  let sel = str[0];
  let res = 0;

  for (let i = 1; i < str.length; i++) {
    sel === str[i] ? count[0]++ : count[1]++;

    if (count[0] === count[1]) {
      sel = str[++i];
      res++;
      [count[0], count[1]] = [1, 0];
    }
  }

  return sel ? ++res : res;
}
