// NPCs Database
const npcs = [
    {
        id: 'NPC-001',
        name: 'Ayin',
        type: 'npc',
        role: 'Founder of Lobotomy Corporation',
        location: 'Unknown (Seed of Light)',
        description: 'ผู้ก่อตั้ง Lobotomy Corporation และสร้าง Cognito & Enkephalin System',
        abilities: [
            'จิตที่แยกเป็น Sephirot 10 ส่วน',
            'สร้าง A.I. Angela',
            'วางแผนใหญ่หลวง Seed of Light'
        ],
        notes: 'ตัวละครสำคัญที่สุดใน Lobotomy Corporation, แรงจูงใจลึกลับ'
    },
    {
        id: 'NPC-002',
        name: 'Angela',
        type: 'npc',
        role: 'A.I. Director / Librarian',
        location: 'The Library',
        description: 'A.I. ที่สร้างโดย Ayin เพื่อทำหน้าที่ผู้จัดการ Lobotomy Corp และต่อมาเป็น Librarian',
        abilities: [
            'ควบคุม Library ทั้งหมด',
            'มีพลัง Light มหาศาล',
            'สามารถสร้าง Books จาก memories'
        ],
        notes: 'มีอดีตที่ซับซ้อน ไม่ชอบมนุษย์ แต่ค่อยๆ เปลี่ยนไป'
    },
    {
        id: 'NPC-003',
        name: 'Binah (Garion)',
        type: 'npc',
        role: 'Arbiter / Sephirah',
        location: 'Extraction Team (Lobotomy Corp)',
        description: 'อดีต Arbiter ของ The Head ปัจจุบันกลายเป็น Sephirah ของ Extraction Team',
        abilities: [
            'Arbiter powers (ระดับสูงสุดของ The Head)',
            'Fairy abilities',
            'ทรงพลังมากในการต่อสู้'
        ],
        notes: 'เคยพยายามทำลาย L Corp แต่แพ้ให้ Ayin, มีปรัชญาว่า "Human effort is futile"'
    },
    {
        id: 'NPC-004',
        name: 'Roland',
        type: 'npc',
        role: 'Fixer (Grade 1) / Librarian',
        location: 'The Library',
        description: 'อดีต Grade 1 Fixer ที่สูญเสียภรรยาและตกลงมาเป็น Librarian',
        abilities: [
            'Combat Specialist - ใช้ได้หลาย weapon styles',
            'Adaptable fighter',
            'EGO: Perception Blocking'
        ],
        notes: 'มีอดีตที่โศกเศร้า, ค่อยๆ ฟื้นฟูจิตใจ, เป็นมิตรกับ Angela'
    }
];
