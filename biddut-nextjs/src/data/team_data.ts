
import { StaticImageData } from "next/image";
// home 02
import team_avatar_1 from "@/assets/img/team/team-3-1.png";
import team_avatar_2 from "@/assets/img/team/team-3-2.png";
import team_avatar_3 from "@/assets/img/team/team-3-3.png";

// home 03
import team_avatar_3_1 from "@/assets/img/team/team-1-2.jpg";
import team_avatar_3_2 from "@/assets/img/team/team-1-1.jpg";
import team_avatar_3_3 from "@/assets/img/team/team-1-3.jpg";
import team_avatar_3_4 from "@/assets/img/team/team-1-4.jpg";
import team_avatar_3_5 from "@/assets/img/team/team-1-5.jpg";
import team_avatar_3_6 from "@/assets/img/team/team-1-6.jpg"; 


interface DataType {
  delay?: string;
  path: string;
  img: StaticImageData;
  name: string;
  designation: string;
  description: string;
}

const team_data: DataType[] = [
  {
    path: "home_1",
    img: team_avatar_1,
    name: `Alberta Infantino`,
    designation: `Architect`,
    description: `Our experienced electricians are highly trained aspects electrical and many security  to emergency`,
  },
  {
    path: "home_1",
    img: team_avatar_2,
    name: `Alberta Infantino`,
    designation: `Eric Johnson`,
    description: `Our experienced electricians are highly trained aspects electrical and many security  to emergency`,
  },
  {
    path: "home_1",
    img: team_avatar_3,
    name: `Alberta Infantino`,
    designation: `Israel Brady`,
    description: `Our experienced electricians are highly trained aspects electrical and many security  to emergency`,
  },
  // repite for slider 
  {
    path: "home_1",
    img: team_avatar_1,
    name: `Alberta Infantino`,
    designation: `Architect`,
    description: `Our experienced electricians are highly trained aspects electrical and many security  to emergency`,
  },
  {
    path: "home_1",
    img: team_avatar_2,
    name: `Alberta Infantino`,
    designation: `Eric Johnson`,
    description: `Our experienced electricians are highly trained aspects electrical and many security  to emergency`,
  },
  {
    path: "home_1",
    img: team_avatar_3,
    name: `Alberta Infantino`,
    designation: `Israel Brady`,
    description: `Our experienced electricians are highly trained aspects electrical and many security  to emergency`,
  },

  // home 03
  {
    delay: ".3s",
    path: "home_3",
    img: team_avatar_3_1,
    name: `Alberta Infantino`,
    designation: `Electrician`,
    description: `Our experienced electricians are highly trained aspects electrical and many security  to emergency`,
  },
  {
    delay: ".5s",
    path: "home_3",
    img: team_avatar_3_2,
    name: `Jessica Robinson`,
    designation: `Architect`,
    description: `Our experienced electricians are highly trained aspects electrical and many security  to emergency`,
  },
  {
    delay: ".7s",
    path: "home_3",
    img: team_avatar_3_3,
    name: `Tomaas Hirschi`,
    designation: `Support`,
    description: `Our experienced electricians are highly trained aspects electrical and many security  to emergency`,
  },
  // team page 
  {
    delay: ".9s",
    path: "team",
    img: team_avatar_3_4,
    name: `Jamil Rayhan`,
    designation: `Electrician`,
    description: `Our experienced electricians are highly trained aspects electrical and many security  to emergency`,
  },
  {
    delay: "1s",
    path: "team",
    img: team_avatar_3_5,
    name: `Diane Lloyd`,
    designation: `Architect`,
    description: `Our experienced electricians are highly trained aspects electrical and many security  to emergency`,
  },
  {
    delay: "1.2s",
    path: "team",
    img: team_avatar_3_6,
    name: `Belal Mahmud`,
    designation: `Senior Designer`,
    description: `Our experienced electricians are highly trained aspects electrical and many security  to emergency`,
  },

]

export default team_data