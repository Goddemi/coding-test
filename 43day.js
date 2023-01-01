// https://school.programmers.co.kr/learn/courses/30/lessons/120956

// 정규식활용에 비해 효율이 떨어짐. 잘푼듯 그래도. 재귀!

function solution(babbling) {
  const vocas = ["aya", "ye", "woo", "ma"];
  let answer = 0;

  const newArray = babbling.map((ele) => {
    for (let i = 0; i <= vocas.length; i++) {
      ele = ele.replace(vocas[i], "1"); //이게 핵심.
    }

    return ele;
  });

  newArray.forEach((ele) => {
    !isNaN(ele) && answer++;
  });

  return answer;
}
