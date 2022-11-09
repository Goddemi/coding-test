// 2022카카오 인턴쉽 lv1

//나의 풀이.

// const solution = (survey, choices) => {
//     const DATA = {R : 0, T : 0 , F : 0, C : 0, M : 0, J :0 , A : 0, N : 0}
//     const score = {1:3, 2:2, 3:1, 4:0, 5:1, 6:2,7:3}
//     let answer =[];

//         survey.map((ele, i) => {

//            if(choices[i] < 4)
//            { DATA[ele[0]] = DATA[ele[0]] + score[choices[i]] }
//             else {
//                 DATA[ele[1]] = DATA[ele[1]] + score[choices[i]]
//             }
//     })

//         DATA["R"] >= DATA["T"] ? answer.push("R") : answer.push("T");
//         DATA["C"] >= DATA["F"] ? answer.push("C") : answer.push("F");
//         DATA["J"] >= DATA["M"] ? answer.push("J") : answer.push("M");
//         DATA["A"] >= DATA["N"] ? answer.push("A") : answer.push("N");

//         return [...answer].join("")
//     }

//다른 풀이. 처음 기준 값을 만들어 내는 것부터 하드코딩이 아니다. 구조분해할당을 자유자재로 이용했다는점이 인상깊음.

// function solution(survey, choices) {
//     const MBTI = {};
//     const types = ["RT","CF","JM","AN"];

//     types.forEach((type) =>
//         type.split('').forEach((char) => MBTI[char] = 0)
//     )

//     choices.forEach((choice, index) => {
//         const [disagree, agree] = survey[index];

//         MBTI[choice > 4 ? agree : disagree] += Math.abs(choice - 4);  /// 이부분도 신박.
//     });

//     return types.map(([a, b]) => MBTI[b] > MBTI[a] ? b : a).join("");
// }
