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
import email from '../public/email.png'
import fase from '../public/fase.png'
import x from '../public/x.png'

import Link from 'next/link'
const socialMedia = [
  { name: 'Facebook', url: 'https://www.facebook.com', logo: fase },
  { name: 'x', url: 'https://x.com/yadnxd?t=xESgy0TMXyGCJivzdbRQ0A&s=09', logo:
     'https://img.icons8.com/?size=256&id=ClbD5JTFM7FA&format=png' },
  { name: 'Instagram', url: 'https://www.instagram.com/yadnxd?igsh=Y2xpYzFncWVwdzY5',
     logo: 'https://img.icons8.com/?size=256&id=32323&format=png' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/company/yadnxd/', 
    logo: 'https://img.icons8.com/?size=256&id=13930&format=png' },
  { name: 'TikTok', url: 'http://www.tiktok.com/@yadnxd', logo: 'https://img.icons8.com/?size=256&id=118640&format=png' },
  { name: 'TikTok', url: 'mailto:info@yadnxd.com', 
    logo: email },
    { name: 'TikTok', url: 'tel:966550513539', 
      logo: 'https://img.icons8.com/?size=100&id=44208&format=png&color=2d3194'
 },
 { name: 'TikTok', url: 'https://maps.app.goo.gl/ZMZZ8cKnNqEyAyJ66', 
  logo: 'https://img.icons8.com/?size=100&id=107436&format=png&color=000000'
},
{ name: 'TikTok', url: 'https://maps.app.goo.gl/ZMZZ8cKnNqEyAyJ66', 
  logo: 'https://img.icons8.com/?size=100&id=107436&format=png&color=000000'
},
 { name: 'TikTok', url: 'https://maps.app.goo.gl/ZMZZ8cKnNqEyAyJ66', 
  logo: 'https://drive.google.com/file/d/1Zcx6nuFdMvk3HnCAaRFy6lFzkd8z3hZB/view'
},
];

import Original_logo_colors from "../public/Original_logo_colors.png"
export default function Home() {
  return (
      <div
      className={`${geistSans.variable} ${geistMono.variable}  bg-[#E7E0E0] items-center justify-items-center min-h-screen 
      p-8 pb-20 gap-6 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
      >
        <Link href={'https://www.yadnxd.com'} className="" >
      <Image className=" m-5"
        height={200}
        width={200} 
        src={Original_logo_colors} 
        alt={""}      
      ></Image></Link>
   
       

       
       <div className=" grid md:grid-cols-4 lg:grid-cols-4 grid-cols-3 sm:grid-cols-3 gap-4">
            { socialMedia.map(( d: any, i: any ) => (
              <Link href={d.url}key={i}>
              <div className=" card  bg-green-700"   >
              <Image className=" h-36 w-36 
              lg:h-44  lg:w-44 
              md:h-44 md:w-44
              sm:h-36 sm:w-36
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
