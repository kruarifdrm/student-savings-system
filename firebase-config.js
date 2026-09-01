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

/* รหัสครูเริ่มต้น — ใช้ได้จนกว่าจะตั้งรหัสจริงผ่าน setup.html
   เปลี่ยนตัวเลขนี้ก่อนใช้งานจริงเสมอ */
window.DEFAULT_TEACHER_PW = "123456";
