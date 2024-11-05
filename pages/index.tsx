// @ts-ignore
import Image from "next/image";
import localFont from "next/font/local";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
import email from '../public/email=ED1E78.svg'
import fase from '../public/face=ED1E78.svg'
import x from '../public/x=ED1E78.svg'
import insta from '../public/insa=ED1E78.svg'
import likedin from '../public/likein=ED1E78.svg'
import tiktok from '../public/tiktok=ED1E78.svg'
import phone from '../public/phone=ED1E78.svg'
import whatsapp from '../public/whatapp=ED1E78.svg'
import loc from '../public/maps=ED1E78.svg'
import s from '../public/phone=ED1E78.svg'

import Link from 'next/link'
const socialMedia = [
  { name: 'Facebook', url: 'https://www.facebook.com', logo: fase },
  { name: 'x', url: 'https://x.com/yadnxd?t=xESgy0TMXyGCJivzdbRQ0A&s=09', logo:
    x },
  { name: 'Instagram', url: 'https://www.instagram.com/yadnxd?igsh=Y2xpYzFncWVwdzY5',
     logo: insta },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/company/yadnxd/', 
    logo: likedin },
  { name: 'TikTok', url: 'http://www.tiktok.com/@yadnxd',
     logo: tiktok },
  { name: 'TikTok', url: 'mailto:info@yadnxd.com', 
    logo: email },
    { name: 'TikTok', url: 'tel:966550513539', 
      logo: phone
 },
 { name: 'TikTok', url: 'https://wa.me/+966550513539', 
  logo: whatsapp
},
{ name: 'TikTok', url: 'https://maps.app.goo.gl/ZMZZ8cKnNqEyAyJ66', 
  logo: loc
},
 
];

import Original_logo_colors from "../public/Original_logo_colors.png"
export default function Home() {
  return (
      <div
      className={`${geistSans.variable} ${geistMono.variable}  bg-[#E7E0E0] items-center justify-items-center min-h-screen 
      p-4 pb-20 gap-2 sm:p-10 font-[family-name:var(--font-geist-sans)]`}
      >
        <Link href={'https://www.yadnxd.com'} className="" >
      <Image className=" m-4"
        height={200}
        width={200} 
        src={Original_logo_colors} 
        alt={""}      
      ></Image></Link>
   
       

       
       <div className=" grid md:grid-cols-4 lg:grid-cols-4 grid-cols-2 sm:grid-cols-2 gap-4">
            { socialMedia.map(( d: any, i: any ) => (
              <Link href={d.url}key={i}>
              <div className=" card p-2 bg-[#2D3194] "   >
              <Image className=" h-24 w-24 
              lg:h-44  lg:w-44 
              md:h-44 md:w-44
              sm:h-30 sm:w-30
              "
        height={150}
        width={150} 
        src={d.logo} 
        alt={""}      
      ></Image>
              </div></Link>
 ))}
       </div>
    </div>
  );
}
