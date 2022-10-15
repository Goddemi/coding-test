// 약수의 개수가 세 개 이상인 수를 합성수라고 합니다.
//  자연수 n이 매개변수로 주어질 때 n이하의 합성수의 개수를 return하도록 solution 함수를 완성해주세요.

// function solution(n) {
//     var answer = 0;
//     const a = []
//     for (let i = 2; i <= n; i++){
//         for(let j = 2;j <= Math.sqrt(i);j++){
//          i % j === 0 && a.push(i)
//             continue
//         }
//     }
//      const set = new Set(a);
//     const b = [...set];
//     return b.length;
// }

// 중복을 제거 할 생각을 안했다. 더 간단히 풀고 싶은 욕심이 있어서 길어질만하면 억지처럼 생각해서 계산을 멈춰버린다.
// 끝까지 해결하려는 마음가짐.

// 문자열 my_str과 n이 매개변수로 주어질 때, my_str을 길이 n씩 잘라서 저장한 배열을 return하도록 solution 함수를 완성해주세요.

// function solution(my_str, n) {
//     let res = [];
//     for (let i = 0; i < my_str.length; i+=n) res.push(my_str.slice(i, i+n));
//     return res;
// }

// const solution = (my_str,n) => {

//     let answer = []
//     let arr = [...my_str]

//     while (arr.length > 0) {
//         answer.push(arr.splice(0,n).join(""))
//     }
//     console.log(answer)
//     return answer;
// }
