import { StaticImageData } from "next/image";

import demo_img_1 from "@/assets/img/menu/home-1.jpg";
import demo_img_2 from "@/assets/img/menu/home-2.jpg";
import demo_img_3 from "@/assets/img/menu/home-3.jpg";
import demo_img_4 from "@/assets/img/menu/home-4.jpg";
import demo_img_5 from "@/assets/img/menu/home-5.jpg";

interface DataType {
  id: number;
  title: string;
  link: string;
  img_dropdown?: boolean;
  has_dropdown?: boolean;
  sub_menus?: {
    link: string;
    title: string;
    btn_title?: string;
    one_page_link?: string | any;
    one_page_title?: string;
    demo_img?: StaticImageData | any;
  }[];
}[]
// menu data 
const menu_data: DataType[] = [
  {
    id: 2,
    title: "About Us",
    link: "#",
    has_dropdown: true,
    sub_menus: [
      { link: "/about", title: "What We Do" },
      { link: "/team", title: "Our Team" },
      { link: "/team-details", title: "Team Details" },
      { link: "/testimonial", title: "Testimonial" },
      { link: "/faq", title: "FAQ" },
    ],
  },
  {
    id: 3,
    title: "Service",
    link: "#",
    has_dropdown: true,
    sub_menus: [
      { link: "/service", title: "Services" },
      { link: "/service-details", title: "Services Details" },
    ],
  },
  {
    id: 4,
    title: "Project",
    link: "#",
    has_dropdown: true,
    sub_menus: [
      { link: "/project", title: "Project" },
      { link: "/project-details", title: "Project Details" },
    ],
  },

  {
    id: 6,
    title: "Contact",
    link: "/contact",
    has_dropdown: false,
  },
];
export default menu_data;
