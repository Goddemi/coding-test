// parseInt()
// parseInt() 함수는 문자열 인자를 파싱하여 특정 진수(수의 진법 체계에서 기준이 되는 값)의 정수를 반환합니다.
// function roughScale(x, base) {
//     const parsed = parseInt(x, base);
//     if (isNaN(parsed)) { return 0; }
//     return parsed * 100;
//   }

//   console.log(roughScale(' 0xF', 16));
//   // expected output: 1500

//   console.log(roughScale('321', 2));
//   // expected output: 0

// 숫자 및 BigInts의 경우 toString()은 선택적으로 기수(radix)를 매개변수로 취합니다. 기수의 값은 최소 2부터 36까지입니다.

// 기수를 이용함으로써 10진수를 (1, 2, 3, 4, 5...) 다른 진수로 변환할 수 있습니다. 아래는 10진수를 2진수로 변환하는 예제입니다.

// let baseTenInt = 10;
//   console.log(baseTenInt.toString(2));
//   // "1010"이 출력됩니다

// parseInt는 10진법 정수값으로 반환을 하고 toString은 그것을 다시 몇진법으로 바꿀지에 대한 것이다.
