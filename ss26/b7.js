function day(arr) {
    if (!Array.isArray(arr)) {
        console.log("Du lieu khong hop le");
        return [];
    }
    if (arr.length === 0) {
        console.log("Mang khong co phan tu nao");
        return [];
    }

    let result = arr.map(num => num * num).filter(num => num % 2 === 0);

    return result;
}


console.log(day([2, 5, 10]));
console.log(day([]));      
console.log(day("abc"));
