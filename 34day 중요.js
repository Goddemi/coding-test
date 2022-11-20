//https://school.programmers.co.kr/learn/courses/30/lessons/92341
//카카오 주차요금

function solution(fees, records) {
  const parkingTime = {};
  records.forEach((r) => {
    let [time, id, type] = r.split(" ");
    let [h, m] = time.split(":");
    time = h * 1 * 60 + m * 1;
    if (!parkingTime[id]) parkingTime[id] = 0;
    if (type === "IN") parkingTime[id] += 1439 - time;
    if (type === "OUT") parkingTime[id] -= 1439 - time;
  });
  const answer = [];
  for (let [car, time] of Object.entries(parkingTime)) {
    if (time <= fees[0]) time = fees[1];
    else time = Math.ceil((time - fees[0]) / fees[2]) * fees[3] + fees[1];
    answer.push([car, time]);
  }
  return answer.sort((a, b) => a[0] - b[0]).map((v) => v[1]);
}

//접근법은 비슷했으나 map과 reduce를 이용했는데 잘 안됐다.

//문자열에 곱하기 1을 하면 숫자로 변합니다. .

// if - else if -> 총 조건문이 100개 있을때 첫 if문 조건에 만족하면 뒤에 99개의 else if조건은 체크하지 않습니다.
// if - if -> 총 조건문이 100개 있을때 만족 여부와 관계없이 99개의 조건을 모두 체크합니다.

// 결론 : 특정 조건 만족하면 나머지 조건을 체크할필요가 없는경우 if-else if 사용
//          조건 만족 여부에 관계없이 모두 조건 체크가 필요한경우 if - if 사용
//          상황에따라 다르게 사용해야합니다.
