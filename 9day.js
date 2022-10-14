// 약수의 개수가 세 개 이상인 수를 합성수라고 합니다.
//  자연수 n이 매개변수로 주어질 때 n이하의 합성수의 개수를 return하도록 solution 함수를 완성해주세요.


function solution(n) {
    let dp = new Array(n+1).fill(1)
    for(let i = 2 ; i <= n ; i++){
        if(dp[i]){
            for(let j = 2 ; i*j <= n ; j++){
                dp[i*j] = 0
            }
        }
    }

    return dp.filter(el => el === 0).length