//짝수 홀수 따로 담기

function solution(num_list) {
  return num_list.reduce(
    ([even, odd], curr) => {
      return [curr % 2 === 0 ? even + 1 : even, curr % 2 === 1 ? odd + 1 : odd];
    },
    [0, 0]
  );
}

// reverse() 반대로 변경 순서.

// 배열에 항목을 추가하거나 삭제합니다.
// - push() : 배열 끝에 항목 추가
// - pop() : 배열 끝에서 항목 제거
// - unshift() : 배열 앞에 항목 추가
// - shift() :  배열 앞에서 항목 제거

// ** 거듭제곱을 구할 때
// function solution(n, t) {
//     return n * 2 ** t;
// }
// console.log(Math.pow(4, 0.5));
// expected output: 2

// function solution(n, t) {
//     while (t-- > 0) n*=2;
//     return n;
// }

// Array(5).fill(0) 이건가? 이 논리 기억해두기.

// //1. join() 함수 사용하기
// arr.join(separator)
// join() 함수는 배열의 모든 값들을 연결한 문자열을 리턴합니다.
// 이때 각각의 값들 사이에는 파라미터로 입력된 구분자(separator)가 들어가게 됩니다.
// 만약, separator를 입력하지 않은 경우, default로 ','가 들어갑니다.

// 문자열 my_string이 매개변수로 주어집니다. my_string을 거꾸로 뒤집은 문자열을 return하도록 solution 함수를 완성해주세요.
// const solution = (my_string) =>

//     my_string.split("").reverse().join("")
//  var answer = [...my_string].reverse().join("");

// 양꼬치 몫만 구해야 해서 정수화.
// const solution = (n,k) =>
//     (12000*n + 2000*k) - parseInt(n/10)*2000

// ~~ 연산자 Math.floor() 와 동등하게 쓰이는 연산자12var num = '2234.5678'; console.log(~~num);
