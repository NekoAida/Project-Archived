// DM Database - Main file that combines all data
// รวมข้อมูลจากไฟล์ทั้งหมด

// ไฟล์นี้จะรวบรวมข้อมูลจากทุกหมวดหมู่
// ข้อมูลแต่ละหมวดถูกแยกไว้ในโฟลเดอร์ data/

const dmDatabase = [
    ...egoWeapons,      // จาก data/ego-weapons.js
    ...abnormalities,   // จาก data/abnormalities.js
    ...npcs,            // จาก data/npcs.js
    ...items,           // จาก data/items.js
    ...locations        // จาก data/locations.js
];
