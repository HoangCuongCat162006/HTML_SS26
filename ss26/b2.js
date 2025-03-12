let str=prompt("Nhap vào chuỗi có độ dài lớn hơn 5 kí tự");
let arr=str.split(' ');
if(arr.length===0){
    console.log("Mang khong co phan tu");
} else{
    let result=arr.filter((Element) => Element.length>5);
    console.log(result);
}