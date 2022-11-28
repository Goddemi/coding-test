//https://school.programmers.co.kr/learn/courses/30/lessons/135808#qna

function solution(k, m, score) {
  let answer = [];
  const sortedScore = score.sort((a, b) => b - a);

  while (sortedScore.length >= m) {
    answer.push(sortedScore.splice(0, m));
  }

  const okay = answer.reduce((acc, cur) => {
    return acc + Math.min(...cur) * m;
  }, 0);

  return okay;

  //score를 sort한다.
  // m만큼씩 잘라서 answer에 넣는다. 그중의 최대값 * 길이의 합.
}

//내 풀이 -> 시간초과 뜬다. 아래 풀이가 어떤면에서 효율적인지 -> while문 안에서 for문을 돌
// 다 만들어서 계산하려고 하고 , 아래풀이는 만들면서 계산. 잘모르겠다.
// sort는 원본 배열을 바꾸는 것이기 때문에 굳이 복사본을 만들지 않았다는 것.

function solution(k, m, score) {
  let answer = 0;
  score.sort((a, b) => a - b);
  while (score.length >= m) {
    let box = [];
    for (let i = 0; i < m; i++) {
      box.push(score.pop());
    }
    answer += Math.min(...box) * m;
  }
  return answer;
}
