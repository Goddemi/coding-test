//first recursion function

const countDown = (num) => {
  if (num <= 0) {
    return;
  }
  num--;
  countDown(num);
};

//second recursion function 종료조건에서 값이 반환.

const sumRange = (num) => {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
};

//third recursion function : factorial. 가장 고전적인 설명.

const factorial = (num) => {
  if (num === 1) return 1;
  return num * factorial(num - 1);
};

// 콜스택과 스택오버플로우.

// 종료조건을 제대로 지정하지 않았을 때.
// 종료조건을 제대로 지정했으나 반환되는 값이 종료조건으로 향하지 않을 때.
// 종료조건을 제대로 지정했으나 리턴하지 않을 때. (끝내지 않을 때.)

//Helper method recursion
// 재귀적이지 않은 외부 함수가
// 재귀적인 내부 함수(inner function)를 호출하는 패턴.
// 설명은 여기까지 할게요.
//collectOddValues라는 함수 안에서 바로 재귀함수를 호출했다면 우리가 구하고 싶은 result는
//호출될 때마다 계속해서 [] 빈배열로 시작될 것이다. 그래서 안에 helper 함수를 내부적으로 만들었따.

function collectOddValues(arr) {
  let result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }

    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }

    helper(helperInput.slice(1));
  }

  helper(arr);

  return result;
}

collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]);

//우리가 배열이나 데이터 목록 같은 걸 컴파일(compile)해야 할 때 흔히 이렇게 작업을 합니다.

//순수재귀
// 필요한 모든 코드가 함수 자체에 포함되며 재귀적입니다.

function collectOddValues(arr) {
  let newArr = [];

  if (arr.length === 0) {
    return newArr;
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}

collectOddValues([1, 2, 3, 4, 5]);

// 배열을 사용하고 헬퍼 메소드 없이 순수 재귀 솔루션을 작성하는 경우에,

// 배열을 복사하는 slice, spread 연산자(operator), concat 같은 메소드를 사용할 수 있습니다. 그러면 배열을 변경할 필요가 없죠.

// 그리고 일종의 결과를 축적할 수 있을 거고요.

// 문자열은 변경할 수가 없습니다.

// 그래서 slice나 substring을 사용해서 사본을 만들어야 해요.
// 객체의 경우, Object.assign이나 spread 연산자를 사용하는 게 유용합니다.
