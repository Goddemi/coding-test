배열 arr가 주어집니다. 배열 arr의 각 원소는 숫자 0부터 9까지로 이루어져 있습니다
 이때, 배열 arr에서 연속적으로 나타나는 숫자는 하나만 남기고 전부 제거하려고 합니다.
 단, 제거된 후 남은 수들을 반환할 때는 배열 arr의 원소들의 순서를 유지해야 합니다. 예를 들면,

arr = [1, 1, 3, 3, 0, 1, 1] 이면 [1, 3, 0, 1] 을 return 합니다.
arr = [4, 4, 4, 3, 3] 이면 [4, 3] 을 return 합니다.
배열 arr에서 연속적으로 나타나는 숫자는 제거하고 남은 수들을 return 하는 solution 함수를 완성해 주세요.

제한사항
배열 arr의 크기 : 1,000,000 이하의 자연수
배열 arr의 원소의 크기 : 0보다 크거나 같고 9보다 작거나 같은 정수

아래와 같이 풀었는데 효율성에서

const solution = (arr) => {
    let answer = []
     for (let i = 0; i<arr.length; i++) {
         answer = arr[i] !== arr[i+1] ? [...answer, arr[i]] : answer;
     }
        return answer
    }

filter에 인덱스 값을 넣어서 풀 수 있었다. 이거 좋은 접근법 인듯.

const solution = (arr) => {
    return arr.filter((ele, i) => ele !== arr[i+1])
}

배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수를 구하려 합니다.
const solution = (array, commands) =>
    commands.map((ele) => array.slice(ele[0]-1, ele[1]).sort((a,b) => a-b)[ele[2]-1])

array destructuring을 사용하면 commands.map(([from,to,k])=>array.slice(from-1,to).sort((x,y)=>x>y)[k-1]) 이렇게 더 명시적으로 나타낼 수 있죠
