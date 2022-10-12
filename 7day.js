// 순환이 필요하면 배열로 바꾸는 것.
// 문자열을 배열로 바꿀 때 split("")이 아닌 [...str] 혹은 Array.from(str)을 쓰는 것이 더 좋다는 것.
// split을 쓸 경우 유니코드 에러 발생 가능성. 한자나 이모티콘 사용시.

// 여전히 return을 쓰지 않아서 통과하지 못하는 경우가 생긴다. 제출 전에 return을 상기시키는 버릇을 들여야 겠다.

// function solution(cipher, code) {
//   var answer = "";
//   for (let i = code - 1; i < cipher.length; i += code) {
//     answer += cipher[i];
//   }
//   return answer;
// }

// console.log("hi" + "hey"); string + string이 붙어지는 것.

//잘풀었다 의미있다. 복습필요.
// 문자열 my_string이 매개변수로 주어집니다. my_string에서 중복된 문자를 제거하고 하나의 문자만 남긴 문자열을 return하도록 solution 함수를 완성해주세요.

// const solution = (my_string) => {
//     return [...my_string].reduce((acc, cur) => {
//          if (acc.includes(cur)) {
//              return acc
//          } else {
//              return acc + cur
//          }
//      })

//  }

// 아래 풀이도 참고 set과 map 공부하기
// function solution(my_string) {
//     return [...new Set(my_string)].join('');
// }

// 와우.
// 머쓱이는 직육면체 모양의 상자를 하나 가지고 있는데 이 상자에 정육면체 모양의 주사위를 최대한 많이 채우고 싶습니다.
// 상자의 가로, 세로, 높이가 저장되어있는 배열 box와 주사위 모서리의 길이 정수 n이 매개변수로 주어졌을 때,
// 상자에 들어갈 수 있는 주사위의 최대 개수를 return 하도록 solution 함수를 완성해주세요.

// const solution = (box, n) =>

//     parseInt(box[0] / n) * parseInt(box[1]/n) * parseInt(box[2]/n)

// function solution(box, n) {
//     return box.map(v=>~~(v/n)).reduce((a,v)=>a*v,1);
// }

//인덱스가 0, 1, 2 가 잡혀있지만 어짜피 순서에 상관없이 다 곱하는 것이었다. reduce로 충분히 가능햇음.

//최대값 최소값 문제에서는 Math.max(숫자들) 을 떠올려야한다.
