

import { StaticImageData } from "next/image";
// home 02
import project_img_2_1 from "@/assets/img/project/pro-2-1.jpg";
import project_img_2_2 from "@/assets/img/project/pro-2-2.jpg";
import project_img_2_3 from "@/assets/img/project/pro-2-3.jpg";
import project_img_2_4 from "@/assets/img/project/pro-2-4.jpg";
// home 03
import project_img_3_1 from "@/assets/img/project/pro-1-1.jpg";
import project_img_3_2 from "@/assets/img/project/pro-1-2.jpg";
import project_img_3_3 from "@/assets/img/project/pro-1-3.jpg";
import project_img_3_4 from "@/assets/img/project/pro-1-4.jpg";
import project_img_3_5 from "@/assets/img/project/pro-1-5.jpg";

// home 04
import project_img_4_1 from "@/assets/img/project/pro-4-1.jpg";
import project_img_4_2 from "@/assets/img/project/pro-4-2.jpg";
import project_img_4_3 from "@/assets/img/project/pro-4-3.jpg";
import project_img_4_4 from "@/assets/img/project/pro-4-4.jpg";
import project_img_4_5 from "@/assets/img/project/pro-4-5.jpg";


import project_img_1 from "@/assets/img/project/pro-1-1.jpg";
import project_img_2 from "@/assets/img/project/pro-1-2.jpg";
import project_img_3 from "@/assets/img/project/pro-1-3.jpg";
import project_img_4 from "@/assets/img/project/pro-1-4.jpg";
import project_img_5 from "@/assets/img/project/pro-1-5.jpg";
import project_img_6 from "@/assets/img/project/pro-1-6.jpg";


interface DataType {
  delay?: string;
  path: string;
  img: StaticImageData;
  category: string;
  title: string;
}

const project_data: DataType[] = [
  {
    path: `home_2`,
    img: project_img_2_1,
    category: `Repair`,
    title: `Electrical Repair`,
  },
  {
    path: `home_2`,
    img: project_img_2_2,
    category: `Repair`,
    title: `Renovation Wiring`,
  },
  {
    path: `home_2`,
    img: project_img_2_3,
    category: `Repair`,
    title: `Inspections & Testing`,
  },
  {
    path: `home_2`,
    img: project_img_2_4,
    category: `Repair`,
    title: `Electrical Repair`,
  },
  {
    path: `home_2`,
    img: project_img_2_2,
    category: `Repair`,
    title: `Data System Wiring`,
  },
  // home 03
  {
    path: `home_3`,
    img: project_img_3_1,
    category: `Repair`,
    title: `Inspections & Testing`,
  },
  {
    path: `home_3`,
    img: project_img_3_2,
    category: `Repair`,
    title: `Electrical Repair`,
  },
  {
    path: `home_3`,
    img: project_img_3_3,
    category: `Repair`,
    title: `Data System Wiring`,
  },
  {
    path: `home_3`,
    img: project_img_3_4,
    category: `Repair`,
    title: `Industrial Solution`,
  },
  {
    path: `home_3`,
    img: project_img_3_5,
    category: `Repair`,
    title: `Renovation Wiring`,
  },
  // 
  {
    path: `home_3`,
    img: project_img_3_1,
    category: `Repair`,
    title: `Inspections & Testing`,
  },
  {
    path: `home_3`,
    img: project_img_3_2,
    category: `Repair`,
    title: `Electrical Repair`,
  },
  {
    path: `home_3`,
    img: project_img_3_3,
    category: `Repair`,
    title: `Data System Wiring`,
  },
  {
    path: `home_3`,
    img: project_img_3_4,
    category: `Repair`,
    title: `Industrial Solution`,
  },
  {
    path: `home_3`,
    img: project_img_3_5,
    category: `Repair`,
    title: `Renovation Wiring`,
  },
  // home 04
  {
    path: `home_4`,
    img: project_img_4_1,
    category: `Car exitor`,
    title: `Model Ex`,
  },
  {
    path: `home_4`,
    img: project_img_4_2,
    category: `Car exitor`,
    title: `Model Ex`,
  },
  {
    path: `home_4`,
    img: project_img_4_3,
    category: `Car exitor`,
    title: `Model Ex`,
  },
  {
    path: `home_4`,
    img: project_img_4_4,
    category: `Car exitor`,
    title: `Model Ex`,
  },
  {
    path: `home_4`,
    img: project_img_4_5,
    category: `Car exitor`,
    title: `Model Ex`,
  },
  {
    path: `home_4`,
    img: project_img_4_2,
    category: `Car exitor`,
    title: `Model Ex`,
  },
  // repite for home 04
  {
    path: `home_4`,
    img: project_img_4_1,
    category: `Car exitor`,
    title: `Model Ex`,
  },
  {
    path: `home_4`,
    img: project_img_4_2,
    category: `Car exitor`,
    title: `Model Ex`,
  },
  {
    path: `home_4`,
    img: project_img_4_3,
    category: `Car exitor`,
    title: `Model Ex`,
  },
  {
    path: `home_4`,
    img: project_img_4_4,
    category: `Car exitor`,
    title: `Model Ex`,
  },
  {
    path: `home_4`,
    img: project_img_4_5,
    category: `Car exitor`,
    title: `Model Ex`,
  },
  {
    path: `home_4`,
    img: project_img_4_2,
    category: `Car exitor`,
    title: `Model Ex`,
  },
  // project page
  {
    delay: '.1s',
    path: `project`,
    img: project_img_1,
    category: `Repair`,
    title: `Electrical Repair`,
  },
  {
    delay: '.2s',
    path: `project`,
    img: project_img_2,
    category: `Repair`,
    title: `Inspections & Testing`,
  },
  {
    delay: '.3s',
    path: `project`,
    img: project_img_3,
    category: `Repair`,
    title: `Industrial Solution`,
  },
  {
    delay: '.4s',
    path: `project`,
    img: project_img_4,
    category: `Repair`,
    title: `Data System Wiring`,
  },
  {
    delay: '.5s',
    path: `project`,
    img: project_img_5,
    category: `Repair`,
    title: `Circuit Breaker Panels`,
  },
  {
    delay: '.6s',
    path: `project`,
    img: project_img_6,
    category: `Repair`,
    title: `Data System Wiring`,
  },

]

export default project_data