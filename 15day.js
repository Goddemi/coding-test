// Array.prototype.every()
// every() 메서드는 배열 안의 모든 요소가 주어진 판별 함수를 통과하는지 테스트합니다. Boolean 값을 반환합니다.

// PROGRAMMERS-962 행성에 불시착한 우주비행사 머쓱이는 외계행성의 언어를 공부하려고 합니다. 알파벳이 담긴 배열 spell과 외계어 사전 dic이 매개변수로 주어집니다.
//  spell에 담긴 알파벳을 한번씩만 모두 사용한 단어가 dic에 존재한다면 1, 존재하지 않는다면 2를 return하도록 solution 함수를 완성해주세요.

// function solution(spell, dic) {
//     return dic.filter(v=>spell.every(c=>v.includes(c))).length ? 1 : 2;
// }

// const okay = [1, 2, 3];
// for (let i = 0; i < okay.length; i++) {
//   okay[i] % 2 === 0 && console.log("hi");
// }

// 소수구하기. 소. 수.
// n의 제곱근 (√n) 값으로 나누어 떨어지면 √n의 배수라는 뜻이므로 소수가 아니게 됩니다.

// 예를 들어보자면 25의 제곱근은 √25(5) 입니다.

// 이때 5까지만 반복문이 돌아가더라도 25는 5의 배수이므로 i가 5일 때 나누어 떨어지게 되고 소수가 아님을 판별할 수 있게 됩니다.

// function isPrime(num) {
//     // 소수는 1과 자기 자신만으로만 나누어 떨어지는 수 임으로
//     // num > i
//     for(let i = 2; num > i; i++) {
//     if(num % i === 0) { //이 부분에서 num이  다른 수로 나눠떨어진다면 소수가 아님
//       return false;
//      }
//     }
//    // 소수는 1보다 큰 정수임으로
//    // 1보다 작으면 false를 리턴한다
//    return num > 1;
//   }
