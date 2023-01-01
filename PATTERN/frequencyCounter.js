// 2개의 배열을 허용하는 same이라는 함수를 작성하십시오. 배열의 모든 값이
// 두 번째 배열에 해당하는 값을 가지면 참을 반환해야 합니다.
// 따라서 첫 번째 배열에는 여러 값이 있는데 두 번째 배열의 값이 정확히 동일하지만
// 제곱되어 있는지 알고자 합니다.
// 하지만 순서는 상관 없으니 동일할 필요는 없고 그저 제곱만 하면 됩니다.
// 섞일 수 있지만 값의 빈도는 동일해야 합니다.
// 예를 들어보겠습니다.
// 1,2,3이 있고 4,1,9가 있으면 참이 반환되어야 합니다.

// 일반적인 풀이

const solution = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i <= arr1; i++) {
    if (!arr2.indexOf(arr1[i] ** 2)) {
      return false;
    }
    const doubleEle = arr1[i] ** 2;
    const doubleIndex = arr2.indexOf(doubleEle);
    arr2.splice(doubleIndex, 1);
  }
  return true;
};

//Frequency Counter.

const solution2 = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let FrequencyCounter1 = {};
  let FrequencyCounter2 = {};

  for (let ele of arr1) {
    FrequencyCounter1[ele] = (arr1[ele] || 0) + 1;
  }
  for (let ele of arr2) {
    FrequencyCounter2[ele] = (arr2[ele] || 0) + 1;
  }

  for (let ele in FrequencyCounter1) {
    const doubleNum = FrequencyCounter1[ele] ** 2;
    if (!FrequencyCounter2[doubleNum]) {
      return false;
    }
    if (FrequencyCounter1[ele] !== FrequencyCounter2[doubleNum]) {
      return false;
    }
  }
  return true;
};

//리팩토링

const solution3 = (arr1, arr2) => {
  if (arr1.length !== arr2.length) false;
  const FrequencyCounter = {};

  for (let ele of arr2) {
    FrequencyCounter[ele] = FrequencyCounter[ele]
      ? FrequencyCounter[ele] + 1
      : 0;
  }

  for (let ele of arr1) {
    const doubleNum = ele ** 2;
    if (!FrequencyCounter[doubleNum]) false;
    else {
      FrequencyCounter[doubleNum] -= 1;
    }
  }
  return true;
};
