// 리턴을 해야 for문이 멈춘다. 다 풀어 놓고 마지막에 리턴 관련해서 잘못해서 동작하지 못하는 경우가 생긴다.

// const solution = (n) => {
//   let answer;
//   let multi = 1;

//   for (let i = 1; i < n; i++) {
//     if (multi * i <= n) {
//       multi = i * multi;
//     } else {
//       return (answer = i - 1);
//     }
//   }

//   return answer;
// };

// if 문으로 바로 시작하는게 아니라, 연산을 하다가, 만약 뭐가 뭐라면? 의 논리.

// 아래처럼 간략하게 코딩할 수 있다. 그리고 multi와 n이 같을 때를 따로 지정해 두어서 연산 한번을 축약한다..이거 진짜 왜 해야 하는지 잘 모르겠네.
// const solution = (n) => {
//     let multi = 1;

//  for (let i = 1; i <= n; i++) {
//      multi *= i;
//      if (multi === n) return i;
//      if (multi > n) return i-1;
//  }
// }

// const solution = (s) => {
//     const array =[]

//    const numbers = [...s].reduce((acc, cur)=> {
//         if (cur in acc) { acc[cur]++ }
//         else { acc[cur] =1 }
//         return acc   <--- reduce에서 return 안써서 acc값이 딸려오지 않았다. 에러가 계속 났다.
//     }, {})

//     for (let element in numbers) {
//         numbers[element] === 1 && array.push(element)
//     }

//    return array.sort().join("")

// }

// 와 미친 풀이.. last
// function solution(s) {
//     let res = [];
//     for (let c of s) if (s.indexOf(c) === s.lastIndexOf(c)) res.push(c);
//     return res.sort().join('');
// }

// Math.abs() - JavaScript - MDN Web Docshttps://developer.mozilla.org › ... ›
// Math;
// 2022. 8. 15. — Math.abs() 함수는 주어진 숫자의 절대값을 반환합니다. x가 양수이거나 0이라면 x를 리턴하고,
// x가 음수라면 x의 반대값, 즉 양수를 반환합니다.

// 길이를 반환한다는것 충격이다... unshift도 길이를 반환한다. 추가하는 애들은 다 추가된 길이를 반환함.
// Array.prototype.push()
// push() 메서드는 배열의 끝에 하나 이상의 요소를 추가하고, 배열의 새로운 길이를 반환합니다.

// 정수 배열 array와 정수 n이 매개변수로 주어질 때, array에 들어있는 정수 중 n과 가장 가까운 수를 return 하도록 solution 함수를 완성해주세요.

// function solution(array, n) {
//     const minDiff = Math.min(...array.map(a => Math.abs(a - n)));
//     return array.sort((a, b) => a - b).find(a => Math.abs(a - n) === minDiff);
//   }

// array = [1,2,3]
// console.log(array.push(4))

// 주어진 판별함수(조건)라는 것과, 값을 반환한다는 것. findIndex는 인덱스값.
// Array.prototype.find()
// find()** **메서드는 주어진 판별 함수를 만족하는 첫 번째 요소의 **값**을 반환합니다. 그런 요소가 없다면 undefined를 반환합니다.

// console.log(str1.padStart(2, '0'));
