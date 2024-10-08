import React from 'react';
import { projects } from '@/components/data';
import Image from 'next/image';
import Link from 'next/link';

const Page = () => {
   return (
      <div>
         <div className="md:w-[80%] w-full">
            <h1 className="text-2xl md:text-5xl text-[#27272a] dark:text-[#d6d6d9] font-bold pb-8">
               {
                  "These are some of the things I've created to challenge myself and have fun."
               }
            </h1>
            <p className="text-[#9898a0]">
               {
                  "These are the most recent projects I've worked on, however I've worked on many throughout the years. Please get in touch with me if something catches your attention."
               }
            </p>
         </div>

         <div>
            <h2 className="text-2xl md:text-4xl text-[#046af8] font-bold py-8">
               My Projects
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               {projects.map((p) => (
                  <Link href={p.link} key={p.id} className="mb-6 group">
                     <div className=" rounded-lg space-y-6 transition-transform duration-300 group-hover:scale-[1.02]">
                        <div className="">
                           <Image
                              src={p.img}
                              alt={p.name}
                              width={800}
                              height={100}
                              className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-101"
                           />
                           <p className="text-[#27272a] dark:text-[#d6d6d9] text-2xl font-bold mt-3 transition-colors duration-300 group-hover:text-[#046af8]">
                              {p.name}
                           </p>
                           <p className="text-[#9898a0] transition-colors duration-300 group-hover:text-[#555] dark:group-hover:text-[#bbbbbb]">
                              {p.desc}
                           </p>
                        </div>
                     </div>
                  </Link>
               ))}
            </div>
         </div>
      </div>
   );
};

export default Page;
