// 별 다섯개..  참고: initialValue를 제공하지 않으면,
// reduce()는 인덱스 1부터 시작해 콜백 함수를 실행하고 첫 번째 인덱스는 건너 뜁니다. initialValue를 제공하면 인덱스 0에서 시작합니다.

접근법은 비슷햇으나 나는 아래와 같이 작성했다. reduce의 acc값이 [0, 1]로 주어졌는데 왜 인덱스값에 접근이 안되는지 모르겠다. acc[0] <-- 이거 자체가 에러.
// function solution(keyinput, board) {
//     const moves = {
//       up: [0, 1],
//       down: [0, -1],
//       left: [-1, 0],
//       right: [1, 0],
//     };
//     const [rangeX, rangeY] = [Math.floor(board[0] / 2), Math.floor(board[1] / 2)];

//     return keyinput
//       .map(key => moves[key])
//       .reduce(
//         ([x, y], [mX, mY]) => (Math.abs(x + mX) > rangeX || Math.abs(y + mY) > rangeY ? [x, y] : [x + mX, y + mY]),
//         [0, 0]
//       );
//   }

// const solution = (keyinput, board) => {
//     const coordinate = {right : [1, 0], left : [-1,0], up : [0,1], down : [0,-1]};
//         console.log(keyinput.map((ele) => coordinate[ele])
//         .reduce((acc, cur) => {return [acc[0]+cur[0], acc[1] + cur[1]]}))

//     // <=parseInt(board/2)
// }
