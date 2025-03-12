function number (arr){
    if(!Array.isArray(arr)){
        console.log("Du lieu khong hop le");
        return[];
    }
    if(arr.length===0){
        console.log("Mang khong co phan tu nao");
    }

    let result = arr.filter(num => Number.isInteger(num) && num >= 10);
    return result;
}
console.log(number([1, 22, 10, 9, 8]));
console.log(number([]));
console.log(number("abc"));



