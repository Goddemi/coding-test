maxSubarraySum([], n); // []배열 안에 있는 값 !연속된!n개를 선택해서 최대값을 만들기.

maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2); // 10
maxSubarraySum([], 4); // null

function maxSubarraySum(arr, num) {
  if (num > arr.length) {
    return null;
  }
  var max = -Infinity; // <--- 모든 수가 음수일 경우로 인해,
  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      // 이 부분이랑 연결시키면됨 13번째줄이랑.
      max = temp;
    }
  }
  return max;
}

maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3);

//비효율 적이다. (O(^2))
//세개를 계속 더하고 더하고 더하고 그게 아니라
// 2,6,9의 합을 처음에 구했다면 그 다음은 왼쪽의 2를 빼고, 오른쪽의 2를 더 넣는 식으로 합계를 구하는 것.

function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3);

// 직접 써보기
const maxSub = (arr, n) => {
  if (arr.length < n) return null;
  let windowSum = 0;
  let maxSum = 0;

  for (let i = 0; i < n; i++) {
    maxSum += arr[i];
  }

  windowSum = maxSum;
  for (let i = n; i < arr.length; i++) {
    windowSum = windowSum - arr[i - n] + arr[i];
    maxSum = Math.max(windowSum, maxSum);
  }
  return maxSum;
};
