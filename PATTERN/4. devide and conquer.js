// 퀵 정렬과 병합 정렬은 분할 정복 알고리즘의 예시이다.
//주로 배열이나 문자열 같은 큰 규모의 데이터셋을 처리한다.

// 배열을 작은 조각으로 세분하여 각 조각들을 어디로 이동시킬지 결정하는 작업.
// 큰 데이터 덩어리를 작은 데이터를 작은 조각으로 나눈다.

search([1, 2, 3, 4, 5, 6], 4); // 3 인덱스 찾기. 순진한 접근법은 왼쪽에서부터 하나씩 찾아가는 것.  O(N)

// 분할정복은 다르다. O(상수?)이 나온다.

// ex) 이진 탐색. -> O(logn)

// !정렬된! 배열의 중간값을 찾는다. 그 중간값과 찾는 값을 비교한다, 크고 작음의 비교를 통해 앞의 요소에 대한 탐색을 통째로 생략할 수 있게 된다.

search([1, 2, 3, 4, 5, 6, 7, 8], 7);

function search(array, val) {
  let min = 0;
  let max = array.length - 1; //7

  while (min <= max) {
    // 0 , 7
    let middle = Math.floor((min + max) / 2); // 3
    let currentElement = array[middle]; // 4

    if (currentElement < val) {
      // 4, 7
      min = middle + 1; // 5
    } else if (currentElement > val) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
}
