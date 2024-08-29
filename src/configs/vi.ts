import type { LoremBabelConfig } from '../mod.ts'

/**
 * @module
 * Config used with LoremBabel to generate nonsense placeholder text in `vi` locale.
 */

/** LoremBabel configuration for `vi` locale */
const config: LoremBabelConfig = {
	'locale': 'vi',
	'sentenceSeparator': ' ',
	'wordSeparators': [
		{ 'weight': 2081, 'separator': ' ' },
		{ 'weight': 79, 'separator': ', ' },
		{ 'weight': 36, 'separator': '-' },
		{ 'weight': 5, 'separator': '; ' },
		{ 'weight': 4, 'separator': ' – ' },
	],
	'sentenceWrappers': [
		{ 'weight': 78, 'start': '', 'end': '.' },
	],
	'vocabulary': [
		{ 'word': 'các', 'weight': 69 },
		{ 'word': 'ký', 'weight': 49 },
		{ 'word': 'được', 'weight': 47 },
		{ 'word': 'là', 'weight': 42 },
		{ 'word': 'unicode', 'weight': 39 },
		{ 'word': 'tự', 'weight': 39 },
		{ 'word': 'có', 'weight': 39 },
		{ 'word': 'một', 'weight': 39 },
		{ 'word': 'mã', 'weight': 37 },
		{ 'word': 'và', 'weight': 35 },
		{ 'word': 'trong', 'weight': 32 },
		{ 'word': 'chữ', 'weight': 31 },
		{ 'word': 'cho', 'weight': 23 },
		{ 'word': 'số', 'weight': 23 },
		{ 'word': 'của', 'weight': 21 },
		{ 'word': 'cách', 'weight': 21 },
		{ 'word': 'hóa', 'weight': 20 },
		{ 'word': 'bit', 'weight': 20 },
		{ 'word': 'để', 'weight': 18 },
		{ 'word': 'dùng', 'weight': 18 },
		{ 'word': 'dụng', 'weight': 17 },
		{ 'word': 'chuẩn', 'weight': 16 },
		{ 'word': 'những', 'weight': 15 },
		{ 'word': 'này', 'weight': 15 },
		{ 'word': 'không', 'weight': 15 },
		{ 'word': 'như', 'weight': 14 },
		{ 'word': 'tiếng', 'weight': 14 },
		{ 'word': 'đó', 'weight': 14 },
		{ 'word': 'ngôn', 'weight': 13 },
		{ 'word': 'ngữ', 'weight': 13 },
		{ 'word': 'sử', 'weight': 13 },
		{ 'word': 'việc', 'weight': 13 },
		{ 'word': 'thể', 'weight': 13 },
		{ 'word': 'hiệu', 'weight': 13 },
		{ 'word': 'nhiều', 'weight': 12 },
		{ 'word': 'bản', 'weight': 12 },
		{ 'word': 'từ', 'weight': 12 },
		{ 'word': 'nhất', 'weight': 11 },
		{ 'word': 'bộ', 'weight': 11 },
		{ 'word': 'khác', 'weight': 11 },
		{ 'word': 'tương', 'weight': 11 },
		{ 'word': 'với', 'weight': 11 },
		{ 'word': 'mặt', 'weight': 11 },
		{ 'word': 'phẳng', 'weight': 11 },
		{ 'word': 'cả', 'weight': 10 },
		{ 'word': 'thích', 'weight': 10 },
		{ 'word': 'hợp', 'weight': 10 },
		{ 'word': 'hay', 'weight': 9 },
		{ 'word': 'viết', 'weight': 9 },
		{ 'word': 'còn', 'weight': 9 },
		{ 'word': 'chỉ', 'weight': 9 },
		{ 'word': 'byte', 'weight': 9 },
		{ 'word': 'phải', 'weight': 9 },
		{ 'word': 'thống', 'weight': 8 },
		{ 'word': 'vào', 'weight': 8 },
		{ 'word': 'hiện', 'weight': 8 },
		{ 'word': 'hơn', 'weight': 8 },
		{ 'word': 'do', 'weight': 8 },
		{ 'word': 'hết', 'weight': 8 },
		{ 'word': 'giá', 'weight': 8 },
		{ 'word': 'trị', 'weight': 8 },
		{ 'word': 'trên', 'weight': 7 },
		{ 'word': 'đã', 'weight': 7 },
		{ 'word': 'phần', 'weight': 7 },
		{ 'word': 'trình', 'weight': 7 },
		{ 'word': 'công', 'weight': 7 },
		{ 'word': 'tính', 'weight': 7 },
		{ 'word': 'hai', 'weight': 7 },
		{ 'word': 'định', 'weight': 7 },
		{ 'word': 'lại', 'weight': 7 },
		{ 'word': 'diễn', 'weight': 7 },
		{ 'word': 'code', 'weight': 7 },
		{ 'word': 'hầu', 'weight': 7 },
		{ 'word': 'hệ', 'weight': 7 },
		{ 'word': 'bằng', 'weight': 7 },
		{ 'word': 'phông', 'weight': 7 },
		{ 'word': 'nhật', 'weight': 6 },
		{ 'word': 'việt', 'weight': 6 },
		{ 'word': 'tiêu', 'weight': 6 },
		{ 'word': 'mềm', 'weight': 6 },
		{ 'word': 'cũng', 'weight': 6 },
		{ 'word': 'hạn', 'weight': 6 },
		{ 'word': 'đầu', 'weight': 6 },
		{ 'word': 'khi', 'weight': 6 },
		{ 'word': 'đến', 'weight': 6 },
		{ 'word': 'người', 'weight': 6 },
		{ 'word': 'ra', 'weight': 6 },
		{ 'word': 'đa', 'weight': 6 },
		{ 'word': 'tuy', 'weight': 6 },
		{ 'word': 'nhiên', 'weight': 6 },
		{ 'word': 'biểu', 'weight': 6 },
		{ 'word': 'theo', 'weight': 6 },
		{ 'word': 'ngoài', 'weight': 6 },
		{ 'word': 'văn', 'weight': 6 },
		{ 'word': 'sẽ', 'weight': 6 },
		{ 'word': 'bảng', 'weight': 6 },
		{ 'word': 'cái', 'weight': 6 },
		{ 'word': 'quốc', 'weight': 5 },
		{ 'word': 'thế', 'weight': 5 },
		{ 'word': 'điểm', 'weight': 5 },
		{ 'word': 'rất', 'weight': 5 },
		{ 'word': 'chẳng', 'weight': 5 },
		{ 'word': 'mới', 'weight': 5 },
		{ 'word': 'ở', 'weight': 5 },
		{ 'word': 'tiên', 'weight': 5 },
		{ 'word': 'vẫn', 'weight': 5 },
		{ 'word': 'liên', 'weight': 5 },
		{ 'word': 'đảm', 'weight': 5 },
		{ 'word': 'bảo', 'weight': 5 },
		{ 'word': 'ta', 'weight': 5 },
		{ 'word': 'chính', 'weight': 5 },
		{ 'word': 'tập', 'weight': 5 },
		{ 'word': 'lớn', 'weight': 5 },
		{ 'word': 'mà', 'weight': 5 },
		{ 'word': 'hỗ', 'weight': 5 },
		{ 'word': 'trợ', 'weight': 5 },
		{ 'word': 'trước', 'weight': 5 },
		{ 'word': 'plane', 'weight': 5 },
		{ 'word': 'point', 'weight': 5 },
		{ 'word': 'nhưng', 'weight': 5 },
		{ 'word': 'ít', 'weight': 5 },
		{ 'word': 'thêm', 'weight': 5 },
		{ 'word': 'tới', 'weight': 5 },
		{ 'word': 'đề', 'weight': 5 },
		{ 'word': 'nếu', 'weight': 5 },
		{ 'word': 'endian', 'weight': 5 },
		{ 'word': 'nằm', 'weight': 5 },
		{ 'word': 'chuỗi', 'weight': 5 },
		{ 'word': 'điều', 'weight': 5 },
		{ 'word': 'thị', 'weight': 5 },
		{ 'word': 'thiết', 'weight': 4 },
		{ 'word': 'kế', 'weight': 4 },
		{ 'word': 'nhau', 'weight': 4 },
		{ 'word': 'hán', 'weight': 4 },
		{ 'word': 'v', 'weight': 4 },
		{ 'word': 'phiên', 'weight': 4 },
		{ 'word': 'năm', 'weight': 4 },
		{ 'word': 'lưu', 'weight': 4 },
		{ 'word': 'tức', 'weight': 4 },
		{ 'word': 'đại', 'weight': 4 },
		{ 'word': 'nhóm', 'weight': 4 },
		{ 'word': 'lợi', 'weight': 4 },
		{ 'word': 'sự', 'weight': 4 },
		{ 'word': 'đặc', 'weight': 4 },
		{ 'word': 'trái', 'weight': 4 },
		{ 'word': 'hoa', 'weight': 4 },
		{ 'word': 'xử', 'weight': 4 },
		{ 'word': 'lý', 'weight': 4 },
		{ 'word': 'vấn', 'weight': 4 },
		{ 'word': 'nghĩa', 'weight': 4 },
		{ 'word': 'nó', 'weight': 4 },
		{ 'word': 'qua', 'weight': 4 },
		{ 'word': 'significant', 'weight': 4 },
		{ 'word': 'thư', 'weight': 4 },
		{ 'word': 'gọi', 'weight': 3 },
		{ 'word': 'đơn', 'weight': 3 },
		{ 'word': 'làm', 'weight': 3 },
		{ 'word': 'tất', 'weight': 3 },
		{ 'word': 'kể', 'weight': 3 },
		{ 'word': 'trung', 'weight': 3 },
		{ 'word': 'vì', 'weight': 3 },
		{ 'word': 'đang', 'weight': 3 },
		{ 'word': 'thay', 'weight': 3 },
		{ 'word': 'ứng', 'weight': 3 },
		{ 'word': 'ngày', 'weight': 3 },
		{ 'word': 'rằng', 'weight': 3 },
		{ 'word': 'lập', 'weight': 3 },
		{ 'word': 'thì', 'weight': 3 },
		{ 'word': 'ty', 'weight': 3 },
		{ 'word': 'đoàn', 'weight': 3 },
		{ 'word': 'tác', 'weight': 3 },
		{ 'word': 'đều', 'weight': 3 },
		{ 'word': 'bởi', 'weight': 3 },
		{ 'word': 'gia', 'weight': 3 },
		{ 'word': 'đầy', 'weight': 3 },
		{ 'word': 'quy', 'weight': 3 },
		{ 'word': 'dụ', 'weight': 3 },
		{ 'word': 'rập', 'weight': 3 },
		{ 'word': 'nay', 'weight': 3 },
		{ 'word': 'gán', 'weight': 3 },
		{ 'word': 'tây', 'weight': 3 },
		{ 'word': 'gian', 'weight': 3 },
		{ 'word': 'mỗi', 'weight': 3 },
		{ 'word': 'chứa', 'weight': 3 },
		{ 'word': 'biệt', 'weight': 3 },
		{ 'word': 'phân', 'weight': 3 },
		{ 'word': 'hàn', 'weight': 3 },
		{ 'word': 'chưa', 'weight': 3 },
		{ 'word': 'khoảng', 'weight': 3 },
		{ 'word': 'chọn', 'weight': 3 },
		{ 'word': 'về', 'weight': 3 },
		{ 'word': 'kho', 'weight': 3 },
		{ 'word': 'biết', 'weight': 3 },
		{ 'word': 'con', 'weight': 3 },
		{ 'word': 'chương', 'weight': 3 },
		{ 'word': 'chế', 'weight': 3 },
		{ 'word': 'trữ', 'weight': 3 },
		{ 'word': 'giản', 'weight': 3 },
		{ 'word': 'nên', 'weight': 3 },
		{ 'word': 'nào', 'weight': 3 },
		{ 'word': 'dài', 'weight': 3 },
		{ 'word': 'dù', 'weight': 3 },
		{ 'word': 'điện', 'weight': 3 },
		{ 'word': 'tử', 'weight': 3 },
		{ 'word': 'thường', 'weight': 3 },
		{ 'word': 'hiển', 'weight': 3 },
		{ 'word': 'trang', 'weight': 3 },
		{ 'word': 'web', 'weight': 3 },
		{ 'word': 'hoặc', 'weight': 3 },
		{ 'word': 'tế', 'weight': 2 },
		{ 'word': 'duy', 'weight': 2 },
		{ 'word': 'giới', 'weight': 2 },
		{ 'word': 'hình', 'weight': 2 },
		{ 'word': 'phức', 'weight': 2 },
		{ 'word': 'tạp', 'weight': 2 },
		{ 'word': 'ưu', 'weight': 2 },
		{ 'word': 'bố', 'weight': 2 },
		{ 'word': 'xuất', 'weight': 2 },
		{ 'word': 'hoàn', 'weight': 2 },
		{ 'word': 'độc', 'weight': 2 },
		{ 'word': 'nói', 'weight': 2 },
		{ 'word': 'quyết', 'weight': 2 },
		{ 'word': 'mở', 'weight': 2 },
		{ 'word': 'cụ', 'weight': 2 },
		{ 'word': 'phát', 'weight': 2 },
		{ 'word': 'triển', 'weight': 2 },
		{ 'word': 'chức', 'weight': 2 },
		{ 'word': 'ảnh', 'weight': 2 },
		{ 'word': 'hưởng', 'weight': 2 },
		{ 'word': 'danh', 'weight': 2 },
		{ 'word': 'đủ', 'weight': 2 },
		{ 'word': 'ví', 'weight': 2 },
		{ 'word': 'quan', 'weight': 2 },
		{ 'word': 'giữa', 'weight': 2 },
		{ 'word': 'phù', 'weight': 2 },
		{ 'word': 'biến', 'weight': 2 },
		{ 'word': 'phương', 'weight': 2 },
		{ 'word': 'thành', 'weight': 2 },
		{ 'word': 'multilingual', 'weight': 2 },
		{ 'word': 'lượng', 'weight': 2 },
		{ 'word': 'bổ', 'weight': 2 },
		{ 'word': 'sung', 'weight': 2 },
		{ 'word': 'supplementary', 'weight': 2 },
		{ 'word': 'loại', 'weight': 2 },
		{ 'word': 'cổ', 'weight': 2 },
		{ 'word': 'âm', 'weight': 2 },
		{ 'word': 'chuyên', 'weight': 2 },
		{ 'word': 'cầu', 'weight': 2 },
		{ 'word': 'xem', 'weight': 2 },
		{ 'word': 'bị', 'weight': 2 },
		{ 'word': 'lai', 'weight': 2 },
		{ 'word': 'gần', 'weight': 2 },
		{ 'word': 'chúng', 'weight': 2 },
		{ 'word': 'cũ', 'weight': 2 },
		{ 'word': 'cơ', 'weight': 2 },
		{ 'word': 'năng', 'weight': 2 },
		{ 'word': 'points', 'weight': 2 },
		{ 'word': 'lần', 'weight': 2 },
		{ 'word': 'so', 'weight': 2 },
		{ 'word': 'bên', 'weight': 2 },
		{ 'word': 'lẽ', 'weight': 2 },
		{ 'word': 'big', 'weight': 2 },
		{ 'word': 'most', 'weight': 2 },
		{ 'word': 'đi', 'weight': 2 },
		{ 'word': 'little', 'weight': 2 },
		{ 'word': 'ngược', 'weight': 2 },
		{ 'word': 'least', 'weight': 2 },
		{ 'word': 'mục', 'weight': 2 },
		{ 'word': 'đích', 'weight': 2 },
		{ 'word': 'map', 'weight': 2 },
		{ 'word': 'u', 'weight': 2 },
		{ 'word': 'cực', 'weight': 2 },
		{ 'word': 'kỳ', 'weight': 2 },
		{ 'word': 'sẵn', 'weight': 2 },
		{ 'word': 'thứ', 'weight': 2 },
		{ 'word': 'sức', 'weight': 2 },
		{ 'word': 'nữa', 'weight': 2 },
		{ 'word': 'pháp', 'weight': 2 },
		{ 'word': 'tiết', 'weight': 2 },
		{ 'word': 'khiến', 'weight': 2 },
		{ 'word': 'dạng', 'weight': 2 },
		{ 'word': 'mặc', 'weight': 2 },
		{ 'word': 'đòi', 'weight': 2 },
		{ 'word': 'hỏi', 'weight': 2 },
		{ 'word': 'độ', 'weight': 2 },
		{ 'word': 'liệu', 'weight': 2 },
		{ 'word': 'cần', 'weight': 2 },
		{ 'word': 'hành', 'weight': 2 },
		{ 'word': 'xác', 'weight': 2 },
		{ 'word': 'sau', 'weight': 2 },
		{ 'word': 'mọi', 'weight': 2 },
		{ 'word': 'phép', 'weight': 2 },
		{ 'word': 'thời', 'weight': 2 },
		{ 'word': 'giữ', 'weight': 2 },
		{ 'word': 'nguyên', 'weight': 2 },
		{ 'word': 'dấu', 'weight': 2 },
		{ 'word': 'bao', 'weight': 2 },
		{ 'word': 'hebrew', 'weight': 2 },
		{ 'word': 'máy', 'weight': 2 },
		{ 'word': 'cài', 'weight': 2 },
		{ 'word': 'đặt', 'weight': 2 },
		{ 'word': 'font', 'weight': 2 },
		{ 'word': 'diệp', 'weight': 2 },
		{ 'word': 'hàng', 'weight': 2 },
		{ 'word': 'tượng', 'weight': 1 },
		{ 'word': 'nôm', 'weight': 1 },
		{ 'word': 'từng', 'weight': 1 },
		{ 'word': 'bước', 'weight': 1 },
		{ 'word': 'truyền', 'weight': 1 },
		{ 'word': 'windows', 'weight': 1 },
		{ 'word': 'tháng', 'weight': 1 },
		{ 'word': 'hiệp', 'weight': 1 },
		{ 'word': 'hội', 'weight': 1 },
		{ 'word': 'california', 'weight': 1 },
		{ 'word': 'the', 'weight': 1 },
		{ 'word': 'standard', 'weight': 1 },
		{ 'word': 'tục', 'weight': 1 },
		{ 'word': 'thiện', 'weight': 1 },
		{ 'word': 'dựa', 'weight': 1 },
		{ 'word': 'nhờ', 'weight': 1 },
		{ 'word': 'vậy', 'weight': 1 },
		{ 'word': 'xin', 'weight': 1 },
		{ 'word': 'ý', 'weight': 1 },
		{ 'word': 'khái', 'weight': 1 },
		{ 'word': 'niệm', 'weight': 1 },
		{ 'word': 'toàn', 'weight': 1 },
		{ 'word': 'thức', 'weight': 1 },
		{ 'word': 'consortium', 'weight': 1 },
		{ 'word': 'diện', 'weight': 1 },
		{ 'word': 'tin', 'weight': 1 },
		{ 'word': 'học', 'weight': 1 },
		{ 'word': 'soạn', 'weight': 1 },
		{ 'word': 'chặt', 'weight': 1 },
		{ 'word': 'chẽ', 'weight': 1 },
		{ 'word': 'quá', 'weight': 1 },
		{ 'word': 'nâng', 'weight': 1 },
		{ 'word': 'cấp', 'weight': 1 },
		{ 'word': 'rộng', 'weight': 1 },
		{ 'word': 'vị', 'weight': 1 },
		{ 'word': 'trí', 'weight': 1 },
		{ 'word': 'y', 'weight': 1 },
		{ 'word': 'hệt', 'weight': 1 },
		{ 'word': 'ơ', 'weight': 1 },
		{ 'word': 'tổ', 'weight': 1 },
		{ 'word': 'phi', 'weight': 1 },
		{ 'word': 'nhuận', 'weight': 1 },
		{ 'word': 'khổng', 'weight': 1 },
		{ 'word': 'lồ', 'weight': 1 },
		{ 'word': 'microsoft', 'weight': 1 },
		{ 'word': 'adobe', 'weight': 1 },
		{ 'word': 'systems', 'weight': 1 },
		{ 'word': 'novell', 'weight': 1 },
		{ 'word': 'sun', 'weight': 1 },
		{ 'word': 'microsystems', 'weight': 1 },
		{ 'word': 'lotus', 'weight': 1 },
		{ 'word': 'software', 'weight': 1 },
		{ 'word': 'symantec', 'weight': 1 },
		{ 'word': 'unisys', 'weight': 1 },
		{ 'word': 'sách', 'weight': 1 },
		{ 'word': 'tại', 'weight': 1 },
		{ 'word': 'dựng', 'weight': 1 },
		{ 'word': 'collation', 'weight': 1 },
		{ 'word': 'sang', 'weight': 1 },
		{ 'word': 'chiếm', 'weight': 1 },
		{ 'word': 'phổ', 'weight': 1 },
		{ 'word': 'chia', 'weight': 1 },
		{ 'word': 'căn', 'weight': 1 },
		{ 'word': 'basic', 'weight': 1 },
		{ 'word': 'nơi', 'weight': 1 },
		{ 'word': 'tiếp', 'weight': 1 },
		{ 'word': 'đồ', 'weight': 1 },
		{ 'word': 'họa', 'weight': 1 },
		{ 'word': 'chủ', 'weight': 1 },
		{ 'word': 'yếu', 'weight': 1 },
		{ 'word': 'egyptian', 'weight': 1 },
		{ 'word': 'hieroglyph', 'weight': 1 },
		{ 'word': 'nhạc', 'weight': 1 },
		{ 'word': 'ideographic', 'weight': 1 },
		{ 'word': 'gặp', 'weight': 1 },
		{ 'word': 'thẻ', 'weight': 1 },
		{ 'word': 'khuyến', 'weight': 1 },
		{ 'word': 'khích', 'weight': 1 },
		{ 'word': 'lựa', 'weight': 1 },
		{ 'word': 'cá', 'weight': 1 },
		{ 'word': 'nhân', 'weight': 1 },
		{ 'word': 'tranh', 'weight': 1 },
		{ 'word': 'luận', 'weight': 1 },
		{ 'word': 'nhu', 'weight': 1 },
		{ 'word': 'ích', 'weight': 1 },
		{ 'word': 'kỹ', 'weight': 1 },
		{ 'word': 'thuật', 'weight': 1 },
		{ 'word': 'chuyển', 'weight': 1 },
		{ 'word': 'thấy', 'weight': 1 },
		{ 'word': 'cỡ', 'weight': 1 },
		{ 'word': 'khó', 'weight': 1 },
		{ 'word': 'đọc', 'weight': 1 },
		{ 'word': 'giờ', 'weight': 1 },
		{ 'word': 'đánh', 'weight': 1 },
		{ 'word': 'ghi', 'weight': 1 },
		{ 'word': 'hậu', 'weight': 1 },
		{ 'word': 'quả', 'weight': 1 },
		{ 'word': 'đưa', 'weight': 1 },
		{ 'word': 'chậm', 'weight': 1 },
		{ 'word': 'chạp', 'weight': 1 },
		{ 'word': 'đây', 'weight': 1 },
		{ 'word': 'nhận', 'weight': 1 },
		{ 'word': 'giải', 'weight': 1 },
		{ 'word': 'tùy', 'weight': 1 },
		{ 'word': 'thuộc', 'weight': 1 },
		{ 'word': 'khả', 'weight': 1 },
		{ 'word': 'nguồn', 'weight': 1 },
		{ 'word': 'hao', 'weight': 1 },
		{ 'word': 'chỗ', 'weight': 1 },
		{ 'word': 'kia', 'weight': 1 },
		{ 'word': 'vật', 'weight': 1 },
		{ 'word': 'nhớ', 'weight': 1 },
		{ 'word': 'đĩa', 'weight': 1 },
		{ 'word': 'băng', 'weight': 1 },
		{ 'word': 'tả', 'weight': 1 },
		{ 'word': 'dòng', 'weight': 1 },
		{ 'word': 'stream', 'weight': 1 },
		{ 'word': 'bạn', 'weight': 1 },
		{ 'word': 'nghe', 'weight': 1 },
		{ 'word': 'thí', 'weight': 1 },
		{ 'word': 'surrogate', 'weight': 1 },
		{ 'word': 'pair', 'weight': 1 },
		{ 'word': 'cặp', 'weight': 1 },
		{ 'word': 'dành', 'weight': 1 },
		{ 'word': 'riêng', 'weight': 1 },
		{ 'word': 'giống', 'weight': 1 },
		{ 'word': 'chứ', 'weight': 1 },
		{ 'word': 'nhà', 'weight': 1 },
		{ 'word': 'hàm', 'weight': 1 },
		{ 'word': 'viện', 'weight': 1 },
		{ 'word': 'sánh', 'weight': 1 },
		{ 'word': 'comparisons', 'weight': 1 },
		{ 'word': 'xếp', 'weight': 1 },
		{ 'word': 'buộc', 'weight': 1 },
		{ 'word': 'tốn', 'weight': 1 },
		{ 'word': 'mạnh', 'weight': 1 },
		{ 'word': 'thậm', 'weight': 1 },
		{ 'word': 'chí', 'weight': 1 },
		{ 'word': 'latinh', 'weight': 1 },
		{ 'word': 'ban', 'weight': 1 },
		{ 'word': 'nha', 'weight': 1 },
		{ 'word': 'kiểu', 'weight': 1 },
		{ 'word': 'kiệm', 'weight': 1 },
		{ 'word': 'tìm', 'weight': 1 },
		{ 'word': 'kiếm', 'weight': 1 },
		{ 'word': 'dễ', 'weight': 1 },
		{ 'word': 'dàng', 'weight': 1 },
		{ 'word': 'shift', 'weight': 1 },
		{ 'word': 'chất', 'weight': 1 },
		{ 'word': 'trở', 'weight': 1 },
		{ 'word': 'thực', 'weight': 1 },
		{ 'word': 'dư', 'weight': 1 },
		{ 'word': 'mang', 'weight': 1 },
		{ 'word': 'nén', 'weight': 1 },
		{ 'word': 'dữ', 'weight': 1 },
		{ 'word': 'hướng', 'weight': 1 },
		{ 'word': 'tiến', 'weight': 1 },
		{ 'word': 'bắt', 'weight': 1 },
		{ 'word': 'thập', 'weight': 1 },
		{ 'word': 'lục', 'weight': 1 },
		{ 'word': 'yêu', 'weight': 1 },
		{ 'word': 'gửi', 'weight': 1 },
		{ 'word': 'dưới', 'weight': 1 },
		{ 'word': 'coi', 'weight': 1 },
		{ 'word': 'lệ', 'weight': 1 },
		{ 'word': 'bỏ', 'weight': 1 },
		{ 'word': 'đồng', 'weight': 1 },
		{ 'word': 'escape', 'weight': 1 },
		{ 'word': 'sequence', 'weight': 1 },
		{ 'word': 'kết', 'weight': 1 },
		{ 'word': 'thúc', 'weight': 1 },
		{ 'word': 'nổi', 'weight': 1 },
		{ 'word': 'gồm', 'weight': 1 },
		{ 'word': 'character', 'weight': 1 },
		{ 'word': 'properties', 'weight': 1 },
		{ 'word': 'text', 'weight': 1 },
		{ 'word': 'normalisation', 'weight': 1 },
		{ 'word': 'forms', 'weight': 1 },
		{ 'word': 'bidirectional', 'weight': 1 },
		{ 'word': 'display', 'weight': 1 },
		{ 'word': 'order', 'weight': 1 },
		{ 'word': 'duyệt', 'weight': 1 },
		{ 'word': 'mozilla', 'weight': 1 },
		{ 'word': 'firefox', 'weight': 1 },
		{ 'word': 'động', 'weight': 1 },
		{ 'word': 'hoá', 'weight': 1 },
		{ 'word': 'encoding', 'weight': 1 },
		{ 'word': 'tắc', 'weight': 1 },
		{ 'word': 'cú', 'weight': 1 },
		{ 'word': 'trùm', 'weight': 1 },
		{ 'word': 'trừ', 'weight': 1 },
		{ 'word': 'nhỏ', 'weight': 1 },
		{ 'word': 'khiển', 'weight': 1 },
		{ 'word': 'dãy', 'weight': 1 },
		{ 'word': 'lượt', 'weight': 1 },
		{ 'word': 'delta', 'weight': 1 },
		{ 'word': 'hy', 'weight': 1 },
		{ 'word': 'lạp', 'weight': 1 },
		{ 'word': 'ngắn', 'weight': 1 },
		{ 'word': 'cyril', 'weight': 1 },
		{ 'word': 'meem', 'weight': 1 },
		{ 'word': 'qof', 'weight': 1 },
		{ 'word': 'thái', 'weight': 1 },
		{ 'word': 'hiragana', 'weight': 1 },
		{ 'word': 'phồn', 'weight': 1 },
		{ 'word': 'nyrh', 'weight': 1 },
		{ 'word': 'hangul', 'weight': 1 },
		{ 'word': 'triều', 'weight': 1 },
		{ 'word': 'tải', 'weight': 1 },
		{ 'word': 'miễn', 'weight': 1 },
		{ 'word': 'phí', 'weight': 1 },
		{ 'word': 'ngàn', 'weight': 1 },
		{ 'word': 'trường', 'weight': 1 },
		{ 'word': 'mức', 'weight': 1 },
		{ 'word': 'vài', 'weight': 1 },
		{ 'word': 'tài', 'weight': 1 },
		{ 'word': 'càng', 'weight': 1 },
		{ 'word': 'tốt', 'weight': 1 },
		{ 'word': 'chi', 'weight': 1 },
		{ 'word': 'nghìn', 'weight': 1 },
		{ 'word': 'thu', 'weight': 1 },
		{ 'word': 'gì', 'weight': 1 },
		{ 'word': 'gõ', 'weight': 1 },
		{ 'word': 'times', 'weight': 1 },
		{ 'word': 'new', 'weight': 1 },
		{ 'word': 'roman', 'weight': 1 },
		{ 'word': 'tahoma', 'weight': 1 },
		{ 'word': 'arial', 'weight': 1 },
	],
}

export default config
