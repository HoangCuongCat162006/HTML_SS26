function chain(arr){
    if(!Array.isArray(arr)){
        console.log("Du lieu khong hop le");
        return[];
    }
    if(arr.length===0){
        console.log("Khong co du lieu nao");
    }

    let result=arr.filter((Element) => Element.length>5);
    console.log(result);

}
console.log(chain(["apple", "banana", "cat", "elephant", "dog"]));
console.log(chain([]));
console.log(chain("abc"));
