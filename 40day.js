// https://school.programmers.co.kr/learn/courses/30/lessons/138476

// 첫번째 풀이.
// reduce로 값 정리해두고 푸는거에 꽂혀서 자꾸 저렇게 푼다. 식이 길어지고 과정이 복잡해진다.
// 시간초과로 실패로 나오는 상황.

// const maxNum = Math.max(...Object.values(counter));
//여기에 문제가 있었다.
// const maxNum = Math.max(Object.values(counter).join(""))
//이렇게 햇었는데 아래의 차이를 알았어야 했다.
// let a1 = arr1.join(); // default는 ',' 입니다
// let a2 = arr2.join();
// console.log(a1); // '1,2,3,4,5'
// console.log(a2); // 'a,b,c,d'

// a1 = arr1.join('');
// a2 = arr2.join('');
// console.log(a1); // '12345'
// console.log(a2); // 'abcd'

function solution(k, tangerine) {
  let answer = 0;

  let counter = tangerine.reduce((acc, cur) => {
    if (cur in acc) {
      acc[cur]++;
    } else {
      acc[cur] = 1;
    }
    return acc;
  }, {});

  while (k > 0) {
    const maxNum = Math.max(...Object.values(counter));
    k = k - maxNum;
    answer++;

    if (k < 0) break;

    for (x in counter) {
      if (counter[x] === maxNum) {
        counter[x] = 0;
        break;
      }
    }
  }
  return answer;
}

//reduce말고 , forEach로 hash 맏늘기
// tangerine.forEach((t) => tDict[t] = (tDict[t] || 0) + 1);

//다른사람풀이. 접근은 비슷했는데.. 굳이 최대값을 구해서 그걸 빼고 그걸가지고 있는 놈을 배열에서 제거하고 다시 최대값을하고.. 할필요가 없었다.
// sort를 써야 했는듯.

function solution(k, tangerine) {
  let answer = 0;
  const tDict = {};
  tangerine.forEach((t) => (tDict[t] = (tDict[t] || 0) + 1));
  const tArr = Object.values(tDict).sort((a, b) => b - a);
  for (const t of tArr) {
    answer++;
    if (k > t) k -= t;
    else break;
  }
  return answer;
}
