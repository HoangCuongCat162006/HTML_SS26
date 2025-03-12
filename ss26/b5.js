function integer(arr){
    if(!Array.isArray(arr)){
        console.log("Du lieu khong hop le");
        return;
    }
    if(arr.length===0){
        console.log("Du lieu khong co");
        return;
    }

    let maxNum=Math.max(...arr);
    let position=arr.indexOf(maxNum);

    console.log(`max=${maxNum}`);
    console.log(`position= ${position}`);
}
integer([10, 9, 5, 11, 24, 5]);
integer([]);
integer("abc");

