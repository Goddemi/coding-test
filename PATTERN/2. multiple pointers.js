// sumZero라는 합수를 작성합니다.
// 분류(assorted)가 아니라 정렬(assorted)된 배열이어야 합니다. 다만 오름차순이어야 합니다.
// 이 함수는 합계가 0인 첫 번째 쌍, 즉,
// 한 숫자를 가져와 다른 숫자에 더하면 0이 되는 쌍을 찾습니다.

const { sign } = require('crypto');

sumZero([-3, -2, -1, 0, 1, 2, 3]); // [-3, 3]
sumZero([-2, 0, 1, 3]); // undefined
sumZero([1, 2, 3]); //undefined

// 일반 풀이 O(^2) 의 시간복잡도 풀이

function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

//다중포인터 활용


function sumZero(arr) {
    let left = 0;
    let right = arr.length -1;
    while(left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]]
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}


//2번째 문제 특정 숫자의 개수 찾기. 

//countUniqueValues([1,1,1,1,2])  -> 2
//countUniqueValues([]) -> 0
//countUniqueValues([-2,-1,-1,0,1]) -> 4


//두개의 포인터를 이용하지만, 양쪽에서 오지 않고 한쪽에서 같이 움직인다는게 다르다. 


const countUniqueValues1 = (array) => {
    if (array.length === 0) return 0;
    
    let i = 0;
    for (j = 1; j<array.length; j++) {
        if (array[i] !== array[j]) {
            i++;
            array[i] = array[j]
        }
    }
    return i +1
}




const countUniqueValues = (array) => {
    let counter = 0;

    for (let i = 0; i<array.length-1; i++) {
        array[i] !== array[i+1] && counter++
    }   
}