function Factor(number) {

    var factorSet = [];

    function isFactor(potentialFactor) {
        return number % potentialFactor == 0;
    }

    for (var pod = 1; pod <= Math.sqrt(number); pod++ ) {
        if (isFactor(pod)) {
            factorSet.push(pod);
            factorSet.push(number / pod);
        }
    }
    return factorSet;

}

function ClassifierAlpha(num) {
    const number = num || 0;

    // const let 차이
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
        if (aset.length!== bset.length) return false;
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

NumberType(2);
NumberType(3);
NumberType(4);
NumberType(5);
NumberType(6);
NumberType(7);
NumberType(8);
NumberType(9);
NumberType(10);