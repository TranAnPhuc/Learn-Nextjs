// Import default - ten tu dat tuy y
// import nhanDoi from "./tinhToan.js";

// Import named - phai dung ten, dung dau {}
// import { cong, tru } from "./tinhToan.js";

// Import ca default lan named cung 1 luc
import nhanDoi, { cong, tru, PI } from "./tinhToan.js";

// console.log(nhanDoi(5));
// console.log(cong(5, PI));
// console.log(tru(PI, 1));
import { xepLoai, tinhTrungBinh } from "./utils.js";

// Bai tap
console.log(xepLoai(78));
console.log(tinhTrungBinh([6, 10, 7, 3, 7, 4]));
