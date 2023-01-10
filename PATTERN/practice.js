function sameFrequency(num1, num2) {
  const ele1 = String(num1);
  const ele2 = String(num2);

  if (ele1.length !== ele2.length) {
    return false;
  }

  const FrequencyCounter = {};

  const array1 = [...ele1];
  const array2 = [...ele2];

  for (let num of array1) {
    FrequencyCounter[num] = (FrequencyCounter[num] || 0) + 1;
  }

  console.log(FrequencyCounter);

  for (let ele of array2) {
    if (!FrequencyCounter[ele]) {
      return false;
    } else if (FrequencyCounter[ele]) {
      FrequencyCounter[ele] -= 1;
    }
  }

  return true;
}

console.log(sameFrequency(221, 321));
