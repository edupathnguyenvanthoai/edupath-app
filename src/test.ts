export const Subject = [
  {
    id: 1,
    name: 'Toán học',
    config: {
      icon: 'solar:calculator-outline',
      color: '#2563EB',
    },
    weight: 2,
    category: 'Tự nhiên',
    admissionGroups: ['A00', 'A01'],
  },
  {
    id: 2,
    name: 'Vật lý',
    config: {
      icon: 'solar:bolt-outline',
      color: '#1D4ED8',
    },
    weight: 1,
    category: 'Tự nhiên',
    admissionGroups: ['A00', 'A01', 'A02', 'B00'],
  },
  {
    id: 3,
    name: 'Hóa học',
    config: {
      icon: 'solar:test-tube-outline',
      color: '#0EA5E9',
    },
    weight: 1,
    category: 'Tự nhiên',
    admissionGroups: ['A00', 'A01', 'A02', 'B00'],
  },
  {
    id: 4,
    name: 'Sinh học',
    config: {
      icon: 'solar:dna-outline',
      color: '#0284C7',
    },
    weight: 1,
    category: 'Tự nhiên',
    admissionGroups: ['B00', 'B08'],
  },
  {
    id: 5,
    name: 'Ngữ văn',
    config: {
      icon: 'solar:book-2-outline',
      color: '#8B5CF6',
    },
    weight: 2,
    category: 'Xã hội',
    admissionGroups: ['C00', 'D01'],
  },
  {
    id: 6,
    name: 'Lịch sử',
    config: {
      icon: 'solar:history-outline',
      color: '#7C3AED',
    },
    weight: 1,
    category: 'Xã hội',
    admissionGroups: ['C00'],
  },
  {
    id: 7,
    name: 'Địa lý',
    config: {
      icon: 'solar:map-outline',
      color: '#A855F7',
    },
    weight: 1,
    category: 'Xã hội',
    admissionGroups: ['C00'],
  },
  {
    id: 8,
    name: 'Tiếng Anh',
    config: {
      icon: 'solar:chat-line-outline',
      color: '#9333EA',
    },
    weight: 2,
    category: 'Xã hội',
    admissionGroups: ['D01'],
  },
  {
    id: 9,
    name: 'Tin học',
    config: {
      icon: 'solar:laptop-outline',
      color: '#F97316',
    },
    weight: 1,
    category: 'Tự chọn',
    admissionGroups: ['A01', 'D01'],
  },
  {
    id: 10,
    name: 'Công nghệ',
    config: {
      icon: 'solar:code-square-outline',
      color: '#EA580C',
    },
    weight: 1,
    category: 'Tự chọn',
    admissionGroups: ['A01', 'D01'],
  },
  {
    id: 11,
    name: 'Giáo dục công dân',
    config: {
      icon: 'solar:shield-check-bold',
      color: '#EF4444',
    },
    weight: 1,
    category: 'Tự chọn',
    admissionGroups: ['C14', 'D01'],
  },
  {
    id: 12,
    name: 'Giáo dục thể chất',
    config: {
      icon: 'solar:dumbbell-outline',
      color: '#DC2626',
    },
    weight: 1,
    category: 'Tự chọn',
    admissionGroups: ['T00', 'T01'],
  },
  {
    id: 13,
    name: 'Giáo dục quốc phòng – an ninh',
    config: {
      icon: 'solar:shield-check-outline',
      color: '#F43F5E',
    },
    weight: 1,
    category: 'Tự chọn',
    admissionGroups: ['N00'],
  },
  {
    id: 14,
    name: 'Hoạt động trải nghiệm – hướng nghiệp',
    config: {
      icon: 'solar:rocket-outline',
      color: '#E11D48',
    },
    weight: 1,
    category: 'Tự chọn',
    admissionGroups: ['M00'],
  },
  {
    id: 15,
    name: 'Nội dung giáo dục của địa phương',
    config: {
      icon: 'solar:hand-heart-outline',
      color: '#EC4899',
    },
    weight: 1,
    category: 'Tự chọn',
    admissionGroups: ['M00'],
  },
  {
    id: 16,
    name: 'Tiếng dân tộc thiểu số',
    config: {
      icon: 'solar:chat-line-outline',
      color: '#DB2777',
    },
    weight: 1,
    category: 'Tự chọn',
    admissionGroups: ['M00'],
  },
];

console.log(Subject.map((x): Subject=>({
  id: x.id,
  name: x.name,
  color: x.config.color,
  icon: x.config.icon,
  category: x.category,
  tabs: x.admissionGroups.map(i=>i.toLowerCase()),
  weight: x.weight
})));