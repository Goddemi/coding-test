// 수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.

// 마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때,
// 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

// 아래와 같이 풀었는데, 효율성 테스트를 통과하지 못한다. sort 때문인듯하다.

// const solution = (participant, completion) => {

//     for (let i =0; i<participant.length; i++) {
//       if(participant.sort()[i] !== completion.sort()[i]) {
//           return participant[i]
//       }
//     }

// }

//sort를 for문 밖으로 빼야했다.

// const solution = (participant, completion) => {

//     participant = participant.sort();
//     completion = completion.sort();

//     for (let i =0; i<participant.length; i++) {
//       if(participant[i] !== completion[i]) {
//           return participant[i]
//       }
//     }

// }

// 그리고 indexOf("무엇")  했을 때 무엇의 인덱스를 알 수 있다는 것.

// const newMap = new Map();
// newMap.set("1", "가나");
// newMap.set("2", "다라");

// console.log(newMap.has("2"));

// newMap.forEach((ele) => console.log(ele));

// console.log(newMap);
