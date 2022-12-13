// https://school.programmers.co.kr/learn/courses/30/lessons/142086

let answer = [-1];

for (let i = 1; i < s.length; i++) {
  const sliced = s.slice(0, i);
  const closest = sliced.includes(s[i])
    ? sliced.length - sliced.lastIndexOf(s[i])
    : -1;
  answer = [...answer, closest];
}
return answer;

// 내가 푼 풀이가 위에 풀이이다. 효율성에서 떨어진다. 정답은 맞았으나.
//빅 오.
//슬라이싱을 하고 인덱스를 찾고 포함되어있는지 보고 하는데서 메모리가 소요된다.
//기존에 있던 값을 최대한 활용하면서 오브젝트 값에 접근하는 식으로 풀었는데 훨씬 효율적이다. 아래풀이

//      const obj = {};
//   const answer = [];
//   for (let i = 0; i < s.length; i++) {

//     if (obj[s[i]] != null) answer[i] = i - obj[s[i]];
//     else answer[i] = -1;
//     obj[s[i]] = i;
//   }
//   return answer;
