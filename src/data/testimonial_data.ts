import { StaticImageData } from "next/image";
// home 01
import testimonial_img_1 from "@/assets/img/testimonial/author-1-3.png";
import testimonial_img_2 from "@/assets/img/testimonial/author-1-4.png";
import testimonial_img_3 from "@/assets/img/testimonial/author-1-5.png";
import testimonial_img_4 from "@/assets/img/testimonial/author-1-1.png";

// home 02
import testimonial_img_2_1 from "@/assets/img/testimonial/author-1-1.png";
import testimonial_img_2_2 from "@/assets/img/testimonial/author-1-2.png";

// home 03
import testimonial_img_3_1 from "@/assets/img/testimonial/author-1-1.png";
import testimonial_img_3_2 from "@/assets/img/testimonial/author-1-2.png";
import testimonial_img_3_3 from "@/assets/img/testimonial/author-1-3.png";


import testimonial_1 from "@/assets/img/testimonial/author-1-3.png";
import testimonial_2 from "@/assets/img/testimonial/author-1-4.png";
import testimonial_3 from "@/assets/img/testimonial/author-1-5.png";



interface DataType {
  path: string;
  img: StaticImageData;
  name: string;
  designation: string;
  description: string;
}

const testimonial_data: DataType[] = [
  {
    path: "home_1",
    img: testimonial_img_1,
    name: `Jessica Robinson`,
    designation: `Electrician`,
    description: `Our experienced electricians are highly trained aspects electrical and many security  to emergency`,
  },
  {
    path: "home_1",
    img: testimonial_img_2,
    name: `Alberta Infantio`,
    designation: `Engineer`,
    description: `Our experienced electricians are highly trained aspects electrical and many security  to emergency`,
  },
  {
    path: "home_1",
    img: testimonial_img_3,
    name: `Robinson Cruze`,
    designation: `Electrician`,
    description: `Our experienced electricians are highly trained aspects electrical and many security  to emergency`,
  },
  {
    path: "home_1",
    img: testimonial_img_4,
    name: `Alberta Infantio`,
    designation: `Engineer`,
    description: `Our experienced electricians are highly trained aspects electrical and many security  to emergency`,
  },
  // home 02
  {
    path: "home_2",
    img: testimonial_img_2_1,
    name: `Devid Roko`,
    designation: `Electrician`,
    description: `Our experienced electricians are highly trained aspects electrical and many security  to emergency`,
  },
  {
    path: "home_2",
    img: testimonial_img_2_2,
    name: `Jessica Robinson`,
    designation: `Electrician`,
    description: `Our experienced electricians are highly trained aspects electrical and many security  to emergency`,
  },
  {
    path: "home_2",
    img: testimonial_img_2_1,
    name: `Jamil Rayhan`,
    designation: `Engineer`,
    description: `Our experienced electricians are highly trained aspects electrical and many security  to emergency`,
  },
  // home 03
  {
    path: "home_3",
    img: testimonial_img_3_1,
    name: `Jamil Rayhan`,
    designation: `Electrician`,
    description: `Our experienced electricians are highly trained aspects electrical and many security  to emergency`,
  },
  {
    path: "home_3",
    img: testimonial_img_3_2,
    name: `Tomaas Hirschi`,
    designation: `Engineer`,
    description: `Our experienced electricians are highly trained aspects electrical and many security  to emergency`,
  },
  {
    path: "home_3",
    img: testimonial_img_3_3,
    name: `Devid Roko`,
    designation: `Engineer`,
    description: `Our experienced electricians are highly trained aspects electrical and many security  to emergency`,
  },
  // testimonial 
  {
    path: "testimonial",
    img: testimonial_1,
    name: `Jessica Robinson`,
    designation: `Electrician`,
    description: `Our experienced electricians are highly trained aspects electrical and many security  to emergency`,
  },
  {
    path: "testimonial",
    img: testimonial_2,
    name: `Alberta Infantio`,
    designation: `Engineer`,
    description: `Our experienced electricians are highly trained aspects electrical and many security  to emergency`,
  },
  {
    path: "testimonial",
    img: testimonial_3,
    name: `Robinson Cruze`,
    designation: `Electrician`,
    description: `Our experienced electricians are highly trained aspects electrical and many security  to emergency`,
  },
  // 
  {
    path: "testimonial",
    img: testimonial_1,
    name: `Jessica Robinson`,
    designation: `Electrician`,
    description: `Our experienced electricians are highly trained aspects electrical and many security  to emergency`,
  },
  {
    path: "testimonial",
    img: testimonial_2,
    name: `Alberta Infantio`,
    designation: `Engineer`,
    description: `Our experienced electricians are highly trained aspects electrical and many security  to emergency`,
  },
  {
    path: "testimonial",
    img: testimonial_3,
    name: `Robinson Cruze`,
    designation: `Electrician`,
    description: `Our experienced electricians are highly trained aspects electrical and many security  to emergency`,
  },

];

export default testimonial_data;
