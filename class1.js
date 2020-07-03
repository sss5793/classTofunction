function Factor(number) {

    let factorSet = new Set();
    // let factorSet = [];

    function isFactor(potentialFactor) {
        return number % potentialFactor == 0;
    }

    for (var pod = 1; pod <= Math.sqrt(number); pod++ ) {
        if (isFactor(pod)) {
            factorSet.add(pod);
            factorSet.add(number / pod);
        }
    }
    return factorSet;

}

function ClassifierAlpha(num) {
    const number = num || 0;

    // const let 차이
    // const는 재할당 불가능 let은 재할당 가능
    const currentFactor = Factor(number);

    function sum(factors) {
        var total = 0;
        factors.forEach( function(factor) {
            total += factor;
        });
        return total;
    }

    // 비교 구문 ==, === 차이
    this.isNumType = function(type) {
        // console.log(type)
        switch(type){
            // 완전수
            case 'Perfect' :
                return (sum(currentFactor) - number) == number 
                // break;
            // 과잉수
            case 'Abundant' :
                return (sum(currentFactor) - number) > number 
                // break;
            // 부족수
            case 'Deficient' :
                return (sum(currentFactor) - number) < number 
                // break;
            default :
            return 0;
        }
    }

    // this.isPerfect = function() {
    //     // var currentFactor = this.factors();
    //     return (sum(currentFactor) - number) == number 
    // }

    // this.isAbundant = function () {
    //     // var currentFactor = this.factors();
    //     return (sum(currentFactor) - number) > number 
    // }

    // this.isDeficient = function() {
    //     // var currentFactor = this.factors();
    //     return (sum(currentFactor) - number) < number 
    // }
}

function PrimeAlpha(num) {
    const number = num || 0;
    // constructor(number) {
    //     this.number = number
    // }

    function equalSet(aset, bset) {
        const bset_ = new Set(bset);
        // console.log(aset);
        if (aset.length!== bset_.length) return false;
        for (var a of aset) if (!bset.includes(a)) return false;
        return true;
    }

    this.isPrime = function() {
        let primeSet = [1, number];
        return number > 1 && equalSet(Factor(number), primeSet);
    }
}

function NumberType(num) {
    let result = '';

    // ClassifierAlpha
    const alpha = new ClassifierAlpha(num);

    if(alpha.isNumType('Perfect')){
        result += 'perfect'
    }
    if(alpha.isNumType('Abundant')){
        result += 'abundant'
    }
    if(alpha.isNumType('Deficient')){
        result += 'deficient'
    }
    // if(alpha.isPerfect()){
    //     result += 'perfect'
    // }
    // else if(alpha.isAbundant()){
    //     result += 'abundant'
    // }
    // else if(alpha.isDeficient()){
    //     result += 'deficient'
    // }
    

    // PrimeAlpha
    const prime = new PrimeAlpha(num);

    if(prime.isPrime()){
        result += ', prime'
    }

    console.log(num+ ' : ', result)
}


const arr = [2,3,4,5,6,7,8,9,10]

arr.forEach(ele => NumberType(ele))