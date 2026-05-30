// 1. Array
const monHoc = ["Toán", "Lý", "Hoá", "Văn"];

console.log(monHoc[3]);

console.log(monHoc.length);

// 3 method quan trọng nhất
const diemSo = [45, 82, 67, 91, 55];

const diemGapDoi = diemSo.map((ds) => ds * 2);
console.log(diemGapDoi);

const diemDat = diemSo.filter((diem) => diem >= 50);
console.log(diemDat);

const diemXuatSac = diemSo.find((diem) => diem >= 90);
console.log(diemXuatSac);

// 2. Object
const nguoiDung = {
  ten: "Minh",
  tuoi: 25,
  email: "minh@gmail.com",
};

// Truy cập dữ liệu
console.log(nguoiDung.ten); // Dùng thường xuyên
console.log(nguoiDung["email"]); // Ít dùng

// Thêm / sửa field
nguoiDung.diaChi = "HCM"; // Thêm trường "diaChi"
nguoiDung.tuoi = 26; // Sửa trường "tuoi"
console.log(nguoiDung.diaChi);
console.log(nguoiDung.tuoi);

// 3. Destructuring
const nguoiDung2 = { ten: "Minh", tuoi: 25, email: "minh@gmail.com" };

const { ten, tuoi } = nguoiDung2;

console.log(ten);
console.log(tuoi);

// Destructuring trong hàm
const hienThiNguoiDung = ({ ten, email }) => {
  console.log(`${ten} - ${email}`);
};

hienThiNguoiDung(nguoiDung);

// 4. Array of Objects
const danhSachHocSinh = [
  { id: 1, ten: "Minh", diem: 85 },
  { id: 2, ten: "Hoa", diem: 92 },
  { id: 3, ten: "Nam", diem: 47 },
];

// Lọc học sinh đậu
const hocSinhDau = danhSachHocSinh.filter((hs) => hs.diem >= 50);
console.log(hocSinhDau);

// Lấy chỉ tên của học sinh đậu
const tenHocSinhDau = hocSinhDau.map((hs) => hs.ten);
console.log(tenHocSinhDau);

// Viết gộp
const tenDau = danhSachHocSinh
  .filter((hs) => hs.diem >= 50)
  .map((hs) => hs.ten);
console.log(tenDau);

// Bài tập
const danhSachCauHoi = [
  { id: 1, noiDung: "Next.js là gì?", trangThai: "da_tra_loi", luotXem: 420 },
  {
    id: 2,
    noiDung: "Prisma dùng như thế nào?",
    trangThai: "cho_tra_loi",
    luotXem: 45,
  },
  {
    id: 3,
    noiDung: "SQL Server là gì?",
    trangThai: "da_tra_loi",
    luotXem: 889,
  },
  {
    id: 4,
    noiDung: "Tailwind CSS là gì?",
    trangThai: "cho_tra_loi",
    luotXem: 210,
  },
];

// Yêu cầu:
// 1. Lọc ra các câu hỏi có trangThai là "da_tra_loi"
// 2. Từ kết quả đó, lấy ra mảng chỉ chứa noiDung
// 3. Tìm câu hỏi có luotXem cao nhất (dùng find hoặc cách khác cũng được)

const anwser = danhSachCauHoi.filter((q) => q.trangThai === "da_tra_loi");
console.log(anwser);

const listContent = anwser.map((q) => q.noiDung);
console.log(listContent);

let start = 0;
for (var i = 0; i < danhSachCauHoi.length; i++) {
  if (start < danhSachCauHoi[i].luotXem) {
    start = danhSachCauHoi[i].luotXem;
  } else {
    continue;
  }
}

const topView = danhSachCauHoi.find((q) => q.luotXem == start);
console.log(topView);
