const array = [1, 2, 3, 4, 5];

console.log(Math.max(...array));

//for in , for of
//for in 은 element가 객체의 키값을 순회한다.
//for of 는 배열의 element들을 순회한다.

answer = [...my_string].map(v => v.repeat(n)).join("");
repeat 반복하게 하기.

//const sidex = [1,2,3]
//const max = Math.max(...sides);

//filter((v)=> !isNaN(v)) / isNaN(x)

// 금액 구하기이다. 마지막 문제를 계속 틀렸다고 나왔는데, 가격이므로 소수점 자리를 없애야 했다.
// const solution = (price) => {
//     if (price >=500000) {
//         price = price - price*0.2
//     } else if (price >= 300000) {
//         price = price - price*0.1
//     } else if ( price >= 100000) {
//         price = price - price * 0.05
//     }
//     return parseInt(price)
// }

// const discounts = [
//     [500000, 20],
//     [300000, 10],
//     [100000,  5],
// ]

// const standards = [[500000, 0.2], [300000, 0.1], [100000, 0.05]]

//아래 둘이 무슨 차이인지 진짜 모름. 아하 !
//if값이 아닐경우 return price 즉 원래 값을 리턴해라 ! 라는 뜻이네.

// const solution = (price) => {
//     for (let standard of standards)
//         if ( price >= standard[0])
//             return parseInt(price - price*standard[1])
//     return price
// }
// const solution = (price) => {
//     for (let standard of standards)
//         if ( price >= standard[0])
//             return parseInt(price - price*standard[1])
// }

// 정규식 공부해보기 !
//function solution(my_string) {
//     return my_string.replace(/[aeiou]/g, '');
// }

// function solution(my_string) {
//     return my_string.split("").filter(a=>a !== "u" && a !== "a" && a !== "i"&& a !== "o"&& a !== "e").join("");;
// }

// if 쓸 때 return의 활용. map 같은데 안에 들어잇을 때 언제 생략이 가능하고 언제 쓸 수 있는지. 리턴의 생략은 화살표 함수에만 쓴다고 생각하자.

// const solution = (my_string) => {

//     const answer = my_string.split("").map((ele)=>{
//          if (ele === ele.toLowerCase()) { return ele.toUpperCase() }
//          else { return ele.toLowerCase() }
//      }).join("")
//      return answer;

//  }
