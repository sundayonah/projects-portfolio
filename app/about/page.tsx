import React from 'react';
import { Twitter, Mail } from 'lucide-react';

const Page = () => {
   return (
      <div className="flex justify-between">
         <div>
            <h1 className="text-5xl font-bold pb-8">
               {' '}
               I`m{' '}
               <span className="text-[#046af8] animate-pulse">Onah Sunday</span>
               {
                  ', residing in Nigeria, Abuja, where I bring dynamic web projects to life'
               }
            </h1>
            <p className="text-[#9898a0]">
               {`My day is spent working with HTML, CSS, and JavaScript, exploring its extensive library and frameworks like React, TypeScript, and Next.js. I have a strong enthusiasm for coding. In this sector that is always changing, the excitement of finding solutions to issues and gaining new knowledge every day keeps me motivated.`}
            </p>
            <h2 className="text-3xl font-semibold mt-6">Web3 Development</h2>
            <p className="text-[#9898a0] mt-2">
               {`I am passionate about Web3 development, working with technologies like Ethereum, smart contracts, and decentralized applications (dApps). I enjoy building user-friendly interfaces that interact with the blockchain and exploring the potential of decentralized finance (DeFi) and non-fungible tokens (NFTs).`}
            </p>
            <p className="text-[#9898a0] mt-2">
               {`I regularly use libraries like ethers.js and web3.js to integrate blockchain functionality into my applications, providing seamless connections with various wallets and enabling users to interact with the blockchain effortlessly.`}
            </p>

            <div className="flex items-center mt-12 space-x-4">
               <a
                  href="https://www.linkedin.com/in/your-profile" // Replace with your LinkedIn URL
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-[#9898a0] hover:text-[#046af8] dark:text-gray-400 dark:hover:text-[#046af8]"
               >
                  <Mail className="mr-2" /> LinkedIn
               </a>
               <a
                  href="https://twitter.com/yourprofile" // Replace with your Twitter URL
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-[#9898a0] hover:text-[#046af8] dark:text-gray-400 dark:hover:text-[#046af8]"
               >
                  <Twitter className="mr-2" /> Twitter
               </a>
               <a
                  href="mailto:your-email@example.com" // Replace with your email
                  className="flex items-center text-[#9898a0] hover:text-[#046af8] dark:text-gray-400 dark:hover:text-[#046af8]"
               >
                  <Mail className="mr-2" /> Email
               </a>
            </div>
         </div>
         {/* <div>2</div> */}
      </div>
   );
};

export default Page;
