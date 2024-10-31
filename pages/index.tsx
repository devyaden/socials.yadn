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
import Link from 'next/link'
const socialMedia = [
  { name: 'Facebook', url: 'https://www.facebook.com', logo: 'https://img.icons8.com/?size=256&id=118497&format=png' },
  { name: 'x', url: 'https://x.com/yadnxd?t=xESgy0TMXyGCJivzdbRQ0A&s=09', logo: 'https://img.icons8.com/?size=256&id=ClbD5JTFM7FA&format=png' },
  { name: 'Instagram', url: 'https://www.instagram.com/yadnxd?igsh=Y2xpYzFncWVwdzY5',
     logo: 'https://img.icons8.com/?size=256&id=32323&format=png' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/company/yadnxd/', 
    logo: 'https://img.icons8.com/?size=256&id=13930&format=png' },
  { name: 'TikTok', url: 'http://www.tiktok.com/@yadnxd', logo: 'https://img.icons8.com/?size=256&id=118640&format=png' },
  { name: 'TikTok', url: 'mailto:info@yadnxd.com', 
    logo: 'https://img.icons8.com/?size=100&id=19408&format=png&color=000000' },
    { name: 'TikTok', url: 'tel:966550513539', 
      logo: 'https://img.icons8.com/?size=100&id=44208&format=png&color=2d3194'
 },
 { name: 'TikTok', url: 'https://maps.app.goo.gl/ZMZZ8cKnNqEyAyJ66', 
  logo: 'https://img.icons8.com/?size=100&id=107436&format=png&color=000000'
},
];

import Original_logo_colors from "../public/Original_logo_colors.png"
export default function Home() {
  return (
      <div
      className={`${geistSans.variable} ${geistMono.variable} grid bg-gray-900 grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
      >
        <Link href={'https://www.yadnxd.com'} className="m-20" >
      <Image className="  m-10"
        height={200}
        width={200} 
        src={Original_logo_colors} 
        alt={""}      
      ></Image></Link>
   
       

       
       <div className=" grid  grid-cols-2 gap-4">
            { socialMedia.map(( d: any, i: any ) => (
              <Link href={d.url}key={i}>
              <div className=" card  bg-green-700"   >
              <Image
        height={200}
        width={200} 
        src={d.logo} 
        alt={""}      
      ></Image>
              </div></Link>
 ))}
       </div>
    </div>
  );
}
