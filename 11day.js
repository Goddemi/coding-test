// 1부터 13까지의 수에서, 1은 1, 10, 11, 12, 13 이렇게 총 6번 등장합니다.
// 정수 i, j, k가 매개변수로 주어질 때, i부터 j까지 k가 몇 번 등장하는지 return 하도록 solution 함수를 완성해주세요.

// i	j	k	result
// 1	13	1	6
// 10	50	5	5
// 3	10	2	0

//답은 맞았는데, 연산 시간이 오래 걸린다 어째서지?

// const solution = (i,j,k) => {
//     let answer = [];
//     for (let m = i; m <= j; m++) {
//         answer.push([...String(m)])
//     }

//     return answer.reduce((acc, cur) => [...acc, ...cur]).filter((ele) => ele==k).length
// }

// const solution = (i,j,k) => {
//     let count = 0;
//     for (let num = i; num <= j; num++) {
//         count += [...('' + num)].filter(n => +n === k).length
//     }
//     return count
// }
