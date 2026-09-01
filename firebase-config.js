/* ══════════════════════════════════════════════════════════════
   ตั้งค่าโปรเจกต์ Firebase ของโรงเรียนคุณที่ไฟล์นี้ไฟล์เดียว
   (index.html และ setup.html อ่านค่าจากที่นี่ทั้งคู่)

   หาค่าได้จาก  Firebase Console → ⚙ Project settings → Your apps
                 → Web app → SDK setup and configuration → Config
   ══════════════════════════════════════════════════════════════ */

window.FIREBASE_CONFIG = {
  apiKey:            "YOUR_API_KEY",
  authDomain:        "YOUR_PROJECT.firebaseapp.com",
  projectId:         "YOUR_PROJECT",
  storageBucket:     "YOUR_PROJECT.firebasestorage.app",
  messagingSenderId: "YOUR_SENDER_ID",
  appId:             "YOUR_APP_ID"
};

/* รายชื่ออีเมลครูที่มีสิทธิ์แก้ไขข้อมูล (ครูล็อกอินด้วยบัญชี Google)
   ⚠ ต้องใส่อีเมลชุดเดียวกันนี้ใน firestore.rules ด้วย (ฟังก์ชัน isTeacher)
     ไม่งั้นจะเข้าหน้าครูได้แต่บันทึกข้อมูลไม่ได้ */
window.TEACHER_EMAILS = ["kru@example.com"];
