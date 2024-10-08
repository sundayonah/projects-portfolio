'use client';

import { useTheme } from 'next-themes';
import { navMenu } from '@/components/data';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Header = () => {
   const { theme, setTheme } = useTheme();
   const [mounted, setMounted] = useState(false);
   const pathname = usePathname();

   useEffect(() => {
      setMounted(true);
   }, []);

   if (!mounted) return null;

   return (
      // <div className="fixed  w-full z-50  flex justify-between items-center pt-6 px-8 mb-24">
      <div className=" flex justify-between items-center pt-6 px-8 mb-24">
         <Link href="/">
            <Image
               src="/assets/my-avatar.webp"
               alt="logo"
               width={40}
               height={30}
            />
         </Link>
         <div className="flex space-x-6 rounded-full p-2 px-6 dark:bg-[#252529] bg-white shadow-xl">
            {navMenu.map((n) => (
               <Link
                  key={n.id}
                  href={n.link}
                  className={`text-black dark:text-[#d6d6d9] hover:text-[#046af8] dark:hover:text-[#046af8] ${
                     pathname === n.link
                        ? 'text-[#046af8] dark:text-[#046af8]'
                        : ''
                  }`}
               >
                  {n.name}
               </Link>
            ))}
         </div>
         <div>
            <button
               onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
               className="text-black dark:text-[#d6d6d9] dark:bg-[#252529] bg-white p-2 rounded-md shadow-lg"
            >
               {theme === 'light' ? <Moon /> : <Sun />}
            </button>
         </div>
      </div>
   );
};
export default Header;
