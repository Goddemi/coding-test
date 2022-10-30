// 명함 지갑을 만드는 회사에서 지갑의 크기를 정하려고 합니다. 
// 다양한 모양과 크기의 명함들을 모두 수납할 수 있으면서, 작아서 들고 다니기 편한 지갑을 만들어야 합니다. 
// 이러한 요건을 만족하는 지갑을 만들기 위해 디자인팀은 모든 명함의 가로 길이와 세로 길이를 조사했습니다.

// 아래 표는 4가지 명함의 가로 길이와 세로 길이를 나타냅니다.

// 명함 번호	가로 길이	세로 길이
// 1	60	50
// 2	30	70
// 3	60	30
// 4	80	40

// 하지만 2번 명함을 가로로 눕혀 수납한다면 80(가로) x 50(세로) 크기의 지갑으로 모든 명함들을 수납할 수 있습니다. 


나의 풀이. 
const solution = (sizes) => {
    const width = sizes.map((ele)=> Math.max(...ele));
    const height = sizes.map((ele)=> Math.min(...ele));
    return Math.max(...width) * Math.max(...height);
}

다른사람 풀이.
reduce안에서 구조분해할당 하는 부분이 인상깊다.


function solution(sizes) {
  const [hor, ver] = sizes.reduce(
    ([h, v], [a, b]) => [
      Math.max(h, Math.max(a, b)),
      Math.max(v, Math.min(a, b)),
    ],
    [0, 0]
  );
  return hor * ver;
}
