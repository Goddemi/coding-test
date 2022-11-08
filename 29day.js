// 진심으로 이게 왜  안되는지 모르겠음.

const solution = (ingredient) => {
  let answer = 0;
  const strs = ingredient.join("");
  while (strs.includes("1231")) {
    strs.replace("1231", "");
    answer++;
  }
  return answer;
};

solution([2, 1, 2, 3, 1]);

// replace의 시간복잡도가 O(n)이기 때문에 시간초과가 뜨는 것 처럼 보이네요.
