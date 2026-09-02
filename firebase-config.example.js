/* ══════════════════════════════════════════════════════════════
   ไฟล์ตัวอย่าง — ก๊อบไฟล์นี้เป็น  firebase-config.js  ก่อนใช้งาน

     Windows :  copy firebase-config.example.js firebase-config.js
     Mac/Linux: cp   firebase-config.example.js firebase-config.js

   แล้วแก้ค่าในไฟล์ที่ก๊อบมา (ตัวจริงไม่ถูกเก็บใน git จึงไม่ชนเวลาดึงอัปเดต)

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
