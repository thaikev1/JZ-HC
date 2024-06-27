

import { StaticImageData } from "next/image";
import service_thumb_3_1 from "@/assets/img/service/sv-1-1.jpg";
import service_thumb_3_2 from "@/assets/img/service/sv-1-2.jpg";
import service_thumb_3_3 from "@/assets/img/service/sv-1-3.jpg";


import service_thumb_4_1 from "@/assets/img/service/sv-4-1.jpg";
import service_thumb_4_2 from "@/assets/img/service/sv-4-2.jpg";
import service_thumb_4_3 from "@/assets/img/service/sv-4-3.jpg";

// service 
import service_img_1 from "@/assets/img/service/sv-1-1.jpg";
import service_img_2 from "@/assets/img/service/sv-1-2.jpg";
import service_img_3 from "@/assets/img/service/sv-1-3.jpg";
import service_img_4 from "@/assets/img/service/sv-1-4.jpg";
import service_img_5 from "@/assets/img/service/sv-1-5.jpg";
import service_img_6 from "@/assets/img/service/sv-1-6.jpg";

interface DataType {
  path: string;
  delay: string;
  icon?: string;
  img?: StaticImageData | any;
  title: string;
  description: string;
}




const service_data: DataType[] = [
  {
    path: `home_1`,
    delay: `.3s`,
    icon: `creative`,
    title: `Indoor lighting`,
    description: `This box could corrode over time losse connection, dust`,
  },
  {
    path: `home_1`,
    delay: `.5s`,
    icon: `air-conditioner`,
    title: `Air Conditioning`,
    description: `This box could corrode over time losse connection, dust`,
  },
  {
    path: `home_1`,
    delay: `.7s`,
    icon: `surveillance`,
    title: `Indoor lighting`,
    description: `This box could corrode over time losse connection, dust`,
  },
  // home 2
  {
    path: `home_2`,
    delay: `.3s`,
    icon: `solution`,
    title: `Indoor lighting`,
    description: `This box could corrode over time losse connection, dust`,
  },
  {
    path: `home_2`,
    delay: `.5s`,
    icon: `wrench`,
    title: `Electrical panels`,
    description: `This box could corrode over time losse connection, dust`,
  },
  {
    path: `home_2`,
    delay: `.7s`,
    icon: `ac`,
    title: `Air Conditioning`,
    description: `This box could corrode over time losse connection, dust`,
  },
  {
    path: `home_2`,
    delay: `.9s`,
    icon: `solution`,
    title: `Security system`,
    description: `This box could corrode over time losse connection, dust`,
  },
  // home 03
  {
    path: `home_3`,
    delay: `.3s`,
    icon: `lamp`,
    img: service_thumb_3_1,
    title: `Electrical panels`,
    description: `This box could corrode over time losse connection, dust`,
  },
  {
    path: `home_3`,
    delay: `.5s`,
    icon: `air-conditioner`,
    img: service_thumb_3_2,
    title: `Air condition`,
    description: `This box could corrode over time losse connection, dust`,
  },
  {
    path: `home_3`,
    delay: `.7s`,
    icon: `heater`,
    img: service_thumb_3_3,
    title: `Heating service`,
    description: `This box could corrode over time losse connection, dust`,
  },
  {
    path: `home_3`,
    delay: `.3s`,
    icon: `lamp`,
    img: service_thumb_3_1,
    title: `Electrical panels`,
    description: `This box could corrode over time losse connection, dust`,
  },
  {
    path: `home_3`,
    delay: `.5s`,
    icon: `air-conditioner`,
    img: service_thumb_3_2,
    title: `Air condition`,
    description: `This box could corrode over time losse connection, dust`,
  },
  {
    path: `home_3`,
    delay: `.7s`,
    icon: `heater`,
    img: service_thumb_3_3,
    title: `Heating service`,
    description: `This box could corrode over time losse connection, dust`,
  },
  // home 4
  {
    path: `home_4`,
    delay: `.3s`,
    icon: `heater`,
    img: service_thumb_4_1,
    title: `Driving experience`,
    description: `Maximize your existing capacity to deliver accessible charging to your residents and visitors`,
  },
  {
    path: `home_4`,
    delay: `.3s`,
    icon: `heater`,
    img: service_thumb_4_2,
    title: `Electric charging`,
    description: `Maximize your existing capacity to deliver accessible charging to your residents and visitors`,
  },
  {
    path: `home_4`,
    delay: `.3s`,
    icon: `heater`,
    img: service_thumb_4_3,
    title: `Battery maintaince`,
    description: `Generate new revenue and attract coustomers with a delightful charging experience`,
  },
  // repite for home 4
  {
    path: `home_4`,
    delay: `.3s`,
    icon: `heater`,
    img: service_thumb_4_1,
    title: `Driving experience`,
    description: `Maximize your existing capacity to deliver accessible charging to your residents and visitors`,
  },
  {
    path: `home_4`,
    delay: `.3s`,
    icon: `heater`,
    img: service_thumb_4_2,
    title: `Electric charging`,
    description: `Maximize your existing capacity to deliver accessible charging to your residents and visitors`,
  },
  {
    path: `home_4`,
    delay: `.3s`,
    icon: `heater`,
    img: service_thumb_4_3,
    title: `Battery maintaince`,
    description: `Generate new revenue and attract coustomers with a delightful charging experience`,
  },

   // service data
   {
    path: `service`,
    delay: `.3s`,
    icon: `lamp`,
    img: service_img_1,
    title: `Electrical panels`,
    description: `This box could corrode over time, by losse connection, dust or debris.`,
  },
  {
    path: `service`,
    delay: `.5s`,
    icon: `air-conditioner`,
    img: service_img_2,
    title: `Air condition`,
    description: `Air conditioning is not just used to keep homes and offices cool.`,
  },
  {
    path: `service`,
    delay: `.6s`,
    icon: `ac`,
    img: service_img_3,
    title: `Heating service`,
    description: `This box could corrode over time, by losse connection, dust or debris.`,
  },
  {
    path: `service`,
    delay: `.7s`,
    icon: `lamp`,
    img: service_img_4,
    title: `Ceiling fan instalation`,
    description: `This box could corrode over time, by losse connection, dust or debris.`,
  },
  {
    path: `service`,
    delay: `.8s`,
    icon: `short-circuit`,
    img: service_img_5,
    title: `Short circuit repair`,
    description: `This box could corrode over time, by losse connection, dust or debris.`,
  },
  {
    path: `service`,
    delay: `.9s`,
    icon: `lighting`,
    img: service_img_6,
    title: `Outdoor lighting`,
    description: `This box could corrode over time, by losse connection, dust or debris.`,
  },




]

export default service_data