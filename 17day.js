// 문자열 "hello"에서 각 문자를 오른쪽으로 한 칸씩 밀고 마지막 문자는 맨 앞으로 이동시키면 "ohell"이 됩니다.
//  이것을 문자열을 민다고 정의한다면 문자열 A와 B가 매개변수로 주어질 때,
// A를 밀어서 B가 될 수 있다면 몇 번 밀어야 하는지 횟수를 return하고 밀어서 B가 될 수 없으면 -1을 return 하도록 solution 함수를 완성해보세요.

//꼭 다시 풀어보기. for문 기본논리

// A	B	result
// "hello"	"ohell"	1
// "apple"	"elppa"	-1

// const solution = (A,B) => {
//     let newA = [...A];

//     for (let i = 0 ; i < A.length; i++) {

//         let lastWord = newA.splice(A.length-1, 1)
//         newA.unshift(...lastWord)

//      if (newA.join("") === B) {
//          return i

//       } else { return -1 }
//       }
// }

// const solution = (A,B) => {
//     let newA = [...A]

//     for (let i = 0; i<A.length; i++) {
//         if (newA.join("") === B) return i;
//         let rightWord = newA.splice(A.length-1,1);
//         newA.unshift(...rightWord);
//     }
//     return -1

// }

// replace와 replaceAll!!!

// 영어가 싫은 머쓱이는 영어로 표기되어있는 숫자를 수로 바꾸려고 합니다.

// ]문자열 numbers가 매개변수로 주어질 때, numbers를 정수로 바꿔 return 하도록 solution 함수를 완성해 주세요.

// const solution = (numbers) => {
//     const example = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
//     let answer = numbers;

//     for (let i = 0; i < example.length; i++) {
//        answer = answer.replaceAll(example[i], i);
//     }
//     return parseInt(answer)

// }

let counter = 0;
for (let i = 0; i < my_string.length; i++) {
  if (!isNaN(my_string[i])) {
    console.log("hi");
    // counter += my_string[i]
  }
}
