function checkemail(arr){
    if(!Array.isArray(arr)){
        console.log("Email nhap vao khong hop le");
        return [];
    }
    let validemail= arr.filter(
        email => typeof email ==="string" && email.includes("@") && !email.includes(" "));
    if(validemail.length===0){
        console.log("Mang khong co email hop le");
    }else{
        console.log(validemail);
    }   
}
checkemail(["john.doe@gmail.com"]);
checkemail([]);
checkemail("abc");