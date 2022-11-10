// 2022카카오 인턴쉽 lv2

//배열이 비어있는데 initialValue도 제공하지 않으면 TypeError가 발생합니다. 배열의 요소가 (위치와 관계없이) 하나 뿐이면서 initialValue를 제공되지 않은 경우, 또는 initialValue는 주어졌으나 배열이 빈 경우엔 그 단독 값을 callback 호출 없이 반환합니다.
// 다음의 예제처럼 initialValue을 제공하지 않으면 출력 가능한 형식이 세 가지이므로, 보통 초기값을 주는 것이 더 안전합니다.

// 두 큐에 담긴 모든 원소의 합은 30입니다. 따라서, 각 큐의 합을 15로 만들어야 합니다. 예를 들어, 다음과 같이 2가지 방법이 있습니다. -->> 이게 핵심이다. 이 알고리즘을 이해해야 한다.
//모든 원소의 합 구하기.

//나의풀이 시간초과 난다.
const solution = (queue1, queue2) => {
  let answer = 0;

  let queue1Sum = queue1.reduce((acc, cur) => acc + cur);
  let queue2Sum = queue2.reduce((acc, cur) => acc + cur);

  const total = queue1Sum + queue2Sum;
  const standard = total / 2;

  if (total % 2) return -1;

  while (queue1Sum !== standard) {
    if (answer > queue1.length + queue2.length) return -1;

    if (queue1Sum > queue2Sum) {
      queue2.push(queue1.shift());
      answer += 1;
    } else if (queue1Sum < queue2Sum) {
      queue1.push(queue2.shift());
      answer += 1;
    }

    queue1Sum = queue1.reduce((acc, cur) => {
      return acc + cur;
    }, 0);
    queue2Sum = queue2.reduce((acc, cur) => {
      return acc + cur;
    }, 0);
  }

  return answer;
};

//다른사람풀이. 뭐지...;;
function solution(queue1, queue2) {
  const getSum = (arr) => arr.reduce((a, c) => a + c, 0);

  if (getSum([...queue1, ...queue2]) % 2 !== 0) return -1;

  const queue = [...queue1, ...queue2, ...queue1, ...queue2]; //여기 이해가 안된다.
  const maxCount = queue.length;
  const average = getSum(queue) / 4;
  let [currentSum, count, start, end] = [getSum(queue1), 0, 0, queue1.length];

  const pop = () => {
    currentSum -= queue[start];
    start += 1;
    count += 1;
  };
  const insert = () => {
    currentSum += queue[end];
    end += 1;
    count += 1;
  };

  while (count <= maxCount) {
    if (currentSum < average) insert();
    if (currentSum > average) pop();
    if (currentSum === average) return count;
  }
  return -1;
}
