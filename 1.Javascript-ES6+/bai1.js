// 1. Varriable - let, const
const ten = "Phuc";
let tuoi = 21;

tuoi = 22;

console.log(ten);
console.log(tuoi);

// 2. Arrow function
const chao = (ten) => {
    return `Xin chào ${ten}`;
}

console.log(chao("Phuc"));

const nhanDoi = (so) => so * 2;

console.log(nhanDoi(5));

// 3. Conditional
const age = 14;

if(age >= 18){
    console.log("Đã đến tuổi trưởng thành");
}
else{
    console.log("Vẫn còn quá trẻ");
}

const age2 = 18 ? "Đã đến tuổi trưởng thành":"Vẫn còn quá trẻ";

console.log(age2);


const confirm = true;

confirm && console.log("Đã xác nhận");

// 4. Bài tập
const xepLoai = (diem) => {
    if(typeof(diem) !== "number"){
        return "Bắt buộc phải là số";
    }

    if(diem >= 90){
        return "Xuất sắc";
    }
    else if(diem >= 70){
        return "Giỏi";
    }
    else if(diem >= 50){
        return "Đạt";
    }
    else if(diem >= 0){
        return "Chưa đạt";
    }
    else{
        return "Điểm không hợp lệ!";
    }
}

console.log(xepLoai(95))   
console.log(xepLoai(75))   
console.log(xepLoai(55))  
console.log(xepLoai(30))
console.log(xepLoai("10"))