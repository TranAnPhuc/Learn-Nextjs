const layDuLieu = async () => {
  const ketQua = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await ketQua.json();
  return data;
};

// layDuLieu();

const layBaiViet = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1",
    );
    const data = await response.json();

    console.log("Tieu de:", data.title);
    console.log("Noi dung:", data.body);
  } catch (loi) {
    console.log("Co loi xay ra:", loi.message);
  }
};

// layBaiViet();

// Bai tap

// API này trả về danh sách bài viết
// URL: https://jsonplaceholder.typicode.com/posts

// Yêu cầu:
// 1. Fetch danh sách bài viết từ URL trên
// 2. Lọc lấy các bài có userId === 1
// 3. In ra tiêu đề (title) của từng bài đó
// 4. Bọc trong try/catch

const listPosts = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    const post = data.filter((u) => u.userId === 1);
    const listTitle = post.map((p) => p.title);
    console.log(listTitle);
  } catch (err) {
    console.log(`Co loi xay ra: ${err.message}`);
  }
};

listPosts();
