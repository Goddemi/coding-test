코딩테스트 연습
2022 KAKAO BLIND RECRUITMENT
신고 결과 받기


1) 배운것. 
중첩 배열의 중복제거.

let locations = [
    [126, 34],
    [126, 34],
    [126, 35],
    [127, 34],
  ];
  
  function removeDup(arr) {
    return [...new Set(arr.join("|").split("|"))]
      .map((v) => v.split(","))
      .map((v) => v.map((a) => +a));
  }
  
  let uniqueArr = removeDup(locations);
  console.log(uniqueArr);

  //나의 풀이

  const solution = (id_list, report, k) => {

    const newReport = [...new Set(report)];
    const standard = newReport.map((ele) => ele.split(" "));
    
    const count = standard.reduce((acc, cur) => {
        if (cur[1] in acc) {
            
            acc[cur[1]] = acc[cur[1]] +1
        } else {
            acc[cur[1]] = 1
        }
        return acc
    }, {})

   const key = standard.reduce((acc, cur) => {
        if (count[cur[1]] >= k) {  //<-- k를 안써서 틀릴뻔했다..
           if (acc[cur[0]]) {
               acc[cur[0]] += 1
           } else (acc[cur[0]] = 1)
        }
        return acc
    },{})

   answer = id_list.map((ele) => key[ele] ? key[ele] : 0)
    return answer;
    

}


//다른사람 


  function solution(id_list, report, k) {
    const reportResult = report.reduce((a, c) => {
      const [user, reported] = c.split(' ');
      a[reported] = a[reported] ? a[reported].add(user) : new Set().add(user);
      return a;
    }, {});
  
    const mailed = Object.values(reportResult)
      .filter(set => set.size >= k)
      .flatMap(set => [...set]);
    return id_list.map(id => mailed.filter(user => user === id).length);
  }