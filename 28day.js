const solution = (food) => {
  const answer = [0];

  for (let i = food.length - 1; i > 0; i--) {
    for (let j = 0; j < parseInt(food[i] / 2); j++) {
      answer.push(i);
      answer.unshift(i);
    }
  }

  return answer.join("");
};

// 프로그래머스 푸드파이트 대회. 위가 나의 풀이. 가운데는 0이 있고 양옆으로 push, unshift를 떠올렸는데,
// string.repeat 메소드를 이용해서 한쪽을 만들고, 그것을 reverse 한 이후에 0과함께 붙여주는 방식으로 풀어 줄 수 있었다.

function solution(food) {
  let res = "";
  for (let i = 1; i < food.length; i++) {
    res += String(i).repeat(Math.floor(food[i] / 2));
  }

  return res + "0" + [...res].reverse().join("");
}
