export const xepLoai = (diem) => {
  if (typeof diem !== "number") {
    return "Bắt buộc phải là số";
  }

  if (diem >= 90) {
    return "Xuất sắc";
  } else if (diem >= 70) {
    return "Giỏi";
  } else if (diem >= 50) {
    return "Đạt";
  } else if (diem >= 0) {
    return "Chưa đạt";
  } else {
    return "Điểm không hợp lệ!";
  }
};

export const tinhTrungBinh = (mang) => {
  const totalLengthArr = mang.length;
  const totalArr = mang.reduce((total, currentItem) => {
    return total + currentItem;
  }, 0);

  const avgArr = totalArr / totalLengthArr;

  return avgArr;
};
