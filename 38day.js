// 쉬운문제도, 어떻게 풀 건지 따로 메모를 해두고 그에 맞게 풀어나가라.
//정신 없이 풀다가 어떻게 풀려고 했는지 잊고 길을 잃는다.

//카카오 모빌리티 23년 테스트 문제

function solution(v) {
  let width = [];
  let height = [];

  v.forEach((ele) => {
    if (width.includes(ele[0])) {
      width = width.filter((v) => v !== ele[0]);
    } else {
      width.push(ele[0]);
    }

    if (height.includes(ele[1])) {
      height = height.filter((v) => v !== ele[1]);
    } else {
      height.push(ele[1]);
    }
  });
  //아니, 넣을 때 값이 안에 있으면 안넣고, 걔를 지우면 되잖아.

  return [...width, ...height];
}
