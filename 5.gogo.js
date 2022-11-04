// string.length 된다는것.

//배열의 유사도 풀이.
function solution(s1, s2) {
  const intersection = s1.filter((x) => s2.includes(x));
  return intersection.length;
}

//**Math.pow()**함수는base^exponent처럼 base 에 exponent를 제곱한 값을 반환합니다.
//Math.sqrt() 함수는 숫자의 제곱근을 반환합니다.

// arr.sort([compareFunction])
// 반환 값
// 정렬한 배열. 원 배열이 정렬되는 것에 유의하세요. 복사본이 만들어지는 것이 아닙니다.

// compareFunction이 제공되지 않으면 요소를 문자열로 변환하고 유니 코드 코드 포인트 순서로 문자열을 비교하여 정렬됩니다. 예를 들어 "바나나"는 "체리"앞에옵니다. 숫자 정렬에서는 9가 80보다 앞에 오지만 숫자는 문자열로 변환되기 때문에 "80"은 유니 코드 순서에서 "9"앞에옵니다.

// compareFunction이 제공되면 배열 요소는 compare 함수의 반환 값에 따라 정렬됩니다. a와 b가 비교되는 두 요소라면,

// compareFunction(a, b)이 0보다 작은 경우 a를 b보다 낮은 색인으로 정렬합니다. 즉, a가 먼저옵니다.
// compareFunction(a, b)이 0을 반환하면 a와 b를 서로에 대해 변경하지 않고 모든 다른 요소에 대해 정렬합니다. 참고 : ECMAscript 표준은 이러한 동작을 보장하지 않으므로 모든 브라우저(예 : Mozilla 버전은 적어도 2003 년 이후 버전 임)가 이를 존중하지는 않습니다.
// compareFunction(a, b)이 0보다 큰 경우, b를 a보다 낮은 인덱스로 소트합니다.
// compareFunction(a, b)은 요소 a와 b의 특정 쌍이 두 개의 인수로 주어질 때 항상 동일한 값을 반환해야합니다. 일치하지 않는 결과가 반환되면 정렬 순서는 정의되지 않습니다.

//my_string.split(letter).join('')

Slice();
// slice()는 배열 메서드로 원하는 부분을 복사하고 새로운 배열로 리턴한다.
// 배열을 변경하지 않는 것이 핵심이다.
// 아래 예시를 살펴보자.

// //loaf3과 loaf5를 새 배열에 복사하고 싶어욧..

// let bread=['loaf1','loaf2','loaf3','loaf4','loaf5','loaf6'];
// newArr=bread.slice(2,5);
// //output:["loaf3", "loaf4", "loaf5"]
// Splice()
// Splice() 또한 배열 메서드로 배열에 원하는 엘리먼트 갯수를 추가하거나 제거할 수 있다. 이는 기존 배열에 변이를 준다.

// 제거만 할 경우
// let bread = ['loaf1','loaf2','loaf3','loaf4','loaf5','loaf6'];
// bread.splice(1, 3);
// ["loaf2", "loaf3", "loaf4"]
// //output:["loaf1", "loaf5", "loaf6"]
// 2.제거하고 새로운 엘리먼트를 추가하는 경우

// let bread = ['loaf1','loaf2','loaf3','loaf4','loaf5','loaf6'];
// bread.splice(1, 3, 'newLoaf1', 'newLoaf2');
// console.log(bread);
// //output:["loaf1", "newLoaf1", "newLoaf2", "loaf5", "loaf6"]
// 3.추가만 하는 경우

// let bread = ['loaf1','loaf2','loaf3','loaf4','loaf5','loaf6'];
// bread.splice(3, 0, 'newLoaf1', 'newLoaf2');
// console.log(bread);
// //output:["loaf1", "loaf2", "loaf3", "newLoaf1", "newLoaf2", "loaf4", "loaf5", "loaf6"]
// Split()
// Split()은 string 메서드지만 배열을 리턴한다. 문자열을 배열로 전환할 때 매우 유용하다.
// 예시를 살펴보장!

// let myString = "the quick brown fox jumps over the lazy dog";
// //For a comma separated array use " ":
// myString.split(" ");
// //output: ["the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"]
// //For each alphabet as element of array use "":
// myString.split("");
// //output: ["t", "h", "e", " ", "q", "u", "i", "c", "k", " ", "b", "r", "o", "w", "n", " ", "f", "o", "x", " ", "j", "u", "m", "p", "s", " ", "o", "v", "e", "r", " ", "t", "h", "e", " ", "l", "a", "z", "y", " ", "d", "o", "g"]
// 💖 알아두면 좋은 팁

// 배열에 split()을 적용하기 위해 .toString()을 사용하여 string으로 전환해라.
// var myString = array.toString();
// 2.string을 배열로 전환하기위해 ("")와 함께 split을 사용해라

// myString.split(" ");

const solution = (id_pw, db) => {
  let answer;
  let objDb = Object.fromEntries(db);
  let keyDb = Object.keys(objDb);

  if (id_pw in db) {
    return (answer = "login");
  }

  if (id_pw[0] in keyDb) {
    answer = "wrong pw";
  }

  answer = "fail";
};

// function solution(id_pw, db) {
//     let answer = ''
//     db.map(v => {
//         if (v[0] === id_pw[0]) {
//             if (v[1] === id_pw[1]) answer = 'login'
//             else answer = 'wrong pw'
//         }
//     })
//     return answer === '' ? 'fail' : answer
// }
