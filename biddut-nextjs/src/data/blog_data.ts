

import { StaticImageData } from "next/image";
// home 01
import blog_img_1 from "@/assets/img/blog/blog-3-1.jpg";
import blog_img_2 from "@/assets/img/blog/blog-3-2.jpg";
import blog_img_3 from "@/assets/img/blog/blog-3-3.jpg";

// home 02
import blog_img_2_1 from "@/assets/img/blog/blog-1-1.jpg";
import blog_img_2_2 from "@/assets/img/blog/blog-1-2.jpg";
import blog_img_2_3 from "@/assets/img/blog/blog-1-3.jpg";
import blog_img_2_4 from "@/assets/img/blog/blog-3-4.jpg";
import blog_img_2_5 from "@/assets/img/blog/blog-3-5.jpg";
import blog_img_2_6 from "@/assets/img/blog/blog-3-6.jpg"; 



interface DataType {
  path: string;
  delay: string;
  img: StaticImageData;
  author: string;
  category: string;
  description: string;
}[]

const blog_data: DataType[] = [
  {
    path: `home_1`,
    delay: `.3s`,
    img: blog_img_1,
    author: `thempure`,
    category: `Repair`,
    description: `Although the kitchen has been referred to as the heart of the home`,
  },
  {
    path: `home_1`,
    delay: `.5s`,
    img: blog_img_2,
    author: `thempure`,
    category: `Repair`,
    description: `Although the kitchen has been referred to as the heart of the home`,
  },
  {
    path: `home_1`,
    delay: `.7s`,
    img: blog_img_3,
    author: `thempure`,
    category: `Repair`,
    description: `Although the kitchen has been referred to as the heart of the home`,
  },
  // home 02
  {
    path: `home_2`,
    delay: `.3s`,
    img: blog_img_2_1,
    author: `thempure`,
    category: `Repair`,
    description: `Commercial renovation no problem with certified`,
  },
  {
    path: `home_2`,
    delay: `.5s`,
    img: blog_img_2_2,
    author: `thempure`,
    category: `Repair`,
    description: `How to get electricity to a kitchen Island`,
  },
  {
    path: `home_2`,
    delay: `.7s`,
    img: blog_img_2_3,
    author: `thempure`,
    category: `Repair`,
    description: `When you choose a good & professional electrician`,
  }, 
  // blog
  {
    path: `blog`,
    delay: `.3s`,
    img: blog_img_1,
    author: `thempure`,
    category: `Repair`,
    description: `Although the kitchen has been referred to as the heart of the home`,
  },
  {
    path: `blog`,
    delay: `.5s`,
    img: blog_img_2,
    author: `thempure`,
    category: `Repair`,
    description: `How to Install a ceiling fan where no fixture exists in your room`,
  },
  {
    path: `blog`,
    delay: `.7s`,
    img: blog_img_3,
    author: `thempure`,
    category: `Repair`,
    description: `If you notice an electrical outlet smoking, it is a serious issue`,
  },
  {
    path: `blog`,
    delay: `.8s`,
    img: blog_img_2_4,
    author: `thempure`,
    category: `Repair`,
    description: `Get awesome experience with our electrow services`,
  },
  {
    path: `blog`,
    delay: `.9s`,
    img: blog_img_2_5,
    author: `thempure`,
    category: `Repair`,
    description: `How can you stay safe from electrical hazards during a storm`,
  },
  {
    path: `blog`,
    delay: `1s`,
    img: blog_img_2_6,
    author: `thempure`,
    category: `Repair`,
    description: `Give step by step guide to replacing halogen bulbs in your home.`,
  },
]

export default blog_data