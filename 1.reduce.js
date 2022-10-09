//acc 값을 리턴한다. reduce는 acc 값을 어떻게 가지고 놀 것인가에 대한 문제.

// 배열의 합 구하기

const array = [2, 3, 4, 5];
const total = array.reduce((acc, cur) => acc + cur);

console.log(total);

// 객체 배열의 합 구힉

const objArray = [{ age: 30 }, { age: 40 }, { age: 50 }];
const objTotal = objArray.reduce((acc, cur) => {
  return acc + cur.age;
}, 0);

console.log(objTotal);

// 중첩 배열 펼치기

const conArray = [
  [1, 2],
  [3, 4],
  [5, [7, 8]],
];
const conArrayTotal = conArray.reduce((acc, cur) => {
  return acc.concat(cur);
});

console.log(conArrayTotal);

// **** 객체 내의 인스턴스 개수 세기

const names = ["강철", "철강", "이강", "강철"];

const countNames = names.reduce((acc, cur) => {
  if (cur in acc) {
    acc[cur]++; /// 대괄호를 이용해야 하는 경우 : 직접 넣어보면 안다.
  } else {
    acc[cur] = 1;
  }
  return acc;
}, {});

console.log(countNames);
