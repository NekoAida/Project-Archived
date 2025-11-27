// EGO Weapons Database
const egoWeapons = [
    {
        id: 'E-001',
        name: 'Justitia',
        type: 'ego',
        risk: 'ALEPH',
        origin: 'Abnormality: Justitia (O-02-62)',
        description: 'EGO ที่ทรงพลังที่สุด ใช้ในการพิพากษาผู้อื่น ผู้ใช้จะรู้สึกเหมือนเป็นผู้พิพากษาที่สมบูรณ์แบบ',
        stats: {
            'DMG': '70-90',
            'ATK Speed': 'Very Slow',
            'Range': 'Long'
        },
        abilities: [
            'สร้างความเสียหายสูงมากต่อศัตรูทุกประเภท',
            'มีโอกาสสร้างสถานะ "Guilty" กับเป้าหมาย'
        ],
        notes: 'ใช้ในการต่อสู้กับ boss หรือศัตรูที่แข็งแกร่งมาก ควรระวังผลข้างเคียงต่อจิตใจของผู้ใช้'
    },
    {
        id: 'E-002',
        name: 'Mimicry',
        type: 'ego',
        risk: 'WAW',
        origin: 'Abnormality: Nothing There (O-06-20)',
        description: 'EGO ที่มีความสามารถในการเลียนแบบ มาจาก Nothing There ที่น่ากลัว',
        stats: {
            'DMG': '45-65',
            'ATK Speed': 'Fast',
            'Range': 'Medium'
        },
        abilities: [
            'สามารถเปลี่ยนรูปร่างได้ชั่วคราว',
            'เพิ่ม Movement Speed 20%'
        ],
        notes: 'อันตรายต่อผู้ใช้หากใช้นานเกินไป จิตใจอาจสั่นคลอน'
    },
    {
        id: 'E-003',
        name: 'Paradise Lost',
        type: 'ego',
        risk: 'ALEPH',
        origin: 'Abnormality: WhiteNight (T-03-46)',
        description: 'EGO จาก WhiteNight สัญลักษณ์ของความหวังที่ผิดเพี้ยน',
        stats: {
            'DMG': '60-80',
            'ATK Speed': 'Slow',
            'Range': 'Long'
        },
        abilities: [
            'สร้าง Area of Effect damage ขนาดใหญ่',
            'มีโอกาส spawn Apostles'
        ],
        notes: 'อันตรายสูงสุด ควรใช้เฉพาะในสถานการณ์ฉุกเฉินเท่านั้น'
    }
];
