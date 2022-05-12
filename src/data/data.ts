// define static data instead of data from backend here. due to no rest api 

import { typePost } from "../component/item/post-item"

export const currentUser = {
  name: "Keigo Igarashi",
  summary: "Senior Frontend Developer",
  connection: 23,
  follower: 310,
  membership: "free",
  avatar: "/assets/image/user1.png",
  cover: "/assets/image/cover1.png",
  email: "morio211106@gmail.com",
  phone: "+8100000000"
}

export const videoPosts = [
  {
    icon:"/assets/image/logo_w.svg",
    follower:43567,
    timestamp:"4d",
    title:"Moov",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt venenatis mi. Vestibulum ullamcorper massa vitae nulla lobortis porta in ac odio.",
    link:"https://buff.ly/3e3QaL7",
    photo:"/assets/image/post_1.png",
  },
  {
    icon:"/assets/image/logo_github.svg",
    follower:123442,
    timestamp:"3d",
    title:"Github",
    description:"The 2020 State of the Octoverse uncovered COVID's impact on developer contributions, the OSS community pandemic response, and the challenge of securing the world’s software. Learn how developers turned challenges into opportunities on The ReadME Project.",
    link:"https://buff.ly/3e3QaL7",
    photo:"/assets/image/post_2.png",
  },
  {
    icon:"/assets/image/logo_w.svg",
    follower:87123,
    timestamp:"4d",
    title:"Google",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt venenatis mi. Vestibulum ullamcorper massa vitae nulla lobortis porta in ac odio.",
    link:"https://buff.ly/3e3QaL7",
    photo:"/assets/image/post_3.png",
  }
]