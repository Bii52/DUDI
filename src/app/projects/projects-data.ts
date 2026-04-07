import { TranslationKey } from "@/hooks/lang-context";

// Category keys for i18n
export const filterCategoryKeys = [
  // 'cat1', 
  'cat2', 
  // 'cat3', 'cat4', 'cat5', 'cat6', 
  'cat7', 'cat8',
  // 'cat9', 
  'cat10', 'cat11', 
  // 'cat12', 'cat13', 'cat14', 'cat15', 'cat16',
  // 'cat17', 'cat18', 'cat19', 'cat20', 
  'cat21', 
  // 'cat22', 'cat23', 
  'cat24',
] as const;

export type CategoryKey = typeof filterCategoryKeys[number] | 'catAll';

export interface Project {
  titleKey: TranslationKey;
  descriptionKey: TranslationKey;
  image: string;
  categoryKey: CategoryKey;
  demoUrl?: string;
}
export const projects: Project[] = [
  // Image 2 spreadsheet projects
  {
    titleKey: 'projTitle1',
    descriptionKey: 'projDesc1',
    image: '/yoga.png',
    categoryKey: 'cat11', // Spa & Beauty
    demoUrl: 'https://dudi-yoga.vercel.app/'
  },
  {
    titleKey: 'projTitle2',
    descriptionKey: 'projDesc2',
    image: '/project-4.jpg',
    categoryKey: 'cat10', // Travel
    demoUrl: 'https://sai-gon-di-web-nu.vercel.app/'
  },
  {
    titleKey: 'projTitle3',
    descriptionKey: 'projDesc3',
    image: '/creadit.png',
    categoryKey: 'cat2', // Enterprise (Financial fits here best)
    demoUrl: 'https://dudi-credit.vercel.app/'
  },
  {
    titleKey: 'projTitle4',
    descriptionKey: 'projDesc4',
    image: '/project-3.png',
    categoryKey: 'cat2', // Enterprise (Financial)
    demoUrl: 'https://dudi-money-wise-fe-rho.vercel.app/'
  },
  {
    titleKey: 'projTitle5',
    descriptionKey: 'projDesc5',
    image: '/restaurant.png',
    categoryKey: 'cat8', // Coffee & Restaurant
    demoUrl: 'https://dudi-restaurant.vercel.app/'
  },
  {
    titleKey: 'projTitle6',
    descriptionKey: 'projDesc6',
    image: '/ctyluat.png',
    categoryKey: 'cat24', // Software (Legal firm)
    demoUrl: 'https://congtyluatanp.com/'
  },
  {
    titleKey: 'projTitle7',
    descriptionKey: 'projDesc7',
    image: '/house.png',
    categoryKey: 'cat7', // Real Estate
    demoUrl: 'https://dudi-bdsan-sigma.vercel.app/'
  },
  {
    titleKey: 'projTitle8',
    descriptionKey: 'projDesc8',
    image: '/PC.png',
    categoryKey: 'cat21', // Technology (PC components)
    demoUrl: 'https://pc-services.vercel.app/'
  },
/*
  // cat4 - E-commerce Platform / Mẫu website thương mại điện tử
  {
    titleKey: 'projTitle9',
    descriptionKey: 'projDesc9',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/bf5e7745f8547880070c2305b68e68868f795055?width=640',
    categoryKey: 'cat4'
  },
  {
    titleKey: 'projTitle10',
    descriptionKey: 'projDesc10',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/bf5e7745f8547880070c2305b68e68868f795055?width=640',
    categoryKey: 'cat4'
  },
  // cat5 - Cosmetics / Mẫu website mỹ phẩm
  {
    titleKey: 'projTitle11',
    descriptionKey: 'projDesc11',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/bf5e7745f8547880070c2305b68e68868f795055?width=640',
    categoryKey: 'cat5'
  },
  {
    titleKey: 'projTitle12',
    descriptionKey: 'projDesc12',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/bf5e7745f8547880070c2305b68e68868f795055?width=640',
    categoryKey: 'cat5'
  },
  // cat6 - Furniture / Mẫu website nội thất
  {
    titleKey: 'projTitle13',
    descriptionKey: 'projDesc13',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/bf5e7745f8547880070c2305b68e68868f795055?width=640',
    categoryKey: 'cat6'
  },
  {
    titleKey: 'projTitle14',
    descriptionKey: 'projDesc14',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/bf5e7745f8547880070c2305b68e68868f795055?width=640',
    categoryKey: 'cat6'
  },
  // cat7 - Real Estate / Mẫu website bất động sản
  {
    titleKey: 'projTitle15',
    descriptionKey: 'projDesc15',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/bf5e7745f8547880070c2305b68e68868f795055?width=640',
    categoryKey: 'cat7'
  },
  {
    titleKey: 'projTitle16',
    descriptionKey: 'projDesc16',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/bf5e7745f8547880070c2305b68e68868f795055?width=640',
    categoryKey: 'cat7'
  },
  // cat8 - Coffee Shop / Mẫu website quán cà phê
  {
    titleKey: 'projTitle17',
    descriptionKey: 'projDesc17',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/bf5e7745f8547880070c2305b68e68868f795055?width=640',
    categoryKey: 'cat8'
  },
  {
    titleKey: 'projTitle18',
    descriptionKey: 'projDesc18',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/bf5e7745f8547880070c2305b68e68868f795055?width=640',
    categoryKey: 'cat8'
  },
  // cat9 - Hotel / Mẫu website khách sạn
  {
    titleKey: 'projTitle19',
    descriptionKey: 'projDesc19',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/bf5e7745f8547880070c2305b68e68868f795055?width=640',
    categoryKey: 'cat9'
  },
  {
    titleKey: 'projTitle20',
    descriptionKey: 'projDesc20',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/bf5e7745f8547880070c2305b68e68868f795055?width=640',
    categoryKey: 'cat9'
  },
  // cat10 - Travel / Mẫu website du lịch
  {
    titleKey: 'projTitle21',
    descriptionKey: 'projDesc21',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/bf5e7745f8547880070c2305b68e68868f795055?width=640',
    categoryKey: 'cat10'
  },
  {
    titleKey: 'projTitle22',
    descriptionKey: 'projDesc22',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/bf5e7745f8547880070c2305b68e68868f795055?width=640',
    categoryKey: 'cat10'
  },
  // cat11 - Spa & Beauty / Mẫu website spa – thẩm mỹ
  {
    titleKey: 'projTitle23',
    descriptionKey: 'projDesc23',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/bf5e7745f8547880070c2305b68e68868f795055?width=640',
    categoryKey: 'cat11'
  },
  {
    titleKey: 'projTitle24',
    descriptionKey: 'projDesc24',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/bf5e7745f8547880070c2305b68e68868f795055?width=640',
    categoryKey: 'cat11'
  },
  // cat12 - Clinic / Mẫu website phòng khám
  {
    titleKey: 'projTitle25',
    descriptionKey: 'projDesc25',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/bf5e7745f8547880070c2305b68e68868f795055?width=640',
    categoryKey: 'cat12'
  },
  {
    titleKey: 'projTitle26',
    descriptionKey: 'projDesc26',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/bf5e7745f8547880070c2305b68e68868f795055?width=640',
    categoryKey: 'cat12'
  },
  // cat13 - Education / Mẫu website giáo dục – đào tạo
  {
    titleKey: 'projTitle27',
    descriptionKey: 'projDesc27',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/bf5e7745f8547880070c2305b68e68868f795055?width=640',
    categoryKey: 'cat13'
  },
  {
    titleKey: 'projTitle28',
    descriptionKey: 'projDesc28',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/bf5e7745f8547880070c2305b68e68868f795055?width=640',
    categoryKey: 'cat13'
  },
  // cat14 - Language Center / Mẫu website trung tâm ngoại ngữ
  {
    titleKey: 'projTitle29',
    descriptionKey: 'projDesc29',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/bf5e7745f8547880070c2305b68e68868f795055?width=640',
    categoryKey: 'cat14'
  },
  {
    titleKey: 'projTitle30',
    descriptionKey: 'projDesc30',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/bf5e7745f8547880070c2305b68e68868f795055?width=640',
    categoryKey: 'cat14'
  },
  // cat15 - News & Blog / Mẫu website tin tức – blog
  {
    titleKey: 'projTitle31',
    descriptionKey: 'projDesc31',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/bf5e7745f8547880070c2305b68e68868f795055?width=640',
    categoryKey: 'cat15'
  },
  {
    titleKey: 'projTitle32',
    descriptionKey: 'projDesc32',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/bf5e7745f8547880070c2305b68e68868f795055?width=640',
    categoryKey: 'cat15'
  },
  // cat16 - Portfolio / Mẫu website cá nhân – portfolio
  {
    titleKey: 'projTitle33',
    descriptionKey: 'projDesc33',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/bf5e7745f8547880070c2305b68e68868f795055?width=640',
    categoryKey: 'cat16'
  },
  {
    titleKey: 'projTitle34',
    descriptionKey: 'projDesc34',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/bf5e7745f8547880070c2305b68e68868f795055?width=640',
    categoryKey: 'cat16'
  },
  // cat17 - Startup / Mẫu website startup
  {
    titleKey: 'projTitle35',
    descriptionKey: 'projDesc35',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/bf5e7745f8547880070c2305b68e68868f795055?width=640',
    categoryKey: 'cat17'
  },
  {
    titleKey: 'projTitle36',
    descriptionKey: 'projDesc36',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/bf5e7745f8547880070c2305b68e68868f795055?width=640',
    categoryKey: 'cat17'
  },
  // cat18 - Landing Page / Mẫu website landing page
  {
    titleKey: 'projTitle37',
    descriptionKey: 'projDesc37',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/bf5e7745f8547880070c2305b68e68868f795055?width=640',
    categoryKey: 'cat18'
  },
  {
    titleKey: 'projTitle38',
    descriptionKey: 'projDesc38',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/bf5e7745f8547880070c2305b68e68868f795055?width=640',
    categoryKey: 'cat18'
  },
  // cat19 - Event / Mẫu website sự kiện
  {
    titleKey: 'projTitle39',
    descriptionKey: 'projDesc39',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/bf5e7745f8547880070c2305b68e68868f795055?width=640',
    categoryKey: 'cat19'
  },
  // cat20 - Recruitment / Mẫu website tuyển dụng
  {
    titleKey: 'projTitle40',
    descriptionKey: 'projDesc40',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/bf5e7745f8547880070c2305b68e68868f795055?width=640',
    categoryKey: 'cat20'
  },
  {
    titleKey: 'projTitle41',
    descriptionKey: 'projDesc41',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/bf5e7745f8547880070c2305b68e68868f795055?width=640',
    categoryKey: 'cat20'
  },
  // cat21 - Technology / Mẫu website công nghệ
  {
    titleKey: 'projTitle42',
    descriptionKey: 'projDesc42',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/bf5e7745f8547880070c2305b68e68868f795055?width=640',
    categoryKey: 'cat21'
  },
  {
    titleKey: 'projTitle43',
    descriptionKey: 'projDesc43',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/bf5e7745f8547880070c2305b68e68868f795055?width=640',
    categoryKey: 'cat21'
  },
  // cat22 - Phone / Mẫu website điện thoại
  {
    titleKey: 'projTitle44',
    descriptionKey: 'projDesc44',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/bf5e7745f8547880070c2305b68e68868f795055?width=640',
    categoryKey: 'cat22'
  },
  // cat23 - Computer / Mẫu website máy tính
  {
    titleKey: 'projTitle45',
    descriptionKey: 'projDesc45',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/bf5e7745f8547880070c2305b68e68868f795055?width=640',
    categoryKey: 'cat23'
  },
  // cat24 - Software / Mẫu website phần mềm
  {
    titleKey: 'projTitle46',
    descriptionKey: 'projDesc46',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/bf5e7745f8547880070c2305b68e68868f795055?width=640',
    categoryKey: 'cat24'
  }
*/
];

export const sortOptions = [
  'Mới nhất',
  'Cũ nhất',
  'A-Z',
  'Z-A'
];
