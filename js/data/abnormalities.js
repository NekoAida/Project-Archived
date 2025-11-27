// Abnormalities Database
const abnormalities = [
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
    }
];
