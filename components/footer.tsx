import React from 'react';
import { navMenu } from '@/components/data';

const Footer = () => {
   return (
      <div className="flex justify-between items-center py-8">
         <ul className="flex justify-center gap-4">
            {navMenu.map((i) => (
               <li key={i.id}>
                  <a
                     href={i.link}
                     className="text-md text-black font-semibold hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-600"
                  >
                     {i.name}
                  </a>
               </li>
            ))}
         </ul>
         <div>
            <p className="text-md text-gray-500 dark:text-gray-600">
               © 2023 Your Website. All rights reserved.
            </p>
         </div>
      </div>
   );
};

export default Footer;
