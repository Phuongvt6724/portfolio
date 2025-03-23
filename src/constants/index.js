import {
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  travel_web,
  memory_game,
  diamond,
  alogear_ws,
  mysql,
  php,
  angular,
  mongo,
  postman,
  figma,
  redux,
  itechto,
  alogear,
  fptPoly,
  achievements_1,
  achievements_2,
  achievements_3,
  achievements_4,
  Electronics_Ecommerce,
  cosstewn,
  vus_ws
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  {
    title:
      "Đạt giải quý quân cuộc thi “TÌM KIẾM TÀI NĂNG JS STAR -SPRING 2024”",
    icon: achievements_1,
    link: "https://www.facebook.com/share/p/197SHLmKZy/",
  },
  {
    title:
      "Bài tập Website Thương Mại của môn học – Được đăng tải trên trang tin của trường",
    icon: achievements_2,
    link: "https://caodang.fpt.edu.vn/tin-tuc-poly/chiem-nguong-website-thuong-mai-day-du-tinh-nang-cua-sinh-vien-lap-trinh-web.html",
  },
  {
    title:
      "Đã hoàn thành dự án tốt nghiệp vào ngày 15/01/2025, đánh dấu một bước tiến quan trọng trong quá trình học tập",
    icon: achievements_3,
    link: "",
  },
  {
    title:
      "Lọt vào danh sách top 150 sinh viên xuất sắc qua 2 kỳ đánh giá trong tổng số 7 kỳ học tập tại trường",
    icon: achievements_4,
    link: "",
  },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Rect JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "Redux", icon: redux },
  { name: "MySQL", icon: mysql },
  { name: "PHP", icon: php },
  { name: "Angular", icon: angular },
  { name: "MongoDB", icon: mongo },
  { name: "Postman", icon: postman },
  { name: "Figma", icon: figma },
];

export const experiences = [
  {
    title: "Graduation Project - Online Medical Appointment System",
    company_name: "FPT Polytechnic College",
    icon: fptPoly,
    iconBg: "#0F172A",
    date: "Sep 2024 - Dec 2024",
    points: [
      "Developed a medical appointment booking system available on both web and mobile platforms.",
      "Built the web application using React.js, Tailwind CSS, and ShadCN for a modern and responsive UI.",
      "Developed the mobile application using React Native, ensuring smooth user experience across devices.",
    ],
  },
  {
    title: "Font - end Intern",
    company_name: "Itechco Company",
    icon: itechto,
    iconBg: "#161329",
    date: "Oct 2024 - Jan 2025",
    points: [
      "Developed and maintained responsive web interfaces for enterprise training and education platforms.",
      "Worked with React.js and Tailwind CSS to enhance user experience and UI consistency.",
      "Collaborated with backend developers to integrate APIs and optimize data rendering.",
    ],
  },
  {
    title: "Freelance Project - Music Gear E-Commerce",
    company_name: "Freelance",
    icon: alogear,
    iconBg: "#1E293B",
    date: "Feb 14, 2025 - Present",
    points: [
      "Developed an e-commerce platform specializing in selling musical instruments and accessories.",
      "Built the web application using React.js, Tailwind CSS for a modern and responsive UI.",
      "Implemented product search, filtering, and recommendation features to enhance user experience.",
      "Worked with backend APIs to manage products, orders, and user authentication efficiently.",
    ],
  },
];

export const projects = [
  {
    name: "Audio e-commerce",
    description:
      "Audio e-commerce is an online store specializing in audio equipment and sample pack. This project was developed as a freelance collaboration between me and a friend, completed within one month. We utilized React JS, Laravel, Tailwind CSS, and MySQL to build a fast, responsive, and user-friendly platform.",
    tags: [
      { name: "React JS", color: "blue-text-gradient" },
      { name: "Laravel", color: "pink-text-gradient" },
      { name: "Tail Wind CSS", color: "pink-text-gradient" },
      { name: "My SQL", color: "pink-text-gradient" },
    ],
    image: alogear_ws,
    source_code_link: "",
    live_demo_link: "http://alogear.vn/",
    url_file: "",
    url_new: "",
    coming_soon: false,
  },
  {
    name: "E-learning Platform",
    description:
      "E-learning Platform is an online learning platform built using React JS, Laravel, Tailwind CSS, and MySQL. It provides a professional course management system, allowing users to easily create, manage, and participate in online courses.",
    tags: [
      { name: "React JS", color: "blue-text-gradient" },
      { name: "Ant design", color: "pink-text-gradient" },
      { name: "Tail Wind CSS", color: "pink-text-gradient" },
      { name: "Laravel", color: "pink-text-gradient" },
      { name: "My SQL", color: "pink-text-gradient" },
      { name: "Socket.io", color: "green-text-gradient" },
      { name: "Redis", color: "green-text-gradient" },
    ],
    image: vus_ws,
    source_code_link: "",
    live_demo_link: "http://vus.toplearning.vn",
    url_file: "",
    url_new: "",
    coming_soon: false,
  },
  {
    name: "Medical System",
    description:
      "My graduation project is a medical booking system for both web and mobile, built with React, React Native, and MongoDB. It supports real-time communication via Socket.io and offers a modern UI with Tailwind CSS and Shadcn/UI.",
    tags: [
      { name: "React JS", color: "blue-text-gradient" },
      { name: "React Native", color: "blue-text-gradient" },
      { name: "Node JS", color: "pink-text-gradient" },
      { name: "Tail Wind CSS", color: "pink-text-gradient" },
      { name: "Shadcn/ui", color: "pink-text-gradient" },
      { name: "Mongo DB", color: "pink-text-gradient" },
      { name: "Socket.io", color: "green-text-gradient" },
      { name: "Redis", color: "green-text-gradient" },
    ],
    image: diamond,
    source_code_link: "",
    live_demo_link: "",
    url_file: "./Diamond_Medical_System.pdf",
    url_new: "",
    coming_soon: false,
  },
  {
    name: "Electronics e-commerce",
    description:
      "An e-commerce website for electronics, built with React.js and Node.js, featuring OTP verification via Firebase and real-time shipping cost calculation. Users can browse, buy, and track orders seamlessly with MongoDB storage.",
    tags: [
      { name: "React JS", color: "blue-text-gradient" },
      { name: "CSS ", color: "pink-text-gradient" },
      { name: "Node JS", color: "pink-text-gradient" },
      { name: "Mongo DB", color: "pink-text-gradient" },
      { name: "Firebase (OTP Verification)", color: "green-text-gradient" },
      { name: "Shipping cost API", color: "green-text-gradient" },
    ],
    image: Electronics_Ecommerce,
    source_code_link: "https://github.com/Phuongvt6724/electronics-shop",
    live_demo_link: "",
    url_file: "",
    url_new:
      "https://caodang.fpt.edu.vn/tin-tuc-poly/chiem-nguong-website-thuong-mai-day-du-tinh-nang-cua-sinh-vien-lap-trinh-web.html",
    coming_soon: false,
  },
  {
    name: "Tour Booking",
    description:
      "Travel Explorer is a simple travel website focused on UI design, built with HTML, CSS, and JavaScript for front-end practice. It features a visually appealing layout without UX or interactive elements.",
    tags: [
      { name: "HTML", color: "pink-text-gradient" },
      { name: "CSS", color: "pink-text-gradient" },
      { name: "Javascript", color: "blue-text-gradient" },
    ],
    image: travel_web,
    source_code_link: "https://github.com/Phuongvt6724/travel-website-demo",
    live_demo_link: "https://phuongvt6724.github.io/travel-website-demo/",
    url_file: "",
    url_new: "",
    coming_soon: false,
  },
  {
    name: "Memory Game",
    description:
      "I created this Memory Game using HTML, CSS, and JavaScript for a school competition. The game tests players' ability to match cards by memory. It was a rewarding experience, and I was thrilled to win Third Place.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "CSS", color: "pink-text-gradient" },
      { name: "Javascript", color: "pink-text-gradient" },
    ],
    image: memory_game,
    source_code_link: "https://github.com/Phuongvt6724/memory-game",
    live_demo_link: "https://phuongvt6724.github.io/memory-game/",
    url_file: "",
    url_new: "",
    coming_soon: false,
  },
  {
    name: "Cosmetics e-commerce",
    description:
      "I created this Memory Game using HTML, CSS, and JavaScript for a school competition. The game tests players' ability to match cards by memory. It was a rewarding experience, and I was thrilled to win Third Place.",
    tags: [
      { name: "PHP", color: "blue-text-gradient" },
      { name: "CSS", color: "pink-text-gradient" },
      { name: "Javascript", color: "pink-text-gradient" },
      { name: "JQuery", color: "pink-text-gradient" },
      { name: "MySQL", color: "pink-text-gradient" },
    ],
    image: cosstewn,
    source_code_link: "https://github.com/Phuongvt6724/cosstewn",
    live_demo_link: "",
    url_file: "",
    url_new: "",
    coming_soon: false,
  }
];
