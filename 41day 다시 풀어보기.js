//https://school.programmers.co.kr/learn/courses/30/lessons/140108

// 문제를 여러번 읽어야 겠다.
// 적어도 문제를 3번 읽는다.
// x와 x가 아닌 다른 글자들이 나온 횟수를 각각 셉니다.
//였는데 x와 x가 아닌 다른 글자들 중 나온 횟수가 x와 같은 어떤 하나의 글자.
// 라고 인식했다.

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
