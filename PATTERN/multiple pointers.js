// sumZero라는 합수를 작성합니다.
// 분류(assorted)가 아니라 정렬(assorted)된 배열이어야 합니다. 다만 오름차순이어야 합니다.
// 이 함수는 합계가 0인 첫 번째 쌍, 즉,
// 한 숫자를 가져와 다른 숫자에 더하면 0이 되는 쌍을 찾습니다.

sumZero([-3, -2, -1, 0, 1, 2, 3]); // [-3, 3]
sumZero([-2, 0, 1, 3]); // undefined
sumZero([1, 2, 3]); //undefined

// 일반 풀이

function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}
