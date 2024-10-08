import React from 'react';
import { navMenu } from '@/components/data';

const Footer = () => {
   return (
      <div className="mt-24">
         <hr className="border border-[#eeeef0] dark:border-[#3a3a3f]" />
         <div className="flex flex-col md:flex-row justify-between items-center py-10 space-y-3 md:space-y-0">
            <ul className="flex justify-center gap-4">
               {navMenu.map((i) => (
                  <li key={i.id}>
                     <a
                        href={i.link}
                        className="text-md text-black font-semibold hover:text-[#046af8] dark:text-gray-400 dark:hover:text-[#046af8]"
                     >
                        {i.name}
                     </a>
                  </li>
               ))}
            </ul>
            <div>
               <p className="md:text-lg text-sm text-gray-500 dark:text-gray-600">
                  © 2024 Your Website. All rights reserved.
               </p>
            </div>
         </div>
      </div>
   );
};

export default Footer;
