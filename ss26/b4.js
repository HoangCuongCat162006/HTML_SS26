function checkPrime(n){
    if(n<2)
        return false;
     
    if(n===2 || n===3) 
        return true;
    
    for(let i=2;i<=Math.sqrt(n);i++){
        if(n %i===0)
            return false;
    }
    return true;
}
function prime(input){
    if(!Array.isArray(input)){
        console.log("Du lieu khong hop le");
        return[];
    }
    let primeNumber=input.filter(num => Number.isInteger(num) && checkPrime(num));

    if(primeNumber.length===0){
        console.log("mang khong co phan tu nao"); 
        return[];       
    }
    return primeNumber;
}

console.log(prime([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(prime([]));
console.log(prime("abc"));