// 3정수가 담긴 배열 numbers와 문자열 direction가 매개변수로 주어집니다.
//  배열 numbers의 원소를 direction방향으로 한 칸씩 회전시킨 배열을 return하도록 solution 함수를 완성해주세요.

// function solution(numbers, direction) {
//   return direction === "right"
//     ? [numbers[numbers.length - 1], ...numbers.slice(0, numbers.length - 1)]
//     : [...numbers.slice(1), numbers[0]];
// }

// function solution(numbers, direction) {
//     direction === 'right' ? numbers.unshift(numbers.pop()) : numbers.push(numbers.shift());
//     return numbers;
// }

// shift() 메서드는 배열에서 첫 번째 요소를 제거하고, 제거된 요소를 반환합니다. 이 메서드는 배열의 길이를 변하게 합니다.
//pop()도 마찬가지. 반환하고 배열의 길이 바뀜.

//slice에 대한 이해. 파라미터값이 포함, 미포함으로 결정된다는것 이해해라.
// 첫번째 인덱스부터 두번째 인덱스 전까지 !

// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

// console.log(animals.slice(2));
// // expected output: Array ["camel", "duck", "elephant"]

// console.log(animals.slice(2, 4));
// // expected output: Array ["camel", "duck"]

// console.log(animals.slice(1, 5));
// // expected output: Array ["bison", "camel", "duck", "elephant"]

// console.log(animals.slice(-2));
// // expected output: Array ["duck", "elephant"]

// console.log(animals.slice(2, -1));
// // expected output: Array ["camel", "duck"]

// console.log(animals.slice());
// // expected output: Array ["ant", "bison", "camel", "duck", "elephant"]

//splice는 포함부터 몇개?
// const months = ['Jan', 'March', 'April', 'June'];
// months.splice(1, 0, 'Feb');
// // inserts at index 1
// console.log(months);
// // expected output: Array ["Jan", "Feb", "March", "April", "June"]

// months.splice(4, 1, 'May');
// // replaces 1 element at index 4
// console.log(months);
// // expected output: Array ["Jan", "Feb", "March", "April", "May"]

// 틀린문제;
// 정수 배열 num_list와 정수 n이 매개변수로 주어집니다. num_list를 다음 설명과 같이 2차원 배열로 바꿔 return하도록 solution 함수를 완성해주세요.

// num_list가 [1, 2, 3, 4, 5, 6, 7, 8] 로 길이가 8이고 n이 2이므로 num_list를 2 * 4 배열로 다음과 같이 변경합니다. 2차원으로 바꿀 때에는 num_list의 원소들을 앞에서부터 n개씩 나눠 2차원 배열로 변경합니다.

// num_list	n	result
// [1, 2, 3, 4, 5, 6, 7, 8]	2	[[1, 2], [3, 4], [5, 6], [7, 8]]

// function solution(num_list, n) {
//     let result = [];
//     for (let i = 0; i < num_list.length / n; i++) {
//       result = [...result, num_list.slice(i * n, i * n + n)];
//     }
//     return result;
//   }

// 이 풀이가 더 멋있다.
// function solution(num_list, n) {
//     var answer = [];

//     while(num_list.length) {
//         answer.push(num_list.splice(0,n));
//     }

//     return answer;
// }

// function solution(num_list, n) {
//     return Array(num_list.length / n).fill([]).map(() => num_list.splice(0, n))
// }

// 여기서 배운 것은 splice를 하면 원본배열이 뜯겨져 나간다는 것이다. 그 원본배열을 더 사용하면 이미 사용했던 요소를 제외하고 연속으로 사용할 수 있는 것.

// my_string은 "3 + 5"처럼 문자열로 된 수식입니다. 문자열 my_string이 매개변수로 주어질 때, 수식을 계산한 값을 return 하는 solution 함수를 완성해주세요.
// const string = "1 + 3 + 5";

// const solution = (my_string) => {
//   let answer = [];
//   const arrExp = [...my_string].filter((ele) => ele != " ");
//   const firstEle = arrExp.shift();

//   while (arrExp.length) {
//     answer.push(arrExp.splice(0, 2));
//   }

//   return (
//     answer.map((ele) => Number(ele.join(""))).reduce((acc, cur) => acc + cur) +
//     Number(firstEle[0])
//   );
// };

// console.log(solution(string));

//아래 풀이 참고.. 진빠진다.

// function solution(my_string) {
//     const arr = my_string.split(' ').filter(e=>e);
//     while(arr.length > 1) arr.unshift(+arr.shift() + (arr.shift() === "+" ? 1 : -1) * arr.shift())
//     return arr[0]
// }

//eval!!
