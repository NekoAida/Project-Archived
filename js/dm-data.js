// DM Database - ข้อมูลสำหรับ DM
// คุณสามารถเพิ่มข้อมูลเพิ่มเติมได้ที่นี่

const dmDatabase = [
    // === EGO WEAPONS ===
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
    },

    // === ABNORMALITIES ===
    {
        id: 'O-02-62',
        name: 'Justitia',
        type: 'abnormality',
        risk: 'ALEPH',
        description: 'Abnormality ที่มีรูปร่างเหมือนเครื่องชั่งยุติธรรมขนาดยักษ์ มันบอกว่ามันจะพิพากษาทุกคน',
        abilities: [
            'ตัดสินผู้ที่เข้าใกล้ว่า "บาป" หรือ "บริสุทธิ์"',
            'สามารถทำลายพนักงานในทันทีหากตัดสินว่าบาป',
            'Breach: เมื่อหนีออกมาจะพิพากษาทั้ง facility'
        ],
        notes: 'ห้ามปล่อยให้ breach ในทุกกรณี, ใช้ระเบิดเทอร์โมนิวเคลียร์หากจำเป็น'
    },
    {
        id: 'O-06-20',
        name: 'Nothing There',
        type: 'abnormality',
        risk: 'ALEPH',
        description: 'สิ่งมีชีวิตที่สามารถเลียนแบบมนุษย์และสิ่งอื่นๆ ได้อย่างสมบูรณ์แบบ',
        abilities: [
            'เลียนแบบพนักงานที่เสียชีวิต',
            'เปลี่ยนรูปร่างเป็นรูปแบบการต่อสู้ที่น่ากลัว',
            'ความเสียหายสูงมากเมื่อ breach'
        ],
        notes: 'ตรวจสอบ ID card เสมอ ระวังพนักงานที่ทำตัวแปลกๆ'
    },
    {
        id: 'F-01-69',
        name: 'Plague Doctor',
        type: 'abnormality',
        risk: 'ZAYIN',
        description: 'หมอที่สวม plague doctor mask พยายามจะ "รักษา" ทุกคน',
        abilities: [
            'เมื่อ Blessing count ถึง 12 จะเปลี่ยนเป็น WhiteNight',
            'รีเซ็ตเคาน์เตอร์เมื่อพนักงานเสียชีวิต 3 คน',
            'การรักษาจะทำให้ได้รับ "Blessing"'
        ],
        notes: 'อันตรายสูงสุด แม้จะเป็น ZAYIN! ห้ามทำงานกับมันเกิน 2 ครั้ง'
    },
    {
        id: 'T-09-09',
        name: 'Red Riding Hooded Mercenary',
        type: 'abnormality',
        risk: 'WAW',
        description: 'หนูน้อยหมวกแดงที่เติบโตขึ้นเป็นนักฆ่า ตามหาหมาป่าที่กินคุณย่ายของเธอ',
        abilities: [
            'ความเสียหายสูงต่าง target เดียว',
            'เร็วมาก หลบยาก',
            'เมื่อ HP ต่ำจะเข้าสู่ "Berserk" mode'
        ],
        notes: 'เป็นมิตรกับผู้ที่แข็งแกร่ง ไม่ชอบคนอ่อนแอ'
    },

    // === NPCs ===
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
    },

    // === ITEMS ===
    {
        id: 'ITEM-001',
        name: 'Cogito',
        type: 'item',
        description: 'พลังงานสกัดจาก Abnormalities เป็นแก่นแท้ของพลังชีวิต',
        abilities: [
            'สร้าง Enkephalin',
            'ใช้ในการสร้าง EGO',
            'พลังงานหลักของ The City'
        ],
        notes: 'เป็นความลับระดับสูงสุด L Corp monopoly'
    },
    {
        id: 'ITEM-002',
        name: 'WARP Train Ticket',
        type: 'item',
        description: 'ตั๋วรถไฟ WARP ที่สามารถเดินทางข้าม Districts ได้ทันที (แต่ภายในใช้เวลาหลายสิบปี)',
        abilities: [
            'เทเลพอร์ตข้าม Districts',
            'ภายในรถไฟใช้เวลานาน',
            'ต้นทุนยกระดับ'
        ],
        notes: 'ผู้โดยสารจะแก่ภายในรถไฟ แต่ปรากฏออกมาในเวลาเดียวกัน'
    },

    // === LOCATIONS ===
    {
        id: 'LOC-001',
        name: 'The Library',
        type: 'location',
        description: 'ห้องสมุดลึกลับที่เก็บ Books ซึ่งเป็นความทรงจำและชีวิตของผู้คน',
        abilities: [
            'รวบรวม Books จาก guests',
            'สามารถเรียก Abnormalities',
            'มี floors หลายชั้น แต่ละชั้นมีธีม'
        ],
        notes: 'เป็นจุดศูนย์กลางของ Library of Ruina, ควบคุมโดย Angela'
    },
    {
        id: 'LOC-002',
        name: 'District 23 (N Corp)',
        type: 'location',
        description: 'เขตที่ควบคุมโดย N Corp มี Nail technology',
        abilities: [
            'Nail injections',
            'ความรุนแรงสูง',
            'Moses อาศัยอยู่ที่นี่'
        ],
        notes: 'เป็นเขตอันตราย Backstreets ที่นี่โหดร้าย'
    }
];
