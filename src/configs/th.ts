import type { BabelIpsumConfig } from '../mod.ts'

const config: BabelIpsumConfig = {
	'locale': 'th',
	'wordSeparators': [
		{ 'weight': 1, 'separator': '' },
	],
	'sentenceWrappers': [
		{ 'weight': 1, 'end': '' },
	],
	'sentenceSeparator': ' ',
	'vocabulary': [
		{ 'word': 'การ', 'weight': 30 },
		{ 'word': 'ที่', 'weight': 20 },
		{ 'word': 'และ', 'weight': 18 },
		{ 'word': 'อักขระ', 'weight': 17 },
		{ 'word': 'รหัส', 'weight': 16 },
		{ 'word': 'นิ', 'weight': 15 },
		{ 'word': 'โคด', 'weight': 15 },
		{ 'word': 'ยู', 'weight': 14 },
		{ 'word': 'ใช้', 'weight': 14 },
		{ 'word': 'มี', 'weight': 14 },
		{ 'word': 'เป็น', 'weight': 13 },
		{ 'word': 'ใน', 'weight': 12 },
		{ 'word': 'ของ', 'weight': 11 },
		{ 'word': 'เข้า', 'weight': 10 },
		{ 'word': 'ภาษา', 'weight': 8 },
		{ 'word': 'มาตรฐาน', 'weight': 7 },
		{ 'word': 'ตัว', 'weight': 7 },
		{ 'word': 'ไป', 'weight': 7 },
		{ 'word': 'แก้', 'weight': 7 },
		{ 'word': 'ได้', 'weight': 6 },
		{ 'word': 'กัน', 'weight': 6 },
		{ 'word': 'อักษร', 'weight': 6 },
		{ 'word': 'หลาย', 'weight': 6 },
		{ 'word': 'แบบ', 'weight': 6 },
		{ 'word': 'รวม', 'weight': 5 },
		{ 'word': 'ข้อความ', 'weight': 5 },
		{ 'word': 'ระบบ', 'weight': 5 },
		{ 'word': 'จาก', 'weight': 5 },
		{ 'word': 'ลำดับ', 'weight': 5 },
		{ 'word': 'ไบต์', 'weight': 5 },
		{ 'word': 'สำหรับ', 'weight': 5 },
		{ 'word': 'คือ', 'weight': 4 },
		{ 'word': 'แสดง', 'weight': 4 },
		{ 'word': 'ผล', 'weight': 4 },
		{ 'word': 'ส่วน', 'weight': 4 },
		{ 'word': 'อย่าง', 'weight': 4 },
		{ 'word': 'ด้วย', 'weight': 4 },
		{ 'word': 'หนึ่ง', 'weight': 4 },
		{ 'word': 'ถึง', 'weight': 4 },
		{ 'word': 'นี้', 'weight': 4 },
		{ 'word': 'ปฏิบัติ', 'weight': 4 },
		{ 'word': 'ๆ', 'weight': 4 },
		{ 'word': 'กับ', 'weight': 4 },
		{ 'word': 'ไม่', 'weight': 4 },
		{ 'word': 'แทน', 'weight': 4 },
		{ 'word': 'คอมพิวเตอร์', 'weight': 3 },
		{ 'word': 'ชุด', 'weight': 3 },
		{ 'word': 'อ้างอิง', 'weight': 3 },
		{ 'word': 'นั้น', 'weight': 3 },
		{ 'word': 'เรียง', 'weight': 3 },
		{ 'word': 'เช่น', 'weight': 3 },
		{ 'word': 'นำ', 'weight': 3 },
		{ 'word': 'ซอฟต์แวร์', 'weight': 3 },
		{ 'word': 'ต่าง', 'weight': 3 },
		{ 'word': 'มาก', 'weight': 3 },
		{ 'word': 'สมาคม', 'weight': 3 },
		{ 'word': 'โครง', 'weight': 3 },
		{ 'word': 'ร่าง', 'weight': 3 },
		{ 'word': 'จำกัด', 'weight': 3 },
		{ 'word': 'ปัญหา', 'weight': 3 },
		{ 'word': 'วินโดวส์', 'weight': 3 },
		{ 'word': 'ทั้งหมด', 'weight': 2 },
		{ 'word': 'พิมพ์', 'weight': 2 },
		{ 'word': 'ลง', 'weight': 2 },
		{ 'word': 'สอง', 'weight': 2 },
		{ 'word': 'ให้', 'weight': 2 },
		{ 'word': 'ธรรมดา', 'weight': 2 },
		{ 'word': 'เขียน', 'weight': 2 },
		{ 'word': 'ใหญ่', 'weight': 2 },
		{ 'word': 'ประกอบ', 'weight': 2 },
		{ 'word': 'รายการ', 'weight': 2 },
		{ 'word': 'มากกว่า', 'weight': 2 },
		{ 'word': 'พัฒนา', 'weight': 2 },
		{ 'word': 'มา', 'weight': 2 },
		{ 'word': 'วิธี', 'weight': 2 },
		{ 'word': 'การนำ', 'weight': 2 },
		{ 'word': 'จำนวน', 'weight': 2 },
		{ 'word': 'หรือ', 'weight': 2 },
		{ 'word': 'ความ', 'weight': 2 },
		{ 'word': 'งาน', 'weight': 2 },
		{ 'word': 'ต่อ', 'weight': 2 },
		{ 'word': 'จะ', 'weight': 2 },
		{ 'word': 'สามารถ', 'weight': 2 },
		{ 'word': 'ใช้ได้', 'weight': 2 },
		{ 'word': 'หลัก', 'weight': 2 },
		{ 'word': 'เอก', 'weight': 2 },
		{ 'word': 'ซ์', 'weight': 2 },
		{ 'word': 'ที่สุด', 'weight': 2 },
		{ 'word': 'ทุก', 'weight': 2 },
		{ 'word': 'แอ', 'weight': 2 },
		{ 'word': 'สกี', 'weight': 2 },
		{ 'word': 'อื่น', 'weight': 2 },
		{ 'word': 'ซึ่ง', 'weight': 2 },
		{ 'word': 'รูป', 'weight': 2 },
		{ 'word': 'อยู่', 'weight': 2 },
		{ 'word': 'เนื่องจาก', 'weight': 2 },
		{ 'word': 'ข้อมูล', 'weight': 2 },
		{ 'word': 'ตาม', 'weight': 2 },
		{ 'word': 'จุด', 'weight': 2 },
		{ 'word': 'ข้อ', 'weight': 2 },
		{ 'word': 'วิจารณ์', 'weight': 2 },
		{ 'word': 'ทำให้', 'weight': 2 },
		{ 'word': 'ไทย', 'weight': 2 },
		{ 'word': 'ว่า', 'weight': 2 },
		{ 'word': 'เมื่อ', 'weight': 1 },
		{ 'word': 'กระดาษ', 'weight': 1 },
		{ 'word': 'ทั้ง', 'weight': 1 },
		{ 'word': 'แผ่น', 'weight': 1 },
		{ 'word': 'อังกฤษ', 'weight': 1 },
		{ 'word': 'อุตสาหกรรม', 'weight': 1 },
		{ 'word': 'ช่วย', 'weight': 1 },
		{ 'word': 'จัดการ', 'weight': 1 },
		{ 'word': 'โลก', 'weight': 1 },
		{ 'word': 'สอดคล้อง', 'weight': 1 },
		{ 'word': 'ต่อย', 'weight': 1 },
		{ 'word': 'อด', 'weight': 1 },
		{ 'word': 'สากล', 'weight': 1 },
		{ 'word': 'ตี', 'weight': 1 },
		{ 'word': 'หนังสือ', 'weight': 1 },
		{ 'word': 'แผนผัง', 'weight': 1 },
		{ 'word': 'เพื่อ', 'weight': 1 },
		{ 'word': 'นอกจาก', 'weight': 1 },
		{ 'word': 'ยัง', 'weight': 1 },
		{ 'word': 'อธิบาย', 'weight': 1 },
		{ 'word': 'เสนอ', 'weight': 1 },
		{ 'word': 'อีก', 'weight': 1 },
		{ 'word': 'กฎ', 'weight': 1 },
		{ 'word': 'เกณฑ์', 'weight': 1 },
		{ 'word': 'แยก', 'weight': 1 },
		{ 'word': 'ทิศทาง', 'weight': 1 },
		{ 'word': 'อาหรับ', 'weight': 1 },
		{ 'word': 'ฮีบรู', 'weight': 1 },
		{ 'word': 'ขวา', 'weight': 1 },
		{ 'word': 'ซ้าย', 'weight': 1 },
		{ 'word': 'สำเร็จ', 'weight': 1 },
		{ 'word': 'ชนิด', 'weight': 1 },
		{ 'word': 'เดียว', 'weight': 1 },
		{ 'word': 'สู่', 'weight': 1 },
		{ 'word': 'กว้าง', 'weight': 1 },
		{ 'word': 'ขวาง', 'weight': 1 },
		{ 'word': 'อิทธิพล', 'weight': 1 },
		{ 'word': 'แปล', 'weight': 1 },
		{ 'word': 'นั่น', 'weight': 1 },
		{ 'word': 'โปรแกรม', 'weight': 1 },
		{ 'word': 'เทคโนโลยี', 'weight': 1 },
		{ 'word': 'อาทิ', 'weight': 1 },
		{ 'word': 'เอ็ม', 'weight': 1 },
		{ 'word': 'แอล', 'weight': 1 },
		{ 'word': 'จาวา', 'weight': 1 },
		{ 'word': 'ดอต', 'weight': 1 },
		{ 'word': 'เน็ต', 'weight': 1 },
		{ 'word': 'เฟรม', 'weight': 1 },
		{ 'word': 'เวิร์ก', 'weight': 1 },
		{ 'word': 'สมัย', 'weight': 1 },
		{ 'word': 'ใหม่', 'weight': 1 },
		{ 'word': 'รู้จัก', 'weight': 1 },
		{ 'word': 'ค่า', 'weight': 1 },
		{ 'word': 'เหมือน', 'weight': 1 },
		{ 'word': 'จนถึง', 'weight': 1 },
		{ 'word': 'ปัจจุบัน', 'weight': 1 },
		{ 'word': 'เลิก', 'weight': 1 },
		{ 'word': 'แล้ว', 'weight': 1 },
		{ 'word': 'แต่', 'weight': 1 },
		{ 'word': 'ครอบคลุม', 'weight': 1 },
		{ 'word': 'ขยาย', 'weight': 1 },
		{ 'word': 'โดย', 'weight': 1 },
		{ 'word': 'ขาด', 'weight': 1 },
		{ 'word': 'องค์กร', 'weight': 1 },
		{ 'word': 'แสวงหา', 'weight': 1 },
		{ 'word': 'กำไร', 'weight': 1 },
		{ 'word': 'ประสาน', 'weight': 1 },
		{ 'word': 'งานการ', 'weight': 1 },
		{ 'word': 'สมาชิก', 'weight': 1 },
		{ 'word': 'เต็ม', 'weight': 1 },
		{ 'word': 'บริษัท', 'weight': 1 },
		{ 'word': 'ฮาร์ดแวร์', 'weight': 1 },
		{ 'word': 'สนใจ', 'weight': 1 },
		{ 'word': 'ประมวล', 'weight': 1 },
		{ 'word': 'เป้า', 'weight': 1 },
		{ 'word': 'หมาย', 'weight': 1 },
		{ 'word': 'ทะเยอทะยาน', 'weight': 1 },
		{ 'word': 'แทนที่', 'weight': 1 },
		{ 'word': 'ขนาด', 'weight': 1 },
		{ 'word': 'ขอบเขต', 'weight': 1 },
		{ 'word': 'สภาพ', 'weight': 1 },
		{ 'word': 'แวดล้อม', 'weight': 1 },
		{ 'word': 'แพร่', 'weight': 1 },
		{ 'word': 'ตกแต่ง', 'weight': 1 },
		{ 'word': 'บน', 'weight': 1 },
		{ 'word': 'เครือ', 'weight': 1 },
		{ 'word': 'ข่าย', 'weight': 1 },
		{ 'word': 'สังคม', 'weight': 1 },
		{ 'word': 'สิ่ง', 'weight': 1 },
		{ 'word': 'แอป', 'weight': 1 },
		{ 'word': 'พลิ', 'weight': 1 },
		{ 'word': 'เคชั่', 'weight': 1 },
		{ 'word': 'นพิ', 'weight': 1 },
		{ 'word': 'เศษ', 'weight': 1 },
		{ 'word': 'แปลง', 'weight': 1 },
		{ 'word': 'พิเศษ', 'weight': 1 },
		{ 'word': 'สี่', 'weight': 1 },
		{ 'word': 'ตาราง', 'weight': 1 },
		{ 'word': 'โครงสร้าง', 'weight': 1 },
		{ 'word': 'บิต', 'weight': 1 },
		{ 'word': 'รุ่น', 'weight': 1 },
		{ 'word': 'กล่อง', 'weight': 1 },
		{ 'word': 'ช่อง', 'weight': 1 },
		{ 'word': 'บล็อก', 'weight': 1 },
		{ 'word': 'เกี่ยว', 'weight': 1 },
		{ 'word': 'ทาง', 'weight': 1 },
		{ 'word': 'เทคนิค', 'weight': 1 },
		{ 'word': 'อย่างไร', 'weight': 1 },
		{ 'word': 'ก็', 'weight': 1 },
		{ 'word': 'ดี', 'weight': 1 },
		{ 'word': 'กลาย', 'weight': 1 },
		{ 'word': 'พร้อม', 'weight': 1 },
		{ 'word': 'ตระกูล', 'weight': 1 },
		{ 'word': 'ได้แก่', 'weight': 1 },
		{ 'word': 'เอ็น', 'weight': 1 },
		{ 'word': 'ที', 'weight': 1 },
		{ 'word': 'วิน', 'weight': 1 },
		{ 'word': 'โด', 'weight': 1 },
		{ 'word': 'วส์', 'weight': 1 },
		{ 'word': 'พี', 'weight': 1 },
		{ 'word': 'คล้าย', 'weight': 1 },
		{ 'word': 'ยูนิกซ์', 'weight': 1 },
		{ 'word': 'ก็ได้', 'weight': 1 },
		{ 'word': 'พื้น', 'weight': 1 },
		{ 'word': 'ฐาน', 'weight': 1 },
		{ 'word': 'รองรับ', 'weight': 1 },
		{ 'word': 'รับ', 'weight': 1 },
		{ 'word': 'วิพากษ์', 'weight': 1 },
		{ 'word': 'ถูก', 'weight': 1 },
		{ 'word': 'ต้อง', 'weight': 1 },
		{ 'word': 'ควร', 'weight': 1 },
		{ 'word': 'เพราะ', 'weight': 1 },
		{ 'word': 'เดิม', 'weight': 1 },
		{ 'word': 'จึง', 'weight': 1 },
		{ 'word': 'เทียบ', 'weight': 1 },
		{ 'word': 'ยุ่ง', 'weight': 1 },
		{ 'word': 'ยาก', 'weight': 1 },
		{ 'word': 'ขึ้น', 'weight': 1 },
		{ 'word': 'แหล่ง', 'weight': 1 },
	],
}

export default config