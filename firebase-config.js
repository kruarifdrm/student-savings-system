/* ══════════════════════════════════════════════════════════════
   ตั้งค่าโปรเจกต์ Firebase ของโรงเรียนคุณที่ไฟล์นี้ไฟล์เดียว
   แก้ค่าในไฟล์นี้ได้เลย ไม่ต้องก๊อบไปไหน

   หาค่าได้จาก  Firebase Console → ⚙ Project settings → Your apps
                 → Web app → SDK setup and configuration → Config

   หมายเหตุตอนอัปเดตเวอร์ชันใหม่: ให้ทับเฉพาะ index.html
   ไฟล์นี้เป็นของโรงเรียนคุณ อย่าเอาของใหม่มาทับ
   ══════════════════════════════════════════════════════════════ */

window.FIREBASE_CONFIG = {
  apiKey:            "YOUR_API_KEY",
  authDomain:        "YOUR_PROJECT.firebaseapp.com",
  projectId:         "YOUR_PROJECT",
  storageBucket:     "YOUR_PROJECT.firebasestorage.app",
  messagingSenderId: "YOUR_SENDER_ID",
  appId:             "YOUR_APP_ID"
};

/* รายชื่อครูไม่ได้อยู่ในไฟล์นี้แล้ว —
   ใส่อีเมลเจ้าของระบบไว้ที่ ownerEmails() ใน firestore.rules ครั้งเดียวตอนติดตั้ง
   จากนั้นเพิ่ม-ลบครูคนอื่นได้จากแท็บ "ตั้งค่า" ในแอป มีผลทันทีไม่ต้อง deploy ใหม่ */
